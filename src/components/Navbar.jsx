import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#hero', icon: '🏠', short: 'H' },
    { name: 'About', href: '#summary', icon: '📝', short: 'A' },
    { name: 'Projects', href: '#projects', icon: '🚀', short: 'P' },
    { name: 'Skills', href: '#skills', icon: '⚡', short: 'S' },
    { name: 'Work', href: '#experience', icon: '💼', short: 'W' },
    { name: 'Education', href: '#education', icon: '🎓', short: 'E' },
    { name: 'Contact', href: '#contact', icon: '📧', short: 'C' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyberpunk-darker-bg/90 backdrop-blur-md border-b border-cyberpunk-neon-purple/20' 
          : 'bg-transparent'
      }`}
      style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo - Fixed Width */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0 min-w-0"
            style={{ maxWidth: '200px' }}
          >
            <div className="relative flex-shrink-0">
              <Zap className="w-6 h-6 text-cyberpunk-neon-pink animate-pulse" />
              <div className="absolute inset-0 w-6 h-6 bg-cyberpunk-neon-pink/20 rounded-full blur-md animate-ping"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue bg-clip-text text-transparent font-american-typewriter truncate">
              TEJAS.DEV
            </span>
          </motion.div>

          {/* Desktop Navigation - Hide on smaller screens */}
          <div className="hidden xl:flex items-center space-x-6 flex-shrink-0">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="group relative px-3 py-2 text-base font-medium text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 font-noteworthy whitespace-nowrap"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-american-typewriter">{item.name}</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/20 to-cyberpunk-neon-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {/* Active indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue group-hover:w-full transition-all duration-300"></div>
              </motion.button>
            ))}
          </div>

          {/* Compact Navigation for Large Tablets */}
          <div className="hidden lg:flex xl:hidden items-center space-x-3 flex-shrink-0">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="group relative px-2 py-2 text-sm font-medium text-white hover:text-cyberpunk-neon-blue transition-colors duration-300 font-noteworthy"
                title={item.name}
              >
                <span className="flex items-center space-x-1">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-american-typewriter text-xs">{item.short}</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/20 to-cyberpunk-neon-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>

          {/* Icon-only Navigation for Medium Tablets */}
          <div className="hidden md:flex lg:hidden items-center space-x-2 flex-shrink-0">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="group relative p-2 text-white hover:text-cyberpunk-neon-blue transition-colors duration-300"
                title={item.name}
              >
                <span className="text-lg">{item.icon}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/20 to-cyberpunk-neon-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-white hover:text-cyberpunk-neon-pink transition-colors duration-300 flex-shrink-0"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden w-full"
        >
          <div className="py-4 space-y-2 bg-cyberpunk-card-bg/90 backdrop-blur-md rounded-lg border border-cyberpunk-neon-purple/20 mb-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-6 py-3 text-white hover:text-cyberpunk-neon-blue hover:bg-cyberpunk-neon-purple/10 transition-all duration-300 flex items-center space-x-3 rounded-lg"
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="font-american-typewriter">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
