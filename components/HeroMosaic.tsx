import Image from "next/image";
import { blurDataURL } from "@/src/lib/blur";

export function HeroMosaic() {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-space-800/80 min-h-[360px]">
      <div className="absolute inset-0">
        <Image
          src="/WorldView.jpg"
          alt="Vista satelital de la Tierra"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 520px"
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
        />
        <div className="absolute inset-0 bg-space-900/35" />
        <div className="absolute inset-0 bg-gradient-to-tr from-space-900/90 via-space-900/55 to-transparent" />
        <div className="absolute inset-0 orbit-lines" />
        <div className="absolute inset-0 topo-lines opacity-30" />
        <div className="absolute inset-0 data-dots" />
      </div>
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Vista orbital</p>
          <h2 className="font-display text-2xl text-white mt-3">Señales espectrales con contexto</h2>
          <p className="text-sm text-slate-200 mt-2 max-w-sm">
            Señales atmosféricas y tendencias para apoyar la investigación.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-slate-200">
          <span className="chip">Espectrometría satelital</span>
          <span className="chip">Detección de anomalías</span>
          <span className="chip">Alertas casi en tiempo real</span>
        </div>
      </div>
    </div>
  );
}
