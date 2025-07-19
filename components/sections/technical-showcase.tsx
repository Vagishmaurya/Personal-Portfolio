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
        { name: "Next.js 14", level: 95, description: "App Router, Server Components, Streaming" },
        { name: "React 18", level: 95, description: "Concurrent Features, Suspense, Error Boundaries" },
        { name: "TypeScript", level: 90, description: "Advanced Types, Generics, Utility Types" },
        { name: "Angular 17", level: 85, description: "Signals, Standalone Components, RxJS" },
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
    frontend: `// Advanced React Server Component with Streaming
import { Suspense } from 'react'
import { unstable_noStore as noStore } from 'next/cache'

export default async function ProductPage({ params }) {
  noStore() // Opt out of caching for real-time data
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetails id={params.id} />
      </Suspense>
      
      <Suspense fallback={<ReviewsSkeleton />}>
        <ProductReviews id={params.id} />
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
    <section id="technical" className="section-padding">
      <div className="container-professional" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">Technical Expertise</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Deep technical knowledge across modern web development stack with enterprise-grade implementations
          </p>
        </motion.div>

        {/* Architecture Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {architectures.map((arch, index) => (
            <motion.button
              key={arch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveTab(arch.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === arch.id
                  ? "glass bg-navy-500/20 border-navy-500/50 text-navy-300"
                  : "glass-hover text-slate-400"
              }`}
              data-interactive
            >
              <arch.icon className="h-5 w-5" />
              <span className="font-medium">{arch.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Architecture Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Technologies */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-slate-200">{architectures.find((a) => a.id === activeTab)?.title}</CardTitle>
              <p className="text-slate-400">{architectures.find((a) => a.id === activeTab)?.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
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
                        <span className="font-medium text-slate-200">{tech.name}</span>
                        <span className="text-sm text-navy-400">{tech.level}%</span>
                      </div>

                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-navy-500 to-navy-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>

                      <p className="text-sm text-slate-400">{tech.description}</p>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Code Example */}
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-200">
                <Code2 className="h-5 w-5 text-navy-400" />
                Code Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="code-block rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
                  <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                </pre>
              </div>

              <div className="mt-4 flex gap-2">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Production Ready</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Scalable</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Optimized</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Blog Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-200">
                <Layers className="h-5 w-5 text-navy-400" />
                Technical Insights
              </CardTitle>
              <p className="text-slate-400">Sharing knowledge and best practices from enterprise development</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-200">Latest Articles</h4>
                  <div className="space-y-3">
                    <div className="p-3 glass-hover rounded-lg">
                      <h5 className="font-medium text-slate-300 mb-1">Optimizing Next.js 14 App Router Performance</h5>
                      <p className="text-sm text-slate-400">
                        Advanced techniques for reducing bundle size and improving Core Web Vitals
                      </p>
                    </div>
                    <div className="p-3 glass-hover rounded-lg">
                      <h5 className="font-medium text-slate-300 mb-1">Enterprise Angular Architecture Patterns</h5>
                      <p className="text-sm text-slate-400">
                        Scalable patterns for large Angular applications with micro-frontend approach
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-200">Open Source Contributions</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 glass-hover rounded-lg">
                      <div>
                        <h5 className="font-medium text-slate-300">React Performance Utils</h5>
                        <p className="text-sm text-slate-400">Custom hooks for optimization</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-navy-400" data-interactive>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 glass-hover rounded-lg">
                      <div>
                        <h5 className="font-medium text-slate-300">TypeScript Utilities</h5>
                        <p className="text-sm text-slate-400">Advanced type definitions</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-navy-400" data-interactive>
                        <ExternalLink className="h-4 w-4" />
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
