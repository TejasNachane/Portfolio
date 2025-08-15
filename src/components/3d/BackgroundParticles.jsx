import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const BackgroundParticles = () => {
  const ref = useRef()
  
  // Generate random positions for particles
  const particlesData = useMemo(() => {
    const count = 300 // Reduced count for better performance
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      // Cyberpunk colors
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        // Neon pink
        colors[i * 3] = 1     // R
        colors[i * 3 + 1] = 0 // G
        colors[i * 3 + 2] = 0.5 // B
      } else if (colorChoice < 0.66) {
        // Neon purple
        colors[i * 3] = 0.54 // R
        colors[i * 3 + 1] = 0.36 // G
        colors[i * 3 + 2] = 0.96 // B
      } else {
        // Neon blue
        colors[i * 3] = 0     // R
        colors[i * 3 + 1] = 0.83 // G
        colors[i * 3 + 2] = 1     // B
      }
    }
    
    return { positions, colors, count }
  }, [])
  
  // Animate particles
  useFrame(({ clock }) => {
    if (ref.current) {
      try {
        ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1
        ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.1
        ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.05) * 0.05
      } catch (error) {
        console.warn('Error animating particles:', error)
      }
    }
  })
  
  try {
    return (
      <group ref={ref}>
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={particlesData.positions}
              count={particlesData.count}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-color"
              array={particlesData.colors}
              count={particlesData.count}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            transparent
            vertexColors
            size={0.03}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    )
  } catch (error) {
    console.error('Error rendering BackgroundParticles:', error)
    return null
  }
}

export default BackgroundParticles
