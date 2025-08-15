import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioData } from '../../data/portfolioData'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Zap, Code } from 'lucide-react'

const Contact = () => {
  const { contact } = portfolioData
  
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-cyberpunk-neon-pink',
      bgColor: 'bg-cyberpunk-neon-pink/20',
      borderColor: 'border-cyberpunk-neon-pink/30'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: 'text-cyberpunk-neon-blue',
      bgColor: 'bg-cyberpunk-neon-blue/20',
      borderColor: 'border-cyberpunk-neon-blue/30'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      href: '#',
      color: 'text-cyberpunk-neon-green',
      bgColor: 'bg-cyberpunk-neon-green/20',
      borderColor: 'border-cyberpunk-neon-green/30'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: contact.github,
      color: 'hover:text-cyberpunk-neon-purple'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: contact.linkedin,
      color: 'hover:text-cyberpunk-neon-blue'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: contact.leetcode,
      color: 'hover:text-cyberpunk-neon-green'
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${contact.email}`,
      color: 'hover:text-cyberpunk-neon-pink'
    }
  ]

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
              <span className="text-white">Let's </span>
              <span className="neon-text">Connect</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-noteworthy">
              Ready to team up? Send me a message and let's create something epic together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyberpunk-neon-pink to-cyberpunk-neon-blue mx-auto rounded-full"></div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="flex items-center justify-center space-x-2">
                  <MessageCircle className="w-6 h-6 text-cyberpunk-neon-blue" />
                  <span>Get in Touch</span>
                </span>
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-center">
                Whether you want to discuss a project, collaboration, or just want to say hi, 
                I'm always excited to connect with fellow gamers and developers. Let's collaborate together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex flex-col items-center text-center space-y-3 p-6 ${method.bgColor} border ${method.borderColor} rounded-lg group transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`p-4 bg-cyberpunk-card-bg rounded-lg ${method.color} group-hover:animate-pulse`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{method.label}</p>
                    <p className={`font-semibold ${method.color}`}>{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-6">Connect on Social</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 bg-cyberpunk-card-bg border border-cyberpunk-neon-purple/30 rounded-lg text-gray-400 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Stats */}
            <motion.div
              variants={itemVariants}
              className="bg-cyberpunk-card-bg/50 rounded-xl p-6 border border-cyberpunk-neon-purple/20 max-w-md mx-auto"
            >
              <h4 className="text-lg font-bold text-cyberpunk-neon-blue mb-4 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Response Stats</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyberpunk-neon-green mb-1">&lt; 24h</div>
                  <p className="text-gray-400 text-sm">Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyberpunk-neon-pink mb-1">100%</div>
                  <p className="text-gray-400 text-sm">Reply Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
