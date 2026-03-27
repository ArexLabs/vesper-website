"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandGithub, IconHeart, IconUsers, IconTarget, IconRocket } from "@tabler/icons-react";

// Define a type for team members
type TeamMember = {
  name: string;
  role?: string;
  description: string;
  github?: string;
  pfp?: string;
};

const team_members: TeamMember[] = [
  {
    name: "ItzzMateo",
    role: "Founder",
    description: "Creator of Vesper Launcher and lead developer of website.",
    github: "https://github.com/itzzjustmateo/",
    // pfp: "/static/pfps/itzzmateo.png", // Example with explicit pfp
  },
  {
    name: "Blaxk",
    role: "Designer (in Code)",
    description: "UI/UX designer for Vesper Launcher.",
    github: "https://github.com/blax-k/",
    // pfp: "/static/pfps/blaxk.png",
  },
];

// Define a type for contributors
type Contributor = {
  name: string;
  description?: string;
  github?: string;
  pfp?: string;
};

const contributors: Contributor[] = [
  // Example:
  // {
  //   name: "Contributor1",
  //   description: "Fixes & features",
  //   github: "https://github.com/username",
  //   pfp: "/static/pfps/contributor1.png"
  // },
  // If left empty or only a general "Open Source Community", will fall back to default message
  // { name: "Open Source Community", description: "Thank you to all contributors" },
];

// Utility function to extract the GitHub username from a GitHub profile URL
function getGithubUsername(url: string) {
  try {
    const match = url.match(/github\.com\/([^/]+)\/?/i);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function getProfilePicture(member: TeamMember | Contributor) {
  if (member.pfp) return member.pfp;
  if (member.github) {
    const username = getGithubUsername(member.github);
    if (username)
      // Use a high-res avatar for nice display
      return `https://github.com/${username}.png?size=120`;
  }
  // Fallback: return null (will show initial letter)
  return null;
}

export default function about_page() {
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
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              About Vesper
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modern Minecraft launcher built for performance enthusiasts and power users.
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <IconTarget className="size-6 text-brand-accent" stroke={1.5} />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vesper was created to solve a fundamental problem with Minecraft launchers: bloat. Most launchers are slow, bloated, and full of features that nobody asked for. They track your data, show intrusive ads, and make simple tasks unnecessarily complicated.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mission is to build a launcher that puts you in control. Fast startup times, minimal resource usage, and a clean interface that does exactly what you need it to do — nothing more, nothing less.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in open source, privacy, and respecting the users who make this project possible. Vesper is and always will be free to use.
                </p>
              </div>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <IconRocket className="size-6 text-brand-accent" stroke={1.5} />
                <h2 className="text-2xl font-bold text-foreground">Our Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Performance First</h3>
                  <p className="text-sm text-muted-foreground">Every feature is evaluated by its impact on performance. If it slows things down, it does not belong in Vesper.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Privacy by Design</h3>
                  <p className="text-sm text-muted-foreground">We do not track you. We do not sell your data. We do not show ads. Your data stays on your machine.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Open Source</h3>
                  <p className="text-sm text-muted-foreground">All our code is publicly available. You can audit it, contribute to it, or fork it for your own projects.</p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">Your feedback shapes Vesper. We listen to the community and build what users actually want.</p>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <IconUsers className="size-6 text-brand-accent" stroke={1.5} />
                <h2 className="text-2xl font-bold text-foreground">Team</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {team_members.map((member) => {
                  const pfp = getProfilePicture(member);
                  return (
                    <div key={member.name} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50">
                      <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 overflow-hidden">
                        {pfp ? (
                          <Image
                            src={pfp}
                            alt={member.name + " profile picture"}
                            className="w-14 h-14 object-cover rounded-full"
                            width={56}
                            height={56}
                            referrerPolicy="no-referrer"
                            unoptimized={/^https?:\/\//.test(pfp)}
                          />
                        ) : (
                          <span className="text-lg font-bold text-brand-accent">{member.name[0]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.description}</p>
                        {member.role && (
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        )}
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline mt-1">
                          <IconBrandGithub className="size-3" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          <section className="mb-16">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <IconBrandGithub className="size-6 text-brand-accent" stroke={1.5} />
                <h2 className="text-2xl font-bold text-foreground">Contributors</h2>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
                {
                  (!contributors || contributors.length === 0) ? (
                    <>
                      <p className="text-muted-foreground mb-4">
                        Vesper is an open source project. We welcome contributions from everyone.
                      </p>
                      <a
                        href="https://github.com/IMDevFlare/vesper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-border transition-all"
                      >
                        <IconBrandGithub className="size-4" />
                        View on GitHub
                      </a>
                    </>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                      {contributors.map((contrib) => {
                        // If a generic open source community entry exists, show the default block for it
                        if (
                          contrib.name?.toLowerCase() === "open source community" &&
                          !contrib.github
                        ) {
                          return (
                            <div key={contrib.name} className="col-span-full w-full">
                              <p className="text-muted-foreground mb-4">
                                Vesper is an open source project. We welcome contributions from everyone.
                              </p>
                              <a
                                href="https://github.com/IMDevFlare/vesper"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 border border-border transition-all"
                              >
                                <IconBrandGithub className="size-4" />
                                View on GitHub
                              </a>
                            </div>
                          );
                        }
                        const pfp = getProfilePicture(contrib);
                        return (
                          <div key={contrib.name} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 min-w-0 w-full">
                            <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 overflow-hidden">
                              {pfp ? (
                                <Image
                                  src={pfp}
                                  alt={contrib.name + " profile picture"}
                                  className="w-14 h-14 object-cover rounded-full"
                                  width={56}
                                  height={56}
                                  referrerPolicy="no-referrer"
                                  unoptimized={/^https?:\/\//.test(pfp)}
                                />
                              ) : (
                                <span className="text-lg font-bold text-brand-accent">
                                  {contrib.name ? contrib.name[0] : "?"}
                                </span>
                              )}
                            </div>
                            <div className="min-w-0 text-left">
                              <h3 className="font-semibold text-foreground truncate">{contrib.name}</h3>
                              {contrib.description && (
                                <p className="text-sm text-muted-foreground">{contrib.description}</p>
                              )}
                              {contrib.github && (
                                <a href={contrib.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-brand-accent hover:underline mt-1 truncate">
                                  <IconBrandGithub className="size-3" />
                                  GitHub
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                }
              </div>
            </motion.div>
          </section>

          <section>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-xl border border-brand-accent/20 bg-brand-accent/5 text-center">
              <IconHeart className="size-8 text-brand-accent mx-auto mb-4" stroke={1.5} />
              <h2 className="text-xl font-bold text-foreground mb-2">Made with Passion</h2>
              <p className="text-muted-foreground">
                Vesper is built by gamers, for gamers. We use this launcher ourselves every day, and we pour that passion into every update.
              </p>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
