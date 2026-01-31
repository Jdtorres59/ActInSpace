"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { Toast } from "@/components/Toast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6 md:p-8">
      <h3 className="font-display text-xl text-white">Brief mensual de detección</h3>
      <p className="text-sm text-slate-200 mt-2">
        Actualizaciones cortas sobre detección y gobernanza.
      </p>
      <form className="mt-5 flex flex-col sm:flex-row gap-3" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">
          Correo electrónico
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="tu@organizacion.org"
          className="flex-1 rounded-full bg-space-900/70 border border-white/10 px-4 py-3 text-sm text-white focus-ring"
        />
        <button
          type="submit"
          className="rounded-full bg-sky-400 text-space-900 font-semibold px-5 py-3"
        >
          Suscribirme
        </button>
      </form>
      <div className="mt-4">
        <AnimatePresence>
          {status === "success" ? <Toast message="Suscripción registrada. Gracias." /> : null}
          {status === "error" ? (
            <Toast variant="error" message="Ingresa un correo válido para suscribirte." />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
