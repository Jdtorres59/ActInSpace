"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { blurDataURL } from "@/src/lib/blur";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const alerts = [
  "Anomalía espectral marcada: Zona 14",
  "Indicador de metano: Cuenca 3",
  "Cambio de biomasa (proxy): Sector 8"
];

export function InsightDemo() {
  const data = useMemo(
    () => [
      { name: "W1", value: 22 },
      { name: "W2", value: 28 },
      { name: "W3", value: 24 },
      { name: "W4", value: 32 },
      { name: "W5", value: 31 },
      { name: "W6", value: 38 }
    ],
    []
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch" ref={ref}>
      <motion.div
        className="relative rounded-3xl overflow-hidden card-border bg-space-800/80"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/SpaceView.jpg"
            alt="Vista orbital de un satélite"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-space-900/90 via-space-900/55 to-transparent" />
          <div className="absolute inset-0 bg-space-900/20" />
        </div>
        <div className="relative p-6 min-h-[320px] flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-earth-300">Demo de inteligencia</p>
            <h3 className="font-display text-2xl text-white mt-2">Panel de riesgo espectral</h3>
            <p className="text-sm text-slate-200 mt-2 max-w-sm">
              Anomalías atmosféricas y cambios ambientales en una sola vista.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-slate-200">
            <div className="stat-block">
              <p className="text-slate-200">Estado de alerta</p>
              <p className="text-earth-300 text-lg">Elevado</p>
            </div>
            <div className="stat-block">
              <p className="text-slate-200">Actualización</p>
              <p className="text-white">Casi en tiempo real</p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col gap-6">
        <motion.div
          className="rounded-2xl border border-white/10 bg-space-800/80 p-6"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.08, ease: "easeOut" }}
        >
          <p className="text-sm text-slate-200">Tendencia de anomalías</p>
          <div className="h-48 mt-4">
            {isInView ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "#111428", border: "1px solid #1e293b" }} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#58CF96"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : null}
          </div>
        </motion.div>
        <motion.div
          className="rounded-2xl border border-white/10 bg-space-800/80 p-6"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, delay: 0.16, ease: "easeOut" }}
        >
          <p className="text-sm text-slate-200 mb-4">Feed de alertas</p>
          <ul className="space-y-3 text-sm text-slate-200">
            {alerts.map((alert) => (
              <li key={alert} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-400" />
                <span>{alert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
