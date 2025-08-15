import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ErrorBoundary from '../ui/ErrorBoundary'

const SafeCanvas = ({ children, fallback = null, ...props }) => {
  // Check if WebGL is supported
  const isWebGLSupported = () => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      return !!gl
    } catch (e) {
      return false
    }
  }

  if (!isWebGLSupported()) {
    return fallback
  }

  return (
    <ErrorBoundary>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="bg-transparent"
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        {...props}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  )
}

export default SafeCanvas
