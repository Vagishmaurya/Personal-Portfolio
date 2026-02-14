"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, ExternalLink, Code } from "lucide-react"
import { motion } from "framer-motion"

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Certified AI Practitioner",
      type: "Certification",
      icon: Award,
      description: "Certified in AWS AI services and machine learning fundamentals",
      link: "https://www.credly.com/badges/cf0ffb66-d7ab-4043-aa63-7f6c7219e454/public_url",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      title: "Smart India Hackathon Finalist",
      type: "Achievement",
      icon: Trophy,
      description: "Finalist in Government of India's national hackathon competition",
      organization: "Govt. of India",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      title: "2x Star Performer of the Quarter (2025)",
      type: "Recognition",
      icon: Star,
      description: "Recognized for outstanding performance and contributions",
      organization: "Calance Software",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Competitive Programming Excellence",
      type: "Achievement",
      icon: Code,
      description: "Global Rank 231 on CodeChef with 500+ problems solved across platforms",
      stats: "Global Rank 231",
      links: [
        { name: "LeetCode", url: "https://leetcode.com/vagishmaurya/" },
        { name: "CodeChef", url: "https://www.codechef.com/users/vagish_coder" },
      ],
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
  ]

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Certifications & Achievements</h2>
          <p className="text-lg text-slate-400">Recognition and certifications earned throughout my career</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className={`h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:${achievement.borderColor} transition-all duration-300 ${achievement.bgColor}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                      </motion.div>
                      <span className="text-lg text-white">{achievement.title}</span>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {achievement.type}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">{achievement.description}</p>

                  {achievement.organization && (
                    <p className="text-sm font-medium text-purple-400 mb-3">{achievement.organization}</p>
                  )}

                  {achievement.stats && (
                    <Badge variant="secondary" className="bg-slate-700/50 text-slate-300 mb-3">
                      {achievement.stats}
                    </Badge>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {achievement.link && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center text-sm ${achievement.color} hover:underline transition-colors duration-200`}
                          data-interactive
                        >
                          View Certificate
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </motion.div>
                    )}

                    {achievement.links &&
                      achievement.links.map((link, linkIndex) => (
                        <motion.div key={linkIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-sm ${achievement.color} hover:underline transition-colors duration-200 mr-4`}
                            data-interactive
                          >
                            {link.name}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </motion.div>
                      ))}
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

export default Achievements
