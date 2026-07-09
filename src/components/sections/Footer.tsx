import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";

const socialIconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-mono text-lg font-bold">
              <span className="gradient-text">FM</span>
              <span className="text-white">.</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-muted transition-colors hover:text-cyber-cyan"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
