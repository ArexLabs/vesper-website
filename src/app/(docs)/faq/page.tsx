"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { faqs, type FAQItem } from "@/data/faqs";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Logical category groups — keeps faqs.ts untouched
const categories = [
  {
    label: "General",
    description: "The basics about Vesper",
    questions: [
      "What is Vesper?",
      "Who is Vesper for?",
      "What makes Vesper different from other launchers?",
      "Is Vesper open source?",
      "Is Vesper free to use?",
    ],
  },
  {
    label: "Setup & Installation",
    description: "Getting Vesper up and running",
    questions: [
      "How do I install Vesper?",
      "What platforms does Vesper support?",
      "What Java version does Vesper require?",
      "Can I migrate from other launchers?",
    ],
  },
  {
    label: "Features & Compatibility",
    description: "Modpacks, accounts, and Minecraft support",
    questions: [
      "Will Vesper work with modpacks?",
      "Does Vesper support Forge modpacks?",
      "Can I use my existing Minecraft account?",
      "Does Vesper support resource packs?",
      "Can I run multiple instances of Minecraft with Vesper?",
      "Does Vesper work with OptiFine?",
      "Can I create my own modpack with Vesper?",
      "Can I use Vesper for mod development?",
    ],
  },
  {
    label: "Privacy & Safety",
    description: "How we handle your data",
    questions: [
      "Is my data safe with Vesper?",
      "Does Vesper collect any telemetry?",
    ],
  },
  {
    label: "Updates & Support",
    description: "Getting help and staying current",
    questions: [
      "How often does Vesper update?",
      "Where can I get support or provide feedback?",
      "How do I report a bug or request a feature?",
    ],
  },
];

// Build a fast lookup map from the flat FAQ array
const faqMap = new Map<string, FAQItem>(
  faqs.map((faq) => [faq.question, faq])
);

// ─── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300",
        isOpen
          ? "border-brand-accent/40 bg-brand-accent/5"
          : "border-border/40 bg-card/30 hover:border-brand-accent/25 hover:bg-card/50"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      >
        <span
          className={cn(
            "font-semibold text-sm sm:text-base transition-colors duration-200",
            isOpen ? "text-brand-accent" : "text-foreground group-hover:text-brand-accent"
          )}
        >
          {faq.question}
        </span>
        <ChevronDownIcon
          className={cn(
            "w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180 text-brand-accent"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Search Bar ────────────────────────────────────────────────────────────────

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative max-w-xl mx-auto">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        placeholder="Search questions..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full pl-12 pr-12 py-3.5 rounded-xl bg-card/50 border border-border/60 text-foreground placeholder:text-muted-foreground transition-all duration-200",
          "focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:bg-card/80",
          "hover:border-border"
        )}
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <XMarkIcon className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Category Section ──────────────────────────────────────────────────────────

function CategorySection({
  category,
  openStates,
  onToggle,
}: {
  category: (typeof categories)[number];
  openStates: Record<string, boolean>;
  onToggle: (question: string) => void;
}) {
  const items = category.questions
    .map((q) => faqMap.get(q))
    .filter(Boolean) as FAQItem[];

  if (items.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground tracking-tight">
          {category.label}
        </h2>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </div>
      <div className="space-y-3">
        {items.map((faq) => (
          <AccordionItem
            key={faq.question}
            faq={faq}
            isOpen={openStates[faq.question] ?? false}
            onToggle={() => onToggle(faq.question)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── FAQ Page ──────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

  const toggle = useCallback((question: string) => {
    setOpenStates((prev) => ({ ...prev, [question]: !prev[question] }));
  }, []);

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        (faq.answer?.toString().toLowerCase().includes(query) ?? false)
    );
  }, [searchQuery]);

  // When searching, flatten into a single list; otherwise show categories
  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 selection:bg-brand-accent/30 selection:text-brand-accent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
            <span className="text-brand-accent">.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            Everything you need to know about Vesper. Can&apos;t find an
            answer? Reach out on Discord or GitHub.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10"
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </motion.div>

        {/* Results count when searching */}
        {isSearching && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-6"
          >
            {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""}{" "}
            for &quot;{searchQuery}&quot;
          </motion.p>
        )}

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          {filteredFAQs.length === 0 && isSearching ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
                <MagnifyingGlassIcon className="w-7 h-7 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-base">
                No results for &quot;{searchQuery}&quot;
              </p>
              <p className="text-muted-foreground/60 text-sm mt-1">
                Try a different search term
              </p>
            </motion.div>
          ) : isSearching ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {filteredFAQs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.02 }}
                >
                  <AccordionItem
                    faq={faq}
                    isOpen={openStates[faq.question] ?? false}
                    onToggle={() => toggle(faq.question)}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-10 sm:space-y-12"
            >
              {categories.map((category, i) => (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <CategorySection
                    category={category}
                    openStates={openStates}
                    onToggle={toggle}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="https://dc.devflare.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-accent text-background font-semibold hover:bg-brand-accent/90 active:scale-[0.97] transition-all"
            >
              Join Discord
            </Link>
            <Link
              href="https://github.com/ArexLabs/vesper-client"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-accent/30 text-foreground hover:border-brand-accent hover:bg-brand-accent/10 active:scale-[0.97] transition-all"
            >
              View on GitHub
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
