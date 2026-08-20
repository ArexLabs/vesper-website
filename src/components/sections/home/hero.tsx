"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ExternalLink, ChevronDown, Terminal } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

type OSType = "windows" | "mac" | "linux" | "unknown";

const installScripts: Record<OSType, string> = {
  windows: "irm https://vesper.devflare.de/install | iex",
  mac: "curl -sSfL https://vesper.devflare.de/install | sh",
  linux: "curl -sSfL https://vesper.devflare.de/install | sh",
  unknown: "curl -sSfL https://vesper.devflare.de/install | sh",
};

const osLabels: Record<OSType, string> = {
  windows: "Windows",
  mac: "macOS / Linux",
  linux: "macOS / Linux",
  unknown: "All Platforms",
};

const features = [
  "Blazing fast startup",
  "Built-in mod support",
  "Modern & minimal UI",
  "Free & open source",
];

function detectOS(): OSType {
  if (typeof window === "undefined") return "unknown";
  const platform = navigator.platform.toLowerCase();
  const ua = navigator.userAgent.toLowerCase();
  if (platform.includes("win") || ua.includes("win")) return "windows";
  if (platform.includes("mac") || ua.includes("mac")) return "mac";
  if (platform.includes("linux") || ua.includes("linux")) return "linux";
  return "unknown";
}

export function Hero() {
  const [os, setOS] = useState<OSType>("unknown");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  async function copyInstall() {
    try {
      await navigator.clipboard.writeText(installScripts[os]);
      setCopied(true);
      toast.success("Copied install script!");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Failed to copy install script.");
    }
  }

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] py-20 px-6" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Public beta coming soon</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          Minecraft Launchers,{" "}
          <span className="text-brand-accent italic">Redefined</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8"
        >
          Built from scratch with{" "}
          <span className="text-foreground font-semibold">Rust + GPUI</span>{" "}
          for instant startup, minimal resource usage, and a modern native experience.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground"
            >
              <Check className="w-3.5 h-3.5 text-brand-accent" />
              {f}
            </span>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/ArexLabs/vesper-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-border bg-card hover:bg-card/80 text-foreground transition-all active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
            <Link
              href="https://dc.devflare.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-brand-accent hover:bg-brand-accent/90 text-background transition-all active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              Join Discord
            </Link>
          </div>

          {/* Install script */}
          <div className="w-full max-w-xl">
            <div className="flex items-center gap-2 border border-border rounded-xl bg-card/80 backdrop-blur overflow-hidden">
              <div className="flex items-center gap-2 px-3 text-muted-foreground">
                <Terminal className="w-4 h-4 shrink-0" />
              </div>
              <code className="flex-1 px-1 py-3 text-xs sm:text-sm font-mono text-muted-foreground truncate select-all">
                {installScripts[os]}
              </code>
              <button
                type="button"
                onClick={copyInstall}
                className="flex items-center gap-1.5 px-3 py-2 mr-1 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-green-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              Detected: <span className="text-foreground font-medium">{osLabels[os]}</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
      >
        <button
          type="button"
          onClick={() =>
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
