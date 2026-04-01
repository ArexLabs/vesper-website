"use client";

import { motion } from "framer-motion";
import { UsersIcon, StarIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const contributors = [
  { name: "Mateo", avatar: "M", role: "Founder & Lead Developer" },
  { name: "DevFlare", avatar: "D", role: "Maintainer" },
];

export function social_proof() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Built by <span className="text-brand-accent italic">passionate</span> developers
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          An open-source project dedicated to creating the best Minecraft launching experience.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {contributors.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/60 border border-border"
          >
            <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-brand-accent">{person.avatar}</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a
          href="https://github.com/ArexLabs/vesper-website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/60 border border-border hover:border-brand-accent/40 transition-colors"
        >
          <StarIcon className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium text-foreground">Star on GitHub</span>
          <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
        </a>
        <a
          href="https://github.com/ArexLabs/vesper-client"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/60 border border-border hover:border-brand-accent/40 transition-colors"
        >
          <CodeBracketIcon className="w-4 h-4 text-brand-accent" />
          <span className="text-sm font-medium text-foreground">Check Repo</span>
          <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
}
