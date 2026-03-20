import { motion } from "framer-motion";
import {
  BoltIcon,
  CodeBracketIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { cn } from "../lib/utils";

const features = [
  {
    title: "Instant Launch",
    description: "Launch Minecraft in a flash! No waiting around, just hop in and play.",
    icon: BoltIcon,
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Effortless Modding",
    description: "Install and manage mods with a click via Modrinth & CurseForge integration.",
    icon: CodeBracketIcon,
    className: "col-span-1",
  },
  {
    title: "Modern Design",
    description: "A focused, elegant interface crafted for clarity, speed, and ease of use.",
    icon: CubeTransparentIcon,
    className: "col-span-1",
  },
  {
    title: "Account Security",
    description: "Microsoft OAuth login with robust privacy—never tracks, always secure.",
    icon: ShieldCheckIcon,
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "Automatic Updates",
    description: "Stay current effortlessly—updates arrive seamlessly and keep you safe.",
    icon: BoltIcon,
    className: "col-span-1",
  },
];

export function FeatureCards() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-24"
      aria-labelledby="features-heading"
    >
      <motion.h2
        id="features-heading"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-4xl md:text-5xl font-bold text-center tracking-tight text-foreground mb-8"
      >
        Powerful Features, <span className="text-brand-accent italic">No Compromises</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.13 }}
        className="max-w-2xl mx-auto mb-12 text-center text-lg text-muted-foreground"
      >
        Designed with performance, safety, and customization in mind. Explore what sets Vesper apart.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: i * 0.13 }}
            className={cn(
              "group relative overflow-hidden rounded-xl bg-card/60 p-8 hover:shadow-xl border border-border transition-all duration-200",
              feature.className
            )}
            tabIndex={0}
            aria-label={feature.title}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors" />
            <div className="flex flex-col h-full justify-between relative z-10">
              {/* The icon background below is a square thanks to no 'rounded-full', just 'rounded-lg' */}
              <span className="flex items-center justify-center rounded-lg bg-brand-accent/10 w-14 h-14 mb-6 aspect-square">
                <feature.icon className="w-8 h-8 text-brand-accent drop-shadow" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
