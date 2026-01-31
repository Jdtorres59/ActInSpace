import { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Programas",
  description: "Niveles de programa para detección y alertas de seguridad ambiental."
};

const plans = [
  {
    name: "Inicio",
    audience: "Región piloto",
    price: "Contáctanos",
    description: "Piloto de una región con soporte de analistas.",
    features: [
      "Cobertura de una región",
      "Feed de alertas + panel",
      "Reportes mensuales",
      "Acceso seguro"
    ]
  },
  {
    name: "Pro",
    audience: "Multirregión",
    price: "Personalizado",
    description: "Monitoreo multirregional con puntaje de riesgo.",
    features: [
      "Cobertura multirregional",
      "Alertas casi en tiempo real",
      "Integración API",
      "Soporte prioritario"
    ]
  },
  {
    name: "Gobierno",
    audience: "Escala nacional",
    price: "Personalizado",
    description: "Programas nacionales con controles de gobernanza.",
    features: [
      "SLAs + onboarding",
      "Reportes con cadena de custodia",
      "Acceso por roles",
      "Exportaciones seguras"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Programas"
        title="Programas para agencias de seguridad"
        subtitle="Niveles listos para compras públicas, con controles y soporte."
        align="left"
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-6 border ${
              index === 1
                ? "border-sky-400/40 bg-space-800/80 shadow-card"
                : "border-white/10 bg-space-800/70"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-earth-300">{plan.audience}</p>
            <h3 className="font-display text-2xl text-white mt-3">{plan.name}</h3>
            <p className="text-2xl text-white mt-3">{plan.price}</p>
            <p className="text-sm text-slate-200 mt-3">{plan.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-earth-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
                index === 1
                  ? "bg-sky-400 text-space-900"
                  : "border border-white/15 text-white"
              }`}
            >
              Solicitar propuesta
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 text-sm text-slate-200">
        {[
          "SLAs, onboarding y habilitación de analistas",
          "Controles de acceso seguro y logs de auditoría",
          "Reportes exportables para compras y supervisión"
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-space-800/80 p-5">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
