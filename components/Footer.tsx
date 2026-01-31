import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-space-800/50 mt-20">
      <div className="container py-12 grid gap-10 md:grid-cols-4 text-sm text-slate-200">
        <div>
          <div className="font-display text-lg text-white mb-3">{siteConfig.name}</div>
          <p className="text-slate-200">{siteConfig.tagline}.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Compañía</p>
          <ul className="space-y-2">
            <li>
              <Link href="/about">Nosotros</Link>
            </li>
            <li>
              <Link href="/resources">Inteligencia</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Detecciones</p>
          <ul className="space-y-2">
            <li>
              <Link href="/solutions">Todas las detecciones</Link>
            </li>
            <li>
              <Link href="/platform">Plataforma</Link>
            </li>
            <li>
              <Link href="/pricing">Programas</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Cumplimiento</p>
          <ul className="space-y-2">
            <li>Señales espectrométricas satelitales</li>
            <li>Seguridad y gobernanza</li>
            <li>Compromiso con accesibilidad</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-200">
          <p>(c) 2026 {siteConfig.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href={siteConfig.socials.linkedin}>LinkedIn</Link>
            <Link href={siteConfig.socials.x}>X</Link>
            <Link href={siteConfig.socials.youtube}>YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
