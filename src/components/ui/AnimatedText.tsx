"use client";

import { motion, type Variants } from "framer-motion";
import { createElement } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "words" | "chars";
}

const child: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  mode = "words",
}: AnimatedTextProps) {
  const items = mode === "words" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: mode === "words" ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  };

  return createElement(
    Tag,
    { className, "aria-label": text },
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline"
    >
      {items.map((item, index) => (
        <motion.span
          key={`${item}-${index}`}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: mode === "words" ? "pre" : "normal" }}
        >
          {item}
          {mode === "words" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
