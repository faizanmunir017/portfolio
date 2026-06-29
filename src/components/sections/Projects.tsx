"use client";

import { projects } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyber-cyan/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="AI-powered applications that deliver measurable impact—from regulatory compliance to healthcare automation."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
