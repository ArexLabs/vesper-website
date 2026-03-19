"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Search as SearchIcon,
  Home,
  Map,
  History,
  Image as ImageIcon,
  FileText,
  ShieldCheck,
  Scale,
  Gavel,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home Dashboard", href: "/", icon: Home, description: "Back to homepage" },
  { name: "Project Roadmap", href: "/roadmap", icon: Map, description: "Planned features & timeline" },
  { name: "Changelog", href: "/changelog", icon: History, description: "Release history" },
  { name: "Visual Gallery", href: "/gallery", icon: ImageIcon, description: "Screenshots & media" },
  { name: "Legal Notice", href: "/legal", icon: FileText, description: "Legal information" },
  { name: "Privacy Policy", href: "/privacy", icon: ShieldCheck, description: "Data & privacy" },
  { name: "Terms of Use", href: "/terms", icon: Scale, description: "Usage terms" },
  { name: "Terms of Service", href: "/tos", icon: Gavel, description: "Service agreement" },
];

export default function SearchPage() {
  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("vesper:open-cmdk"));
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
      {/* Background */}
      <div className="fixed inset-0 z-[-2] bg-background" />
      <div
        className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <main className="flex-1 w-full flex flex-col items-center pt-16 pb-24 px-6">
        <div className="w-full max-w-2xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Search
            </h1>
            <p className="mt-3 text-muted-foreground">
              Find pages, open the command palette, or jump to a section below.
            </p>
          </motion.div>

          {/* Search bar - opens command palette */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-3"
          >
            <button
              type="button"
              onClick={handleOpenCommandPalette}
              className="w-full group"
            >
              <div className="relative flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-left transition-all hover:border-border/80 hover:bg-muted/50 hover:shadow-sm active:scale-[0.99]">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-colors">
                  <SearchIcon className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">
                    Open command palette
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Search and navigate anywhere
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <kbd className="rounded border border-border bg-muted px-2 py-1 font-mono text-[10px] text-muted-foreground">
                    ⌘K
                  </kbd>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                </div>
              </div>
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Press <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono">⌘</kbd>
              <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono ml-1">K</kbd>{" "}
              anywhere to open the command palette
            </p>
          </motion.div>

          {/* Quick links grid */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Quick access
            </h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-all hover:border-border/80 hover:bg-muted/50 hover:shadow-sm active:scale-[0.99]"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-brand-accent/20 group-hover:text-brand-accent transition-colors">
                    <link.icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-foreground wrap-break-word">
                      {link.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {link.description}
                    </span>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
