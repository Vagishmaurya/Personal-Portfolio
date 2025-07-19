"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [mounted, setMounted] = useState(false)
  const trailRef = useRef(0)

  useEffect(() => {
    setMounted(true)

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add trail effect
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: newPosition.x, y: newPosition.y, id: trailRef.current++ }].slice(-6)

        // Remove old trail points
        setTimeout(() => {
          setTrail((currentTrail) => currentTrail.slice(1))
        }, 150)

        return newTrail
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    // Function to update interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll("button, a, [data-interactive], input, textarea")
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    // Initial setup
    updateInteractiveElements()

    // Update on DOM changes
    const observer = new MutationObserver(updateInteractiveElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      observer.disconnect()
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed top-0 left-0 w-1 h-1 bg-orange-500 rounded-full pointer-events-none z-[9997]"
          initial={{
            x: point.x - 2,
            y: point.y - 2,
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            opacity: ((index + 1) / trail.length) * 0.6,
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          boxShadow: isHovering
            ? "0 0 20px rgba(255, 69, 0, 0.8), 0 0 40px rgba(255, 69, 0, 0.4)"
            : "0 0 10px rgba(255, 69, 0, 0.6)",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-orange-500/40 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.9 : isHovering ? 1.8 : 1,
          rotate: isHovering ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        style={{
          borderColor: isHovering ? "rgba(255, 69, 0, 0.8)" : "rgba(255, 69, 0, 0.4)",
        }}
      />

      {/* Magnetic field effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border border-orange-500/20 rounded-full pointer-events-none z-[9996]"
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          }}
        />
      )}
    </>
  )
}

export default CustomCursor
