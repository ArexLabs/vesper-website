"use client";

import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
            <div className="fixed inset-0 z-[-2] bg-background" />
            <div
                className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
                }}
            />
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <main className="flex-1 w-full pt-16">
                <section className="max-w-3xl mx-auto px-6 py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Terms of <span className="text-brand-accent italic">Service</span>
                        </h1>
                        <p className="text-muted-foreground max-w-lg mx-auto">
                            The service agreement for using Vesper Launcher.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms of Service (&quot;TOS&quot;) explain the rules and expectations for using <strong>Vesper Launcher</strong> and this website. By accessing or using Vesper, you agree to abide by these Terms of Service.
                            </p>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-foreground">Who Can Use Vesper</h2>
                            </div>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>Vesper Launcher is for <span className="font-medium text-foreground">personal, non-commercial use</span> only.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>You must be of legal age to use this software in your jurisdiction.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>You must not violate any applicable laws or infringe intellectual property rights.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Service Rules</h2>
                            <p className="text-muted-foreground mb-4">When using Vesper Launcher, you must NOT:</p>
                            <div className="grid gap-3">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                    <span className="text-destructive font-bold">1.</span>
                                    <span className="text-muted-foreground">Use the service for any <span className="font-medium text-foreground">illegal purposes</span>.</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                    <span className="text-destructive font-bold">2.</span>
                                    <span className="text-muted-foreground"><span className="font-medium text-foreground">Hack, exploit,</span> or attempt to bypass security measures.</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                    <span className="text-destructive font-bold">3.</span>
                                    <span className="text-muted-foreground"><span className="font-medium text-foreground">Reverse engineer</span> or decompile the software.</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                    <span className="text-destructive font-bold">4.</span>
                                    <span className="text-muted-foreground">Violate Mojang's or Microsoft's <span className="font-medium text-foreground">EULA</span>.</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                                    <span className="text-destructive font-bold">5.</span>
                                    <span className="text-muted-foreground">Attempt to <span className="font-medium text-foreground">damage or disrupt</span> the service or servers.</span>
                                </div>
                            </div>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-amber-500/10">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-foreground">Service Availability</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Vesper Launcher and this website are provided <span className="font-medium text-foreground">&quot;as is&quot;</span> and <span className="font-medium text-foreground">&quot;as available&quot;</span>.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                <span className="text-brand-accent font-medium">No warranty</span> — express or implied — including fitness for a particular purpose, non-infringement, or uninterrupted/error-free operation.
                            </p>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                DevFlare and Vesper Launcher contributors are <span className="text-brand-accent font-medium">not liable</span> for any damages arising from your use of Vesper Launcher, including but not limited to:
                            </p>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-accent">•</span>
                                    <span className="text-sm">Loss of data or game progress</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-accent">•</span>
                                    <span className="text-sm">Business interruption</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-accent">•</span>
                                    <span className="text-sm">Indirect, consequential, or punitive damages</span>
                                </li>
                            </ul>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Ownership</h2>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span><span className="font-medium text-foreground">Minecraft®</span> is a trademark of Mojang AB.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>Vesper is independent and <span className="font-medium text-foreground">not affiliated</span> with Mojang or Microsoft.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>All referenced content and assets belong to their respective owners.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-accent mt-1">•</span>
                                    <span>Vesper is <span className="font-medium text-foreground">open source</span>. View on <a href="https://github.com/ArexLabs" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">GitHub</a>.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Service Changes</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to <span className="font-medium text-foreground">modify, suspend, or discontinue</span> any part of Vesper Launcher at any time. These Terms may be updated, and continued use constitutes acceptance of changes.
                            </p>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your access may be <span className="font-medium text-foreground">revoked at any time</span>, with or without notice, for:
                            </p>
                            <ul className="mt-4 space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    <span className="text-sm">Violation of these Terms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    <span className="text-sm">Illegal activity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-destructive">•</span>
                                    <span className="text-sm">Any reason at our discretion</span>
                                </li>
                            </ul>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Contact</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Questions about these Terms of Service?
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a href="mailto:support@devflare.de" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                                    support@devflare.de
                                </a>
                                <Link href="/legal" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                                    Legal Notice
                                </Link>
                            </div>
                        </section>

                        <section className="p-6 sm:p-8 rounded-2xl border border-border bg-card/30">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Links</h2>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/legal" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                                    Legal Notice
                                </Link>
                                <Link href="/privacy" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                                    Terms of Use
                                </Link>
                            </div>
                        </section>
                    </div>

                    <hr className="my-12 border-border/40" />
                    <p className="text-sm text-muted-foreground text-center">
                        Last updated: March 2026
                    </p>
                </section>
            </main>
        </div>
    );
}
