import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { solutions } from "@/data/solutions";
import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SignalPlaceholder } from "@/components/SignalPlaceholder";

const sectorImages: Record<string, "narcotics" | "mining" | "deforestation" | "infrastructure"> = {
  Narcotráfico: "narcotics",
  "Minería ilegal": "mining",
  "Deforestación ilegal": "deforestation",
  "Infraestructura crítica": "infrastructure"
};

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.summary
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) {
    notFound();
  }

  return (
    <div className="container py-20">
      <div className="flex items-center gap-3 text-sm text-slate-200">
        <Link href="/solutions" className="hover:text-white transition-colors">
          Detecciones
        </Link>
        <span>/</span>
        <span>{solution.title}</span>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start mt-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-earth-300">{solution.sector}</p>
          <h1 className="font-display text-4xl text-white mt-4">{solution.title}</h1>
          <p className="text-slate-200 mt-4 leading-relaxed">{solution.summary}</p>
          <p className="text-slate-200 mt-4 text-sm">
            Basado en espectrometría satelital y detección de anomalías. No se basa en imágenes de alta resolución.
          </p>
        </div>
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden card-border bg-space-800/80">
            <div className="absolute inset-0">
              <SignalPlaceholder
                variant={sectorImages[solution.sector]}
                alt={`${solution.sector} (referencia espectral)`}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-space-900/80 via-space-900/30 to-transparent" />
            </div>
            <div className="relative p-6 min-h-[240px] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Resultados clave</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                  {solution.outputs.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="stat-block">
                  <p className="text-slate-200">Cadencia de alertas</p>
                  <p className="text-white">Casi en tiempo real</p>
                </div>
                <div className="stat-block">
                  <p className="text-slate-200">Entrega</p>
                  <p className="text-white">API + reportes</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-16 grid gap-10">
        <SectionHeader
          eyebrow="Problema"
          title="Lo que las organizaciones deben resolver"
          subtitle={solution.problem}
          align="left"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Lo que detectamos</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {solution.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-earth-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Fuentes de datos</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {solution.dataSources.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Resultados</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {solution.outputs.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-earth-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Opciones de despliegue</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {solution.deployment.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-leaf-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Flujo de trabajo</h3>
            <ol className="mt-4 space-y-2 text-sm text-slate-200 list-decimal pl-5">
              {solution.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-space-800/80 p-6 text-sm text-slate-200">
        <p className="text-earth-300 text-xs uppercase tracking-[0.3em]">Cumplimiento y límites</p>
        <ul className="mt-3 space-y-2">
          {solution.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            AstroNova genera alertas de riesgo y apoyo de inteligencia; las decisiones requieren verificación legal.
          </li>
        </ul>
      </div>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-full bg-sky-400 text-space-900 font-semibold"
        >
          Hablar de este programa
        </Link>
        <Link
          href="/platform"
          className="px-5 py-2.5 rounded-full border border-white/15 text-white"
        >
          Explorar la plataforma
        </Link>
      </div>
    </div>
  );
}
