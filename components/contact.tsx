"use client"

import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            I'm always interested in hearing about new opportunities and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:nehags1198@gmail.com" className="text-accent hover:underline text-sm">
                    nehags1198@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30">
              <h3 className="font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/neharika-gond-167460274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="font-semibold flex-1">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://github.com/neharika2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                >
                  <Github className="w-5 h-5 text-accent" />
                  <span className="font-semibold flex-1">GitHub</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <a
            href="mailto:nehags1198@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-accent to-primary text-background font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Send Me an Email
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
