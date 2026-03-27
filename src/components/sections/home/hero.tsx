"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowDownTrayIcon, XCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import Link from "next/link";

const install_script = "curl -sSfL https://vesper.devflare.de/install | sh";

const features = [
  "Blazing fast startup",
  "Built-in mod support",
  "Modern & minimal UI",
  "Free & open source",
];

export function hero() {
  const [copy_state, set_copy_state] = useState<"idle" | "copied" | "error">("idle");

  async function copy_install_script() {
    try {
      await navigator.clipboard.writeText(install_script);
      set_copy_state("copied");
      toast.success("Copied install script!");
      setTimeout(() => set_copy_state("idle"), 1800);
    } catch {
      set_copy_state("error");
      toast.error("Failed to copy install script.");
      setTimeout(() => set_copy_state("idle"), 2500);
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] py-20 px-6" id="hero">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-64 bg-brand-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-accent/10 border border-brand-accent/20">
          <SparklesIcon className="w-4 h-4 text-brand-accent" />
          <span className="text-sm font-medium text-brand-accent">Closed Beta Coming Soon</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          Minecraft, <span className="text-brand-accent italic">reimagined</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          A blazingly fast, modern Minecraft launcher built for performance enthusiasts and power users.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} className="flex flex-wrap justify-center gap-3 mb-12">
          {features.map((feature, i) => (
            <span key={feature} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border text-sm font-medium">
              <CheckCircleIcon className="w-4 h-4 text-brand-accent" />
              {feature}
            </span>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-full max-w-xl border border-border rounded-xl bg-card/80 backdrop-blur overflow-hidden">
            <code className="block px-4 py-3 text-sm sm:text-base font-mono text-foreground truncate sm:whitespace-normal sm:overflow-visible select-all">
              {install_script}
            </code>
          </div>
          <button
            type="button"
            onClick={copy_install_script}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
              copy_state === "copied"
                ? "bg-green-600 text-white"
                : copy_state === "error"
                ? "bg-destructive text-white"
                : "bg-brand-accent text-background hover:shadow-[0_0_30px_-5px_var(--brand-accent)]"
            }`}
            aria-label={copy_state === "copied" ? "Copied!" : "Copy install script"}
          >
            {copy_state === "copied" ? (
              <><CheckCircleIcon className="w-5 h-5" /> Copied</>
            ) : copy_state === "error" ? (
              <><XCircleIcon className="w-5 h-5" /> Error</>
            ) : (
              <><ArrowDownTrayIcon className="w-5 h-5" /> Copy Script</>
            )}
          </button>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 text-sm text-muted-foreground">
          Available for Windows 10/11 (64-bit) · Coming soon to Linux
        </motion.p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#features" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
