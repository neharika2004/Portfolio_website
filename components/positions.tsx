"use client"

import { Award, Users, Zap } from "lucide-react"

const positions = [
  {
    title: "Web Development Lead",
    organization: "Robotics Club",
    icon: Zap,
  },
  {
    title: "Finance Lead",
    organization: "Cultural Club",
    description: "Managed budgeting, sponsorships & large-scale events",
    icon: Users,
  },
  {
    title: "Management Team",
    organization: "Linux Club",
    icon: Users,
  },
]

const achievements = [
  "SAP Hackathon 2024: Top 20 out of 1000+ teams",
  "Smart India Hackathon Participant",
  "Strong analytical & problem-solving skills",
  "Experience designing scalable MERN applications",
  "Expertise optimizing user workflows",
  "Leadership, teamwork & organizational experience",
]

export default function Positions() {
  return (
    <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Leadership & Achievements</h2>
          <p className="text-muted-foreground text-lg">
            Positions, recognitions, and key achievements in my career journey
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {positions.map((pos, index) => {
            const Icon = pos.icon
            return (
              <div
                key={pos.organization}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
                  <div className="p-3 w-fit rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pos.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{pos.organization}</p>
                  {pos.description && <p className="text-foreground/70 text-sm">{pos.description}</p>}
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex gap-3">
                  <span className="text-accent text-lg">✓</span>
                  <span className="text-foreground/80">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
