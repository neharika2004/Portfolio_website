"use client"

import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Altacee",
    location: "Remote",
    period: "Jan 2025 – July 2025",
    description: [
      "Designed and optimized scalable frontend architecture.",
      "Built reusable UI components with high performance and rendering efficiency.",
      "Ensured fully responsive design and cross-browser compatibility.",
    ],
    tech: ["React", "Material-UI", "Git"],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "Ongoing",
    description: [
      "Created a responsive static website for a Karate Academy using React.js.",
      "Implemented SEO-friendly features and optimized performance.",
      "Smooth navigation, lightweight design, deployed on Vercel.",
    ],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    link: "https://shotokankarate.in",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            Building scalable applications and leading frontend development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.company} • {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-accent hover:underline"
                        >
                          View
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item) => (
                    <li key={item} className="text-foreground/80 flex gap-3 text-sm sm:text-base">
                      <span className="text-accent mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
