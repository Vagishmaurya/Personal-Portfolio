"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Award, Target, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const PerformanceMetrics = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animatedValues, setAnimatedValues] = useState({
    pageLoad: 0,
    bugs: 0,
    projects: 0,
    uptime: 0,
  })

  const metrics = [
    {
      icon: Zap,
      title: "Lighthouse Score",
      value: 100,
      suffix: "/100",
      description: "Perfect performance metrics",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Target,
      title: "Production Issues Resolved",
      value: 150,
      suffix: "+",
      description: "Critical bugs fixed across platforms",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Award,
      title: "Enterprise Projects",
      value: 5,
      suffix: "+",
      description: "Large-scale applications delivered",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Clock,
      title: "System Uptime",
      value: 99.9,
      suffix: "%",
      description: "Application reliability maintained",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ]

  const achievements = [
    {
      title: "EdTech Platform Optimization",
      description: "Architected high-performance Educational Content Explorer with exceptional Core Web Vitals",
      impact: "100/100 Lighthouse scores",
      tech: ["Next.js 14", "Server Components", "Framer Motion"],
    },
    {
      title: "AI Fitness Application",
      description: "Developed React Native app with TensorFlow.js for real-time posture detection and correction",
      impact: "Advanced AI integration",
      tech: ["React Native", "TensorFlow.js", "AI Models"],
    },
    {
      title: "Enterprise Lease Management",
      description: "Built NYCSCA system with reactive forms, real-time collaboration and offline-first IndexedDB",
      impact: "Seamless offline functionality",
      tech: ["Angular 17", "Material Design 3", "RxJS"],
    },
  ]

  useEffect(() => {
    if (isInView) {
      const animateValue = (start: number, end: number, duration: number, key: string) => {
        const startTime = Date.now()
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)
          const current = start + (end - start) * progress

          setAnimatedValues((prev) => ({
            ...prev,
            [key]: key === "uptime" ? Number(current.toFixed(1)) : Math.floor(current),
          }))

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        animate()
      }

      animateValue(0, 100, 2000, "pageLoad")
      animateValue(0, 150, 2500, "bugs")
      animateValue(0, 5, 1500, "projects")
      animateValue(0, 99.9, 3000, "uptime")
    }
  }, [isInView])

  return (
    <section className="section-padding bg-navy-950/50">
      <div className="container-professional" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Performance & Impact</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Measurable results and technical achievements in enterprise software development
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`glass glass-hover ${metric.bgColor} border ${metric.borderColor} h-full`}>
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${metric.bgColor} mb-4`}
                  >
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </motion.div>

                  <div className="text-3xl font-bold mb-2 text-slate-100">
                    {index === 0 && animatedValues.pageLoad}
                    {index === 1 && animatedValues.bugs}
                    {index === 2 && animatedValues.projects}
                    {index === 3 && animatedValues.uptime}
                    <span className={`text-xl ${metric.color}`}>{metric.suffix}</span>
                  </div>

                  <h3 className="font-semibold text-slate-200 mb-2">{metric.title}</h3>
                  <p className="text-sm text-slate-400">{metric.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-200">Key Technical Achievements</h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass glass-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-200">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">{achievement.description}</p>

                    <div className="mb-4">
                      <Badge className="bg-navy-500/20 text-navy-300 border-navy-500/30">{achievement.impact}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {achievement.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-slate-600 text-slate-400 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PerformanceMetrics
