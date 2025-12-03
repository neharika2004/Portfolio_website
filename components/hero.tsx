"use client"

import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

const downloadResume = () => {
  const link = document.createElement("a")
  link.href = "/NeharikaGond_Resume.pdf"
  link.download = "Neharika_Gond_Resume.pdf"
  link.click()
}

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="text-sm font-medium text-primary">Full Stack Developer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Neharika Gond
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed text-pretty">
            I'm a passionate full-stack developer skilled in building scalable, intuitive, and user-centric
            applications. I enjoy solving real-world problems through modern technologies, clean UI, and optimized
            backend systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={handleContactClick}
              className="px-8 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={downloadResume}
              className="px-8 py-3 rounded-lg bg-primary/10 text-primary border border-primary/30 font-semibold hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right - Bitmoji/Avatar */}
        <div className="hidden md:flex justify-center animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
            <img
              src="/bitmoji.png"
              alt="Neharika Bitmoji Avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = "none"
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
