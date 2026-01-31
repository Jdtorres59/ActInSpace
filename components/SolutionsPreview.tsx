import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SignalPlaceholder } from "@/components/SignalPlaceholder";

const cards = [
  {
    title: "Señales de narcotráfico",
    description: "Alertas de anomalías espectrales.",
    image: "narcotics",
    href: "/solutions/narcotics-spectral-alerts"
  },
  {
    title: "Vigilancia de minería ilegal",
    description: "Indicadores de metano y mercurio.",
    image: "mining",
    href: "/solutions/illegal-mining-watch"
  },
  {
    title: "Vigilancia de deforestación",
    description: "Proxies de CO2 y biomasa.",
    image: "deforestation",
    href: "/solutions/illegal-deforestation-watch"
  },
  {
    title: "Monitoreo de infraestructura",
    description: "Señales en fronteras y corredores.",
    image: "infrastructure",
    href: "/solutions/critical-infrastructure-monitoring"
  }
];

export function SolutionsPreview() {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <ScrollReveal key={card.title} delay={index * 0.1}>
          <Link
            href={card.href}
            className="group relative h-full rounded-2xl overflow-hidden card-border bg-space-800/80 hover:-translate-y-1 transition"
          >
            <div className="relative h-40">
              <SignalPlaceholder
                variant={card.image as "narcotics" | "mining" | "deforestation" | "infrastructure"}
                alt={`${card.title} (referencia espectral)`}
                className="object-cover opacity-95 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 via-space-900/10 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg text-white mb-2">{card.title}</h3>
              <p className="text-sm text-slate-200">{card.description}</p>
              <span className="mt-4 inline-flex items-center text-earth-300 text-sm">
                Ver detección ->
              </span>
            </div>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
