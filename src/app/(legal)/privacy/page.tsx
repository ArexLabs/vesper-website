"use client";

import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal";

const sections = [
    {
        title: "Our Commitment",
        icon: (
            <div className="p-2 rounded-lg bg-emerald-500/10">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
        ),
        content: (
            <p className="text-muted-foreground leading-relaxed">
                <strong>Vesper Client</strong> is committed to protecting your privacy. We believe in <span className="text-brand-accent font-medium">minimal data collection</span> — your data stays on your machine.
            </p>
        )
    },
    {
        title: "Data We Don&apos;t Collect",
        items: [
            { title: "No Telemetry", desc: "We do not collect any analytics, usage data, or telemetry from the launcher or website." },
            { title: "No Cookies", desc: "We don't use cookies or any tracking technologies on this website." },
            { title: "No Custom Accounts", desc: "No registration required. We don't have our own user accounts — you use your Microsoft account." }
        ]
    },
    {
        title: "Authentication",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Vesper uses <span className="text-brand-accent font-medium">Microsoft OAuth2</span> authentication. You only need your Microsoft account — no custom account registration required.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Your credentials are handled securely by Microsoft&apos;s services — we never see or store your password.
                </p>
                <p className="text-sm text-muted-foreground">
                    Only an access token is stored locally on your device to keep you logged in. This is your login session — nothing else.
                </p>
            </>
        )
    },
    {
        title: "Third-Party Services",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Vesper Client may interact with third-party services to provide mod and resource features:
                </p>
                <div className="flex flex-wrap gap-2">
                    <a href="https://modrinth.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                        Modrinth
                    </a>
                    <a href="https://curseforge.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                        CurseForge
                    </a>
                    <a href="https://minecraft.net" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                        Minecraft.net
                    </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                    These services have their own privacy policies when you use them through Vesper.
                </p>
            </>
        )
    },
    {
        title: "Discord Integration",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                If you enable Discord Rich Presence, Vesper only communicates with your local Discord client. <span className="text-brand-accent font-medium">No data is sent to our servers</span>.
            </p>
        )
    },
    {
        title: "Your Rights",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                Since we don&apos;t collect or store personal data, there&apos;s minimal data subject rights concerns. If you contact us, any information provided will be used <span className="font-medium text-foreground">solely for communication</span> regarding your inquiry.
            </p>
        )
    },
    {
        title: "Contact",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    For privacy-related questions, contact us at:
                </p>
                <a href="mailto:support@devflare.de" className="inline-flex items-center gap-2 text-brand-accent hover:underline">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    support@devflare.de
                </a>
            </>
        )
    },
    {
        title: "Quick Links",
        content: (
            <div className="flex flex-wrap gap-3">
                <Link href="/legal" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Legal Notice
                </Link>
                <Link href="/terms" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Terms of Use
                </Link>
                <Link href="/tos" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Terms of Service
                </Link>
            </div>
        )
    }
];

export default function PrivacyPolicy() {
    return (
        <LegalPageLayout
            title="Privacy"
            highlightedWord="Policy"
            description="How we handle your data and protect your privacy."
        >
            {sections.map((section, i) => (
                <LegalSection
                    key={section.title ?? i}
                    title={section.title}
                    icon={"icon" in section ? section.icon : undefined}
                    delay={i * 0.05}
                >
                    {"items" in section && section.items ? (
                        <div className="space-y-4">
                            {section.items.map((item, j) => (
                                <div key={j} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold shrink-0">✓</span>
                                    <div>
                                        <span className="font-medium text-foreground">{item.title}</span>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        "content" in section ? section.content : null
                    )}
                </LegalSection>
            ))}
        </LegalPageLayout>
    );
}
