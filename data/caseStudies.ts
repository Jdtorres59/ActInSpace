export type CaseStudy = {
  title: string;
  sector: string;
  summary: string;
  metric: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Agencia regional de cumplimiento",
    sector: "Seguridad ambiental",
    summary:
      "Integró alertas espectrales con flujos de investigación y reportes auditables.",
    metric: "Triage de alertas mejoró 10–18%"
  },
  {
    title: "Unidad de minería ilegal",
    sector: "Minería",
    summary:
      "Priorizó inspecciones con indicadores de metano y mercurio.",
    metric: "Cobertura priorizada en 2–4 semanas"
  },
  {
    title: "Comando de fronteras",
    sector: "Fronteras",
    summary:
      "Activó alertas de anomalías para corredores críticos.",
    metric: "Detección temprana subió 8–15%"
  }
];
