// Portfolio data - customize this file with your information

export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    subtitle: "Building beautiful, performant web experiences",
    bio: "I'm a passionate full-stack developer with a love for creating beautiful, functional web applications. I specialize in modern JavaScript frameworks and enjoy bringing designs to life with smooth animations and intuitive user experiences.",
    profileImage: "/profile.jpg", // Add your profile image to public folder
    resumeUrl: "/resume.pdf", // Add your resume to public folder
  },

  social: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      year: "2020 - 2024",
    },
  ],

  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      achievements: [
        "Led development of scalable web applications serving 100K+ users",
        "Implemented microservices architecture reducing latency by 40%",
        "Mentored junior developers and established coding best practices",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized application performance resulting in 50% faster load times",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      achievements: [
        "Developed client websites using modern JavaScript frameworks",
        "Created reusable component libraries",
        "Improved accessibility scores to WCAG AA standards",
      ],
    },
  ],

  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    Design: ["UI/UX", "Figma", "Adobe XD", "Prototyping"],
  },

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-blue-400 to-cyan-300",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
      tech: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-400 to-pink-300",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, custom reports, and export functionality.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-amber-400 to-orange-300",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description:
        "Modern social media platform with feed, stories, messaging, and content creation features.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      tech: ["React", "GraphQL", "MongoDB", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-emerald-400 to-teal-300",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credential: "AWS-CSA-12345",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023",
      credential: "GCP-PD-67890",
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2022",
      credential: "FEM-REACT-001",
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2021",
      credential: "FCC-FSWD-001",
    },
  ],
};
