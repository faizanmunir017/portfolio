"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: "cyan" | "violet" | "none";
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glowOnHover = "cyan",
}: GlassCardProps) {
  const glowStyles = {
    cyan: "hover:border-cyber-cyan/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
    violet: "hover:border-electric-violet/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={
        hover
          ? {
              y: -4,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      style={{ transformPerspective: 800 }}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${hover ? glowStyles[glowOnHover] : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
