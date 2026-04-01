"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { faqs } from "@/data/faqs";
import Link from "next/link";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        (faq.answer?.toString().toLowerCase().includes(query) ?? false)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 selection:bg-brand-accent/30 selection:text-brand-accent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions<span className="text-brand-accent">.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed md:text-lg">
            Everything you need to know about Vesper. Can&apos;t find an answer? Reach out on Discord or GitHub.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="relative max-w-xl mx-auto">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted/30 border border-border focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 text-foreground placeholder:text-muted-foreground transition-all"
            />
          </div>
        </motion.div>

        {filteredFAQs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground mb-4">No questions found matching &quot;{searchQuery}&quot;</p>
            <Link href="https://dc.devflare.de" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
              Ask us on Discord →
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {filteredFAQs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="border-b border-border/30 pb-6"
              >
                <h3 className="font-mono font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
