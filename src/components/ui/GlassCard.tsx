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
    <div
      className={`glass rounded-2xl p-6 transition-colors duration-200 ${hover ? glowStyles[glowOnHover] : ""} ${className}`}
    >
      {children}
    </div>
  );
}
