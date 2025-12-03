"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Positions from "@/components/positions"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Positions />
      <Contact />
      <Footer />
    </main>
  )
}
