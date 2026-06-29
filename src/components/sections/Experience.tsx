import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building intelligent systems and delivering measurable impact across AI-driven product teams."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-cyber-cyan via-electric-violet to-cyber-cyan md:left-1/2 md:-translate-x-px" />

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
    <article
      className={`relative flex items-start gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
        <div
          className={`h-4 w-4 rounded-full border-2 ${
            experience.current
              ? "border-cyber-cyan bg-cyber-cyan shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              : "border-electric-violet bg-obsidian-card"
          }`}
        />
      </div>

      <div
        className={`ml-14 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
          isEven ? "md:pr-8 md:text-right" : "md:pl-8"
        }`}
      >
        <div className="glass rounded-2xl p-6 transition-colors duration-200 hover:border-cyber-cyan/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
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
        </div>
      </div>

      <div className="hidden w-[calc(50%-2rem)] md:block" />
    </article>
  );
}
