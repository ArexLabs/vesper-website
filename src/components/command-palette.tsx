"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Home,
  Map,
  History,
  Image as ImageIcon,
  Search,
  FileText,
  ShieldCheck,
  Scale,
  Gavel,
  X as XIcon,
} from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleExternalOpen = () => setOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("vesper:open-cmdk", handleExternalOpen);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("vesper:open-cmdk", handleExternalOpen);
    };
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const itemClassName =
    "flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-all data-selected:border-border/80 data-selected:bg-muted/50 data-selected:shadow-sm hover:border-border/80 hover:bg-muted/50 hover:shadow-sm active:scale-[0.99] [&>svg:last-child]:hidden";

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      showCloseButton={false}
      className="top-1/2 -translate-y-1/2 max-w-lg gap-0 overflow-hidden p-0 max-h-[90dvh] flex flex-col sm:max-w-lg"
    >
      <Command className="flex size-full min-h-0 flex-col overflow-hidden rounded-none bg-transparent **:data-[slot=command-input-wrapper]:p-0 **:data-[slot=command-input-wrapper]:border-0 **:data-[slot=command-input-wrapper]:shadow-none **:[[cmdk-group]]:px-0">
        {/* Header - matches Download Modal */}
        <div className="relative shrink-0 border-b border-border px-4 py-4 sm:px-6 sm:py-5">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Command Palette
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Search for a command to run…
          </p>
          <div className="mt-4">
            <CommandInput
              placeholder="Search commands…"
              className="h-10 min-h-10 rounded-lg border border-border bg-muted/30 px-3 text-sm placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          {/* X button in upper right, styled similarly to DownloadModal */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex size-8 items-center justify-center rounded-md bg-transparent transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-60 sm:right-6"
          >
            <XIcon className="size-5" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Scrollable content - matches Download Modal */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <CommandList className="max-h-none border-0 p-4 sm:p-6">
            <CommandEmpty className="py-12 flex flex-col items-center gap-3">
              <Search className="size-8 text-muted-foreground/30 animate-pulse" />
              <p className="text-sm text-muted-foreground">No matches found for your search.</p>
            </CommandEmpty>

            <CommandGroup
              heading="Quick Navigation"
              className="space-y-2 **:[[cmdk-group-heading]]:mb-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-wider **:[[cmdk-group-heading]]:text-muted-foreground"
            >
              <CommandItem
                onSelect={() => runCommand(() => router.push("/"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <Home className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Home Dashboard</span>
                  <span className="block text-xs text-muted-foreground">Go to homepage</span>
                </div>
                <CommandShortcut className="shrink-0">↵</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/roadmap"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <Map className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Project Roadmap</span>
                  <span className="block text-xs text-muted-foreground">View roadmap</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/changelog"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <History className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Changelog & Updates</span>
                  <span className="block text-xs text-muted-foreground">Release history</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/gallery"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <ImageIcon className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Visual Gallery</span>
                  <span className="block text-xs text-muted-foreground">Screenshots & media</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/search"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <Search className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Deep Search</span>
                  <span className="block text-xs text-muted-foreground">Search the site</span>
                </div>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator className="my-4 bg-border" />

            <CommandGroup
              heading="Legal & Policies"
              className="space-y-2 **:[[cmdk-group-heading]]:mb-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:uppercase **:[[cmdk-group-heading]]:tracking-wider **:[[cmdk-group-heading]]:text-muted-foreground"
            >
              <CommandItem
                onSelect={() => runCommand(() => router.push("/legal"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <FileText className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Legal Notice</span>
                  <span className="block text-xs text-muted-foreground">Legal information</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/privacy"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <ShieldCheck className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Privacy Policy</span>
                  <span className="block text-xs text-muted-foreground">Data & privacy</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/terms"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <Scale className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Terms of Use</span>
                  <span className="block text-xs text-muted-foreground">Usage terms</span>
                </div>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/tos"))}
                className={itemClassName}
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground group-data-[selected=true]/command-item:bg-brand-accent/20 group-data-[selected=true]/command-item:text-brand-accent">
                  <Gavel className="size-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Terms of Service</span>
                  <span className="block text-xs text-muted-foreground">Service agreement</span>
                </div>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>

        {/* Footer - matches Download Modal */}
        <div className="shrink-0 border-t border-border px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">Enter</kbd>
                Select
              </span>
            </div>
            <span className="font-medium text-foreground">Vesper Shell v1.5.0</span>
          </div>
        </div>
      </Command>
    </CommandDialog>
  );
}
