"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("tp-cookie-consent");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-space-800/95 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-200 shadow-card">
        <div>
          <p className="text-white font-medium">Aviso de cookies</p>
          <p className="text-slate-200">
            Usamos solo analítica esencial. No almacenamos datos personales.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className="text-slate-200 hover:text-white transition-colors"
            aria-label="Leer política de privacidad"
          >
            Privacidad
          </Link>
          <button
            type="button"
            className="px-4 py-2 rounded-full bg-sky-400 text-space-900 font-semibold"
            onClick={() => {
              window.localStorage.setItem("tp-cookie-consent", "accepted");
              setVisible(false);
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
