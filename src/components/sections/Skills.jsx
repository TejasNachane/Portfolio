import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'

const Skills = () => {
  const { skills } = portfolioData
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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
              <span className="text-white">Tech </span>
              <span className="neon-text">Arsenal</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-noteworthy">
              My weapons of choice for conquering the digital battlefield
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="cyberpunk-card group"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl group-hover:animate-bounce">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyberpunk-neon-blue transition-colors duration-300">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="group/skill flex items-center space-x-3 p-3 bg-cyberpunk-darker-bg/50 rounded-lg border border-cyberpunk-neon-purple/20 hover:border-cyberpunk-neon-purple/50 transition-all duration-300"
                    >
                      {/* Skill Level Indicator */}
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue group-hover/skill:animate-pulse"></div>
                      
                      {/* Skill Name */}
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 flex-1">
                        {tech}
                      </span>
                      
                      {/* Proficiency Bar */}
                      <div className="w-16 h-1 bg-cyberpunk-card-bg rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '80%' } : { width: 0 }}
                          transition={{ delay: categoryIndex * 0.2 + techIndex * 0.1, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/5 via-cyberpunk-neon-purple/5 to-cyberpunk-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
