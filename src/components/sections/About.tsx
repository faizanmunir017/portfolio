import { personalInfo, stats } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass group rounded-2xl p-6 text-center transition-colors duration-200 hover:border-cyber-cyan/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
            >
              <p className="gradient-text text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted transition-colors group-hover:text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
