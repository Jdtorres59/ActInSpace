"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import clsx from "clsx";

const navItems = [
  { label: "Detecciones", href: "/solutions" },
  { label: "Plataforma", href: "/platform" },
  { label: "Programas", href: "/pricing" },
  { label: "Inteligencia", href: "/resources" },
  { label: "Nosotros", href: "/about" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all",
        isScrolled
          ? "bg-space-900/95 border-b border-white/10 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-display text-lg text-white">
          <span className="relative h-7 w-7 overflow-hidden rounded-full bg-space-900/40">
            <Image
              src="/AstroNovaLogo.png"
              alt="Logo de AstroNova"
              fill
              sizes="28px"
              className="object-cover object-center"
              priority
            />
          </span>
          {siteConfig.name}
        </Link>
        <nav
          className="hidden lg:flex items-center gap-8 text-sm text-slate-200"
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm rounded-full border border-white/10 hover:border-white/30 transition"
          >
            Contacto
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm rounded-full bg-sky-400 text-space-900 font-semibold hover:bg-sky-500 transition"
          >
            Solicitar demo
          </Link>
        </div>
        <button
          type="button"
          className="lg:hidden text-slate-200 focus-ring"
          aria-label="Alternar navegación"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>
      {isOpen ? (
        <div className="lg:hidden bg-space-900/95 border-b border-white/10 backdrop-blur-md">
          <nav
            id="mobile-nav"
            className="container py-4 flex flex-col gap-3 text-sm text-slate-200"
            aria-label="Navegación móvil"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-sky-400 text-space-900 font-semibold py-2"
            >
              Solicitar demo
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
