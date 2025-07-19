"use client"

import { useState, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shuffle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const InteractiveSkillsPlayground = () => {
  const constraintsRef = useRef(null)
  const [isShaking, setIsShaking] = useState(false)

  const skills = [
    { name: "React.js", color: "bg-cyan-500", x: 50, y: 50 },
    { name: "Next.js", color: "bg-gray-700", x: 200, y: 80 },
    { name: "TypeScript", color: "bg-blue-600", x: 350, y: 60 },
    { name: "Node.js", color: "bg-green-600", x: 100, y: 150 },
    { name: "MongoDB", color: "bg-green-500", x: 280, y: 140 },
    { name: "Express.js", color: "bg-gray-600", x: 450, y: 120 },
    { name: "Angular", color: "bg-red-600", x: 150, y: 220 },
    { name: "Tailwind", color: "bg-teal-500", x: 320, y: 200 },
    { name: "Docker", color: "bg-blue-500", x: 480, y: 180 },
    { name: "AWS", color: "bg-orange-500", x: 80, y: 280 },
    { name: "Git", color: "bg-orange-600", x: 250, y: 260 },
    { name: "Jest", color: "bg-red-500", x: 400, y: 240 },
  ]

  const [skillPositions, setSkillPositions] = useState(skills)

  const handleDragEnd = (index: number, info: PanInfo) => {
    // Return to original position after a delay
    setTimeout(() => {
      setSkillPositions((prev) =>
        prev.map((skill, i) => (i === index ? { ...skill, x: skills[index].x, y: skills[index].y } : skill)),
      )
    }, 1000)
  }

  const shuffleSkills = () => {
    setSkillPositions((prev) =>
      prev.map((skill) => ({
        ...skill,
        x: Math.random() * 400 + 50,
        y: Math.random() * 200 + 50,
      })),
    )

    // Return to original positions after 2 seconds
    setTimeout(() => {
      setSkillPositions(skills)
    }, 2000)
  }

  const shakeAll = () => {
    setIsShaking(true)
    setTimeout(() => setIsShaking(false), 1000)
  }

  const resetPositions = () => {
    setSkillPositions(skills)
  }

  return (
    <section id="skills-playground" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Interactive Skills Playground
          </h2>
          <p className="text-lg text-gray-300 mb-6">Drag the skills around and watch them return home!</p>

          <div className="flex justify-center gap-4 mb-8">
            <Button onClick={shuffleSkills} className="bg-purple-600 hover:bg-purple-700" data-interactive>
              <Shuffle className="mr-2 h-4 w-4" />
              Shuffle
            </Button>
            <Button
              onClick={shakeAll}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              data-interactive
            >
              <motion.div animate={isShaking ? { rotate: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.5 }}>
                Shake All
              </motion.div>
            </Button>
            <Button
              onClick={resetPositions}
              variant="outline"
              className="border-gray-500 text-gray-400 hover:bg-gray-500/10 bg-transparent"
              data-interactive
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </motion.div>

        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-purple-400">Skills Sandbox</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              ref={constraintsRef}
              className="relative h-96 bg-gray-800/30 rounded-lg border-2 border-dashed border-gray-600 overflow-hidden"
              style={{ cursor: "none" }}
            >
              {skillPositions.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  whileDrag={{ scale: 1.1, zIndex: 10 }}
                  whileHover={{ scale: 1.05 }}
                  onDragEnd={(_, info) => handleDragEnd(index, info)}
                  animate={{
                    x: skill.x,
                    y: skill.y,
                    rotate: isShaking ? [0, -2, 2, -2, 2, 0] : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`absolute px-3 py-1 rounded-full text-white text-sm font-medium cursor-grab active:cursor-grabbing ${skill.color} shadow-lg`}
                  data-interactive
                  style={{
                    userSelect: "none",
                  }}
                >
                  {skill.name}
                </motion.div>
              ))}

              {/* Floating instructions */}
              <motion.div
                className="absolute top-4 left-4 text-gray-400 text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Drag me around! 🎯
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>

        {/* Traditional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">All Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Angular",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Docker",
              "AWS",
              "Git/GitHub",
              "Jest",
              "Tailwind CSS",
              "Redux",
              "GraphQL",
              "REST APIs",
              "Microservices",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center text-gray-300 hover:border-purple-500/50 transition-all duration-300"
                data-interactive
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveSkillsPlayground
