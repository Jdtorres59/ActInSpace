import { Metadata } from "next";

import { SectionHeader } from "@/components/SectionHeader";
import { TeamSection } from "@/src/components/TeamSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Inteligencia espectral responsable para seguridad ambiental."
};

const values = [
  {
    title: "Rigor científico",
    description: "Métodos validados y líneas base transparentes."
  },
  {
    title: "Rendición de cuentas",
    description: "Trazabilidad y resultados reproducibles."
  },
  {
    title: "Privacidad y ética",
    description: "Uso legal con supervisión humana."
  },
  {
    title: "Alianza",
    description: "Construido con agencias y operadores."
  }
];

export default function AboutPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Nosotros"
        title="Protegemos ecosistemas y comunidades"
        subtitle="AstroNova entrega alertas tempranas con base científica para agencias ambientales y de seguridad."
        align="left"
      />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">{value.title}</h3>
            <p className="text-sm text-slate-200 mt-3">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-white/10 bg-space-800/80 p-8 text-sm text-slate-200">
        <p className="text-earth-300 text-xs uppercase tracking-[0.3em]">Uso responsable</p>
        <p className="mt-3">
          AstroNova genera alertas probabilísticas de riesgo y apoyo de inteligencia. Toda acción requiere autoridad
          legal, verificación y supervisión humana.
        </p>
      </div>

      <TeamSection />

      <div className="mt-20 rounded-3xl border border-white/10 bg-space-800/70 p-10 md:p-14">
        <h3 className="font-display text-2xl text-white">Carreras</h3>
        <p className="text-slate-200 mt-3 max-w-2xl">
          Únete a un equipo que crea sistemas éticos de detección para gobiernos y empresas.
        </p>
        <p className="text-sm text-earth-300 mt-4">Vacantes publicadas trimestralmente.</p>
      </div>
    </div>
  );
}
