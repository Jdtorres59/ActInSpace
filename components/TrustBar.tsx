import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  "Espectrometría satelital",
  "Detección probabilística",
  "Trazabilidad auditable"
];

export function TrustBar() {
  return (
    <ScrollReveal>
      <div className="flex flex-wrap gap-3 justify-center">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </ScrollReveal>
  );
}
