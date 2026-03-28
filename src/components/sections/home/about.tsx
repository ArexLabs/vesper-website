"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon, HeartIcon, UsersIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IconBrandGithub, IconRocket, IconShield, IconCode, IconHeartHandshake } from "@tabler/icons-react";

interface TeamMember {
  name: string;
  role?: string;
  description: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "ItzzMateo",
    role: "Founder",
    description: "Creator of Vesper Launcher and lead developer.",
    github: "https://github.com/itzzjustmateo/",
  },
  {
    name: "Blaxk",
    role: "Designer",
    description: "UI/UX designer for Vesper Launcher.",
    github: "https://github.com/blax-k/",
  },
];

const stats = [
  { value: "100%", label: "Open Source" },
  { value: "0", label: "Tracking" },
  { value: "Free", label: "Forever" },
];

const values = [
  {
    title: "Performance First",
    description: "Every feature is evaluated by its impact on performance. If it slows things down, it does not belong in Vesper.",
    icon: IconRocket,
  },
  {
    title: "Privacy by Design",
    description: "We do not track you. We do not sell your data. We do not show ads. Your data stays on your machine.",
    icon: IconShield,
  },
  {
    title: "Open Source",
    description: "All our code is publicly available. You can audit it, contribute to it, or fork it for your own projects.",
    icon: IconCode,
  },
  {
    title: "Community Driven",
    description: "Your feedback shapes Vesper. We listen to the community and build what users actually want.",
    icon: IconHeartHandshake,
  },
];

function getGithubUsername(url: string) {
  try {
    const match = url.match(/github\.com\/([^/]+)\/?/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function AboutSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-64 bg-brand-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-accent/10 border border-brand-accent/20"
          >
            <SparklesIcon className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">Our Story</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            About <span className="text-brand-accent italic">Vesper</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern Minecraft launcher built for those who demand performance, privacy, and control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/40 text-center"
            >
              <div className="text-3xl font-bold text-brand-accent mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="p-8 rounded-3xl border border-border bg-card/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-brand-accent/10">
                  <IconShield className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vesper was created to solve a fundamental problem: <span className="text-foreground font-medium">bloat</span>. Most launchers are slow, bloated, and full of features nobody asked for. They track your data, show intrusive ads, and make simple tasks unnecessarily complicated.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building a launcher that puts you in control. Fast startup times, minimal resource usage, and a clean interface that does exactly what you need — <span className="text-brand-accent font-medium">nothing more, nothing less</span>.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-card/60 p-6 hover:shadow-xl border border-border transition-all duration-200"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent/20 group-hover:bg-brand-accent transition-colors" />
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center justify-center rounded-lg bg-brand-accent/10 w-12 h-12 shrink-0">
                      <value.icon className="w-6 h-6 text-brand-accent" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">{value.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
            <UsersIcon className="w-5 h-5 text-brand-accent" />
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teamMembers.map((member, i) => {
              const username = member.github ? getGithubUsername(member.github) : null;
              const pfp = username ? `https://github.com/${username}.png?size=120` : null;

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 hover:bg-card/60 hover:border-brand-accent/50 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-brand-accent/20">
                    {pfp ? (
                      <Image
                        src={pfp}
                        alt={`${member.name} profile`}
                        className="w-16 h-16 object-cover rounded-full"
                        width={64}
                        height={64}
                        referrerPolicy="no-referrer"
                        unoptimized
                      />
                    ) : (
                      <span className="text-xl font-bold text-brand-accent">{member.name[0]}</span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      {member.role && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-brand-accent/10 text-brand-accent font-medium">
                          {member.role}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{member.description}</p>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline mt-1"
                      >
                        <IconBrandGithub className="size-3" />
                        GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="p-6 rounded-2xl border border-border bg-card/40 text-center">
            <IconBrandGithub className="w-8 h-8 text-brand-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Open Source</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Vesper is open source. Contribute, fork, or audit the code anytime.
            </p>
            <a
              href="https://github.com/IMDevFlare/vesper"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-border transition-all"
            >
              View on GitHub
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="p-6 rounded-2xl border border-brand-accent/20 bg-brand-accent/5 text-center">
            <HeartIcon className="w-8 h-8 text-brand-accent mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Made with Passion</h4>
            <p className="text-sm text-muted-foreground">
              Built by gamers, for gamers. We use Vesper every day.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
