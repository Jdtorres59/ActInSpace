import { Metadata } from "next";
import Link from "next/link";

import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita una demo o un brief de compras para alertas espectrales."
};

export default function ContactPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Contacto"
        title="Solicita una demo segura"
        subtitle="Comparte tu región y prioridades. Respondemos en 2 días hábiles."
        align="left"
      />

      <div className="mt-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
        <div>
          <ContactForm />
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
            <span className="chip">Alertas por espectrometría</span>
            <span className="chip">Reportes auditables</span>
            <span className="chip">Supervisión legal</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Contactos por área</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>
                <p className="text-white">Cumplimiento ambiental</p>
                <p>Programas de minería ilegal y control</p>
              </li>
              <li>
                <p className="text-white">Seguridad e inteligencia</p>
                <p>Alertas de riesgo para actividad ilícita</p>
              </li>
              <li>
                <p className="text-white">Fronteras e infraestructura</p>
                <p>Monitoreo de corredores y puntaje de riesgo</p>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6 text-sm text-slate-200">
            <p className="text-white font-medium">Compras / RFP</p>
            <p className="mt-2">{siteConfig.contact.rfp}</p>
            <p className="mt-3">Consultas generales: {siteConfig.contact.email}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">Solicitar demo</h3>
            <p className="text-sm text-slate-200 mt-2">
              Agenda un recorrido seguro con un asesor regional.
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex items-center rounded-full bg-sky-400 text-space-900 font-semibold px-4 py-2"
            >
              Calendly (referencia)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
