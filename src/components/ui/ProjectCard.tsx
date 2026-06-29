import { ArrowUpRight, Sparkles } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "./Badge";
import { GlassCard } from "./GlassCard";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <GlassCard
      glowOnHover={index % 2 === 0 ? "cyan" : "violet"}
      className="group relative flex h-full flex-col gap-4"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-electric-violet/20">
          <Sparkles className="h-5 w-5 text-cyber-cyan" />
        </div>
        <div className="text-muted transition-colors group-hover:text-cyber-cyan">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <article className="flex flex-1 flex-col gap-3">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyber-cyan">
          {project.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="text-sm font-medium text-electric-violet">
          {project.highlight}
        </p>
      </article>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="default">
            {tech}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
}
