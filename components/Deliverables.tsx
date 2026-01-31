import { ScrollReveal } from "@/components/ScrollReveal";
import { AlertIcon, ApiIcon, DashboardIcon, MapIcon } from "@/components/Icons";

const items = [
  {
    title: "Alertas",
    description: "Señales de riesgo probabilístico",
    icon: AlertIcon
  },
  {
    title: "Puntaje de riesgo",
    description: "Ranking por zona",
    icon: MapIcon
  },
  {
    title: "Paneles",
    description: "Vistas para analistas",
    icon: DashboardIcon
  },
  {
    title: "API y reportes",
    description: "Integraciones seguras",
    icon: ApiIcon
  }
];

export function Deliverables() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <ScrollReveal key={item.title} delay={index * 0.05}>
            <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6 h-full">
              <Icon className="h-6 w-6 text-earth-300" />
              <h3 className="font-display text-lg text-white mt-4">{item.title}</h3>
              <p className="text-sm text-slate-200 mt-2">{item.description}</p>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
