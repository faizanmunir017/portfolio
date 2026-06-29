"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.1 }}
      className={`mb-12 flex flex-col gap-3 ${alignment}`}
    >
      <motion.span
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan"
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-2xl text-base text-muted md:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`mt-2 h-px w-16 bg-gradient-to-r from-cyber-cyan to-electric-violet ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.header>
  );
}
