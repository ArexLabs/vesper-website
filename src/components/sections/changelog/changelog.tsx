"use client";

import { motion, type Variants } from "framer-motion";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { AlertCircle, ArrowUpRight, Clock } from "lucide-react";
import { EmptyState } from "@/components/ui/empty-state";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ── Data ──────────────────────────────────────────────────────────────────────

const changelog = [
  {
    version: "alpha-0.0.0",
    displayVersion: "Alpha v0.0.0",
    date: "2026-03-27",
    isReleased: false,
    changes: [
      {
        type: "Added",
        items: [
          "Initial alpha release of the Vesper Client Desktop Client.",
          "Multi-platform builds for Windows (.exe), Mac (.dmg), and Linux (.AppImage, .deb, .rpm).",
          "Modern user interface with light and dark mode support.",
          "Launcher autoupdate support (checks for new versions on startup).",
          "Simple onboarding and account login flow.",
          "First implementation of Minecraft modpack installation for supported platforms.",
          "Integrated automatic Java runtime download for Minecraft instances.",
        ],
      },
      {
        type: "Known Issues",
        items: [
          "Authentication is basic and may not fully reflect future planned account features.",
          "Not all Minecraft versions, mods, or loaders are fully tested in this early alpha.",
          "By default minecraft version 1.20.1 is selected",
        ],
      },
    ],
  },
];

// ── Change-type badge styling (solid, no gradients) ───────────────────────────

const typeStyles: Record<string, { bg: string; text: string }> = {
  Added: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  Improved: {
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
  },
  Removed: {
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
  },
  Fixed: {
    bg: "bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
  },
  "Known Issues": {
    bg: "bg-yellow-400/10",
    text: "text-yellow-600 dark:text-yellow-400",
  },
};

// ── Animation variants ────────────────────────────────────────────────────────

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const entryVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const dotVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// ── Change type badge ─────────────────────────────────────────────────────────

function ChangeTypeBadge({ type }: { type: string }) {
  const style = typeStyles[type] ?? {
    bg: "bg-muted",
    text: "text-muted-foreground",
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold tracking-wide",
        style.bg,
        style.text,
      )}
    >
      {type}
    </span>
  );
}

// ── Single changelog entry ────────────────────────────────────────────────────

function ChangelogEntry({ entry }: { entry: (typeof changelog)[number] }) {
  return (
    <motion.article
      variants={entryVariants}
      className="relative grid gap-6 lg:grid-cols-[1fr_48px_1fr]"
    >
      {/* Date column — left side on desktop */}
      <div className="hidden lg:flex flex-col items-end pr-4 pt-1">
        <time
          dateTime={entry.date}
          className="text-sm text-muted-foreground tabular-nums"
        >
          {new Date(entry.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {!entry.isReleased && (
          <span className="inline-flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
            <ClockIcon className="w-3 h-3" />
            Upcoming
          </span>
        )}
      </div>

      {/* Timeline spine */}
      <div className="hidden lg:flex flex-col items-center relative">
        {/* Dot */}
        <motion.span
          variants={dotVariants}
          className={cn(
            "relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 shrink-0",
            entry.isReleased
              ? "border-border bg-card text-muted-foreground"
              : "border-brand-accent bg-card text-brand-accent",
          )}
        >
          <span className="text-[10px] font-bold leading-none">
            {entry.version.replace(/[^0-9.]/g, "").split(".")[1] ?? "0"}
          </span>
        </motion.span>

        {/* Line (only if there are more entries below — always show for now) */}
        <div className="w-px flex-1 bg-border min-h-8" />
      </div>

      {/* Content card — right side on desktop, full width on mobile */}
      <div className="lg:pl-4">
        {/* Mobile header */}
        <div className="flex items-center gap-3 mb-4 lg:hidden">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-brand-accent bg-card text-brand-accent shrink-0">
            <span className="text-[10px] font-bold leading-none">
              {entry.version.replace(/[^0-9.]/g, "").split(".")[1] ?? "0"}
            </span>
          </span>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {entry.displayVersion}
            </h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <CalendarIcon className="w-3 h-3" />
              <time dateTime={entry.date}>
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {!entry.isReleased && (
                <>
                  <span className="text-border">·</span>
                  <span className="inline-flex items-center gap-0.5 text-muted-foreground">
                    <ClockIcon className="w-3 h-3" />
                    Upcoming
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 transition-colors hover:border-brand-accent/30">
          {/* Desktop header */}
          <div className="hidden lg:flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold text-foreground">
              {entry.displayVersion}
            </h3>
            <time
              dateTime={entry.date}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground tabular-nums"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              {new Date(entry.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* Changes */}
          <div className="space-y-5">
            {entry.changes.map((change) => (
              <div key={change.type}>
                <ChangeTypeBadge type={change.type} />
                <ul className="mt-2.5 space-y-1.5">
                  {change.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed pl-3.5 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ── Section export ────────────────────────────────────────────────────────────

export function ChangelogSection() {
  if (changelog.length === 0) {
    return (
      <section className="py-24 px-6">
        <EmptyState
          icon={<Clock className="w-7 h-7 text-muted-foreground" />}
          title="Nothing here yet"
          description="No changelog entries available yet. Check back soon for updates on Vesper's evolution."
        />
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Change<span className="text-brand-accent">log</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            Follow the evolution of Vesper Client. Check out our{" "}
            <Link
              className="text-brand-accent hover:underline inline-flex items-center gap-0.5"
              target="_blank"
              href="https://github.com/ArexLabs/vesper-client/blob/main/CHANGELOG.md"
            >
              CHANGELOG.md
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>{" "}
            on GitHub for more details.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              This is the Vesper Client{" "}
              <strong className="text-foreground">Desktop App</strong> changelog.
              Use at your own risk.
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {changelog.map((entry) => (
            <ChangelogEntry key={entry.version} entry={entry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
