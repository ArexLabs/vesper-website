"use client";

import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Welcome back, {session.user.name}!
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold mb-2">Account</h2>
            <p className="text-sm text-muted-foreground">
              Email: {session.user.email}
            </p>
            <p className="text-sm text-muted-foreground">
              2FA: {session.user.twoFactorEnabled ? "Enabled" : "Disabled"}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h2 className="text-lg font-semibold mb-2">Downloads</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Download the latest version of Vesper Launcher.
            </p>
            <button className="px-4 py-2 bg-brand-accent text-background text-sm font-bold rounded-xl">
              Download Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
