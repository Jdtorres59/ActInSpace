import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Privacidad"
};

export default function PrivacyPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Transparencia"
        title="Privacidad y uso de datos"
        subtitle="Este sitio es ligero y respetuoso. No vendemos ni compartimos datos personales con terceros."
        align="left"
      />
      <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-space-800/80 p-8 text-sm text-slate-200 space-y-4">
        <p>
          Este sitio usa analítica esencial para entender el tráfico agregado y mejorar la experiencia. No usamos
          rastreadores publicitarios ni almacenamos información personal sensible.
        </p>
        <p>
          Si envías un formulario, los datos se usan para responder tu solicitud y pueden almacenarse en sistemas
          internos. Para preguntas, escribe al correo de compras o al correo general indicado en la página de contacto.
        </p>
      </div>
    </div>
  );
}
