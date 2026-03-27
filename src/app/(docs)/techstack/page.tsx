"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandRust, IconBrandNextjs, IconBrandReact, IconBrandTypescript, IconBrandJavascript, IconBrandTailwind, IconBrandCss3, IconBrandHtml5, IconBrandGit, IconBrandGithub, IconBrandDocker, IconBrandMinecraft, IconCode } from "@tabler/icons-react";

const launcher_stack = [
  { name: "Rust", description: "Core launcher application - performance & safety", icon: IconBrandRust },
  { name: "Tauri", description: "WebView-based desktop framework", icon: IconCode },
  { name: "TypeScript", description: "Plugin API and UI scripting", icon: IconBrandTypescript },
  { name: "Minecraft Protocol", description: "Protocol implementation", icon: IconBrandMinecraft },
  { name: "reqwest", description: "HTTP client for API requests", icon: IconCode },
  { name: "tokio", description: "Async runtime for concurrent tasks", icon: IconCode },
  { name: "serde", description: "Serialization/deserialization", icon: IconCode },
];

const website_stack = [
  { name: "Next.js", description: "React framework with Turbopack", icon: IconBrandNextjs },
  { name: "React", description: "UI library", icon: IconBrandReact },
  { name: "TypeScript", description: "Type-safe JavaScript", icon: IconBrandTypescript },
  { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: IconBrandTailwind },
  { name: "Framer Motion", description: "Animation library", icon: IconCode },
  { name: "Better Auth", description: "Authentication", icon: IconCode },
  { name: "Neon", description: "Serverless PostgreSQL", icon: IconCode },
  { name: "Vercel", description: "Deployment platform", icon: IconBrandGithub },
];

const tools = [
  { name: "Git", description: "Version control", icon: IconBrandGit },
  { name: "GitHub", description: "Code hosting & CI/CD", icon: IconBrandGithub },
  { name: "Docker", description: "Containerization", icon: IconBrandDocker },
  { name: "VS Code/ Cursor", description: "IDE", icon: IconCode },
  { name: "Figma", description: "Design", icon: IconCode },
];

function TechItem({ name, description, icon: Icon, delay }: { name: string; description: string; icon: React.ComponentType<{ className?: string }>; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-brand-accent/50 transition-colors"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-accent/10 shrink-0">
        <Icon className="size-6 text-brand-accent" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export default function techstack_page() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
      <div className="fixed inset-0 z-[-2] bg-background" />
      <div
        className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <main className="flex-1 w-full pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Tech Stack
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The technologies powering Vesper Launcher and this website.
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Launcher</h2>
              <p className="text-muted-foreground">Built with Rust for maximum performance and reliability.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {launcher_stack.map((tech, i) => (
                <TechItem key={tech.name} {...tech} delay={i * 0.08} />
              ))}
            </div>
          </section>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Website</h2>
              <p className="text-muted-foreground">Modern web technologies for a fast, responsive experience.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {website_stack.map((tech, i) => (
                <TechItem key={tech.name} {...tech} delay={i * 0.08} />
              ))}
            </div>
          </section>

          <section>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Tools & Services</h2>
              <p className="text-muted-foreground">Development tools and services we rely on.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tech, i) => (
                <TechItem key={tech.name} {...tech} delay={i * 0.08} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
