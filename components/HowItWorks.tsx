import { ScrollReveal } from "@/components/ScrollReveal";

const steps = [
  {
    title: "Ingesta",
    description: "Señales espectrales y series temporales desde fuentes satelitales."
  },
  {
    title: "Normalizar",
    description:
      "Control de calidad y líneas base regionales para comparaciones consistentes."
  },
  {
    title: "Detectar",
    description: "Anomalías y cambios ambientales para priorizar investigación."
  },
  {
    title: "Alertar",
    description: "Alertas, paneles y reportes listos para gobernanza."
  }
];

export function HowItWorks() {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <ScrollReveal key={step.title} delay={index * 0.1}>
          <div className="glass rounded-2xl p-6 h-full">
            <div className="text-earth-400 text-xs uppercase tracking-[0.2em]">Paso {index + 1}</div>
            <h3 className="font-display text-lg text-white mt-3 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-200">{step.description}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
