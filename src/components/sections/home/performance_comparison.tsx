"use client";

import { motion } from "framer-motion";
import { BoltIcon, CpuChipIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const comparisons = [
  {
    metric: "Startup Time",
    vesper: "Under 1 second",
    traditional: "3-10 seconds",
    icon: BoltIcon,
    vesperPercent: 95,
    description: "Native Rust binary vs Electron overhead",
  },
  {
    metric: "Memory Usage",
    vesper: "~50MB idle",
    traditional: "200-500MB+",
    icon: CpuChipIcon,
    vesperPercent: 85,
    description: "Lightweight native UI vs heavy framework",
  },
  {
    metric: "Disk Footprint",
    vesper: "~15MB",
    traditional: "150-500MB",
    icon: RocketLaunchIcon,
    vesperPercent: 90,
    description: "Minimal dependencies vs bundled runtime",
  },
  {
    metric: "Responsiveness",
    vesper: "Instant interaction",
    traditional: "Input lag common",
    icon: BoltIcon,
    vesperPercent: 90,
    description: "Direct native rendering vs web container",
  },
];

export function performance_comparison() {
  return (
    <section id="performance" className="max-w-6xl mx-auto px-6 py-24 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Why <span className="text-brand-accent italic">Vesper</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed md:text-lg">
          Built from the ground up with performance as the foundation. See how we compare to traditional launchers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisons.map((item, i) => (
          <motion.div
            key={item.metric}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl bg-card/60 border border-border p-6 hover:border-brand-accent/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center rounded-lg bg-brand-accent/10 w-10 h-10">
                <item.icon className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.metric}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Traditional</span>
                <span className="text-muted-foreground font-mono">{item.traditional}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-muted-foreground/30 rounded-full" style={{ width: '100%' }} />
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-accent font-semibold">Vesper</span>
                <span className="text-brand-accent font-mono font-semibold">{item.vesper}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.vesperPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="absolute left-0 top-0 h-full bg-brand-accent rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-xs text-muted-foreground mt-6"
      >
        *Illustrative metrics based on typical launcher benchmarks. Actual performance may vary.
      </motion.p>
    </section>
  );
}
