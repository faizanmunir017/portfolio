"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInUp } from "@/components/ui/FadeInUp";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Engineering Intelligence at Scale"
          description={personalInfo.bio}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <FadeInUp key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass group rounded-2xl p-6 text-center transition-all duration-300 hover:border-cyber-cyan/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
              >
                <p className="gradient-text text-3xl font-bold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted transition-colors group-hover:text-white">
                  {stat.label}
                </p>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
