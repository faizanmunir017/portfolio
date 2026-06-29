"use client";

import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillGroup } from "@/components/ui/SkillGroup";

export function TechStack() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-violet/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Tech Stack"
          title="Tools & Technologies"
          description="A curated arsenal of languages, frameworks, and AI tools I use to build intelligent, production-grade applications."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillGroup key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
