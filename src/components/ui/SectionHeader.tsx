interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`mb-12 flex flex-col gap-3 ${alignment}`}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-cyan">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base text-muted md:text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-2 h-px w-16 bg-gradient-to-r from-cyber-cyan to-electric-violet ${align === "center" ? "mx-auto" : ""}`}
      />
    </header>
  );
}
