"use client";

import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal";

const sections = [
    {
        content: (
            <p className="text-muted-foreground leading-relaxed">
                These Terms of Service (&quot;TOS&quot;) explain the rules and expectations for using <strong>Vesper Client</strong> and this website. By accessing or using Vesper, you agree to abide by these Terms of Service.
            </p>
        )
    },
    {
        title: "Who Can Use Vesper",
        icon: (
            <div className="p-2 rounded-lg bg-blue-500/10">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
        ),
        content: (
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Vesper Client is for <span className="font-medium text-foreground">personal, non-commercial use</span> only.</span>
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
        )
    },
    {
        title: "Service Rules",
        content: (
            <>
                <p className="text-muted-foreground mb-4">When using Vesper Client, you must NOT:</p>
                <div className="grid gap-3">
                    {[
                        "Use the service for any illegal purposes",
                        "Hack, exploit, or attempt to bypass security measures",
                        "Reverse engineer or decompile the software",
                        "Violate Mojang&apos;s or Microsoft&apos;s EULA",
                        "Attempt to damage or disrupt the service or servers"
                    ].map((rule, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                            <span className="text-destructive font-bold">{i + 1}.</span>
                            <span className="text-muted-foreground">{rule}</span>
                        </div>
                    ))}
                </div>
            </>
        )
    },
    {
        title: "Service Availability",
        icon: (
            <div className="p-2 rounded-lg bg-amber-500/10">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            </div>
        ),
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Vesper Client and this website are provided <span className="font-medium text-foreground">&quot;as is&quot;</span> and <span className="font-medium text-foreground">&quot;as available&quot;</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                    <span className="text-brand-accent font-medium">No warranty</span> — express or implied — including fitness for a particular purpose, non-infringement, or uninterrupted/error-free operation.
                </p>
            </>
        )
    },
    {
        title: "Liability",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed">
                    DevFlare and Vesper Client contributors are <span className="text-brand-accent font-medium">not liable</span> for any damages arising from your use of Vesper Client, including but not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    {["Loss of data or game progress", "Business interruption", "Indirect, consequential, or punitive damages"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-accent">•</span>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )
    },
    {
        title: "Ownership",
        content: (
            <ul className="space-y-3 text-muted-foreground">
                {[
                    { text: "Minecraft is a trademark of Microsoft and Mojang.", highlight: "Minecraft" },
                    { text: "Vesper is independent and not affiliated with Mojang or Microsoft." },
                    { text: "All referenced content and assets belong to their respective owners." },
                    { text: "Vesper is open source. View on GitHub." }
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-brand-accent mt-1">•</span>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        )
    },
    {
        title: "Service Changes",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                We reserve the right to <span className="font-medium text-foreground">modify, suspend, or discontinue</span> any part of Vesper Client at any time. These Terms may be updated, and continued use constitutes acceptance of changes.
            </p>
        )
    },
    {
        title: "Termination",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed">
                    Your access may be <span className="font-medium text-foreground">revoked at any time</span>, with or without notice, for:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    {["Violation of these Terms", "Illegal activity", "Any reason at our discretion"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="text-destructive">•</span>
                            <span className="text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )
    },
    {
        title: "Contact",
        content: (
            <>
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
                <Link href="/privacy" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Privacy Policy
                </Link>
                <Link href="/terms" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Terms of Use
                </Link>
            </div>
        )
    }
];

export default function TermsOfService() {
    return (
        <LegalPageLayout
            title="Terms of"
            highlightedWord="Service"
            description="The service agreement for using Vesper Client."
        >
            {sections.map((section, i) => (
                <LegalSection
                    key={section.title ?? i}
                    title={section.title}
                    icon={"icon" in section ? section.icon : undefined}
                    delay={i * 0.05}
                >
                    {"content" in section ? section.content : null}
                </LegalSection>
            ))}
        </LegalPageLayout>
    );
}
