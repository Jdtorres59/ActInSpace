import { ScrollReveal } from "@/components/ScrollReveal";
import { ApiIcon, DashboardIcon, LeafIcon, OrbitIcon } from "@/components/Icons";

const steps = [
  {
    title: "Ingesta",
    description: "Señales espectrales",
    icon: OrbitIcon
  },
  {
    title: "Normalizar",
    description: "QA + líneas base",
    icon: LeafIcon
  },
  {
    title: "Detectar",
    description: "Señales anómalas",
    icon: DashboardIcon
  },
  {
    title: "Puntuar",
    description: "Ranking de riesgo",
    icon: ApiIcon
  },
  {
    title: "Alertar",
    description: "Reportes + API",
    icon: ApiIcon
  }
];

export function PipelineStepper() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <ScrollReveal key={step.title} delay={index * 0.05}>
            <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6 h-full">
              <Icon className="h-6 w-6 text-earth-300" />
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200 mt-4">{step.title}</p>
              <p className="text-sm text-slate-200 mt-2">{step.description}</p>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
