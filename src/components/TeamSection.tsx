"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { teamData } from "@/src/content/team";
import { blurDataURL } from "@/src/lib/blur";
import clsx from "clsx";

type TeamImageProps = {
  src: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const fadeUp = (reduceMotion: boolean, delay = 0) => ({
  initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: reduceMotion ? 0 : 0.45, delay, ease: "easeOut" }
});

const createPlaceholder = (label: string, variant: "group" | "member") => {
  const primary = variant === "group" ? "#0B1020" : "#101728";
  const secondary = "#1C2340";
  const accent = "#58CF96";
  const fontSize = variant === "group" ? 36 : 32;
  const fontWeight = variant === "group" ? 600 : 500;
  const svg = `
    <svg width="1200" height="720" viewBox="0 0 1200 720" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${primary}" />
          <stop offset="100%" stop-color="${secondary}" />
        </linearGradient>
        <linearGradient id="band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="1200" height="720" fill="url(#bg)" />
      <rect x="0" y="520" width="1200" height="120" fill="url(#band)" />
      <circle cx="980" cy="180" r="120" fill="${accent}" opacity="0.08" />
      <text x="60" y="140" fill="white" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="2">
        ${label}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

function TeamImage({ src, alt, fallbackLabel, className, sizes, priority }: TeamImageProps) {
  const [hasError, setHasError] = useState(false);
  const fallback = useMemo(
    () => createPlaceholder(fallbackLabel, fallbackLabel.length > 3 ? "group" : "member"),
    [fallbackLabel]
  );

  return (
    <Image
      src={hasError ? fallback : src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={className}
      onError={() => setHasError(true)}
      unoptimized={hasError}
    />
  );
}

type TeamSectionProps = {
  className?: string;
};

export function TeamSection({ className }: TeamSectionProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="equipo" className={clsx("py-20 scroll-mt-28", className)}>
      <motion.div {...fadeUp(reduceMotion)} className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-earth-300">EL EQUIPO</p>
        <h2 className="font-display text-3xl md:text-4xl text-white mt-3">
          El equipo detrás de AstroNova
        </h2>
        <p className="text-slate-200 mt-3 max-w-2xl">
          Ciencia, producto y misión: alertas tempranas con rigor.
        </p>
      </motion.div>

      <motion.div
        {...fadeUp(reduceMotion, 0.08)}
        className="mt-8 relative rounded-3xl overflow-hidden border border-white/10 bg-space-800/80 aspect-[16/7]"
      >
        <TeamImage
          src={teamData.groupPhoto}
          alt="Foto grupal del equipo de AstroNova"
          fallbackLabel="Equipo AstroNova"
          sizes="(max-width: 1024px) 100vw, 1200px"
          priority
          className="object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-900/85 via-space-900/35 to-transparent" />
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamData.members.map((member, index) => (
          <motion.article
            key={member.name}
            {...fadeUp(reduceMotion, 0.05 + index * 0.04)}
            className="rounded-2xl border border-white/10 bg-space-800/80 p-5 transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-space-900/60">
              <TeamImage
                src={member.image}
                alt={`Retrato de ${member.name}`}
                fallbackLabel={getInitials(member.name)}
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-900/70 via-transparent to-transparent" />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-display text-lg text-white">{member.name}</h3>
              <p className="text-sm text-slate-200">{member.role}</p>
              {member.focus ? (
                <p className="text-xs text-slate-200/80">{member.focus}</p>
              ) : null}
            </div>
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`LinkedIn de ${member.name}`}
              className={clsx(
                "mt-4 inline-flex items-center gap-2 text-sm text-earth-300",
                "hover:text-earth-200 transition-colors focus-ring"
              )}
            >
              <span>LinkedIn</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M7 9v8" />
                <path d="M7 6.5v.5" />
                <path d="M11 17v-5a2 2 0 0 1 4 0v5" />
                <path d="M11 12v-3" />
                <rect x="3" y="3" width="18" height="18" rx="4" />
              </svg>
            </a>
          </motion.article>
        ))}
      </div>

      <motion.div {...fadeUp(reduceMotion, 0.12)} className="mt-10">
        <Link href="/contact" className="text-sm text-earth-300 hover:text-earth-200 focus-ring">
          ¿Quieres colaborar? Escríbenos.
        </Link>
      </motion.div>
    </section>
  );
}
