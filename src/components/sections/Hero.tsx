"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/AnimatedText";
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
      {/* Ambient background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyber-cyan/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-electric-violet/10 blur-[120px]"
        />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
           
          </motion.div>

          <AnimatedText
            text={personalInfo.name}
            as="h1"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="gradient-text text-xl font-medium sm:text-2xl"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-cyber-cyan" />
            {personalInfo.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-colors hover:border-cyber-cyan/30 hover:text-cyber-cyan"
                  aria-label={link.label}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyber-cyan via-electric-violet to-cyber-cyan opacity-75 blur-sm"
            />
            <div className="gradient-border relative overflow-hidden rounded-3xl">
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl bg-obsidian-card sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/Cropped_Me.jpg"
                  alt={`${personalInfo.name} - Profile`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 rounded-xl glass-strong px-4 py-2 text-xs font-mono text-cyber-cyan"
            >
              AI / Python / Web Dev
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 rounded-xl glass-strong px-4 py-2 text-xs font-mono text-electric-violet"
            >
              Full-Stack
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-cyber-cyan"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
