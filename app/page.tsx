import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import dynamic from "next/dynamic"

// Lazy load sections to reduce initial bundle size
const About = dynamic(() => import("@/components/sections/about"))
const Experience = dynamic(() => import("@/components/sections/experience"))
const PerformanceMetrics = dynamic(() => import("@/components/sections/performance-metrics"))
const TechnicalShowcase = dynamic(() => import("@/components/sections/technical-showcase"))
const Projects = dynamic(() => import("@/components/sections/projects"))
const Skills = dynamic(() => import("@/components/sections/skills"))
const Achievements = dynamic(() => import("@/components/sections/achievements"))
const Contact = dynamic(() => import("@/components/sections/contact"))

// Lazy load heavy interactive elements
const FloatingElements = dynamic(() => import("@/components/floating-elements"), { ssr: false })

export const metadata: Metadata = {
  title: "Vagish Maurya - Software Development Engineer I (SDE-I)",
  description:
    "Software Development Engineer I (SDE-I) specializing in scalable web applications, AI-powered solutions, and modern frontend architectures. Currently at Calance Software Pvt. Ltd.",
  keywords:
    "Software Development Engineer, SDE-I, Full Stack Developer, React, Next.js, Angular, Node.js, TypeScript, AI",
  authors: [{ name: "Vagish Maurya" }],
  openGraph: {
    title: "Vagish Maurya - Software Development Engineer I (SDE-I)",
    description: "Software Development Engineer I (SDE-I) specializing in scalable web applications and AI solutions",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden page-transition">
      <CustomCursor />
      <FloatingElements />
      <Navigation />
      <Hero />
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="performance-metrics"><PerformanceMetrics /></section>
      <section id="technical-showcase"><TechnicalShowcase /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}
