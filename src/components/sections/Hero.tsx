import Image from "next/image";
import { MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Badge } from "@/components/ui/Badge";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyber-cyan/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-electric-violet/10 blur-[120px]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
        
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="gradient-text text-xl font-medium sm:text-2xl">
            {personalInfo.title}
          </p>

          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-cyber-cyan" />
            {personalInfo.location}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              href="#projects"
              className="bg-gradient-to-r from-cyber-cyan-dim to-electric-violet-dim text-white shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="glass border border-glass-border text-white hover:border-cyber-cyan/30"
            >
              Contact Me
            </MagneticButton>
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-colors hover:border-cyber-cyan/30 hover:text-cyber-cyan"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-cyan via-electric-violet to-cyber-cyan opacity-60 blur-sm" />
            <div className="gradient-border relative overflow-hidden rounded-3xl">
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl bg-obsidian-card sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/profile-placeholder.svg"
                  alt={`${personalInfo.name} - Profile`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
