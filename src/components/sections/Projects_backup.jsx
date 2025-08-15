import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'
import { Github, ExternalLink, Star, Eye, Code } from 'lucide-react'

const Projects = () => {
  const { projects } = portfolioData
  const [selectedProject, setSelectedProject] = useState(null)
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
              <span className="text-white">Epic </span>
              <span className="neon-text">Projects</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-noteworthy">
              Level up your experience with these legendary builds
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative cyberpunk-card overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-purple rounded-full text-xs font-bold text-white">
                    <Star className="w-3 h-3 inline mr-1" />
                    FEATURED
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-dark-bg via-transparent to-transparent opacity-60"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyberpunk-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-bold text-lg flex items-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyberpunk-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyberpunk-neon-purple/20 text-cyberpunk-neon-purple text-xs font-mono rounded-full border border-cyberpunk-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs font-mono rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 px-4 py-2 bg-cyberpunk-card-bg border border-cyberpunk-neon-purple/30 text-cyberpunk-neon-purple hover:bg-cyberpunk-neon-purple hover:text-white transition-all duration-300 rounded-lg text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 px-4 py-2 bg-cyberpunk-neon-blue/20 border border-cyberpunk-neon-blue/30 text-cyberpunk-neon-blue hover:bg-cyberpunk-neon-blue hover:text-white transition-all duration-300 rounded-lg text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-pink/10 via-cyberpunk-neon-purple/10 to-cyberpunk-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="cyberpunk-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                
                <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                
                <div>
                  <h4 className="text-lg font-bold text-cyberpunk-neon-blue mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyberpunk-neon-purple/20 text-cyberpunk-neon-purple text-sm font-mono rounded-full border border-cyberpunk-neon-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyberpunk-button flex-1"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </span>
                    </a>
                  )}
                  
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-cyberpunk-neon-blue text-cyberpunk-neon-blue hover:bg-cyberpunk-neon-blue hover:text-cyberpunk-dark-bg transition-all duration-300 font-bold uppercase tracking-wider flex-1 text-center"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
