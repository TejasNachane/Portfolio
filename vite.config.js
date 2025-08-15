import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Fixed to match GitHub repository name
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js and related 3D libraries
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate animation libraries
          'animation': ['framer-motion'],
          // Separate React and core dependencies
          'react-vendor': ['react', 'react-dom'],
          // Separate icon libraries
          'icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase warning limit to 1000kb
  },
  server: {
    port: 3000,
  }
})