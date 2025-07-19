"use client"

import { motion } from "framer-motion"
import { Code, Database, Cpu, Zap, Globe, Rocket, Layers, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

const FloatingElements = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateWindowSize()
    window.addEventListener("resize", updateWindowSize)
    return () => window.removeEventListener("resize", updateWindowSize)
  }, [])

  const icons = [
    { Icon: Code, color: "text-orange-500", size: 20 },
    { Icon: Database, color: "text-orange-400", size: 24 },
    { Icon: Cpu, color: "text-red-500", size: 18 },
    { Icon: Zap, color: "text-orange-600", size: 22 },
    { Icon: Globe, color: "text-orange-300", size: 26 },
    { Icon: Rocket, color: "text-red-400", size: 20 },
    { Icon: Layers, color: "text-orange-500", size: 24 },
    { Icon: Terminal, color: "text-orange-400", size: 18 },
  ]

  if (windowSize.width === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map((iconData, index) => {
        const { Icon, color, size } = iconData
        return (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-20`}
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
            }}
            animate={{
              x: [Math.random() * windowSize.width, Math.random() * windowSize.width, Math.random() * windowSize.width],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
              ],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * 2,
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.6,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Icon size={size} />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Particle effects */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-30"
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          animate={{
            x: [Math.random() * windowSize.width, Math.random() * windowSize.width, Math.random() * windowSize.width],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
