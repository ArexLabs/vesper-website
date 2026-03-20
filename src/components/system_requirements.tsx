"use client";

import { motion } from "framer-motion";
import {
  CpuChipIcon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const requirements = [
  {
    label: "Java Runtime",
    value: "Java 17 or 21 (latest recommended)",
    icon: CpuChipIcon,
  },
  {
    label: "OS Support",
    value: "Windows 10/11 (64-bit)",
    icon: ComputerDesktopIcon,
  },
  {
    label: "Integrations",
    value: "Discord (Rich Presence & Modloader status)",
    icon: CheckBadgeIcon,
  },
];

export function SystemRequirements() {
  return (
    <section
      id="system"
      className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/50"
      aria-labelledby="system-req-heading"
    >
      {/* Glow background */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[80vw] max-w-3xl h-[120px] bg-brand-accent/10 blur-[85px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2
          id="system-req-heading"
          className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-foreground mb-3"
        >
          <span className="text-brand-accent">System</span> Requirements
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
          Vesper is designed for seamless, fast performance—lightweight on resources, but tuned for modern desktop hardware.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {requirements.map((req, i) => (
          <motion.div
            key={req.label}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.45, delay: i * 0.09 }}
            className="flex flex-col items-center border border-border bg-card/70 rounded-2xl px-7 py-8 text-center shadow-sm hover:border-brand-accent/40 transition-all group"
            tabIndex={0}
            aria-label={req.label}
          >
            <span className="flex items-center justify-center rounded-lg bg-brand-accent/10 w-14 h-14 mb-5">
              <req.icon className="w-8 h-8 text-brand-accent drop-shadow group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-mono font-semibold text-foreground mb-2">
              {req.label}
            </h3>
            <p className="text-base text-muted-foreground font-medium">
              {req.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-12 text-center"
      >
        <span className="inline-block font-mono text-xs text-muted-foreground/80 px-4 py-2 rounded bg-muted/40">
          {/* Linux and macOS support coming soon! */}
          Closed beta coming soon! Sign up to be among the first to try Vesper!
        </span>
      </motion.div>
    </section>
  );
}
