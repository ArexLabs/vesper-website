"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  StarIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface ContributorData {
  login: string;
  avatar_url: string;
  html_url: string;
}

const KNOWN_CONTRIBUTORS = [
  { login: "itzzjustmateo", name: "ItzzMateo", role: "Founder & Lead Developer" },
  { login: "blax-k", name: "Blaxk", role: "UI/UX Designer" },
];

const REPOS = ["ArexLabs/vesper-website", "ArexLabs/vesper-client"];

export function social_proof() {
  const [contributors, setContributors] = useState<ContributorData[]>([]);
  const [license, setLicense] = useState("");

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [websiteData, clientData] = await Promise.all(
          REPOS.map(async (repo) => {
            const [contributorsRes, repoRes] = await Promise.all([
              fetch(`https://api.github.com/repos/${repo}/contributors`),
              fetch(`https://api.github.com/repos/${repo}`),
            ]);

            const contributors: ContributorData[] = contributorsRes.ok
              ? await contributorsRes.json()
              : [];

            let repoLicense = "";
            if (repoRes.ok) {
              const data = await repoRes.json() as { license?: { spdx_id: string } | null };
              const spdx = data.license?.spdx_id;
              if (spdx && spdx !== "NOASSERTION") {
                repoLicense = spdx;
              }
            }

            return { contributors, license: repoLicense };
          })
        );

        const seen = new Set<string>();
        const merged: ContributorData[] = [];
        for (const { contributors } of [websiteData, clientData]) {
          for (const c of contributors) {
            const key = c.login.toLowerCase();
            if (!seen.has(key)) {
              seen.add(key);
              merged.push(c);
            }
          }
        }
        setContributors(merged);

        const foundLicense = websiteData.license || clientData.license;
        setLicense(foundLicense || "No License");
      } catch {
        // fallback to static data
        setLicense("No License");
      }
    }
    fetchGitHub();
  }, []);

  const stats = [
    { value: `${contributors.length || "2+"}`, label: "Contributors", icon: UserGroupIcon, color: "text-brand-accent" },
    { value: "100%", label: "Open Source", icon: CodeBracketIcon, color: "text-blue-400" },
    { value: license || "No License", label: "License", icon: ShieldCheckIcon, color: "text-emerald-400" },
  ];

  const displayList =
    contributors.length > 0
      ? contributors.map((c) => {
          const known = KNOWN_CONTRIBUTORS.find(
            (k) => k.login.toLowerCase() === c.login.toLowerCase()
          );
          return {
            login: c.login,
            name: known?.name ?? c.login,
            role: known?.role ?? "Contributor",
            avatar_url: c.avatar_url,
            html_url: c.html_url,
          };
        })
      : KNOWN_CONTRIBUTORS.map((k) => ({
          login: k.login,
          name: k.name,
          role: k.role,
          avatar_url: "",
          html_url: `https://github.com/${k.login}`,
        }));

  const techStack = [
    "Rust", "Tauri", "TypeScript", "React", "Next.js", "Tailwind CSS",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/50 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[90vw] max-w-4xl h-[300px] bg-brand-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-accent/10 border border-brand-accent/20"
          >
            <HeartIcon className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-medium text-brand-accent">Open Source Project</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Built by{" "}
            <span className="text-brand-accent italic">passionate</span>{" "}
            developers
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            An open-source project crafted with care by people who love Minecraft
            and great software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {displayList.map((person, i) => (
            <motion.div
              key={person.login}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={person.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 rounded-2xl bg-card/40 border border-border hover:border-foreground/20 transition-all duration-300 p-6 hover:-translate-y-1 hover:scale-[1.01] block"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-brand-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-card border border-border shrink-0">
                  {person.avatar_url ? (
                    <Image
                      src={person.avatar_url}
                      alt={person.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lg font-bold text-muted-foreground bg-card">
                      {person.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-foreground flex items-center gap-2">
                    {person.name}
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-brand-accent transition-colors" />
                  </p>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-card/30 border border-border/50 p-5"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-accent/5 shrink-0">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center mb-4">
            Built With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-card/40 border border-border/50 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link
            href="https://github.com/ArexLabs/vesper-website"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all active:scale-95"
          >
            <StarIcon className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
            Star on GitHub
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
          </Link>
          <Link
            href="https://discord.devflare.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all active:scale-95"
          >
            <HeartIcon className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            Join Discord
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
          </Link>
          <Link
            href="https://github.com/ArexLabs/vesper-client"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-accent hover:bg-brand-accent/90 text-background transition-all active:scale-95"
          >
            <CodeBracketIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View Source
            <ArrowTopRightOnSquareIcon className="w-3 h-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
