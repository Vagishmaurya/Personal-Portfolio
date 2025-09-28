"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer I (SDE-I)",
      company: "Calance Software Pvt. Ltd.",
      location: "Gurgaon, India",
      period: "June 2024 - Present",
      achievements: [
        "Architected high-performance Educational Content Explorer EdTech platform using Next.js 14 App Router with Server Components, Framer Motion achieving exceptional Core Web Vitals (FCP: 0.6s, LCP: 0.8s, CLS: 0) and perfect 100/100 Lighthouse scores. Implemented PPR, ISR/SSG optimization, React Suspense boundaries, dynamic imports, and component-driven architecture.",
        "Developed comprehensive React Native fitness application with TensorFlow.js integration for real-time posture detection and correction across yoga/strength training modules. Engineered AI-powered golf posture correction system featuring personalized form analysis and injury prevention.",
        "Architected AI-driven product planning SaaS using Next.js 14 Server Components with advanced SSR/SSG/ISR optimizations, TypeScript, Tailwind CSS, and FastAPI. Implemented code splitting, lazy loading, and Web Performance optimization reducing page load by 40%.",
        "Built enterprise lease management system using Angular 17 with reactive forms, Material Design 3, RxJS operators, HTTP interceptors, lazy loading, and role-based access control for NYCSCA. Implemented real-time collaboration, offline-first IndexedDB caching.",
        "Developed modern resume builder with Node.js/Express.js featuring GraphQL APIs, JWT authentication, GitHub API integration, PDF generation.",
        "Enhanced HRMS implementing dark mode theming, Web Speech API, state management with Zustand, PWA capabilities with service workers, performance monitoring achieving 95+ Lighthouse scores.",
        "Delivered 150+ production hotfixes across full-stack applications, implemented comprehensive testing strategies with TDD methodology, Jest/RTL/Jasmine, pre-commit hooks, error boundaries.",
      ],
      technologies: [
        "Next.js 14",
        "React.js",
        "React Native",
        "Angular 17",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "FastAPI",
        "GraphQL",
        "Tailwind CSS",
        "TensorFlow.js",
        "Jest",
        "Docker",
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding section-dark">
      <div className="container-professional relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-primary neon-text"
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
            Professional Experience
          </motion.h2>
          <p className="text-lg text-gray-400">My journey in software development and key achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="glass glass-hover glow-orange">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-white text-xl">{exp.title}</span>
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(255, 69, 0, 0.3)",
                          "0 0 20px rgba(255, 69, 0, 0.6)",
                          "0 0 10px rgba(255, 69, 0, 0.3)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 w-fit">
                        {exp.period}
                      </Badge>
                    </motion.div>
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                    <motion.div
                      className="flex items-center"
                      whileInView={{ x: [20, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center"
                      whileInView={{ x: [20, 0], opacity: [0, 1] }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className="text-orange-500 mr-3 mt-2 text-xs"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                        >
                          ●
                        </motion.span>
                        <span className="text-gray-300 leading-relaxed text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-orange-500/30 text-gray-300 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
