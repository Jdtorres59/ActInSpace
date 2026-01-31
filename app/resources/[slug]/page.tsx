import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

import { posts } from "@/data/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function ResourcePostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const html = marked.parse(post.content) as string;

  return (
    <div className="container py-20">
      <Link href="/resources" className="text-sm text-slate-200 hover:text-white">
           ← Volver a inteligencia 
      </Link>
      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.3em] text-earth-300">{post.category}</p>
        <h1 className="font-display text-4xl text-white mt-3">{post.title}</h1>
        <p className="text-sm text-slate-200 mt-2">
          {post.date} - {post.readTime}
        </p>
      </div>
      <div
        className="rich-text mt-10 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
