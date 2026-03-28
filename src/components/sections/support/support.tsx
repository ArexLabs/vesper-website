"use client";

import { motion } from "framer-motion";
import { SparklesIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";

const contactMethods = [
  {
    name: "Email",
    description: "For general inquiries and support",
    email: "support@devflare.de",
    icon: EnvelopeIcon,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    name: "Discord",
    description: "Join our community for real-time help",
    href: "https://discord.devflare.de",
    icon: IconBrandDiscord,
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  },
  {
    name: "GitHub",
    description: "Report bugs and request features",
    href: "https://github.com/IMDevFlare/vesper-website/issues",
    icon: IconBrandGithub,
    color: "bg-gray-500/10 text-gray-500 border-gray-500/20",
  },
];

const faqItems = [
  {
    question: "How do I download Vesper?",
    answer: "Visit our homepage and run the install script for your platform. Windows users can copy the PowerShell script, while Linux/macOS users can use the curl command.",
  },
  {
    question: "Is Vesper free to use?",
    answer: "Yes, Vesper is completely free and open source. We believe in keeping gaming accessible to everyone.",
  },
  {
    question: "What Minecraft versions are supported?",
    answer: "Vesper supports all major Minecraft versions. During the alpha, we default to 1.20.1 but are working on adding more versions soon.",
  },
  {
    question: "How do I report a bug?",
    answer: "You can report bugs by opening an issue on our GitHub repository or by reaching out on Discord.",
  },
  {
    question: "Can I contribute to Vesper?",
    answer: "Absolutely! We welcome contributions. Check out our CONTRIBUTING.md on GitHub for guidelines.",
  },
];

function ContactCard({ method, index }: { method: typeof contactMethods[0]; index: number }) {
  const Icon = method.icon;
  
  return (
    <motion.a
      href={method.href || `mailto:${method.email}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card/40 hover:bg-card/60 hover:border-brand-accent/30 transition-all group"
    >
      <div className={`p-3 rounded-xl shrink-0 ${method.color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-brand-accent transition-colors">{method.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
        {method.email && (
          <p className="text-sm text-brand-accent mt-2">{method.email}</p>
        )}
      </div>
    </motion.a>
  );
}

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="p-4 rounded-xl border border-border bg-card/30"
    >
      <h4 className="font-medium text-foreground">{item.question}</h4>
      <p className="text-sm text-muted-foreground mt-2">{item.answer}</p>
    </motion.div>
  );
}

export function SupportSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-64 bg-brand-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-accent/10 border border-brand-accent/20"
          >
            <SparklesIcon className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">Need Help?</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Contact & <span className="text-brand-accent italic">Support</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have questions? We&apos;re here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {contactMethods.map((method, i) => (
            <ContactCard key={method.name} method={method} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem key={item.question} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Can&apos;t find what you&apos;re looking for? <a href="mailto:support@devflare.de" className="text-brand-accent hover:underline">Email us </a> and we&apos;ll get back to you.
        </motion.p>
      </motion.div>
    </section>
  );
}
