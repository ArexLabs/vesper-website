"use client";

import { useHotkey, useHotkeySequences } from "@tanstack/react-hotkeys";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

/**
 * Centralised site-wide keyboard shortcuts.
 *
 * ┌───────────┬──────────────────────────────────────────┐
 * │ d         │ Toggle light / dark theme                │
 * │ g → h     │ Go to Home                               │
 * │ g → r     │ Go to Roadmap                            │
 * │ g → c     │ Go to Changelog                          │
 * │ g → a     │ Go to About                              │
 * │ g → f     │ Go to FAQ                                │
 * │ ⌘/Ctrl+K  │ Command palette (handled in command-palette.tsx) │
 * │ Escape    │ Close modal / drawer (handled by Radix primitives) │
 * └───────────┴──────────────────────────────────────────┘
 */
export function SiteHotkeys() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  // ── Single-key shortcuts ───────────────────────────────────────────
  useHotkey(
    "D",
    () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    },
    { ignoreInputs: true },
  );

  // ── Sequence shortcuts (g + …) ────────────────────────────────────
  useHotkeySequences(
    [
      { sequence: ["G", "H"], callback: () => router.push("/") },
      { sequence: ["G", "R"], callback: () => router.push("/roadmap") },
      { sequence: ["G", "C"], callback: () => router.push("/changelog") },
      { sequence: ["G", "A"], callback: () => router.push("/about") },
      { sequence: ["G", "F"], callback: () => router.push("/faq") },
    ],
    { ignoreInputs: true },
  );

  return null;
}
