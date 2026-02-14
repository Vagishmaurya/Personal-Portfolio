"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Database, Cloud, Wrench, Zap, Shuffle, RotateCcw } from "lucide-react"
import { motion, useInView, type PanInfo } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const Skills = () => {
  const ref = useRef(null)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const sandboxRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [isShaking, setIsShaking] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null)
  const [sandboxDimensions, setSandboxDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calculate responsive positions based on container size
  const calculatePositions = (width: number, height: number) => {
    const isMobileView = width < 768
    const isTabletView = width >= 768 && width < 1024

    // Responsive padding and skill dimensions
    const padding = isMobileView ? 30 : isTabletView ? 40 : 50
    const skillWidth = isMobileView ? 60 : isTabletView ? 70 : 80
    const skillHeight = isMobileView ? 28 : 32

    const usableWidth = Math.max(0, width - padding * 2 - skillWidth)
    const usableHeight = Math.max(0, height - padding * 2 - skillHeight)

    // Adjust skill count and positioning for mobile
    // Adjust skill count and positioning for mobile
    const skills = [
      // Programming Languages - Top row
      {
        name: "JavaScript",
        color: "bg-yellow-500",
        category: "Programming",
        x: usableWidth * (isMobileView ? 0.05 : 0.1),
        y: usableHeight * 0.1,
      },
      {
        name: "TypeScript",
        color: "bg-blue-600",
        category: "Programming",
        x: usableWidth * (isMobileView ? 0.55 : 0.35),
        y: usableHeight * (isMobileView ? 0.05 : 0.15),
      },
      {
        name: "Go",
        color: "bg-cyan-600",
        category: "Programming",
        x: usableWidth * (isMobileView ? 0.05 : 0.6),
        y: usableHeight * (isMobileView ? 0.25 : 0.1),
      },
      {
        name: "Java",
        color: "bg-red-600",
        category: "Programming",
        x: usableWidth * (isMobileView ? 0.55 : 0.85),
        y: usableHeight * (isMobileView ? 0.2 : 0.2),
      },

      // Frontend - Second row
      {
        name: "React.js",
        color: "bg-cyan-500",
        category: "Frontend",
        x: usableWidth * 0.05,
        y: usableHeight * (isMobileView ? 0.4 : 0.35),
      },
      {
        name: "Next.js",
        color: "bg-gray-700",
        category: "Frontend",
        x: usableWidth * (isMobileView ? 0.55 : 0.3),
        y: usableHeight * (isMobileView ? 0.35 : 0.3),
      },
      {
        name: "Angular",
        color: "bg-red-600",
        category: "Frontend",
        x: usableWidth * (isMobileView ? 0.05 : 0.55),
        y: usableHeight * (isMobileView ? 0.55 : 0.35),
      },
      {
        name: "Tailwind",
        color: "bg-teal-500",
        category: "Frontend",
        x: usableWidth * (isMobileView ? 0.55 : 0.8),
        y: usableHeight * (isMobileView ? 0.5 : 0.4),
      },

      // Backend - Third row
      {
        name: "Node.js",
        color: "bg-green-500",
        category: "Backend",
        x: usableWidth * (isMobileView ? 0.05 : 0.4),
        y: usableHeight * (isMobileView ? 0.7 : 0.55),
      },
      {
        name: "Spring Boot",
        color: "bg-green-700",
        category: "Backend",
        x: usableWidth * (isMobileView ? 0.55 : 0.65),
        y: usableHeight * (isMobileView ? 0.65 : 0.5),
      },
      {
        name: "MongoDB",
        color: "bg-green-600",
        category: "Database",
        x: usableWidth * (isMobileView ? 0.05 : 0.7),
        y: usableHeight * (isMobileView ? 0.85 : 0.7),
      },
      {
        name: "PostgreSQL",
        color: "bg-blue-600",
        category: "Database",
        x: usableWidth * (isMobileView ? 0.55 : 0.35),
        y: usableHeight * (isMobileView ? 0.8 : 0.9),
      },
    ]

    // Add more skills for larger screens
    if (!isMobileView) {
      skills.push(
        { name: "React Native", color: "bg-blue-500", category: "Frontend", x: usableWidth * 0.15, y: usableHeight * 0.5 },
        { name: "PWA", color: "bg-orange-600", category: "Frontend", x: usableWidth * 0.3, y: usableHeight * 0.45 },
        { name: "GraphQL", color: "bg-pink-500", category: "Backend", x: usableWidth * 0.1, y: usableHeight * 0.7 },
        { name: "RabbitMQ", color: "bg-orange-500", category: "Backend", x: usableWidth * 0.25, y: usableHeight * 0.65 },
        {
          name: "TanStack",
          color: "bg-red-500",
          category: "Tools",
          x: usableWidth * 0.45,
          y: usableHeight * 0.75,
        },
        { name: "Redis", color: "bg-red-600", category: "Database", x: usableWidth * 0.05, y: usableHeight * 0.85 },
        { name: "AWS", color: "bg-orange-600", category: "Database", x: usableWidth * 0.6, y: usableHeight * 0.85 },
        { name: "Git", color: "bg-orange-500", category: "Tools", x: usableWidth * 0.2, y: usableHeight * 0.95 },
        { name: "TDD", color: "bg-green-500", category: "Tools", x: usableWidth * 0.5, y: usableHeight * 0.95 },
        { name: "Vitest", color: "bg-yellow-500", category: "Tools", x: usableWidth * 0.8, y: usableHeight * 0.9 },
      )
    }

    return skills
  }

  const [allSkills, setAllSkills] = useState(() => calculatePositions(600, 400))
  const [skillPositions, setSkillPositions] = useState(allSkills)

  // Update positions when sandbox dimensions change
  useEffect(() => {
    const updateDimensions = () => {
      if (constraintsRef.current) {
        const rect = constraintsRef.current.getBoundingClientRect()
        const newWidth = rect.width
        const newHeight = rect.height

        if (newWidth > 0 && newHeight > 0) {
          setSandboxDimensions({ width: newWidth, height: newHeight })
          const newPositions = calculatePositions(newWidth, newHeight)
          setAllSkills(newPositions)
          setSkillPositions(newPositions)
        }
      }
    }

    // Initial calculation with delay
    const timer = setTimeout(updateDimensions, 200)

    // Update on resize with debounce
    let resizeTimer: NodeJS.Timeout
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updateDimensions, 100)
    }

    const resizeObserver = new ResizeObserver(debouncedResize)
    if (constraintsRef.current) {
      resizeObserver.observe(constraintsRef.current)
    }

    window.addEventListener("resize", debouncedResize)

    return () => {
      clearTimeout(timer)
      clearTimeout(resizeTimer)
      resizeObserver.disconnect()
      window.removeEventListener("resize", debouncedResize)
      window.removeEventListener("resize", debouncedResize)
    }
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Java 17", level: 85, color: "from-red-400 to-red-600" },
        { name: "Go (Golang)", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "C++", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "SQL", level: 85, color: "from-green-400 to-green-600" },
        { name: "GraphQL", level: 80, color: "from-pink-400 to-pink-600" },
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: Zap,
      skills: [
        { name: "React.js", level: 95, color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "Angular 17", level: 85, color: "from-red-400 to-red-600" },
        { name: "React Native", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "PWA", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-teal-600" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Spring Boot", level: 85, color: "from-green-500 to-green-700" },
        { name: "Gin (Go)", level: 80, color: "from-cyan-500 to-cyan-700" },
        { name: "RabbitMQ", level: 75, color: "from-orange-500 to-orange-700" },
        { name: "PostgreSQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
        { name: "Redis", level: 80, color: "from-red-400 to-red-600" },
      ],
    },
    {
      title: "State Management & Arch",
      icon: Cloud,
      skills: [
        { name: "TanStack Query", level: 90, color: "from-red-400 to-red-600" },
        { name: "Redux Toolkit", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "Zustand", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "RxJS", level: 80, color: "from-pink-400 to-pink-600" },
      ],
    },
    {
      title: "Testing & DevOps",
      icon: Wrench,
      skills: [
        { name: "Vitest/Jest", level: 85, color: "from-green-400 to-green-600" },
        { name: "PostHog", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Git/GitHub", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "CI/CD", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Agile/TDD", level: 85, color: "from-indigo-400 to-indigo-600" },
      ],
    },
  ]

  const handleDragStart = (skillName: string) => {
    setIsDragging(true)
    setDraggedSkill(skillName)
  }

  const handleDragEnd = (index: number, info: PanInfo) => {
    setIsDragging(false)
    setDraggedSkill(null)

    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }

    // Update position state to keep the skill where it was dropped
    const currentSkill = skillPositions[index]
    const newX = currentSkill.x + info.offset.x
    const newY = currentSkill.y + info.offset.y

    // Ensure we stay within bounds (optional, but good for state consistency)
    // Note: Framer constraints handle the visual bounds, but we update state to match.
    
    setSkillPositions((prev) =>
      prev.map((skill, i) => 
        i === index 
          ? { ...skill, x: newX, y: newY } 
          : skill
      )
    )
  }

  const shuffleSkills = () => {
    if (constraintsRef.current) {
      const rect = constraintsRef.current.getBoundingClientRect()
      const padding = isMobile ? 30 : 40
      const skillWidth = isMobile ? 60 : 80
      const skillHeight = isMobile ? 28 : 32

      setSkillPositions((prev) =>
        prev.map((skill) => ({
          ...skill,
          x: Math.random() * Math.max(0, rect.width - padding * 2 - skillWidth) + padding,
          y: Math.random() * Math.max(0, rect.height - padding * 2 - skillHeight) + padding,
        })),
      )

      setTimeout(() => {
        setSkillPositions(allSkills)
      }, 3000)
    }
  }

  const shakeAll = () => {
    setIsShaking(true)

    const shakeInterval = setInterval(() => {
      setSkillPositions((prev) =>
        prev.map((skill, index) => ({
          ...skill,
          x: allSkills[index].x + (Math.random() - 0.5) * (isMobile ? 15 : 25),
          y: allSkills[index].y + (Math.random() - 0.5) * (isMobile ? 15 : 25),
        })),
      )
    }, 60)

    setTimeout(() => {
      clearInterval(shakeInterval)
      setIsShaking(false)
      setSkillPositions(allSkills)
    }, 1200)
  }

  const resetPositions = () => {
    setSkillPositions(allSkills)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gradient-primary neon-text"
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
            Interactive Skills Playground
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 px-4">
            Drag the skills around to arrange them as you like! Use Reset to restore original layout.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={shuffleSkills}
                className="btn-primary text-sm sm:text-base px-3 sm:px-4 py-2"
                data-interactive
              >
                <Shuffle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Shuffle
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={shakeAll}
                className="btn-secondary text-sm sm:text-base px-3 sm:px-4 py-2"
                data-interactive
                disabled={isShaking}
              >
                <motion.div
                  animate={isShaking ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.1, repeat: isShaking ? 15 : 0 }}
                  className="flex items-center"
                >
                  <motion.div
                    animate={
                      isShaking
                        ? {
                            rotate: [0, -15, 15, -15, 15, 0],
                            scale: [1, 1.2, 1, 1.2, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.06, repeat: isShaking ? 15 : 0 }}
                  >
                    🎯
                  </motion.div>
                  <span className="ml-1 sm:ml-2">{isShaking ? "Shaking..." : "Shake All"}</span>
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={resetPositions}
                className="btn-secondary text-sm sm:text-base px-3 sm:px-4 py-2"
                data-interactive
              >
                <RotateCcw className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Reset
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Sandbox */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <Card className="glass glass-hover glow-orange mx-auto max-w-full">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-center text-orange-400 flex flex-col sm:flex-row items-center justify-center gap-2 text-lg sm:text-xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  🎮
                </motion.div>
                <span className="text-center">Skills Sandbox - Enhanced Dragging!</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6">
              <motion.div
                ref={sandboxRef}
                className="relative w-full bg-gray-800/30 rounded-lg border-2 border-dashed border-orange-500/30 overflow-hidden"
                style={{
                  height: isMobile ? "300px" : "400px",
                  minHeight: "250px",
                  cursor: isDragging ? "grabbing" : "grab",
                  touchAction: "none",
                }}
                animate={{
                  borderColor: isDragging ? "rgba(255, 69, 0, 0.6)" : "rgba(255, 69, 0, 0.3)",
                }}
              >
                {/* Floating instructions */}
                <motion.div
                  className="absolute top-2 left-2 sm:top-4 sm:left-4 text-gray-400 text-xs sm:text-sm bg-gray-800/80 px-2 sm:px-4 py-1 sm:py-2 rounded-lg backdrop-blur-sm border border-orange-500/20 pointer-events-none z-10"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: isDragging ? 1.05 : 1,
                  }}
                  transition={{
                    opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    scale: { duration: 0.2 },
                  }}
                >
                  🎯 {isDragging ? `Dragging ${draggedSkill}...` : "Drag skills around!"}
                </motion.div>

                {/* Drag constraints container */}
                <div
                  ref={constraintsRef}
                  className="absolute inset-2 sm:inset-4 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] h-[calc(100%-1rem)] sm:h-[calc(100%-2rem)]"
                >
                  {skillPositions.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      drag
                      dragConstraints={constraintsRef}
                      dragElastic={0.05}
                      dragMomentum={true}
                      dragTransition={{
                        bounceStiffness: 600,
                        bounceDamping: 20,
                        power: 0.3,
                        timeConstant: 200,
                      }}
                      onDragStart={() => handleDragStart(skill.name)}
                      onDragEnd={(_, info) => handleDragEnd(index, info)}
                      whileDrag={{
                        scale: isMobile ? 1.15 : 1.25,
                        zIndex: 1000,
                        boxShadow: "0 20px 40px rgba(255, 69, 0, 0.7)",
                        cursor: "grabbing",
                        filter: "brightness(1.2)",
                      }}
                      whileHover={{
                        scale: isMobile ? 1.05 : 1.08,
                        boxShadow: "0 10px 25px rgba(255, 69, 0, 0.5)",
                        rotate: 1,
                        filter: "brightness(1.1)",
                      }}
                      whileTap={{
                        scale: isMobile ? 1.1 : 1.15,
                      }}
                      initial={{
                        x: skill.x,
                        y: skill.y,
                      }}
                      animate={
                        isShaking
                          ? {
                              x: skill.x + (Math.random() - 0.5) * (isMobile ? 15 : 25),
                              y: skill.y + (Math.random() - 0.5) * (isMobile ? 15 : 25),
                              rotate: [0, -10, 10, -10, 10, 0],
                              scale: [1, 1.15, 0.95, 1.15, 1],
                            }
                          : {
                              x: skill.x,
                              y: skill.y,
                            }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        mass: 0.8,
                        rotate: { duration: 0.06, repeat: isShaking ? 15 : 0 },
                        scale: { duration: 0.06, repeat: isShaking ? 15 : 0 },
                      }}
                      className={`absolute px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white font-medium select-none ${skill.color} shadow-lg border border-white/30 backdrop-blur-sm`}
                      data-interactive
                      style={{
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        cursor: "grab",
                        touchAction: "none",
                        width: "fit-content",
                        height: "fit-content",
                        willChange: "transform",
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                      }}
                    >
                      <motion.span
                        animate={{
                          textShadow:
                            draggedSkill === skill.name
                              ? "0 0 10px rgba(255, 255, 255, 0.8)"
                              : "0 0 0px rgba(255, 255, 255, 0)",
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Category indicators */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-xs text-gray-500 space-y-1 bg-gray-800/80 p-2 sm:p-3 rounded-lg backdrop-blur-sm pointer-events-none">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <motion.div
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                    />
                    <span className="text-xs">Programming</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <motion.div
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                    />
                    <span className="text-xs">Frontend</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <motion.div
                      className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                    />
                    <span className="text-xs">Backend</span>
                  </div>
                </div>

                {/* Enhanced status indicator */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 text-xs bg-gray-800/80 px-2 sm:px-4 py-1 sm:py-2 rounded-lg backdrop-blur-sm border border-orange-500/20 pointer-events-none"
                  animate={{
                    scale: [1, 1.05, 1],
                    borderColor: isDragging ? "rgba(255, 69, 0, 0.6)" : "rgba(255, 69, 0, 0.2)",
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    borderColor: { duration: 0.3 },
                  }}
                >
                  {isDragging ? "🔥 Dragging" : "🎮 Ready"}
                </motion.div>

                {/* Shake indicator */}
                {isShaking && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="text-4xl sm:text-6xl"
                      animate={{
                        rotate: [0, -20, 20, -20, 20, 0],
                        scale: [1, 1.4, 1, 1.4, 1],
                        filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
                      }}
                      transition={{
                        duration: 0.06,
                        repeat: 15,
                      }}
                    >
                      🌪️
                    </motion.div>
                  </motion.div>
                )}

                {/* Drag trail effect */}
                {isDragging && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Traditional Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white px-4">Skills by Category</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="h-full glass glass-hover glow-orange">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        {React.createElement(category.icon, { className: "h-4 w-4 sm:h-5 sm:w-5 text-orange-400" })}
                      </motion.div>
                      <span className="text-white">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="space-y-2"
                          onHoverStart={() => setHoveredSkill(skill.name)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          data-interactive
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                            <motion.span
                              className="text-xs text-orange-400"
                              animate={hoveredSkill === skill.name ? { scale: 1.1 } : { scale: 1 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1 + skillIndex * 0.1,
                                ease: "easeOut",
                              }}
                              whileHover={{
                                boxShadow: "0 0 20px rgba(255, 69, 0, 0.5)",
                                transition: { duration: 0.2 },
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
