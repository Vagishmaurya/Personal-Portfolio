import type { Metadata } from "next"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import PerformanceMetrics from "@/components/sections/performance-metrics"
import TechnicalShowcase from "@/components/sections/technical-showcase"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import FloatingElements from "@/components/floating-elements"

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
      <About />
      <Experience />
      <PerformanceMetrics />
      <TechnicalShowcase />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
