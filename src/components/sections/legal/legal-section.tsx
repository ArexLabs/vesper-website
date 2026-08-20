"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface LegalSectionProps {
  /** Optional section title. If omitted, no heading is rendered. */
  title?: string;
  /** Optional icon element rendered before the title */
  icon?: ReactNode;
  /** Section body content */
  children: ReactNode;
  /** Animation delay multiplier (default: 0) */
  delay?: number;
}

/**
 * Consistent section card used across all legal pages.
 * Provides animated entry, standardized padding, border, and background.
 */
export function LegalSection({
  title,
  icon,
  children,
  delay = 0,
}: LegalSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30"
    >
      {title && (
        <div className={icon ? "flex items-center gap-3 mb-4" : "mb-4"}>
          {icon}
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        </div>
      )}
      {children}
    </motion.section>
  );
}
