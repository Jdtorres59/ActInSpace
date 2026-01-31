export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "spectrometry-early-warning",
    title: "Espectrometría para alertas tempranas",
    excerpt: "Cómo las señales espectrales y la detección de anomalías apoyan programas de seguridad ambiental.",
    date: "2026-01-12",
    readTime: "5 min de lectura",
    category: "Informe",
    content: `La espectrometría aporta una capa sólida de detección para equipos de seguridad ambiental.

## Qué es

La espectrometría captura señales atmosféricas que pueden indicar patrones de actividad inusual.

## Por qué importa

Estas señales son probabilísticas. Ayudan a priorizar investigaciones y recursos, no sustituyen la verificación legal.
`
  },
  {
    slug: "risk-scoring-governance",
    title: "Puntaje de riesgo con controles de gobernanza",
    excerpt: "Diseño de puntajes transparentes, auditables y alineados a la supervisión.",
    date: "2026-01-06",
    readTime: "4 min de lectura",
    category: "Gobernanza",
    content: `El puntaje de riesgo solo funciona cuando es explicable.

## Principios clave

- Líneas base y umbrales claros
- Reportes con cadena de custodia
- Revisión humana antes de actuar
`
  },
  {
    slug: "illegal-mining-indicators",
    title: "Indicadores de metano y mercurio",
    excerpt: "Señales espectrales que pueden alinearse con riesgo de extracción ilegal.",
    date: "2025-12-20",
    readTime: "4 min de lectura",
    category: "Señales",
    content: `Los indicadores de metano y mercurio pueden apoyar la planificación de control ambiental.

## Uso práctico

Combina indicadores espectrales con contexto local y flujos de verificación.
`
  },
  {
    slug: "compliance-ready-reporting",
    title: "Reportes listos para cumplimiento",
    excerpt: "Trazabilidad y procedencia que apoyan compras y supervisión.",
    date: "2025-12-02",
    readTime: "4 min de lectura",
    category: "Cumplimiento",
    content: `Los reportes deben resistir el escrutinio público.

## Incluir

- Procedencia de las señales
- Limitaciones claras
- Pasos de revisión y aprobación
`
  }
];
