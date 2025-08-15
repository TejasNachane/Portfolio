import React, { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import ProfileImage from '../ui/ProfileImage'
import LeetCodeIcon from '../ui/LeetCodeIcon'

// Lazy load 3D components
const FloatingCube = lazy(() => import('../3d/FloatingCube'))
const SafeCanvas = lazy(() => import('../3d/SafeCanvas'))

const Hero = () => {
  const { personal, contact } = portfolioData

  const socialLinks = [
    { icon: Github, url: contact.github, label: 'GitHub', color: 'hover:text-cyberpunk-neon-purple' },
    { icon: Linkedin, url: contact.linkedin, label: 'LinkedIn', color: 'hover:text-cyberpunk-neon-blue' },
    { icon: LeetCodeIcon, url: contact.leetcode, label: 'LeetCode', color: 'hover:text-cyberpunk-neon-orange' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Elements */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-cyberpunk-neon-purple/10 to-cyberpunk-neon-blue/10 animate-pulse">
              {/* Fallback animated background */}
            </div>
          }
        >
          <SafeCanvas
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-cyberpunk-neon-purple/10 to-cyberpunk-neon-blue/10 animate-pulse">
                {/* Fallback animated background */}
              </div>
            }
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingCube />
          </SafeCanvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-cyberpunk-neon-pink/20 to-cyberpunk-neon-purple/20 border border-cyberpunk-neon-pink/30 rounded-full text-cyberpunk-neon-pink font-mono text-sm">
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name with Glitch Effect */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-american-typewriter"
              >
                <span className="block text-white mb-2">{personal.name.split(' ')[0]}</span>
                <span className="block neon-text text-glow">
                  {personal.name.split(' ')[1]}
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl md:text-3xl text-cyberpunk-neon-blue font-noteworthy"
              >
                {personal.title}
              </motion.p>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-xl text-gray-300 max-w-2xl leading-relaxed font-noteworthy"
              >
                {personal.subtitle}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={contact?.resume || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-cyberpunk-neon-green text-cyberpunk-neon-green hover:bg-cyberpunk-neon-green hover:text-cyberpunk-dark-bg transition-all duration-300 font-bold uppercase tracking-wider group"
                >
                  <span className="flex items-center space-x-2">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-cyberpunk-card-bg/50 border border-cyberpunk-neon-purple/30 rounded-lg text-gray-400 ${social.color} transition-all duration-300 backdrop-blur-sm group`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue rounded-full blur-2xl opacity-30 animate-pulse"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyberpunk-neon-purple/50 bg-gradient-to-br from-cyberpunk-card-bg to-cyberpunk-accent">
                  <ProfileImage
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with cyberpunk effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark-bg/60 via-transparent to-cyberpunk-neon-purple/20"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-purple rounded-full flex items-center justify-center text-2xl"
                >
                  🚀
                </motion.div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-green rounded-full flex items-center justify-center text-xl"
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyberpunk-neon-blue rounded-full lex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyberpunk-neon-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
