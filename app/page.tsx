import Link from "next/link";

import { AnimatedBackdrop } from "@/components/AnimatedBackdrop";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionsPreview } from "@/components/SolutionsPreview";
import { InsightDemo } from "@/components/InsightDemo";
import { CtaBanner } from "@/components/CtaBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Deliverables } from "@/components/Deliverables";
import { SpectralHero } from "@/components/SpectralHero";
import { TeamSection } from "@/src/components/TeamSection";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <AnimatedBackdrop />
        <div className="container relative pt-24 pb-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-xs uppercase tracking-[0.35em] text-earth-300">
                  Inteligencia espectral
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-white mt-4 leading-tight">
                  Inteligencia espectral para seguridad ambiental.
                </h1>
                <p className="text-slate-200 mt-4 text-lg leading-relaxed max-w-xl">
                  Alertas tempranas para minería ilegal, deforestación y operaciones clandestinas — basadas en
                  espectrometría satelital (no fotos de alta resolución).
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-200">
                  <span className="chip">Señales atmosféricas</span>
                  <span className="chip">Detección de anomalías</span>
                  <span className="chip">Reportes auditables</span>
                </div>
                <p className="text-xs text-slate-200 mt-4">
                  AstroNova genera alertas probabilísticas de riesgo. Toda decisión requiere verificación y uso
                  conforme a la ley.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-sky-400 text-space-900 font-semibold"
                  >
                    Solicitar demo
                  </Link>
                  <Link
                    href="/solutions"
                    className="px-6 py-3 rounded-full border border-white/15 text-white"
                  >
                    Ver detecciones
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <SpectralHero />
            </ScrollReveal>
          </div>
          <div className="mt-10">
            <TrustBar />
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 spectral-bands pointer-events-none" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Resultados clave"
            title="Alertas, puntaje de riesgo y reportes auditables"
            subtitle="Señales que apoyan la investigación, no evidencia única."
            align="left"
          />
          <div className="mt-10">
            <Deliverables />
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <SectionHeader
          eyebrow="Detecciones"
          title="Señales de actividad ilícita a escala"
          subtitle="Indicadores espectrales para equipos de seguridad y cumplimiento ambiental."
          align="left"
        />
        <div className="mt-10">
          <SolutionsPreview />
        </div>
      </section>

      <section className="relative pb-20">
        <div className="absolute inset-0 signal-waves pointer-events-none" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Demo"
            title="Monitorea anomalías con claridad operativa"
            subtitle="Alertas, puntaje de riesgo y reportes en un solo panel."
            align="left"
          />
          <div className="mt-10">
            <InsightDemo />
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <CtaBanner />
      </section>

      <TeamSection className="container" />
    </div>
  );
}
