"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { blurDataURL } from "@/src/lib/blur";

const alerts = [
  "Anomalía espectral detectada: Zona 14",
  "Señal de metano elevada: Cuenca 3",
  "Cambio de biomasa (proxy): Sector 8"
];

export function SpectralHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const baseTransition = { duration: reduceMotion ? 0 : 0.45, ease: "easeOut" };

  return (
    <div className="relative" ref={ref}>
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: reduceMotion ? 0 : [0, -6, 0]
                }
              : {}
          }
          transition={{
            opacity: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
            y: {
              duration: reduceMotion ? 0 : 16,
              ease: "easeInOut",
              repeat: reduceMotion ? 0 : Infinity
            }
          }}
        >
          <Image
            src="/SpaceView.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-center opacity-80"
            placeholder="blur"
            blurDataURL={blurDataURL}
            priority
            aria-hidden="true"
            role="presentation"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-space-900/90 via-space-900/60 to-space-900/20" />
          <div className="absolute inset-0 bg-space-900/15" />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 relative z-10">
      <motion.div
        className="rounded-2xl border border-white/10 bg-space-800/80 p-5 relative overflow-hidden"
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={baseTransition}
      >
        <div className="absolute inset-0 spectral-bands" aria-hidden="true" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Señales espectrales</p>
          <h3 className="font-display text-2xl text-white mt-3">Espectro de anomalías</h3>
          <p className="text-sm text-slate-200 mt-2 max-w-sm">
            Variaciones de señales atmosféricas y ambientales en el tiempo.
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-space-900/60 p-4">
            <svg viewBox="0 0 320 120" width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 90 C50 80 80 60 120 55 C160 50 200 70 240 45 C270 30 290 25 310 28" stroke="#8B7AFF" strokeWidth="2" />
              <path d="M10 100 C60 95 90 85 140 80 C190 75 230 90 310 70" stroke="#58CF96" strokeWidth="2" />
              <line x1="0" y1="110" x2="320" y2="110" stroke="#334155" />
              <line x1="0" y1="10" x2="320" y2="10" stroke="#334155" strokeDasharray="6 6" />
            </svg>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-200">
              <span>Tiempo</span>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#8B7AFF]" />
                  Banda A
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#58CF96]" />
                  Banda B
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6">
        <motion.div
          className="rounded-2xl border border-white/10 bg-space-800/80 p-5"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...baseTransition, delay: 0.08 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Feed de alertas</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {alerts.map((alert) => (
              <li key={alert} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>{alert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-space-800/80 p-5"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...baseTransition, delay: 0.16 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Mapa de riesgo</p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-space-900/60 p-4">
            <svg viewBox="0 0 320 120" width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="90" height="40" fill="#2A3252" />
              <rect x="110" y="20" width="90" height="50" fill="#2B3A45" />
              <rect x="210" y="15" width="90" height="35" fill="#332A45" />
              <rect x="20" y="70" width="110" height="35" fill="#2E3A3F" />
              <rect x="140" y="75" width="170" height="30" fill="#2A2F3F" />
              <circle cx="70" cy="35" r="4" fill="#DFA76C" />
              <circle cx="180" cy="55" r="4" fill="#DFA76C" />
              <circle cx="250" cy="35" r="4" fill="#DFA76C" />
            </svg>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
