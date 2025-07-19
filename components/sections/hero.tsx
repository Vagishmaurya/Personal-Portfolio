"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
  }

  const socialIcons = [
    { Icon: Github, href: "https://github.com/Vagishmaurya", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/vagish-maurya-018044259", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:vagishmaurya@gmail.com", label: "Email" },
    { Icon: Phone, href: "tel:+919161516309", label: "Phone" },
  ]

  if (!mounted) return null

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Dynamic background with mouse interaction */}
      <motion.div
        className="absolute inset-0 opacity-30 hidden sm:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 69, 0, 0.1), transparent 40%)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Animated geometric shapes - Hidden on mobile for performance */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-orange-500/20 rounded-lg hidden sm:block"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute bottom-32 right-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-2 border-orange-400/30 rounded-full hidden sm:block"
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center mb-6 sm:mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full glow-orange"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255, 69, 0, 0.3)",
                    "0 0 40px rgba(255, 69, 0, 0.5)",
                    "0 0 20px rgba(255, 69, 0, 0.3)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-white text-center">
                  Software Development Engineer I (SDE-I)
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                className="text-gradient-primary neon-text"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255, 69, 0, 0.5)",
                    "0 0 20px rgba(255, 69, 0, 0.8)",
                    "0 0 5px rgba(255, 69, 0, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Vagish Maurya
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 font-medium px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Architecting Digital Excellence
            </motion.p>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Software Development Engineer I (SDE-I) at{" "}
              <motion.span
                className="text-orange-500 font-semibold"
                whileHover={{ scale: 1.05 }}
                animate={{
                  color: ["#ff4500", "#ff6b35", "#ff4500"],
                }}
                transition={{
                  color: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                Calance Software
              </motion.span>
              , specializing in AI-powered platforms, modern frontend architectures, and enterprise-grade applications.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="magnetic">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="btn-primary px-6 sm:px-8 py-2 sm:py-3 text-white font-medium relative overflow-hidden w-full sm:w-auto"
                data-interactive
              >
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  Get In Touch
                </motion.span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="magnetic">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-secondary px-6 sm:px-8 py-2 sm:py-3 font-medium text-gray-300 bg-transparent w-full sm:w-auto"
                data-interactive
              >
                <a href="/resume.pdf" download>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="mr-2"
                  >
                    <Download className="h-4 w-4" />
                  </motion.div>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16 px-4"
          >
            {socialIcons.map(({ Icon, href, label }, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="magnetic"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="glass-hover h-10 w-10 sm:h-12 sm:w-12 rounded-full glow-orange"
                  data-interactive
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{
                y: [0, 10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-"
            >
              Scroll to About
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
