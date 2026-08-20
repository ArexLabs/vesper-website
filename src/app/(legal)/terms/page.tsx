"use client";

import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal";

const sections = [
    {
        content: (
            <p className="text-muted-foreground leading-relaxed">
                These Terms of Use (&quot;Terms&quot;) govern your use of <strong>Vesper Client</strong> and this website. By accessing or using Vesper, you agree to be bound by these Terms.
            </p>
        )
    },
    {
        title: "Eligibility",
        content: (
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Vesper Client is for <span className="font-medium text-foreground">personal, non-commercial use</span> only.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>You must comply with all applicable laws and respect the intellectual property rights of others.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>You must have a valid Minecraft account to use the launcher.</span>
                </li>
            </ul>
        )
    },
    {
        title: "Acceptable Use",
        content: (
            <>
                <p className="text-muted-foreground mb-4">You agree NOT to:</p>
                <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">✕</span>
                        <span>Use Vesper Client for any <span className="font-medium text-foreground">illegal activities</span>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">✕</span>
                        <span>Attempt to <span className="font-medium text-foreground">bypass, exploit, or compromise</span> Minecraft servers or systems.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">✕</span>
                        <span><span className="font-medium text-foreground">Reverse engineer, decompile,</span> or tamper with Vesper Client.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-destructive mt-1">✕</span>
                        <span>Violate Mojang&apos;s or Microsoft&apos;s End User License Agreement (EULA).</span>
                    </li>
                </ul>
            </>
        )
    },
    {
        title: "No Warranty",
        icon: (
            <div className="p-2 rounded-lg bg-amber-500/10">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
        ),
        content: (
            <p className="text-muted-foreground leading-relaxed">
                Vesper Client is provided <span className="font-medium text-foreground">&quot;as is&quot;</span> and <span className="font-medium text-foreground">&quot;as available&quot;</span>. <span className="text-brand-accent font-medium">No warranty</span> of any kind is provided, express or implied, including fitness for a particular purpose or non-infringement.
            </p>
        )
    },
    {
        title: "Limitation of Liability",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed">
                    In no event shall DevFlare or Vesper Client contributors be liable for any damages arising from your use or inability to use Vesper Client. This includes, but is not limited to:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent">•</span>
                        <span className="text-sm">Loss of data</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent">•</span>
                        <span className="text-sm">Business interruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-brand-accent">•</span>
                        <span className="text-sm">Indirect or consequential damages</span>
                    </li>
                </ul>
            </>
        )
    },
    {
        title: "Intellectual Property",
        content: (
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span><span className="font-medium text-foreground">Minecraft</span> is a trademark of Microsoft and Mojang. Vesper is independent and not affiliated.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>All third-party assets and content are property of their respective owners.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Vesper Client and this website are <span className="font-medium text-foreground">open source</span>. See <a href="https://github.com/ArexLabs/vesper-client" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">GitHub</a> for details.</span>
                </li>
            </ul>
        )
    },
    {
        title: "Changes to Terms",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                These Terms may be updated at any time. <span className="font-medium text-foreground">Continued use</span> of Vesper Client after changes constitutes acceptance of the new Terms.
            </p>
        )
    },
    {
        title: "Termination",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                We reserve the right to <span className="font-medium text-foreground">revoke access</span> to Vesper Client or this website at any time for violation of these Terms or for any other reason.
            </p>
        )
    },
    {
        title: "Contact",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Questions about these Terms? Contact us:
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
                <Link href="/tos" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Terms of Service
                </Link>
            </div>
        )
    }
];

export default function TermsOfUse() {
    return (
        <LegalPageLayout
            title="Terms of"
            highlightedWord="Use"
            description="The rules and conditions for using Vesper Client."
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
