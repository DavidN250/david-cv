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
  title: string;
  category: "fullstack" | "frontend" | "backend";
  description: string;
  tech: string[];
  link: string;
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
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
