"use client";

import Link from "next/link";
import { LegalPageLayout, LegalSection } from "@/components/sections/legal";

const sections = [
    {
        title: "Independent Project",
        content: (
            <p className="text-muted-foreground leading-relaxed">
                <strong>Vesper Client</strong> is an independent open source project and is <span className="text-brand-accent font-medium">not affiliated with Mojang, Microsoft, or any of their subsidiaries</span>. It is not endorsed or supported by them in any way.
            </p>
        )
    },
    {
        title: "Publisher Information",
        content: (
            <div className="space-y-3 text-muted-foreground">
                <p>
                    <span className="font-medium text-foreground">Project Lead:</span> DevFlare by ItzzMateo
                </p>
                <p>
                    <span className="font-medium text-foreground">Website:</span>{" "}
                    <a href="https://vesper.devflare.de" className="text-brand-accent hover:underline">vesper.devflare.de</a>
                </p>
                <p>
                    <span className="font-medium text-foreground">Legal Contact:</span>{" "}
                    <a href="mailto:itzzmateo@devflare.de" className="text-brand-accent hover:underline">itzzmateo@devflare.de</a>
                </p>
                <p>
                    <span className="font-medium text-foreground">Support:</span>{" "}
                    <a href="mailto:support@devflare.de" className="text-brand-accent hover:underline">support@devflare.de</a>
                </p>
            </div>
        )
    },
    {
        title: "Disclaimer",
        content: (
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span><span className="font-medium text-foreground">Minecraft</span> is a trademark of Microsoft and Mojang. This project is <span className="text-brand-accent">not endorsed or supported</span> by Microsoft or Mojang.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>Vesper Client provides <span className="font-medium text-foreground">no warranty</span> and is supplied &quot;as-is&quot;. Use at your own risk.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-brand-accent mt-1">•</span>
                    <span>We collect <span className="font-medium text-foreground">no telemetry or tracking data</span>. See our <Link href="/privacy" className="text-brand-accent hover:underline">Privacy Policy</Link> for details.</span>
                </li>
            </ul>
        )
    },
    {
        title: "Open Source",
        content: (
            <>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Vesper Client and this website are open source. View the source code and license on GitHub.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/ArexLabs/vesper-client" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm font-medium">
                        vesper-client
                    </a>
                    <a href="https://github.com/ArexLabs/vesper-website" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm font-medium">
                        vesper-website
                    </a>
                </div>
            </>
        )
    },
    {
        title: "Quick Links",
        content: (
            <div className="flex flex-wrap gap-3">
                <Link href="/privacy" className="px-4 py-2 rounded-lg bg-card border border-border hover:border-brand-accent/50 transition-colors text-sm">
                    Privacy Policy
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

export default function LegalNotice() {
    return (
        <LegalPageLayout
            title="Legal"
            highlightedWord="Notice"
            description="Important legal information about Vesper Client and this website."
        >
            {sections.map((section, i) => (
                <LegalSection
                    key={section.title}
                    title={section.title}
                    delay={i * 0.05}
                >
                    {section.content}
                </LegalSection>
            ))}
        </LegalPageLayout>
    );
}
