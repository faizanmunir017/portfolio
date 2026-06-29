"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building intelligent systems and delivering measurable impact across AI-driven product teams."
        />

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          {/* Timeline track */}
          <div className="absolute top-0 left-6 h-full w-px bg-glass-border md:left-1/2 md:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyber-cyan via-electric-violet to-cyber-cyan"
            />
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <TimelineNode key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineNodeProps {
  experience: (typeof experiences)[number];
  index: number;
}

function TimelineNode({ experience, index }: TimelineNodeProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex items-start gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Node dot */}
      <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.15 }}
          className="relative"
        >
          <div
            className={`h-4 w-4 rounded-full border-2 ${
              experience.current
                ? "border-cyber-cyan bg-cyber-cyan shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                : "border-electric-violet bg-obsidian-card"
            }`}
          />
          {experience.current && (
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-cyber-cyan"
            />
          )}
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={`ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
          isEven ? "md:pr-8 md:text-right" : "md:pl-8"
        }`}
      >
        <motion.div
          whileHover={{ y: -2 }}
          className="glass rounded-2xl p-6 transition-all duration-300 hover:border-cyber-cyan/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
        >
          <div
            className={`mb-3 flex items-center gap-2 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <Briefcase className="h-4 w-4 text-cyber-cyan" />
            {experience.current && <Badge variant="accent">Current</Badge>}
          </div>

          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
          <p className="mt-1 text-sm font-medium text-electric-violet">
            {experience.company}
          </p>
          <p className="mt-1 text-xs text-muted">
            {experience.period} · {experience.location}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {experience.description}
          </p>

          <ul
            className={`mt-4 flex flex-col gap-2 ${
              isEven ? "md:items-end" : ""
            }`}
          >
            {experience.achievements.map((achievement) => (
              <li
                key={achievement}
                className={`flex items-start gap-2 text-sm text-muted ${
                  isEven ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-cyan" />
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden w-[calc(50%-2rem)] md:block" />
    </motion.article>
  );
}
