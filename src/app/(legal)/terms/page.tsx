"use client";

import Link from "next/link";

export default function TermsOfUse() {
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
                        Terms of <span className="text-brand-accent">Use</span>
                    </h1>
                    <div className="prose dark:prose-invert prose-neutral mx-auto text-muted-foreground">
                        <p>
                            These Terms of Use (&quot;Terms&quot;) govern your use of <strong>Vesper Launcher</strong> and its website. By accessing or using Vesper Launcher or this website, you agree to comply with these Terms.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Usage Eligibility</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Vesper Launcher is intended for personal and non-commercial use only.
                            </li>
                            <li>
                                You must comply with all applicable laws and respect the intellectual property rights of Mojang, Microsoft, and other third parties.
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Acceptable Use</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Do not use Vesper Launcher for illegal activities or to attempt to bypass, exploit, or compromise Minecraft, official game servers, or any other systems.
                            </li>
                            <li>
                                Do not attempt to reverse engineer, decompile, or otherwise tamper with Vesper Launcher or its distribution infrastructure.
                            </li>
                            <li>
                                Usage of Vesper Launcher must comply with Mojang&apos;s and Microsoft&apos;s official End User License Agreements (EULAs).
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">No Warranty</h2>
                        <p>
                            Vesper Launcher is provided &quot;as is&quot; and &quot;as available&quot;. No warranty of any kind is provided, whether express or implied, including but not limited to fitness for a particular purpose, non-infringement, or uninterrupted or error-free operation. You use Vesper Launcher at your own risk.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Limitation of Liability</h2>
                        <p>
                            In no event will DevFlare or the contributors of Vesper Launcher be liable for any damages arising from the use or inability to use Vesper Launcher or this website, including any loss of data, interruption of business, or indirect damages.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Intellectual Property</h2>
                        <ul className="list-disc pl-6 mt-2 mb-6">
                            <li>
                                Minecraft® is a trademark of Mojang AB. Vesper Launcher is independent and not affiliated with Mojang, Microsoft, or their subsidiaries.
                            </li>
                            <li>
                                All third-party assets, names, and content referenced are property of their respective owners.
                            </li>
                            <li>
                                <span className="font-medium">Open Source:</span> Vesper Launcher and this website are open source. See the license and full source on <a href="https://github.com/ArexLabs/vesper-website" rel="noopener noreferrer" target="_blank" className="text-brand-accent underline underline-offset-4">GitHub</a>.
                            </li>
                        </ul>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Updates &amp; Changes</h2>
                        <p>
                            These Terms of Use may be updated at any time. Continued use after changes constitutes acceptance of the new terms.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Termination</h2>
                        <p>
                            We reserve the right to revoke your access to Vesper Launcher or this website at any time for violation of these Terms or for any other reason.
                        </p>
                        <h2 className="mt-8 text-xl font-semibold text-foreground">Contact</h2>
                        <p>
                            For questions about these Terms, contact <a href="mailto:support@devflare.de" className="text-brand-accent underline underline-offset-2">support@devflare.de</a>. For legal information, see our <Link href="/legal" className="text-brand-accent underline underline-offset-4">Legal Notice</Link>.
                        </p>
                        <hr className="my-10 border-border/40" />
                        <p className="text-xs text-muted-foreground text-center">
                            Terms of Use last updated: February 2026
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}