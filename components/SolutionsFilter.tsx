"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { solutionSectors, solutions, SolutionSector } from "@/data/solutions";
import { SignalPlaceholder } from "@/components/SignalPlaceholder";

const sectorImages: Record<
  SolutionSector,
  "narcotics" | "mining" | "deforestation" | "infrastructure"
> = {
  Narcotráfico: "narcotics",
  "Minería ilegal": "mining",
  "Deforestación ilegal": "deforestation",
  "Infraestructura crítica": "infrastructure"
};

export function SolutionsFilter() {
  const [active, setActive] = useState<SolutionSector | "Todas">("Todas");

  const filtered = useMemo(() => {
    if (active === "Todas") return solutions;
    return solutions.filter((solution) => solution.sector === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-start">
        {["Todas", ...solutionSectors].map((sector) => (
          <button
            key={sector}
            type="button"
            onClick={() => setActive(sector as SolutionSector | "Todas")}
            aria-pressed={active === sector}
            className={`px-4 py-2 rounded-full text-sm border transition focus-ring ${
              active === sector
                ? "bg-sky-400 text-space-900 border-transparent"
                : "border-white/15 text-slate-200 hover:border-white/40"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8"
        layout
      >
        {filtered.map((solution) => (
          <motion.div key={solution.slug} layout>
            <Link
              href={`/solutions/${solution.slug}`}
              className="group h-full rounded-2xl overflow-hidden card-border bg-space-800/80 flex flex-col hover:-translate-y-1 transition"
            >
              <div className="relative h-44">
                <SignalPlaceholder
                  variant={sectorImages[solution.sector]}
                  alt={`${solution.title} (referencia espectral)`}
                  className="object-cover opacity-95 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-900/90 via-space-900/30 to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-earth-300">
                  {solution.sector}
                </p>
                <h3 className="font-display text-xl text-white">{solution.title}</h3>
                <p className="text-sm text-slate-200 flex-1">{solution.summary}</p>
                <span className="text-earth-300 text-sm">Ver detección -></span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
