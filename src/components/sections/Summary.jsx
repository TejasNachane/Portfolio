import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'

const Summary = () => {
  const { personal } = portfolioData
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-cyberpunk-darker-bg/30">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold font-american-typewriter">
              <span className="text-white">About the </span>
              <span className="neon-text">Player</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Bio Content */}
          <div className="max-w-4xl mx-auto">
            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              {personal.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-xl text-gray-300 leading-relaxed font-noteworthy text-center"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Summary
