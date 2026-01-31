import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blurDataURL } from "@/src/lib/blur";

export function RegionFocus() {
  return (
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
      <ScrollReveal>
        <div>
            <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Enfoque regional</p>
            <h3 className="font-display text-2xl md:text-3xl text-white mt-3">
              Diseñado para LATAM y África
            </h3>
            <p className="text-slate-200 mt-4 leading-relaxed">
              Alineamos la detección espectral con prioridades de seguridad y cumplimiento locales.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="px-4 py-2 rounded-full border border-white/10">Soporte en español y portugués</span>
              <span className="px-4 py-2 rounded-full border border-white/10">Líneas base regionales</span>
              <span className="px-4 py-2 rounded-full border border-white/10">Gobernanza de datos local</span>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden card-border bg-space-800/80">
            <div className="absolute inset-0 topo-lines opacity-30" />
            <div className="relative p-8">
              <Image
                src="/placeholders/region-map.svg"
                alt="Mapa de Latinoamérica y África"
                width={520}
                height={360}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="w-full h-auto opacity-90"
              />
              <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-200">
                <div className="rounded-2xl bg-space-900/60 border border-white/10 p-4">
                  <p className="text-slate-200">Cadencia de alertas</p>
                  <p className="text-white mt-1">Casi en tiempo real</p>
                </div>
                <div className="rounded-2xl bg-space-900/60 border border-white/10 p-4">
                  <p className="text-slate-200">Entrega de reportes</p>
                  <p className="text-white mt-1">Horas a días</p>
                </div>
              </div>
            </div>
          </div>
      </ScrollReveal>
    </div>
  );
}
