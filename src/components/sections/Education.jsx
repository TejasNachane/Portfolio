import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'
import { GraduationCap, Calendar, BookOpen } from 'lucide-react'

const Education = () => {
  const { education } = portfolioData
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
              <span className="text-white">Learning </span>
              <span className="neon-text">Journey</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-noteworthy">
              Knowledge gained through epic academic adventures
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="cyberpunk-card group relative overflow-hidden"
              >
                {/* Academic Level Indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-cyberpunk-neon-purple to-cyberpunk-neon-blue rounded-full text-xs font-bold text-white">
                  {index === 0 ? 'DIPLOMA' : 'BACHELOR\'S'}
                </div>

                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyberpunk-neon-blue/20 rounded-lg border border-cyberpunk-neon-blue/30 group-hover:animate-pulse">
                      <GraduationCap className="w-8 h-8 text-cyberpunk-neon-blue" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyberpunk-neon-blue transition-colors duration-300 mb-2">
                        {edu.degree || edu.school}
                      </h3>
                      <p className="text-cyberpunk-neon-purple font-semibold">
                        {edu.College}
                      </p>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center space-x-3 text-cyberpunk-neon-green">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">{edu.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Skills Gained */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-cyberpunk-neon-blue flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Key Learning Areas</span>
                    </h4>
                    
                    <div className="flex flex-wrap gap-2">
                      {(index === 0 ? 
                        ['Programming Fundamentals', 'Database Design', 'Web Development', 'Software Engineering'] :
                        ['Advanced Algorithms', 'System Design', 'Machine Learning', 'Cloud Computing', 'DevOps']
                      ).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyberpunk-neon-purple/20 text-cyberpunk-neon-purple text-xs font-mono rounded-full border border-cyberpunk-neon-purple/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-blue/5 via-cyberpunk-neon-purple/5 to-cyberpunk-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Learning Philosophy */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-cyberpunk-card-bg/50 to-cyberpunk-accent/30 rounded-xl p-8 border border-cyberpunk-neon-purple/20"
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue rounded-full flex items-center justify-center text-2xl animate-pulse">
                🧠
              </div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Learning is a </span>
                <span className="text-cyberpunk-neon-green">Continuous</span>
                <span className="text-white"> Quest</span>
              </h3>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              "In the rapidly evolving world of technology, I believe that learning never ends. Every project is a new level, 
              every challenge is a boss fight, and every skill mastered opens new opportunities. My academic foundation 
              gives me the knowledge base, but my passion for continuous learning keeps me at the cutting edge."
            </p>
            
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-cyberpunk-neon-blue/20 text-cyberpunk-neon-blue border border-cyberpunk-neon-blue/30 rounded-full text-sm font-mono">
                #LifelongLearner
              </span>
              <span className="px-4 py-2 bg-cyberpunk-neon-purple/20 text-cyberpunk-neon-purple border border-cyberpunk-neon-purple/30 rounded-full text-sm font-mono">
                #TechEnthusiast
              </span>
              <span className="px-4 py-2 bg-cyberpunk-neon-green/20 text-cyberpunk-neon-green border border-cyberpunk-neon-green/30 rounded-full text-sm font-mono">
                #AlwaysLevelingUp
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
