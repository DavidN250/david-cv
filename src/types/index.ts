export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  slug: string;
  title: string;
  category: "frontend" | "mobile" | "fullstack";
  description: string;
  fullDescription: string;
  tech: string[];
  link: string;
  repoUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;   /* HTML string */
  tags: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PricingTier {
  name: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  highlighted: boolean;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}
