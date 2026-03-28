"use client";

import Link from "next/link";

export default function TermsOfService() {
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
                        Terms of <span className="text-brand-accent">Service</span>
                    </h1>
                    <div className="prose dark:prose-invert prose-neutral mx-auto text-muted-foreground">
                        <p>
                            These Terms of Service (&quot;TOS&quot;) explain the rules and expectations for using <strong>Vesper Launcher</strong> and this website. By accessing or using Vesper Launcher or this website, you agree to abide by these Terms of Service.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Who Can Use Vesper Launcher</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Vesper Launcher is for personal, non-commercial use only.
                            </li>
                            <li>
                                You must not violate any applicable laws or infringe the intellectual property of Mojang, Microsoft, or other parties.
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Acceptable Service Usage</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Do <span className="font-medium">not</span> use Vesper Launcher for any illegal activities.
                            </li>
                            <li>
                                Do <span className="font-medium">not</span> attempt to hack, reverse engineer, circumvent security, or otherwise tamper with Vesper Launcher, this website, or related systems.
                            </li>
                            <li>
                                Usage must comply with Mojang&apos;s and Microsoft&apos;s official End User License Agreements (EULAs).
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Service Availability and Warranty</h2>
                        <p>
                            Vesper Launcher and this website are provided &quot;as is&quot; and &quot;as available&quot;. There is <span className="font-medium">no warranty</span> — express or implied, including fitness for a particular purpose, non-infringement, or uninterrupted/error-free operation.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Limitation of Liability</h2>
                        <p>
                            DevFlare and Vesper Launcher contributors are <span className="font-medium">not liable</span> for any damages arising from the use or inability to use Vesper Launcher or this website, including but not limited to loss of data, business interruption, or indirect damages.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Intellectual Property</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Minecraft® is a trademark of Mojang AB. Vesper Launcher is independent and not affiliated with Mojang, Microsoft, or their subsidiaries.
                            </li>
                            <li>
                                All referenced content, names, and assets are the property of their respective owners.
                            </li>
                            <li>
                                <span className="font-medium">Open Source:</span> Vesper Launcher and this website are open source. View the full details and license on <a href="https://github.com/ArexLabs/vesper-website" rel="noopener noreferrer" target="_blank" className="text-brand-accent underline underline-offset-4">GitHub</a>.
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Service Updates &amp; Modifications</h2>
                        <p>
                            These Terms of Service may be updated at any time. Your continued use after changes indicates acceptance of the new terms.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Service Termination</h2>
                        <p>
                            Your access to Vesper Launcher or this website may be revoked at any time, with or without notice, for violations of these Terms or for any other reason.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Contact</h2>
                        <p>
                            For questions about these Terms of Service, email <a href="mailto:support@devflare.de" className="text-brand-accent underline underline-offset-2">support@devflare.de</a>. For legal details, refer to our <Link href="/legal" className="text-brand-accent underline underline-offset-4">Legal Notice</Link>.
                        </p>
                        <hr className="my-10 border-border/40" />
                        <p className="text-xs text-muted-foreground text-center">
                            Terms of Service last updated: February 2026
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}