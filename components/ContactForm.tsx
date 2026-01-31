"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence } from "framer-motion";
import { Toast } from "@/components/Toast";

const initialState = {
  name: "",
  email: "",
  organization: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Por favor, ingresa tu nombre.";
    if (!form.email.trim()) {
      nextErrors.email = "El correo es obligatorio.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }
    if (!form.message.trim()) nextErrors.message = "Cuéntanos qué necesitas.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
      setErrors({});
      setTimeout(() => setStatus("idle"), 3500);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6 md:p-8">
      <form className="grid gap-5" onSubmit={onSubmit} noValidate>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-200" htmlFor="name">
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="mt-2 w-full rounded-xl bg-space-900/70 border border-white/10 px-4 py-3 text-sm text-white focus-ring"
              placeholder="Tu nombre"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <p className="text-xs text-amber-200 mt-1">{errors.name}</p> : null}
          </div>
          <div>
            <label className="text-sm text-slate-200" htmlFor="email">
              Correo institucional
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="mt-2 w-full rounded-xl bg-space-900/70 border border-white/10 px-4 py-3 text-sm text-white focus-ring"
              placeholder="tu@organizacion.org"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <p className="text-xs text-amber-200 mt-1">{errors.email}</p> : null}
          </div>
        </div>
        <div>
          <label className="text-sm text-slate-200" htmlFor="organization">
            Organización
          </label>
          <input
            id="organization"
            type="text"
            value={form.organization}
            onChange={(event) => setForm({ ...form, organization: event.target.value })}
            className="mt-2 w-full rounded-xl bg-space-900/70 border border-white/10 px-4 py-3 text-sm text-white focus-ring"
            placeholder="Agencia, ONG o empresa"
          />
        </div>
        <div>
          <label className="text-sm text-slate-200" htmlFor="message">
            Detalles del programa
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            className="mt-2 w-full rounded-xl bg-space-900/70 border border-white/10 px-4 py-3 text-sm text-white focus-ring"
            placeholder="Cuéntanos región, plazos y necesidades de detección"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <p className="text-xs text-amber-200 mt-1">{errors.message}</p> : null}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-sky-400 text-space-900 font-semibold px-6 py-3 disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </button>
      </form>
      <div className="mt-4">
        <AnimatePresence>
          {status === "success" ? (
            <Toast message="Gracias. Te contactaremos en un máximo de 2 días hábiles." />
          ) : null}
          {status === "error" ? (
            <Toast variant="error" message="Ocurrió un error. Intenta nuevamente." />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
