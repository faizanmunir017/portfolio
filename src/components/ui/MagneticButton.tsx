import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const baseClassName = `inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClassName}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClassName}
    >
      {children}
    </button>
  );
}
