import type {
  ExperienceItem,
  EducationItem,
  Skill,
  Project,
  BlogPost,
  Testimonial,
  PricingTier,
  ServiceItem,
} from "../types";

export const personal = {
  name: "David NIYITEGEKA",
  titles: ["Front-End Developer", "Software Engineer", "React & TypeScript Expert", "Mobile Developer"],
  tagline: "Software Engineer with 5+ years building scalable web & mobile apps for healthcare, government, and international organizations.",
  phone: "+250 783 165 132",
  email: "n.niyitegekadavid@gmail.com",
  location: "Kigali, Rwanda",
  availability: "Available for Freelance",
  cvUrl: "/cv.pdf",
  photo: "/profile.jpg",       /* replace with your actual photo path */
  coverPhoto: "/images/banner.avif",
  social: {
    github:   "https://github.com/dniyitegeka",
    linkedin: "https://linkedin.com",
    twitter:  "https://twitter.com",
    whatsapp: "https://wa.me/250783165132",
  },
};

export const about = {
  bio: "Software Engineer with 5+ years of experience building scalable web and mobile applications for healthcare, government, and international organizations. Specialized in React, TypeScript, and Node.js with strong experience in REST API integration, cloud-connected platforms, and Agile development methodologies.",
  details: [
    { label: "Name",       value: "David NIYITEGEKA" },
    { label: "Location",   value: "Kigali, Rwanda" },
    { label: "Email",      value: "n.niyitegekadavid@gmail.com" },
    { label: "Phone",      value: "+250 783 165 132" },
    { label: "GitHub",     value: "github.com/dniyitegeka" },
    { label: "Languages",  value: "English, Kinyarwanda" },
    { label: "Experience", value: "5+ Years" },
    { label: "Status",     value: "Open to opportunities" },
  ],
};

// icon field maps to a Lucide icon name resolved in AboutSection
export const services: ServiceItem[] = [
  {
    icon: "monitor",
    title: "Front-End Development",
    description: "Responsive, accessible UIs with React, Next.js, and Tailwind CSS — pixel-perfect across all devices.",
  },
  {
    icon: "server",
    title: "Back-End Development",
    description: "Robust REST APIs and services with Node.js, Express, and scalable database architectures.",
  },
  {
    icon: "database",
    title: "Database Design",
    description: "Efficient schemas and queries with PostgreSQL, MongoDB, and Redis for high-performance data layers.",
  },
  {
    icon: "rocket",
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, Docker containers, and cloud platforms like Vercel and AWS.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Part Time",
    description: "Ideal for startups or teams needing a reliable developer a few days a week without full commitment.",
    price: "$800",
    unit: "/month",
    features: [
      "20 hours per week",
      "Flexible schedule",
      "Weekly progress reports",
      "Code reviews included",
      "Slack & email support",
    ],
    highlighted: false,
  },
  {
    name: "Full Time",
    description: "Best for growing companies that need a dedicated developer fully integrated into their team.",
    price: "$2,500",
    unit: "/month",
    features: [
      "40 hours per week",
      "Daily standups",
      "Full task priority",
      "Code reviews & QA",
      "Sprint planning",
      "Direct communication",
    ],
    highlighted: true,
  },
  {
    name: "Project",
    description: "Perfect for businesses with a well-defined scope looking for end-to-end delivery on a fixed budget.",
    price: "From $500",
    unit: "",
    features: [
      "Fixed scope & timeline",
      "Milestone-based payments",
      "Full project delivery",
      "Post-launch support",
      "Source code ownership",
    ],
    highlighted: false,
  },
  {
    name: "Custom",
    description: "For unique needs that don't fit a standard package — let's design something that works for both of us.",
    price: "Let's Talk",
    unit: "",
    features: [
      "Tailored to your needs",
      "Non-disclosure agreement",
      "Flexible engagement",
      "Dedicated support",
      "Custom billing terms",
    ],
    highlighted: false,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "World Health Organization (WHO)",
    period: "Jun 2022 – Present",
    description: "Built the MPOX Monitoring & Analytics Tool with React & TypeScript for real-time outbreak tracking across Africa. Integrated RESTful APIs and delivered interactive data dashboards using ApexCharts for global health teams.",
  },
  {
    role: "Mobile Developer (Remote)",
    company: "Devinterface — Italy",
    period: "Aug 2023 – Aug 2024",
    description: "Developed and shipped mobile applications (Move Payment, Everylog, Dravet Daily) with secure auth, push notifications, and REST API integration. Collaborated with international Agile teams for production-ready releases.",
  },
  {
    role: "Front-End Developer (Remote)",
    company: "Palladium International — Washington D.C., USA",
    period: "Mar 2022 – Aug 2024",
    description: "Built responsive dashboards and reporting interfaces for the National Child Development Agency Partner Reporting System. Translated complex stakeholder requirements into scalable technical solutions.",
  },
  {
    role: "Software Developer",
    company: "Ministry of Gender & Family Promotion (MIGEPROF)",
    period: "Mar 2021 – Mar 2022",
    description: "Developed a mobile e-Book platform for national gender equality publications and integrated DHIS2 data systems to support government analytics and multi-system reporting.",
  },
  {
    role: "Software Developer",
    company: "COSEKE Rwanda Ltd",
    period: "Jan 2021 – Sep 2021",
    description: "Contributed to e-Meet, an enterprise digital platform for board meetings, document sharing, and attendance management deployed across East Africa.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "BSc. with Honours in Software Engineering",
    school: "University of Rwanda, College of Science and Technology",
    period: "Sep 2016 – Jul 2021",
    description: "Graduated with honors. Specialized in software engineering, distributed systems, and cloud-connected application development.",
  },
  {
    degree: "Mathematics-Physics & Computer Science",
    school: "EFOTEC-KANOMBE High School",
    period: "2013 – 2015",
    description: "Strong foundations in mathematics, physics, and introductory computer science.",
  },
];

export const skills = {
  technical: [
    { name: "React / TypeScript",     level: 95 },
    { name: "TailwindCSS",            level: 90 },
    { name: "Node.js / Express",      level: 85 },
    { name: "RESTful API Integration",level: 90 },
    { name: "Firebase / AWS",         level: 75 },
    { name: "Android / Mobile Dev",   level: 92 },
  ] satisfies Skill[],
  knowledge: [
    "Data Visualization (ApexCharts)",
    "DHIS2 Integration",
    "Agile / Scrum",
    "CI/CD Concepts",
    "Authentication Systems",
    "Microservices Architecture",
    "Cloud Platforms (AWS, Firebase)",
    "Git & Version Control",
    "Performance Optimization",
  ],
};

export const portfolio: Project[] = [
  {
    title: "E-Commerce Platform",
    category: "fullstack",
    description: "Full-stack store with Next.js, Stripe payments, and a Postgres backend.",
    tech: ["Next.js", "TypeScript", "Stripe", "Postgres"],
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    category: "fullstack",
    description: "WebSocket-powered chat with rooms, auth, and message history.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "frontend",
    description: "Interactive data visualization dashboard with filterable charts.",
    tech: ["React", "TypeScript", "Recharts", "REST API"],
    link: "#",
  },
  {
    title: "Task Management API",
    category: "backend",
    description: "RESTful API with JWT auth, role-based access control, and rate limiting.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
    link: "#",
  },
  {
    title: "Portfolio CMS",
    category: "fullstack",
    description: "Headless CMS with a custom admin panel and dynamic content rendering.",
    tech: ["Next.js", "Sanity.io", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather PWA",
    category: "frontend",
    description: "Progressive web app with offline support and location-based forecasts.",
    tech: ["React", "Service Workers", "OpenWeather API"],
    link: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable APIs with Node.js and PostgreSQL",
    category: "Backend",
    date: "May 2025",
    excerpt: "A deep dive into designing RESTful APIs that scale — connection pooling, query optimization, and caching patterns.",
    readTime: "6 min read",
  },
  {
    title: "React 19: What's New and Why It Matters",
    category: "Frontend",
    date: "Apr 2025",
    excerpt: "Exploring the new compiler, server components, and actions in React 19 with practical examples.",
    readTime: "8 min read",
  },
  {
    title: "Tailwind CSS v4: A CSS-First Revolution",
    category: "CSS",
    date: "Mar 2025",
    excerpt: "How Tailwind v4's CSS-first configuration and new engine change the way we write utility-first styles.",
    readTime: "5 min read",
  },
  {
    title: "From Monolith to Microservices: Lessons Learned",
    category: "Architecture",
    date: "Feb 2025",
    excerpt: "Practical takeaways from migrating a production monolith to microservices — what worked and what didn't.",
    readTime: "10 min read",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "CTO, TechStartup",
    quote: "David delivered a production-ready platform in record time. His code quality and attention to detail are exceptional.",
  },
  {
    name: "James M.",
    role: "Product Manager, Digital Co.",
    quote: "Working with David was seamless. He asks the right questions, communicates clearly, and ships on time.",
  },
  {
    name: "Aline U.",
    role: "Founder, EduTech Rwanda",
    quote: "The application David built has helped thousands of students. Professional, reliable, and highly skilled.",
  },
];

export const funFacts = [
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "50k+", label: "Lines of Code" },
  { value: "5+",  label: "Years of Experience" },
];
