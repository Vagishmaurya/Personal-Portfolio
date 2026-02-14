"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer I (SDE-I) - Full Stack",
      company: "Calance Software Pvt. Ltd.",
      location: "Gurgaon, India",
      period: "June 2024 - Present",
      achievements: [
        "Architected Calance Career Portal: React.js PWA frontend featuring Dark Mode, TanStack Query for efficient server-state management and Service Workers for offline resilience, achieving optimal performance with infinite scrolling via Intersection Observer. Engineered a Node.js backend following event-driven architecture with RabbitMQ, Web Push API for notifications and Prisma ORM for type-safe PostgreSQL interactions. Integrating AWS Bedrock to calculate ATS Scores and optimized query performance using Redis caching.",
        "Developed a scalable Workflow Automation: Next.js 16 (App Router) frontend using precise MVVM architecture achieving 100% separation of business logic from UI and component-scoped CSS-in-JS styling (styled-components). Engineered a high-performance (Go/Gin) backend following Clean Architecture principles with GORM, integrating GitHub OAuth 2.0, PostHog analytics, Next-Intl and Zod schema validation. Enforced rigorous code quality via Husky hooks, Knip tree-shaking, and comprehensive Vitest suites.",
        "Architected a EdTech platform on Next.js 14 App Router, leveraging Server Components, PPR, and ISR for sub-second rendering. Optimized critical paths via React Suspense and granular code splitting, achieving perfect 100/100 Lighthouse scores and Core Web Vitals (FCP: 0.6s, LCP: 0.8s, CLS: 0).",
        "Engineered a high-performance HR Management System backend using Java 17 and Spring Boot, securing endpoints via Spring Security and RBAC over JWT. Designed scalable Leave & Expense modules with configurable multi-level approval workflows, ensuring data consistency via ACID transactions and optimizing MySQL latency by eliminating N+1 problems through advanced Hibernate/JPA query tuning.",
        "Developed a scalable AI SaaS with Next.js 14 and Zustand, strictly following Agile and TDD principles. Validated modules with JSDoc and optimized assets to reduce bundle size by 45% and latency by 40%.",
        "Developed Lease Management system using Angular 17 with Standalone Components and RxJS, implementing Reactive Forms validation and offline-first architecture via IndexedDB and HTTP Interceptors.",
        "Developing a scalable React Native E-commerce App with Redux Toolkit and Stripe, optimizing FlatList rendering products by 50% and implementing efficient memory management with FastImage.",
      ],
      technologies: [
        "React.js",
        "Next.js 16",
        "Go (Gin)",
        "Java 17",
        "Spring Boot",
        "Angular 17",
        "React Native",
        "RabbitMQ",
        "Redis",
        "PostgreSQL",
        "AWS Bedrock",
        "TanStack Query",
        "Docker",
      ],
    },
  ]

  return (
    <section className="section-padding section-dark">
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
