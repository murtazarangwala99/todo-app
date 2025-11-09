const userData = {
  name: "Chai lover",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with code and creativity",
  location: "San Francisco, CA",
  email: "chai@chaicode.com",
  phone: "+1 (555) 123-4567",
  website: "https://alexrodriguez.dev",
  resumeUrl: "/resume.pdf",
  avatar: "https://avatars.githubusercontent.com/u/11613311?v=4",

  // Availability
  availableForHire: true,
  availabilityText: "Available for freelance projects",

  // Bio
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",

  // Social Links
  social: {
    github: "https://github.com/hiteshchoudhary",
    linkedin: "https://linkedin.com/in/hiteshchoudhary",
    twitter: "https://twitter.com/hiteshdotcom",
    website: "https://hitesh.ai",
  },

  // Experience Stats
  stats: {
    experience: "5+",
    projects: "50+",
    clients: "25+",
    coffees: "1000+",
  },
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
    image: "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/hiteshchoudhary",
    featured: true,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
    image: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/hiteshchoudhary",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
    image: "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/hiteshchoudhary",
    featured: false,
    category: "Frontend",
  },
  {
    id: 4,
    title: "AI Chat Bot",
    description:
      "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
    image: "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
    liveUrl: "https://ai-chatbot-demo.com",
    githubUrl: "https://github.com/hiteshchoudhary",
    featured: true,
    category: "AI/ML",
  },
];

const skills = {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "📘" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Vue.js", level: 85, icon: "💚" },
    { name: "JavaScript", level: 95, icon: "🟨" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "Express.js", level: 88, icon: "🚀" },
    { name: "FastAPI", level: 82, icon: "⚡" },
    { name: "GraphQL", level: 80, icon: "🔗" },
    { name: "REST APIs", level: 92, icon: "🌐" },
  ],
  database: [
    { name: "PostgreSQL", level: 88, icon: "🐘" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "Redis", level: 80, icon: "🔴" },
    { name: "Prisma", level: 85, icon: "⚡" },
    { name: "Supabase", level: 82, icon: "🚀" },
    { name: "Firebase", level: 78, icon: "🔥" },
  ],
  tools: [
    { name: "Git", level: 95, icon: "📝" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "AWS", level: 80, icon: "☁️" },
    { name: "Vercel", level: 90, icon: "▲" },
    { name: "Figma", level: 75, icon: "🎨" },
    { name: "VS Code", level: 98, icon: "💙" },
  ],
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Startup Founder",
    content:
      "Working with Alex was a game-changer for our startup. He built our MVP in record time without compromising on quality.",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Design Director",
    content:
      "Alex has an incredible ability to bring designs to life. His code is clean, efficient, and perfectly matches our design vision.",
    avatar: "👩‍🎨",
    rating: 5,
  },
];
