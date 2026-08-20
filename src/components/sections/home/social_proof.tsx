"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

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
        setLicense(foundLicense || "GPL-3.0");
      } catch {
        setLicense("GPL-3.0");
      }
    }
    fetchGitHub();
  }, []);

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

  const stats = [
    { value: `${contributors.length || "2+"}`, label: "Contributors", icon: UserGroupIcon, color: "text-brand-accent" },
    { value: "100%", label: "Open Source", icon: CodeBracketIcon, color: "text-blue-400" },
    { value: license || "GPL-3.0", label: "License", icon: ShieldCheckIcon, color: "text-emerald-400" },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-card border border-border">
            <HeartIcon className="w-3.5 h-3.5 text-brand-accent" />
            <span className="text-xs font-medium text-muted-foreground">Open Source Project</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Built by passionate developers
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            An open-source project crafted with care by people who love Minecraft
            and great software.
          </p>
        </div>

        {/* Contributor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {displayList.map((person) => (
            <Link
              key={person.login}
              href={person.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted border border-border shrink-0">
                {person.avatar_url ? (
                  <Image
                    src={person.avatar_url}
                    alt={person.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-lg font-bold text-muted-foreground">
                    {person.name.charAt(0)}
                  </div>
                )}
              </div>

              <div className="text-center min-w-0">
                <p className="text-sm font-semibold text-foreground truncate flex items-center justify-center gap-1.5">
                  {person.name}
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground/40 group-hover:text-brand-accent transition-colors shrink-0" />
                </p>
                <p className="text-xs text-muted-foreground truncate">{person.role}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-xl bg-card border border-border p-5"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-muted shrink-0">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-center mb-4">
            Built With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Rust", "GPUI", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-card border border-border text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="https://github.com/ArexLabs/vesper-website"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-card hover:bg-muted border border-border text-foreground transition-colors"
          >
            <StarIcon className="w-4 h-4 text-yellow-400" />
            Star on GitHub
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
          </Link>
          <Link
            href="https://discord.devflare.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-card hover:bg-muted border border-border text-foreground transition-colors"
          >
            <HeartIcon className="w-4 h-4 text-indigo-400" />
            Join Discord
            <ArrowTopRightOnSquareIcon className="w-3 h-3 text-muted-foreground" />
          </Link>
          <Link
            href="https://github.com/ArexLabs/vesper-client"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-accent hover:bg-brand-accent/90 text-background transition-colors"
          >
            <CodeBracketIcon className="w-4 h-4" />
            View Source
            <ArrowTopRightOnSquareIcon className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
