"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DiscordWidget from "@/components/ui/discord-widget";

const contactMethods = [
  {
    name: "Email",
    description: "For general inquiries and support",
    email: "support@devflare.de",
    icon: Mail,
    href: "mailto:support@devflare.de",
  },
  {
    name: "Discord",
    description: "Join our community for real-time help",
    icon: MessageCircle,
    href: "https://dc.devflare.de",
  },
  {
    name: "GitHub",
    description: "Report bugs and request features",
    icon: Github,
    href: "https://github.com/ArexLabs/vesper-website/issues",
  },
];

const faqItems = [
  {
    question: "How do I download Vesper?",
    answer: "Visit our homepage and run the install script for your platform.",
  },
  {
    question: "Is Vesper free to use?",
    answer: "Yes, Vesper is completely free and open source.",
  },
  {
    question: "What Minecraft versions are supported?",
    answer: "Vesper supports all major Minecraft versions.",
  },
  {
    question: "How do I report a bug?",
    answer: "Open an issue on GitHub or reach out on Discord.",
  },
];

export function SupportSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Contact & <span className="text-brand-accent italic">Support</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions? We&apos;re here to help. Reach out through any of the
            channels below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn(
                  "flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card",
                  "hover:border-brand-accent/50 hover:bg-card/80 transition-all group text-center"
                )}
              >
                <div className="p-4 rounded-2xl bg-muted mb-4">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-brand-accent transition-colors">
                  {method.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {method.description}
                </p>
                {method.email && (
                  <p className="text-sm text-brand-accent mt-3 font-medium">
                    {method.email}
                  </p>
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Discord Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Join Our Community
          </h3>
          <div className="max-w-md mx-auto">
            <DiscordWidget />
          </div>
        </motion.div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <h3 className="text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h3>
            <Link
              href="/faq"
              className={cn(
                "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium",
                "bg-muted text-muted-foreground hover:text-brand-accent hover:bg-muted/80 transition-colors"
              )}
            >
              View All
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl border border-border bg-card hover:bg-card/80 transition-colors"
              >
                <h4 className="font-medium text-foreground mb-2">
                  {item.question}
                </h4>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground"
        >
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/faq" className="text-brand-accent hover:underline">
            Check our FAQ
          </Link>{" "}
          or{" "}
          <a
            href="mailto:support@devflare.de"
            className="text-brand-accent hover:underline"
          >
            email us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
