import { Navigation } from "@/components/ui/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono as FontMono, Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/footer";
import { Toaster } from "sonner";
import { CommandPalette } from "@/components/ui/command-palette";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SessionProvider } from "@/components/providers/session_provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Vesper Launcher",
    template: "%s | Vesper Launcher",
  },
  description:
    "Vesper Launcher is a sleek, modern, and high-utility Minecraft client designed for performance, customization, and an enhanced gameplay experience.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.ico", type: "image/x-icon" },
    ],
  },
  keywords: [
    "Minecraft",
    "Vesper Launcher",
    "Minecraft Client",
    "High-Utility",
    "Modern",
    "Launcher",
    "Custom Minecraft",
  ],
  authors: [{ name: "DevFlare", url: "https://devflare.de" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", fontSans.variable)}
    >
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <Navigation />
            <CommandPalette />
            <main>{children}</main>
            <Toaster richColors />
            <ScrollToTop />
          </SessionProvider>
          <Footer
            aRR
            aRRText="Not affiliated with Mojang or Microsoft."
            logo={
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
            }
            year={2025}
            links={[
              { label: "Legal Notice", href: "/legal" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Terms of Service", href: "/tos" }
            ]}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}