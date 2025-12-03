"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "ResidentSync",
    subtitle: "Apartment Management System",
    description:
      "User panel for guest management & maintenance payments. Admin panel for security operations & resident safety. Built end-to-end with intuitive UI and robust functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/neharika2004https://github.com/neharika2004/ResidentSync",
    featured: true,
  },
  {
    title: "Geotech Solar Panel",
    subtitle: "E-commerce Platform",
    description:
      "MERN-based platform with authentication, product management, payments, and inventory control. Created an admin dashboard for orders, inventory & customer support.",
    tech: ["React", "MongoDB", "Node.js", "Stripe", "Material-UI"],
    github: "https://github.com/Neural-Ninjas5/SAP_HACK",
  },
  {
    title: "Thoughts..!",
    subtitle: "Blogging Platform",
    description: "Built with EJS, Node.js, MongoDB. Secure admin access, dynamic blog posts, clean UI.",
    tech: ["Node.js", "EJS", "MongoDB", "Express"],
    github: "https://github.com/neharika2004/BlogWebsite",
  },
  {
    title: "News Website",
    subtitle: "Dynamic News Portal",
    description: "Dynamic news fetching via APIs. Search & category filters. Fully responsive with strong UI/UX.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/neharika2004/News-Website",
  },
]

const miniProjects = [
  { name: "Age Calculator", link: "https://neharika2004.github.io/Age-Calculator/" },
  { name: "Password Generator", link: "https://neharika2004.github.io/password-Generator/" },
  { name: "Headphones Landing Page", link: "https://neharika2004.github.io/Beast-Headphones/" },
  { name: "Healthcare Landing Page", link: "https://neharika2004.github.io/Healthcare-Website/" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Showcase of my best work with modern technologies and scalable architectures
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div
                className={`group h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                  project.featured
                    ? "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30 hover:border-accent/60 md:col-span-2 hover:shadow-lg"
                    : "bg-card border-border/50 hover:border-primary/30 p-8 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {project.featured ? (
                  <div className="p-8 sm:p-10">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h3>
                    <p className="text-accent font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-foreground/80 mb-6 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline font-semibold group"
                    >
                      View on GitHub
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-accent font-semibold text-sm mb-4">{project.subtitle}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline font-semibold text-sm group"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h3 className="text-2xl font-bold mb-6">Mini Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {miniProjects.map((mini) => (
              <a
                key={mini.name}
                href={mini.link}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-center"
              >
                <span className="text-foreground font-semibold group-hover:text-accent transition-colors">
                  {mini.name}
                </span>
                <ExternalLink className="w-4 h-4 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
