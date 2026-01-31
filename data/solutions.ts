export type SolutionSector =
  | "Narcotráfico"
  | "Minería ilegal"
  | "Deforestación ilegal"
  | "Infraestructura crítica";

export type Solution = {
  slug: string;
  title: string;
  sector: SolutionSector;
  summary: string;
  problem: string;
  deliverables: string[];
  dataSources: string[];
  outputs: string[];
  deployment: string[];
  workflow: string[];
  limitations: string[];
};

export const solutions: Solution[] = [
  {
    slug: "narcotics-spectral-alerts",
    title: "Señales ambientales de narcotráfico",
    sector: "Narcotráfico",
    summary:
      "Alertas de anomalías espectrales que pueden indicar actividad química y estrés ambiental.",
    problem:
      "Operaciones clandestinas dejan firmas ambientales que pueden pasar desapercibidas en patrullajes terrestres.",
    deliverables: [
      "Alertas probabilísticas de señales asociadas a procesos químicos",
      "Puntaje de riesgo por zona y ventana temporal",
      "Resúmenes para analistas que apoyan la investigación"
    ],
    dataSources: [
      "Espectrometría satelital (señales atmosféricas)",
      "Detección de anomalías en series temporales",
      "Líneas base regionales y zonas de exclusión"
    ],
    outputs: ["Feed de alertas", "Puntaje de riesgo", "Panel", "Reporte", "API"],
    deployment: ["Portal seguro", "Integración API", "Reportes programados"],
    workflow: [
      "Ingesta de señales espectrales",
      "Normalizar y detectar anomalías",
      "Asignar riesgo",
      "Alertar y reportar"
    ],
    limitations: [
      "Las señales son probabilísticas y no son evidencia única",
      "Requiere verificación legal y revisión humana"
    ]
  },
  {
    slug: "illegal-mining-watch",
    title: "Vigilancia de minería ilegal",
    sector: "Minería ilegal",
    summary:
      "Indicadores de metano y mercurio que sugieren riesgo de extracción ilegal.",
    problem:
      "Los sitios remotos cambian rápido y requieren alertas tempranas para equipos de respuesta.",
    deliverables: [
      "Indicadores de metano y mercurio",
      "Monitoreo de hotspots por corredor",
      "Alertas semanales o casi en tiempo real"
    ],
    dataSources: [
      "Espectrometría satelital",
      "Indicadores de gases traza",
      "Modelos de línea base regional"
    ],
    outputs: ["Feed de alertas", "Mapa de riesgo", "Panel", "Reporte", "API"],
    deployment: ["Portal seguro", "Exportaciones GIS", "Integración API"],
    workflow: [
      "Ingesta de señales",
      "Detectar anomalías",
      "Asignar riesgo",
      "Notificar a equipos"
    ],
    limitations: [
      "Los indicadores sugieren posible actividad, no confirmación",
      "Se requiere verificación en terreno"
    ]
  },
  {
    slug: "illegal-deforestation-watch",
    title: "Vigilancia de deforestación ilegal",
    sector: "Deforestación ilegal",
    summary:
      "Proxies de CO2 y biomasa para alertas rápidas de deforestación.",
    problem:
      "La tala ilegal puede avanzar más rápido que los ciclos de control y reporte.",
    deliverables: [
      "Alertas de pérdida de biomasa (proxy)",
      "Señales de emisiones relacionadas con CO2",
      "Paquetes de reporte de cumplimiento"
    ],
    dataSources: [
      "Espectrometría satelital",
      "Indicadores proxy de biomasa",
      "Modelos de riesgo en series temporales"
    ],
    outputs: ["Feed de alertas", "Puntaje de riesgo", "Reporte", "Panel", "API"],
    deployment: ["Portal seguro", "Integración API", "Reportes mensuales"],
    workflow: [
      "Ingesta de señales",
      "Normalizar y detectar anomalías",
      "Asignar riesgo",
      "Alertar y reportar"
    ],
    limitations: [
      "Los proxies requieren verificación",
      "Apoya el cumplimiento, no es evidencia única"
    ]
  },
  {
    slug: "critical-infrastructure-monitoring",
    title: "Monitoreo de infraestructura crítica y fronteras",
    sector: "Infraestructura crítica",
    summary:
      "Monitoreo de anomalías ambientales en corredores críticos y fronteras.",
    problem:
      "Se requiere cobertura amplia para priorizar patrullaje e investigación.",
    deliverables: [
      "Puntaje de riesgo por corredor",
      "Alertas de anomalías y resúmenes de tendencia",
      "Reportes auditables de incidentes"
    ],
    dataSources: [
      "Espectrometría satelital",
      "Modelos de riesgo geoespacial",
      "Líneas base temporales"
    ],
    outputs: ["Feed de alertas", "Mapa de riesgo", "Reporte", "Panel", "API"],
    deployment: ["Portal seguro", "Integraciones", "Entrega de alertas"],
    workflow: [
      "Ingesta de señales",
      "Detectar anomalías",
      "Asignar riesgo",
      "Alertar y reportar"
    ],
    limitations: [
      "Las alertas indican patrones de riesgo",
      "Requiere supervisión legal y verificación"
    ]
  }
];

export const solutionSectors: SolutionSector[] = [
  "Narcotráfico",
  "Minería ilegal",
  "Deforestación ilegal",
  "Infraestructura crítica"
];
