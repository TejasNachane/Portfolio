import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Summary from './components/sections/Summary'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import LoadingSpinner from './components/ui/LoadingSpinner'
import ErrorBoundary from './components/ui/ErrorBoundary'

// Lazy load 3D components to reduce initial bundle size
const BackgroundParticles = lazy(() => import('./components/3d/BackgroundParticles'))
const SafeCanvas = lazy(() => import('./components/3d/SafeCanvas'))

function App() {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-gradient-to-br from-cyberpunk-dark-bg via-cyberpunk-darker-bg to-cyberpunk-card-bg">
        {/* 3D Background */}
        <div className="fixed inset-0 z-0">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-cyberpunk-dark-bg/50 via-cyberpunk-darker-bg/50 to-cyberpunk-card-bg/50">
                {/* Fallback background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyberpunk-neon-pink/10 via-transparent to-cyberpunk-neon-blue/10 animate-pulse"></div>
                </div>
              </div>
            }
          >
            <SafeCanvas
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-cyberpunk-dark-bg/50 via-cyberpunk-darker-bg/50 to-cyberpunk-card-bg/50">
                  {/* Fallback background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyberpunk-neon-pink/10 via-transparent to-cyberpunk-neon-blue/10 animate-pulse"></div>
                  </div>
                </div>
              }
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <BackgroundParticles />
            </SafeCanvas>
          </Suspense>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          
          <main>
            <ErrorBoundary>
              <section id="hero">
                <Hero />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="summary">
                <Summary />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="projects">
                <Projects />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="skills">
                <Skills />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="experience">
                <Experience />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="education">
                <Education />
              </section>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <section id="contact">
                <Contact />
              </section>
            </ErrorBoundary>
          </main>

          {/* Footer */}
          <footer className="relative z-10 bg-cyberpunk-darker-bg/80 backdrop-blur-md border-t border-cyberpunk-neon-purple/20 py-8">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-cyberpunk-neon-blue font-mono">
                  Tejas Nachane
                </p>
              </motion.div>
            </div>
          </footer>
        </div>

        {/* Loading Fallback */}
        <Suspense fallback={<LoadingSpinner />} />
      </div>
    </ErrorBoundary>
  )
}

export default App
