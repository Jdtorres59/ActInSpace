import { caseStudies } from "@/data/caseStudies";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CaseStudies() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <ScrollReveal key={study.title} delay={index * 0.1}>
          <div className="glass rounded-2xl p-6 h-full">
            <p className="text-xs uppercase tracking-[0.2em] text-earth-300">{study.sector}</p>
            <h3 className="font-display text-lg text-white mt-3">{study.title}</h3>
            <p className="text-sm text-slate-200 mt-2">{study.summary}</p>
            <p className="text-sm text-earth-300 mt-4">{study.metric}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
