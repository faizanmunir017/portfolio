export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  tagline: string;
  bio: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlight: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  current: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: "code" | "database" | "brain" | "server";
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}
