"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-orange-500/20 shadow-lg shadow-orange-500/10" : "bg-transparent"
      }`}
    >
      <div className="container-professional">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#hero")}
            data-interactive
          >
            <motion.div
              className="relative w-10 h-10 rounded-lg overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 69, 0, 0.3)",
                  "0 0 20px rgba(255, 69, 0, 0.6)",
                  "0 0 10px rgba(255, 69, 0, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-400/20 to-white/10" />
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.span
                  className="text-white font-bold text-xl"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(255, 255, 255, 0.5)",
                      "0 0 10px rgba(255, 255, 255, 0.8)",
                      "0 0 5px rgba(255, 255, 255, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  V
                </motion.span>
              </div>
            </motion.div>

            <div className="flex flex-col">
              <motion.span
                className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors duration-300"
                animate={{
                  color: scrolled ? ["#ffffff", "#ff6b35", "#ffffff"] : "#ffffff",
                }}
                transition={{
                  color: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                Vagish Maurya
              </motion.span>
              <motion.span
                className="text-xs text-orange-400 font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                SDE-I
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                  activeSection === item.href.slice(1) ? "text-orange-400" : ""
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 69, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                data-interactive
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(255, 69, 0, 0.5)",
                        "0 0 15px rgba(255, 69, 0, 0.8)",
                        "0 0 5px rgba(255, 69, 0, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Explore Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="btn-primary px-6 py-2 font-medium relative overflow-hidden group"
                data-interactive
              >
                <motion.span animate={{ x: [0, 2, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  EXPLORE
                </motion.span>

                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-300"
                data-interactive
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-orange-500/20 mt-2 rounded-lg overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? "text-orange-400 bg-orange-500/10 border border-orange-500/20"
                        : "text-gray-300 hover:text-orange-400 hover:bg-orange-500/5"
                    }`}
                    data-interactive
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full btn-primary font-medium"
                    data-interactive
                  >
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      EXPLORE
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
