"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  ArrowDownTrayIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { toast } from "sonner";

const INSTALL_SCRIPT = "curl -sSfL https://vesper.devflare.de/install | sh";

export function Hero() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INSTALL_SCRIPT);
      setCopyState("copied");
      toast.success("Copied install script!");
      setTimeout(() => setCopyState("idle"), 1800);
    } catch (e) {
      setCopyState("error");
      toast.error("Failed to copy install script.");
      setTimeout(() => setCopyState("idle"), 2500);
    }
  }

  return (
    <section
      className="relative flex flex-col items-center justify-center max-w-7xl mx-auto min-h-[80vh] py-32 px-6"
      id="hero"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-72 bg-brand-accent/10 rounded-full blur-[100px] -z-10" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-center tracking-tight text-foreground max-w-5xl drop-shadow"
      >
        Minecraft, <span className="text-brand-accent italic">reimagined.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22 }}
        className="mt-6 text-xl md:text-2xl text-muted-foreground text-center max-w-2xl"
      >
        <span className="font-semibold text-foreground">Vesper Launcher</span> is a blazingly fast, modern and modular Minecraft launcher designed for
        performance enthusiasts and power users.
      </motion.p>

      {/* Install script call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.36 }}
        className="mt-12 flex items-center justify-center w-full max-w-3xl"
      >
        <div className="flex flex-col w-full gap-4">
          <div className="border border-border rounded-lg bg-card flex items-center px-2 py-2 overflow-auto">
            <code className="text-[0.97rem] font-mono text-wrap text-foreground px-1 select-all flex-1">
              {INSTALL_SCRIPT}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              className={`ml-2 flex items-center justify-center transition-all rounded-md px-3 py-2 border-2 border-transparent bg-foreground text-background hover:border-brand-accent/40 font-mono text-sm font-semibold active:scale-95 ${
                copyState === "copied"
                  ? "bg-green-600 border-green-700"
                  : copyState === "error"
                  ? "bg-destructive border-destructive"
                  : ""
              }`}
              aria-label={
                copyState === "copied"
                  ? "Copied!"
                  : copyState === "error"
                  ? "Copy failed"
                  : "Copy install script"
              }
              disabled={copyState === "copied"}
            >
              {copyState === "copied" ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : copyState === "error" ? (
                <XCircleIcon className="w-5 h-5" />
              ) : (
                <ArrowDownTrayIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {/* Feedback */}
          {copyState === "copied" && (
            <span className="text-green-600 text-xs font-mono ml-2 transition-opacity duration-300">Copied to clipboard!</span>
          )}
          {copyState === "error" && (
            <span className="text-destructive text-xs font-mono ml-2 transition-opacity duration-300">Failed to copy.</span>
          )}
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.50 }}
        className="mt-12 text-sm md:text-base text-muted-foreground text-center max-w-xl"
      >
        Fast startup. Modern UI. Built-in mod support. Free & open source.
      </motion.p>
    </section>
  );
}