"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, Database, Cloud, Globe, Layers, ExternalLink } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const TechnicalShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState("frontend")

  const architectures = [
    {
      id: "frontend",
      title: "Frontend Architecture",
      icon: Globe,
      description: "Modern React ecosystems with advanced patterns",
      technologies: [
        { name: "Next.js 14", level: 95, description: "Server Components, PPR, ISR/SSG, Dynamic Imports" },
        { name: "React 18", level: 95, description: "Suspense, Streaming, Code Splitting, Error Boundaries" },
        { name: "React Native", level: 85, description: "TensorFlow.js, Posture Detection AI Models" },
        { name: "Angular 17", level: 85, description: "Signals, Material Design 3, RxJS Operators" },
      ],
    },
    {
      id: "backend",
      title: "Backend Systems",
      icon: Database,
      description: "Scalable server architectures and APIs",
      technologies: [
        { name: "Node.js", level: 90, description: "Event Loop, Clustering, Performance Optimization" },
        { name: "Express.js", level: 90, description: "Middleware, Security, Rate Limiting" },
        { name: "FastAPI", level: 80, description: "Async/Await, Pydantic, OpenAPI" },
        { name: "MongoDB", level: 85, description: "Aggregation, Indexing, Replication" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      icon: Cloud,
      description: "Modern deployment and infrastructure",
      technologies: [
        { name: "Docker", level: 75, description: "Containerization, Multi-stage Builds" },
        { name: "AWS", level: 70, description: "EC2, S3, Lambda, CloudFormation" },
        { name: "CI/CD", level: 80, description: "GitHub Actions, Automated Testing" },
        { name: "Monitoring", level: 75, description: "Error Tracking, Performance Metrics" },
      ],
    },
  ]

  const codeExamples = {
    frontend: `// High Performance Next.js App with Core Web Vitals Optimization
import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'
import { getStaticProps } from 'next'

// Pages using Partial Prerendering (PPR)
export default function ProductPage({ params }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Static content with instant loading */}
      <ProductHeader /> 
      
      {/* Dynamic content streamed progressively */}
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails id={params.id} />
      </Suspense>
      
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews id={params.id} />
      </Suspense>
    </div>
  )
}`,
    backend: `// Scalable Express.js API with Advanced Middleware
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'

const app = express()

// Security & Performance Middleware
app.use(helmet())
app.use(compression())
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}))

// Advanced Error Handling
app.use((err, req, res, next) => {
  logger.error(err.stack)
  res.status(500).json({ 
    error: 'Something went wrong!',
    requestId: req.id 
  })
})`,
    devops: `# Multi-stage Docker Build for Production
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]`,
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Deep technical knowledge across modern web development stack with enterprise-grade implementations
          </p>
        </motion.div>

        {/* Architecture Tabs - Mobile optimized */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {architectures.map((arch, index) => (
            <motion.button
              key={arch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(arch.id)}
              className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                activeTab === arch.id
                  ? "bg-blue-500/20 border border-blue-500/50 text-blue-300"
                  : "bg-slate-800/50 border border-slate-700 text-slate-400 hover:bg-slate-700/50"
              }`}
            >
              <arch.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-medium">{arch.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Architecture Content - Mobile optimized */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Technologies */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-slate-200 text-lg sm:text-xl">
                {architectures.find((a) => a.id === activeTab)?.title}
              </CardTitle>
              <p className="text-slate-400 text-sm sm:text-base">
                {architectures.find((a) => a.id === activeTab)?.description}
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-4 sm:space-y-6">
                {architectures
                  .find((a) => a.id === activeTab)
                  ?.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-200 text-sm sm:text-base">{tech.name}</span>
                        <span className="text-xs sm:text-sm text-blue-400">{tech.level}%</span>
                      </div>

                      <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{tech.description}</p>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Example - Mobile optimized */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-slate-200 text-lg sm:text-xl">
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                Code Example
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="bg-slate-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm text-slate-300 whitespace-pre-wrap break-words">
                  <code className="break-all sm:break-normal">
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </code>
                </pre>
              </div>

              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                  Production Ready
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                  Scalable
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                  Optimized
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Blog Preview - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-slate-200 text-lg sm:text-xl">
                <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                Technical Insights
              </CardTitle>
              <p className="text-slate-400 text-sm sm:text-base">
                Sharing knowledge and best practices from enterprise development
              </p>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-slate-200 text-base sm:text-lg">Latest Articles</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <h5 className="font-medium text-slate-300 mb-1 text-sm sm:text-base">
                        Optimizing Next.js 14 App Router Performance
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Advanced techniques for reducing bundle size and improving Core Web Vitals
                      </p>
                    </div>
                    <div className="p-3 sm:p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <h5 className="font-medium text-slate-300 mb-1 text-sm sm:text-base">
                        Enterprise Angular Architecture Patterns
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        Scalable patterns for large Angular applications with micro-frontend approach
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-slate-200 text-base sm:text-lg">Open Source Contributions</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <div className="min-w-0 flex-1">
                        <h5 className="font-medium text-slate-300 text-sm sm:text-base truncate">
                          React Performance Utils
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-400">Custom hooks for optimization</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 ml-2">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg transition-colors">
                      <div className="min-w-0 flex-1">
                        <h5 className="font-medium text-slate-300 text-sm sm:text-base truncate">
                          TypeScript Utilities
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-400">Advanced type definitions</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300 ml-2">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalShowcase