import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "violet";
  className?: string;
}

const variantStyles = {
  default: "glass text-muted border-glass-border",
  accent: "bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20",
  violet: "bg-electric-violet/10 text-electric-violet border-electric-violet/20",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
