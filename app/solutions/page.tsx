import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionsFilter } from "@/components/SolutionsFilter";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Detecciones",
  description: "Programas de detección basados en espectrometría para riesgos ambientales y de seguridad."
};

export default function SolutionsPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Detecciones"
        title="Programas de detección espectral"
        subtitle="Filtra por tipo de detección para explorar alertas y soporte de cumplimiento."
        align="left"
      />
      <div className="mt-12">
        <SolutionsFilter />
      </div>
      <div className="mt-20">
        <CtaBanner />
      </div>
    </div>
  );
}
