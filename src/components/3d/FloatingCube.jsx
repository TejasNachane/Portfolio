import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingCube = () => {
  const groupRef = useRef()
  const cubesRef = useRef([])

  // Create multiple cubes data
  const cubeCount = 5
  const cubeData = React.useMemo(() => 
    Array.from({ length: cubeCount }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: 0.3 + Math.random() * 0.5,
      speed: 0.5 + Math.random() * 0.5,
      color: i % 3 === 0 ? '#ff0080' : i % 3 === 1 ? '#8b5cf6' : '#00d4ff'
    })), []
  )

  useFrame(({ clock }) => {
    if (groupRef.current) {
      cubesRef.current.forEach((cube, index) => {
        if (cube && cubeData[index]) {
          const data = cubeData[index]
          cube.rotation.x = clock.elapsedTime * data.speed * 0.5
          cube.rotation.y = clock.elapsedTime * data.speed * 0.3
          cube.position.y = data.position[1] + Math.sin(clock.elapsedTime + index) * 0.5
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {cubeData.map((data, index) => (
        <mesh
          key={index}
          ref={(el) => (cubesRef.current[index] = el)}
          position={data.position}
          scale={data.scale}
          rotation={data.rotation}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={data.color}
            transparent
            opacity={0.6}
            emissive={data.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

export default FloatingCube
