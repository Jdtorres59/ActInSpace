import Link from "next/link";

export function CtaBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-space-800/80 p-10 md:p-12">
      <div className="absolute inset-0 topo-lines opacity-30" />
      <div className="relative z-10">
        <h3 className="font-display text-2xl md:text-3xl text-white">
          Despliega alertas espectrales a escala
        </h3>
        <p className="text-slate-200 mt-3 max-w-2xl">
          Señales de riesgo para seguridad ambiental, con reportes auditables.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-sky-400 text-space-900 font-semibold"
          >
            Solicitar demo
          </Link>
          <Link
            href="/solutions"
            className="px-5 py-2.5 rounded-full border border-white/15 text-white"
          >
            Ver detecciones
          </Link>
        </div>
      </div>
    </div>
  );
}
