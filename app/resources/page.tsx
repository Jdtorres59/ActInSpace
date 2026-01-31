import { Metadata } from "next";
import Link from "next/link";

import { posts } from "@/data/posts";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Inteligencia",
  description: "Notas y guías sobre detección por espectrometría y gobernanza."
};

export default function ResourcesPage() {
  return (
    <div className="container py-20">
      <SectionHeader
        eyebrow="Inteligencia"
        title="Notas para equipos de seguridad y cumplimiento"
        subtitle="Resúmenes breves y accionables sobre detección y gobernanza."
        align="left"
      />

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/resources/${post.slug}`}
            className="rounded-2xl border border-white/10 bg-space-800/80 p-6 flex flex-col gap-3 hover:-translate-y-1 transition"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-earth-300">{post.category}</div>
            <h3 className="font-display text-xl text-white">{post.title}</h3>
            <p className="text-sm text-slate-200 flex-1">{post.excerpt}</p>
            <div className="text-xs text-slate-200">
              {post.date} - {post.readTime}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="text-slate-200">
          <h3 className="font-display text-2xl text-white">¿Necesitas un brief a medida?</h3>
          <p className="mt-3">
            Resúmenes listos para gobernanza que alinean seguridad y cumplimiento.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-white"
          >
            Solicitar un brief
          </Link>
        </div>
        <NewsletterForm />
      </div>
    </div>
  );
}
