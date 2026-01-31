import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Las alertas espectrales nos ayudan a priorizar inspecciones con trazabilidad.",
    name: "Agencia ambiental regional"
  },
  {
    quote:
      "El puntaje de riesgo redujo el tiempo de triage para equipos de campo.",
    name: "Unidad de minería ilegal"
  },
  {
    quote:
      "Los reportes auditables alinean seguridad, cumplimiento y supervisión legal.",
    name: "Oficina de seguridad y cumplimiento"
  }
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <ScrollReveal key={testimonial.name} delay={index * 0.1}>
          <div className="glass rounded-2xl p-6 h-full">
            <p className="text-slate-200 text-sm">&quot;{testimonial.quote}&quot;</p>
            <p className="text-xs uppercase tracking-[0.2em] text-earth-300 mt-4">
              {testimonial.name}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
