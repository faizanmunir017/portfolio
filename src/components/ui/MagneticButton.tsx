"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

function useMagneticMotion(strength: number, disabled: boolean) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  onClick,
  href,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagneticMotion(strength, disabled);

  const baseClassName = `inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-shadow duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${className}`;

  if (href) {
    return (
      <a href={href} className="inline-block">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ x: springX, y: springY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={disabled ? undefined : { scale: 1.05 }}
          whileTap={disabled ? undefined : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={baseClassName}
        >
          {children}
        </motion.div>
      </a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={baseClassName}
    >
      {children}
    </motion.button>
  );
}
