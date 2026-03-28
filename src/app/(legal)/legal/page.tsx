"use client";

import Link from "next/link";

export default function LegalNotice() {
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-brand-accent/30 selection:text-brand-accent">
            {/* Subtle Dot Grid Background */}
            <div className="fixed inset-0 z-[-2] bg-background" />
            <div
                className="fixed inset-0 z-[-1] opacity-20 dark:opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a0a0a0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
                }}
            />

            {/* Vesper Ambient Glow */}
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <main className="flex-1 w-full pt-16">
                <section className="max-w-2xl mx-auto px-6 py-20">
                    <h1 className="text-3xl md:text-4xl font-mono font-bold text-foreground mb-8 text-center">
                        Legal <span className="text-brand-accent">Notice</span>
                    </h1>
                    <div className="prose dark:prose-invert prose-neutral mx-auto text-muted-foreground">
                        <p>
                            <strong>Vesper Launcher</strong> is an independent open source project and is <span className="text-brand-accent">not affiliated with Mojang, Microsoft, or any of their subsidiaries.</span>
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Publisher Information</h2>
                        <p>
                            <span className="font-medium">Project Lead:</span> DevFlare by ItzzMateo<br />
                            <span className="font-medium">Legal Contact Email:</span>{" "}
                            <a href="mailto:itzzmateo@devflare.de" className="text-brand-accent underline underline-offset-2">itzzmateo@devflare.de</a><br />
                            <span className="font-medium">Support Email:</span>{" "}
                            <a href="mailto:support@devflare.de" className="text-brand-accent underline underline-offset-2">support@devflare.de</a>
                        </p>
                        <p>
                            <strong>Contact <span className="text-brand-accent">itzzmateo@devflare.de</span> for legal inquiries only. For support requests, please use <span className="text-brand-accent">support@devflare.de</span>.</strong>
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Disclaimer</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Minecraft® is a trademark of Mojang AB. This project is <span className="text-brand-accent">not endorsed or supported by Mojang or Microsoft</span>. All assets, names, and related content are property of their respective owners.
                            </li>
                            <li>
                                Vesper Launcher provides no warranty and is supplied &quot;as-is&quot;. Use at your own risk.
                            </li>
                            <li>
                                We collect <span className="font-medium">no telemetry or tracking data</span>. For privacy concerns, refer to our <Link href="/privacy" className="text-brand-accent underline underline-offset-4">Privacy Policy</Link>.
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Open Source</h2>
                        <p>
                            Vesper Launcher and this website are open source — see the code and license on <Link href="https://github.com/ArexLabs/vesper-website" rel="noopener noreferrer" target="_blank" className="text-brand-accent underline underline-offset-4">GitHub</Link>.
                        </p>
                        <hr className="my-10 border-border/40" />
                        <p className="text-xs text-muted-foreground text-center">
                            Legal Notice last updated: February 2026
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}