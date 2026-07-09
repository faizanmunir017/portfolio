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
    id: "merge-stack",
    company: "MergeStack",
    role: "Software Engineer",
    period: "Oct 2024 — May 2026",
    location: "Lahore, Pakistan",
    description:
      "Developed AI-powered full-stack enterprise applications across healthcare, recruitment, regulatory compliance, and finance using modern web technologies and LLM-powered architectures.",
    achievements: [
      "Delivered 5+ production-grade AI applications using React, FastAPI, OpenAI, LangChain, Pinecone, and PostgreSQL",
      "Designed and deployed scalable RAG pipelines with Pinecone vector search, improving semantic retrieval performance by 40%",
      "Built intelligent workflow automation solutions—including AI voice recruitment, document intelligence, and compliance analysis—that reduced manual review effort by up to 60%",
      "Engineered end-to-end AI integrations and automation workflows that improved operational efficiency and significantly reduced client response times",
    ],
    current: false,
  },
  {
    id: "a2k-solutions",
    company: "A2K Solutions",
    role: "Python Intern",
    period: "Nov 2023 — Dec 2023",
    location: "Lahore, Pakistan",
    description:
      "Completed an intensive Python training program focused on writing clean, maintainable, and object-oriented software while strengthening problem-solving and debugging skills.",
    achievements: [
      "Successfully completed Harvard's CS50's Introduction to Programming with Python as part of the internship program",
      "Developed and debugged 40+ programming exercises and a comprehensive final project across nine structured problem sets",
      "Applied Python best practices, object-oriented programming, file handling, and modular software design throughout development",
      "Consistently followed PEP 8 coding standards to produce clean, maintainable, and production-quality Python code",
    ],
    current: false,
  },
];

export const projects: Project[] = [
  {
    id: "regulatory-compliance-analysis-platform",
    title: "Regulatory Compliance Analysis Platform",
    description:
"AI-powered regulatory compliance platform that analyzes company policies against international standards using LLMs and RAG pipelines.",
    technologies: ["React", "FastAPI", "Pinecone", "LangChain", "OpenAI"],
    highlight: "Reduced compliance review from months to ~10 minutes",
    featured: true,
  },
  {
    id: "ai-healthcare-assistant",
    title: "AI Healthcare Assistant",
    description:
"Full-stack healthcare platform providing AI consultations, voice support, OCR-powered diagnosis, SOAP note generation, and integrated patient management.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Stripe",
    ],
    highlight: "Reduced administrative workload by ~60% through AI automation",
    featured: true,
  },

  {
    id: "ai-recruitment-agent-platform",
    title: "AI Recruitment Agent Platform",
    description:
"AI recruitment platform with a custom CRM that automates WhatsApp outreach, voice interviews, candidate evaluation, and recruiter workflows.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "LangChain",
      "ElevenLabs",
      "WhatsApp Business API",
      "CRM",
    ],
    highlight:
      "Reduced manual candidate screening by ~70% and recruiter involvement during initial interviews by ~80%",
    featured: true,
  },
  {
    id: "document-intelligence-platform",
    title: "Document Intelligence Platform",
    description:
  "AI-powered document intelligence platform that allows businesses to chat with annual reports, financial statements, and PDFs using natural language.",
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
    id: "handwritten-assignment-grading-system",
    title: "Handwritten Assignment Grading System",
    description:
    "Cross-platform grading system that automatically evaluates handwritten assignments using OCR, NLP, and machine learning.",
    technologies: ["Python", "Django", "Kotlin", "OCR", "NLP"],
    highlight: "Reduced manual grading effort by 80%",
    featured: true,
  }
 
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "SQL",
      "HTML/CSS",
      "AI/ML"
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
    title: "AI / ML",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Pipelines",
      "Vector Search",
      "LangSmith",
      "Promp Engineering",
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
  { label: "AI Apps Delivered", value: "5+" },
  { label: "Modules Built", value: "6+" },
  { label: "Years Experience", value: "1.5+" },
];
