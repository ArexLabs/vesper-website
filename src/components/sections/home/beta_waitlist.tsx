"use client";

import { motion } from "framer-motion";
import { Users, Clock, Code, ArrowUpRight, Zap, Shield, Palette } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    icon: Zap,
    title: "Instant Startup",
    description: "Experience sub-second launch times powered by Rust + GPUI.",
  },
  {
    icon: Users,
    title: "Shape the Product",
    description: "Your feedback directly influences features and priorities.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Full source code access. Contribute, fork, or just learn.",
  },
  {
    icon: Shield,
    title: "Early Access",
    description: "Get new features before anyone else — no waiting.",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Test and request UI themes before they ship publicly.",
  },
  {
    icon: Clock,
    title: "Priority Support",
    description: "Direct line to the dev team via private Discord channel.",
  },
];

export function BetaWaitlist() {
  return (
    <section id="beta" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-border bg-card/60">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Spots are limited</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Join the <span className="text-brand-accent italic">Alpha</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed md:text-lg">
          Be among the first to experience the next generation of Minecraft launching.
          Shape the product with your feedback.
        </p>
      </motion.div>

      {/* Perks grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {perks.map((perk, i) => (
          <motion.div
            key={perk.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex gap-4 p-5 rounded-xl border border-border bg-card/40"
          >
            <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-lg bg-brand-accent/10">
              <perk.icon className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{perk.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{perk.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <Link
          href="https://dc.devflare.de"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-accent hover:bg-brand-accent/90 text-background transition-all active:scale-95"
        >
          Apply on Discord
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground">
          Free · No credit card · Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}
