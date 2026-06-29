"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database, Server } from "lucide-react";
import type { SkillCategory } from "@/types";
import { Badge } from "./Badge";
import { GlassCard } from "./GlassCard";

interface SkillGroupProps {
  category: SkillCategory;
  index: number;
}

const iconMap = {
  code: Code2,
  database: Database,
  brain: Brain,
  server: Server,
};

export function SkillGroup({ category, index }: SkillGroupProps) {
  const Icon = iconMap[category.icon];
  const glowColor = index % 2 === 0 ? "cyan" : "violet";

  return (
    <GlassCard glowOnHover={glowColor} className="h-full">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            glowColor === "cyan"
              ? "bg-cyber-cyan/10 text-cyber-cyan"
              : "bg-electric-violet/10 text-electric-violet"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: skillIndex * 0.05 }}
          >
            <Badge variant={glowColor === "cyan" ? "accent" : "violet"}>
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
