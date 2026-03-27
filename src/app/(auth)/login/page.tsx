"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { Eye, EyeOff, Terminal } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    const { error } = await signIn.email({
      email,
      password,
    }, {
      onSuccess: () => {
        router.push("/dashboard");
        router.refresh();
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Failed to sign in");
        setIsPending(false);
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-brand-accent/10">
              <Terminal className="w-6 h-6 text-brand-accent" />
            </div>
            <span className="font-mono font-bold tracking-tight text-lg italic">
              Vesper.init()
            </span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-white/20 bg-white/5 text-brand-accent focus:ring-brand-accent"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-brand-accent hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 bg-brand-accent text-background font-bold rounded-xl hover:shadow-[0_0_20px_-5px_var(--brand-accent)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href="/signup" className="text-brand-accent hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
