import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react'

const Experience = () => {
  const { experience } = portfolioData
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section ref={ref} className="section-padding">
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
              <span className="text-white">Quest </span>
              <span className="neon-text">History</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-noteworthy">
              My journey through the professional gaming world
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyberpunk-neon-pink via-cyberpunk-neon-purple to-cyberpunk-neon-blue hidden md:block"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative md:ml-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue rounded-full border-4 border-cyberpunk-dark-bg hidden md:block animate-pulse"></div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="cyberpunk-card group"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyberpunk-neon-blue transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <p className="text-cyberpunk-neon-purple text-lg font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end gap-2">
                          <div className="flex items-center space-x-2 text-cyberpunk-neon-blue">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-sm">{exp.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3">
                        {exp.description.map((desc, descIndex) => (
                          <motion.div
                            key={descIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.2 + descIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-cyberpunk-neon-green rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/5 via-cyberpunk-neon-purple/5 to-cyberpunk-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
