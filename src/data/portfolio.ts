import type {
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "M. Faizan Munir",
  title: "Full-Stack Software Engineer (AI, Python, Web Dev)",
  location: "Lahore, Pakistan",
  email: "faizanmunir017@gmail.com",
  github: "github.com/faizanmunir017",
  linkedin: "linkedin.com/in/faizan-munir-529693284",
  tagline: "Building intelligent systems that think, scale, and deliver.",
  bio: "Full-stack engineer specializing in AI-driven and LLM-powered applications. I architect end-to-end intelligent systems—from RAG pipelines and vector search to turn complex data into actionable insights at production scale.",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/faizanmunir017",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-faizan-munir-529693284/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:faizanmunir017@gmail.com",
    icon: "mail",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const experiences: Experience[] = [
  {
    id: "mergestack",
    company: "MergeStack",
    role: "Associate Software Engineer",
    period: "Oct 2024 — May 2024",
    location: "Lahore, Pakistan",
    description:
      "Building production-grade AI full-stack applications with React and FastAPI, specializing in RAG pipelines and intelligent document processing.",
    achievements: [
      "Delivered 4+ AI full-stack applications using React and FastAPI",
      "Made use of RAG pipelines with Pinecone, accelerating retrieval by 70% and reducing manual review time",
      "Architected scalable vector search solutions for enterprise clients",
      "Implemented end-to-end LLM integration workflows from prototype to production",
    ],
    current: true,
  },
  {
    id: "a2k",
    company: "A2K Solutions",
    role: "Python Intern",
    period: "Oct 2023 — Dec 2023",
    location: "Lahore, Pakistan",
    description:
      "Built a strong foundation in Python through hands-on coursework and practical programming exercises, covering core programming concepts and object-oriented programming.",
    achievements: [
      "Completed Harvard's CS50's Introduction to Programming with Python",
      "Learned Python fundamentals including data types, functions, loops, tuples, dictionaries, file handling, and classes",
      "Applied object-oriented programming concepts by building a final Python project",
      "Strengthened problem-solving and debugging skills through practical coding assignments",
    ],
    current: false,
  },
];

export const projects: Project[] = [
  {
    id: "gib-foundation",
    title: "GIB Foundation",
    description:
      "Regulatory compliance platform leveraging LLMs, FastAPI, React, and Pinecone RAG pipelines to automate complex compliance workflows.",
    technologies: ["React", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    highlight: "Cut compliance review times from months to 10 minutes",
    featured: true,
  },
  {
    id: "techtrials",
    title: "TechTrials Health Care App",
    description:
      "Full-stack healthcare platform featuring AI voice assistance and diagnosis, with payment processing and patient management for Brazil",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
    ],
    highlight: "Reduced Doctor's time by 30-50%, with voice assistance, diagnosis, patient speech saved in SOAP notes, proper AI-powered Health bot for Brazil ",
    featured: true,
  },
  {
    id: "docusearch",
    title: "DocuSearch AI",
    description:
      "AI-powered RAG chatbot enabling business owners to query financial statements through natural language, with semantic search over document corpora.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "Pinecone",
    ],
    highlight: "Reduced manual review time by 70%",
    featured: true,
  },
  {
    id: "autograder",
    title: "HandWritten AutoGrader",
    description:
      "Intelligent grading system using OCR and NLP to automate handwritten assignment evaluation across web and mobile platforms.",
    technologies: ["Python", "Django", "Kotlin", "OCR", "NLP"],
    highlight: "Reduced manual grading effort by 80%",
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Kotlin",
      "SQL",
      "HTML/CSS",
    ],
    icon: "code",
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Pinecone",
      "Redis",
      "SQLite",
    ],
    icon: "database",
  },
  {
    id: "ai-ml",
    title: "AI / Python / Web Dev",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Pipelines",
      "Vector Search",
      "OCR / NLP",
      "Hugging Face",
    ],
    icon: "brain",
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "FastAPI",
      "React / Next.js",
      "Stripe",
    ],
    icon: "server",
  },
];

export const stats = [
  { label: "AI Apps Delivered", value: "4+" },
  { label: "RAG Speed Boost", value: "40%" },
  { label: "Modules Built", value: "6+" },
  { label: "Years Experience", value: "2+" },
];
