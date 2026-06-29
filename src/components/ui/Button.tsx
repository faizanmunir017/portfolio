import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyber-cyan-dim to-electric-violet-dim text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
  secondary:
    "glass text-white hover:bg-white/10 hover:border-cyber-cyan/30",
  ghost: "text-muted hover:text-white hover:bg-white/5",
  outline:
    "border border-glass-border text-white hover:border-cyber-cyan/50 hover:text-cyber-cyan",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
