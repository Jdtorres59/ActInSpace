import { ScrollReveal } from "@/components/ScrollReveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={[
        align === "center" ? "text-center mx-auto" : "text-left",
        "max-w-3xl relative",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0 spectral-bands pointer-events-none" aria-hidden="true" />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-earth-300">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl mt-3 text-white">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-slate-200 mt-4 leading-relaxed">{subtitle}</p>
        ) : null}
      </div>
    </ScrollReveal>
  );
}
