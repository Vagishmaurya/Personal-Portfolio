import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

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
    url: "https://vagishmaurya.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vagish Maurya - Software Development Engineer I (SDE-I)",
    description: "Software Development Engineer I (SDE-I) specializing in scalable web applications and AI solutions",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans dark bg-navy-950 text-slate-100 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
