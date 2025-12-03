"use client"

import { Code2, Database, Wrench, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python","TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Zap,
    skills: ["React.js","Next.js" ,"Node.js", "Express.js", "Material UI", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git & GitHub", "Postman", "REST APIs", "JWT/OAuth", "Twilio", "PowerBI", "Linux"],
  },
]

const otherSkills = [
  "Data Structures & Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Cloud Fundamentals",
  "Cybersecurity Basics",
  "Software Development Life Cycle",
  "System Design",
  "Problem Solving",
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies and skills built through hands-on development
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-accent/20 hover:text-accent transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Other Skills */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50">
            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-background border border-border/50 text-foreground text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
