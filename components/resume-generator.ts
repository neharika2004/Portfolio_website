// Generate structured resume PDF data
export function generateResumeData() {
  return {
    name: "Neharika Gond",
    headline: "Full Stack Developer | MERN Stack | Problem Solver",
    email: "nehags1198@gmail.com",
    linkedin: "linkedin.com/in/neharika-gond-167460274",
    github: "github.com/neharika20047",

    summary:
      "Passionate full-stack developer skilled in building scalable, intuitive, and user-centric applications. Experienced in solving real-world problems through modern technologies, clean UI, and optimized backend systems.",

    experience: [
      {
        title: "Frontend Developer Intern",
        company: "Altacee",
        type: "Remote",
        period: "Jan 2025 – July 2025",
        highlights: [
          "Designed and optimized scalable frontend architecture",
          "Built reusable UI components with high performance and rendering efficiency",
          "Ensured fully responsive design and cross-browser compatibility",
        ],
        tech: "React, Material-UI, Git",
      },
      {
        title: "Freelance Developer",
        company: "Self-employed",
        type: "Remote",
        highlights: [
          "Created responsive static website for Karate Academy using React.js",
          "Implemented SEO-friendly features and optimized performance",
          "Smooth navigation, lightweight design, deployed on Vercel",
        ],
        website: "shotokankarate.in",
      },
    ],

    skills: {
      languages: ["Java", "JavaScript", "Python (Basic)", "SQL", "HTML", "CSS"],
      frameworks: ["React.js", "Node.js", "Express.js", "Material UI", "TailwindCSS"],
      databases: ["MongoDB", "MySQL"],
      tools: ["Git", "GitHub", "Postman", "REST APIs", "JWT/OAuth", "Twilio", "PowerBI", "Linux"],
      coreSubjects: ["DSA", "DBMS", "Operating Systems", "Computer Networks"],
      other: ["Cloud Fundamentals", "Cybersecurity Basics", "Problem Solving"],
    },

    projects: [
      {
        name: "ResidentSync – Apartment Management System",
        tech: "MERN Stack",
        highlights: [
          "User panel for guest management & maintenance payments",
          "Admin panel for security operations & resident safety",
          "End-to-end implementation with intuitive UI and robust functionality",
        ],
      },
      {
        name: "Geotech Solar Panel E-commerce",
        tech: "MERN Stack",
        highlights: [
          "Platform with authentication, product management, payments, and inventory control",
          "Admin dashboard for orders, inventory & customer support",
          "Optimized for scalability & lifecycle performance",
        ],
      },
      {
        name: "Thoughts..! Blogging Platform",
        tech: "EJS, Node.js, MongoDB",
        highlights: ["Secure admin access", "Dynamic blog posts", "Clean, intuitive UI"],
      },
      {
        name: "News Website",
        tech: "HTML, CSS, JavaScript",
        highlights: ["Dynamic news fetching via APIs", "Search & category filters", "Fully responsive with strong UX"],
      },
    ],

    miniProjects: ["Age Calculator", "Password Generator", "Headphones Landing Page", "Healthcare Landing Page"],

    positions: [
      {
        title: "Web Development Lead",
        organization: "Robotics Club",
      },
      {
        title: "Finance Lead",
        organization: "Cultural Club",
        description: "Managed budgeting, sponsorships & large-scale events",
      },
      {
        title: "Management Team",
        organization: "Linux Club",
      },
    ],

    achievements: [
      "SAP Hackathon 2024: Top 20 out of 1000+ teams",
      "Smart India Hackathon participant",
      "Strong analytical & problem-solving skills",
      "Experience in designing scalable MERN applications",
      "Expertise in optimizing user workflows",
      "Leadership, teamwork & organizational experience from club roles",
    ],
  }
}
