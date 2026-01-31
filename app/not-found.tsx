import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-earth-300">404</p>
      <h1 className="font-display text-4xl text-white mt-4">Página no encontrada</h1>
      <p className="text-slate-200 mt-3">La página que buscas no existe.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-full bg-sky-400 text-space-900 font-semibold px-4 py-2"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
