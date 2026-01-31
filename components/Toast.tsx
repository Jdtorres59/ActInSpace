"use client";

import { motion } from "framer-motion";

type ToastProps = {
  message: string;
  variant?: "success" | "error";
};

export function Toast({ message, variant = "success" }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl px-4 py-3 text-sm shadow-card border ${
        variant === "success"
          ? "border-earth-400/40 bg-earth-500/10 text-slate-100"
          : "border-amber-400/40 bg-amber-500/10 text-slate-100"
      }`}
      role="status"
      aria-live="polite"
    >
      {message}
    </motion.div>
  );
}
