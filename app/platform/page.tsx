import { Metadata } from "next";

import { SectionHeader } from "@/components/SectionHeader";
import { DataMethodsAccordion } from "@/components/DataMethodsAccordion";
import { PipelineStepper } from "@/components/PipelineStepper";

export const metadata: Metadata = {
  title: "Plataforma",
  description: "Plataforma de detección basada en espectrometría para alertas ambientales y de seguridad."
};

const features = [
  {
    title: "Detección de anomalías",
    description: "Señales espectrales y cambios atmosféricos en series temporales."
  },
  {
    title: "Puntaje de riesgo",
    description: "Puntajes probabilísticos para priorizar investigación y patrullaje."
  },
  {
    title: "Alertas",
    description: "Alertas casi en tiempo real con umbrales configurables."
  },
  {
    title: "Paneles",
    description: "Vistas para analistas con contexto y tendencia histórica."
  },
  {
    title: "API e integraciones",
    description: "Entrega segura vía API, exportaciones y reportes."
  },
  {
    title: "Trazabilidad",
    description: "Procedencia, cadena de custodia y reproducibilidad."
  }
];

export default function PlatformPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Plataforma"
        title="Pipeline de detección por espectrometría"
        subtitle="AstroNova usa espectrometría satelital y detección de anomalías — no imágenes de alta resolución — para señalar riesgos."
        align="left"
      />
      <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
        <span className="chip">Señales atmosféricas</span>
        <span className="chip">Detección de anomalías</span>
        <span className="chip">Puntaje de riesgo</span>
      </div>

      <div className="mt-12">
        <PipelineStepper />
      </div>

      <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-2xl border border-white/10 bg-space-800/80 p-6">
            <h3 className="font-display text-xl text-white">{feature.title}</h3>
            <p className="text-sm text-slate-200 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10">
        <div>
          <SectionHeader
            eyebrow="Indicadores"
            title="Lo que monitoreamos"
            subtitle="Ejemplos de señales espectrales usadas para detectar patrones de riesgo."
            align="left"
          />
          <div className="mt-8">
            <DataMethodsAccordion />
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Limitaciones y verificación"
            title="Diseñado para supervisión legal"
            subtitle="AstroNova genera alertas de riesgo y apoyo de inteligencia; las decisiones requieren verificación y cadena de custodia."
            align="left"
          />
          <div className="mt-8 space-y-4">
            {[
              "Las señales son probabilísticas y no son evidencia única",
              "Se requiere revisión humana antes de cualquier acción",
              "El contexto local y la autoridad legal son esenciales",
              "Se preservan logs y procedencia para rendición de cuentas"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-space-800/80 p-5 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader
          eyebrow="Gobernanza"
          title="Operación con trazabilidad"
          subtitle="Acceso por roles, procedencia y reportes exportables."
          align="left"
        />
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            "Acceso por roles con logs de auditoría",
            "Documentación de cadena de custodia para reportes",
            "Modelos y líneas base reproducibles",
            "Exportaciones seguras para entornos regulados"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-space-800/80 p-6 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
