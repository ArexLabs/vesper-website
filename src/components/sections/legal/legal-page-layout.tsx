"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface LegalPageLayoutProps {
  /** The first part of the page title (rendered in default text color) */
  title: string;
  /** The highlighted/italic word in the title (rendered in accent color) */
  highlightedWord: string;
  /** Subtitle description below the title */
  description: string;
  /** Footer text, defaults to "Last updated: April 2026" */
  lastUpdated?: string;
  /** Page content (LegalSection components) */
  children: ReactNode;
}

/**
 * Shared layout wrapper for all legal pages.
 * Provides consistent background, header animation, content container, and footer.
 */
export function LegalPageLayout({
  title,
  highlightedWord,
  description,
  lastUpdated = "Last updated: April 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
      <div className="fixed inset-0 z-[-2] bg-background" />

      <main className="flex-1 w-full pt-16">
        <section className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {title}{" "}
              <span className="text-brand-accent italic">{highlightedWord}</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="space-y-8">{children}</div>

          <hr className="my-12 border-border/40" />
          <p className="text-sm text-muted-foreground text-center">
            {lastUpdated}
          </p>
        </section>
      </main>
    </div>
  );
}
