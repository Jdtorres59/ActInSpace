import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    title: "Detectar",
    description: "Identificar anomalías espectrales con base científica."
  },
  {
    title: "Priorizar",
    description: "Asignar riesgo y ordenar casos por impacto."
  },
  {
    title: "Verificar",
    description: "Apoyar la investigación con reportes auditables."
  }
];

export function Pillars() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {pillars.map((pillar, index) => (
        <ScrollReveal key={pillar.title} delay={index * 0.1}>
          <div className="glass rounded-2xl p-6 h-full">
            <h3 className="font-display text-xl mb-3 text-white">{pillar.title}</h3>
            <p className="text-slate-200">{pillar.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
