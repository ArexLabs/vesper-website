"use client";

import { HotkeysProvider as TanStackHotkeysProvider } from "@tanstack/react-hotkeys";
import type { ReactNode } from "react";

export function HotkeysProvider({ children }: { children: ReactNode }) {
  return <TanStackHotkeysProvider>{children}</TanStackHotkeysProvider>;
}
