"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqs = [
  { question: "What is Vesper?", answer: "Vesper is a minimal, high-performance Minecraft launcher and toolkit for creators and people who like to mess with or customize their game. It gives you full control over your Minecraft setup and removes all unnecessary bloat." },
  { question: "Is Vesper open source?", answer: <><span>Yes! Vesper is open source. You can view the code, contribute, or suggest features on{" "}</span><Link href="https://github.com/ArexLabs/vesper-website" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline hover:opacity-80">GitHub</Link><span>.</span></> },
  { question: "Will Vesper work with modpacks?", answer: "Yes. Vesper is designed to support modded Minecraft — Fabric, Forge, Quilt, and more. Manage your modpacks like real projects, not just folders." },
  { question: "Who is Vesper for?", answer: "Vesper is for players who want control, speed, and transparency — creators, people who like to change things, or anyone who wants to go beyond what other launchers offer." },
  { question: "What platforms does Vesper support?", answer: "During the closed beta, Vesper will only support Windows (10/11, 64-bit). Public beta will add Linux support as well. macOS support is undecided and may come later." },
  { question: "Is my data safe with Vesper?", answer: <><span>Yes. Vesper uses Microsoft OAuth2 for login and never tracks you or sends unnecessary data! Privacy and security are core priorities.{" "}</span><Link href="/privacy" target="_blank" className="text-brand-accent underline hover:opacity-80">Learn more about it</Link><span>.</span></> },
  { question: "How do I install Vesper?", answer: "You can install Vesper easily using the one-line install script on our homepage! Just copy and paste it into your terminal. Alternatively, you can download a .exe (for Windows) or the right installer for your platform directly from the website." },
  { question: "Can I migrate from other launchers?", answer: "Importing from other launchers is planned. In the meantime, you can manually import your modpacks or instances." },
  { question: "How often does Vesper update?", answer: "Vesper features seamless automatic updates to keep your experience smooth, secure, and up-to-date." },
  { question: "Where can I get support or provide feedback?", answer: <><span>Join our{" "}</span><Link href="https://dc.devflare.de" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline hover:opacity-80">Discord community</Link><span> or open an issue or discussion on{" "}</span><Link href="https://github.com/ArexLabs/vesper-website" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline hover:opacity-80">GitHub</Link><span>! We are always glad to help or hear your ideas.</span></> },
];

export default function faq() {
  const [open_index, set_open_index] = useState<number | null>(null);

  const toggle_faq = (idx: number) => set_open_index((prev) => (prev === idx ? null : idx));

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-24 border-t border-border/50">
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[60vw] max-w-2xl h-[110px] bg-brand-accent/10 blur-[75px] -z-10 pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4 tracking-tight">
          FAQ<span className="text-brand-accent">.</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed md:text-lg">
          Answers to what people usually want to know about Vesper and why it is different.
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl space-y-5">
        {faqs.map((faq, i) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="rounded-lg bg-muted/20 border border-border hover:border-brand-accent/40 transition-all"
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none group"
              onClick={() => toggle_faq(i)}
              aria-expanded={open_index === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="flex items-center font-mono text-lg md:text-xl font-bold text-foreground group-hover:text-brand-accent transition-colors">
                <ChevronDownIcon
                  className={`w-6 h-6 mr-2 transition-transform duration-200 ${open_index === i ? "rotate-180 text-brand-accent" : "rotate-0 text-muted-foreground"}`}
                  aria-hidden="true"
                />
                {faq.question}
              </span>
            </button>
            <AnimatePresence>
              {open_index === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{ open: { height: "auto", opacity: 1 }, collapsed: { height: 0, opacity: 0 } }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  className="px-14 pb-5 text-muted-foreground text-base font-medium overflow-hidden -mt-3"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
