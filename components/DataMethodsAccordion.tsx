"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Indicadores de metano",
    body:
      "Señales espectrales asociadas a anomalías de metano cerca de zonas de extracción o procesamiento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 16 C8 12 12 10 18 8" />
        <circle cx="7" cy="15" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    title: "Indicadores de riesgo por mercurio",
    body:
      "Patrones espectrales compatibles con zonas de riesgo por contaminación ambiental.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 15 C8 13 12 13 20 11" />
        <path d="M4 18 C8 16 12 16 20 14" />
      </svg>
    )
  },
  {
    title: "CO2 y proxies de biomasa",
    body:
      "Indicadores que sugieren pérdida de biomasa o cambios de emisiones en el tiempo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 18 C9 14 12 12 15 8" />
        <path d="M12 18 L18 12" />
      </svg>
    )
  }
];

export function DataMethodsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `data-method-panel-${index}`;
        const buttonId = `data-method-button-${index}`;
        return (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-space-800/70">
            <button
              type="button"
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              id={buttonId}
            >
              <span className="flex items-center gap-3 text-white text-lg">
                <span className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-earth-300">
                  {item.icon}
                </span>
                <span className="font-display">{item.title}</span>
              </span>
              <span className="text-earth-300 text-sm">{isOpen ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-4 text-sm text-slate-200"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  {item.body}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
