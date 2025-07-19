"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "LawVistaHub - Legal Tech Platform",
      period: "July 2023 – Oct 2023",
      description:
        "Built secure legal platform with React.js, Redux Toolkit, MongoDB, Express.js, JWT authentication, WebRTC video conferencing, document management, and Razorpay payment gateway integration.",
      technologies: [
        { name: "React.js", color: "bg-cyan-600" },
        { name: "Redux Toolkit", color: "bg-purple-600" },
        { name: "MongoDB", color: "bg-green-600" },
        { name: "Express.js", color: "bg-slate-600" },
        { name: "JWT", color: "bg-orange-600" },
        { name: "WebRTC", color: "bg-blue-600" },
        { name: "Razorpay", color: "bg-indigo-600" },
      ],
      liveDemo: "https://lawc.vercel.app",
      github: "https://github.com/Vagishmaurya",
      status: "Live",
    },
    {
      title: "Synapse - AI Job Matching Platform",
      period: "May 2024 – Present",
      description:
        "Developed AI-powered recruitment platform using React.js, TypeScript, FastAPI, MongoDB with ML recommendation engine, real-time WebSocket messaging, automated web scraping, and LinkedIn API integration.",
      technologies: [
        { name: "React.js", color: "bg-cyan-600" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "FastAPI", color: "bg-green-600" },
        { name: "MongoDB", color: "bg-green-700" },
        { name: "ML", color: "bg-red-600" },
        { name: "WebSocket", color: "bg-yellow-600" },
        { name: "LinkedIn API", color: "bg-blue-700" },
      ],
      liveDemo: "#",
      github: "https://github.com/Vagishmaurya",
      status: "In Development",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-slate-900/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-slate-400">Showcasing my technical expertise through innovative solutions</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-3">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <span className="text-lg font-bold text-white">{project.title}</span>
                      <Badge
                        variant="secondary"
                        className={`${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.period}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col">
                  <motion.p
                    className="text-slate-300 mb-6 leading-relaxed text-sm"
                    animate={hoveredProject === index ? { scale: 1.01 } : { scale: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: index * 0.1 + techIndex * 0.05,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                          data-interactive
                        >
                          <Badge className={`${tech.color} text-white border-0 text-xs px-2 py-1`}>{tech.name}</Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    {project.liveDemo !== "#" && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          asChild
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                          data-interactive
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </motion.div>
                    )}

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-slate-600 hover:border-purple-500 hover:bg-purple-500/10 bg-transparent text-slate-300"
                        data-interactive
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
