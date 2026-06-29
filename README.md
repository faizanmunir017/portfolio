# M. Faizan Munir — Portfolio

A premium, dark-themed portfolio website for a Full-Stack Software Engineer specializing in AI-driven and LLM-powered applications. Built with Next.js, TypeScript, and Tailwind CSS.

**Live demo:** Run locally with `npm run dev` → [http://localhost:3000](http://localhost:3000)

---

## Features

- **Cinematic hero** — Split-screen layout with gradient profile frame and clear CTAs
- **Glassmorphism UI** — Frosted glass cards, subtle gradients, and neon accent colors (cyber cyan / electric violet)
- **Experience timeline** — Clean vertical timeline with alternating layout
- **Tech stack grid** — Skill categories with hover glow effects
- **Project showcase** — Featured AI/LLM projects with impact metrics and technology badges
- **Contact form** — Form with API route (`/api/contact`) and mailto fallback
- **Fully typed** — TypeScript interfaces for all portfolio data structures
- **SEO ready** — Semantic HTML, Open Graph metadata, and optimized fonts via `next/font`

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React + custom SVGs |
| Fonts | Inter, JetBrains Mono |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/faizanmunir017/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API endpoint
│   ├── globals.css            # Theme tokens and glass utilities
│   ├── icon.svg               # Browser favicon (FM monogram)
│   ├── apple-icon.svg         # Apple touch icon
│   ├── layout.tsx             # Root layout, fonts, metadata
│   └── page.tsx               # Home page composition
├── components/
│   ├── ui/                    # Reusable atomic components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── GlassCard.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── SkillGroup.tsx
│   │   └── SocialIcons.tsx
│   └── sections/              # Page section components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── TechStack.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/
│   └── portfolio.ts           # Static resume & portfolio data
└── types/
    └── index.ts               # TypeScript interfaces
public/
└── profile-placeholder.svg    # Placeholder profile image
```

---

## Customization

### Update portfolio content

Edit `src/data/portfolio.ts` to change personal info, experience, projects, skills, and stats. All sections read from this single data file.

### Replace profile photo

1. Add your image to `public/` (e.g. `public/profile.jpg`)
2. Update the `src` in `src/components/sections/Hero.tsx`:

```tsx
<Image
  src="/profile.jpg"
  alt={`${personalInfo.name} - Profile`}
  fill
  priority
  className="object-cover"
/>
```

### Wire up contact email

The contact form posts to `/api/contact`. To send real emails, integrate a provider in `src/app/api/contact/route.ts`:

- [Resend](https://resend.com)
- [SendGrid](https://sendgrid.com)
- [Nodemailer](https://nodemailer.com)

The form falls back to a `mailto:` link if the API request fails.

### Theme colors

Color tokens are defined in `src/app/globals.css` under `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `obsidian` | `#0B0F19` | Background |
| `cyber-cyan` | `#22D3EE` | Primary accent |
| `electric-violet` | `#A855F7` | Secondary accent |

---

## Deployment

This project deploys seamlessly on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments on push.

---


