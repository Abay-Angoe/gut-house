"use client";

import { useState } from "react";

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-moss-400 py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-moss-600/70 mb-3">
          Stay in the loop
        </p>
        <h2 className="font-serif text-3xl font-bold text-white">
          Join our community
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Fermentation tips, new products, and seasonal recipes — straight to your inbox.
        </p>

        {status === "success" ? (
          <p className="mt-8 rounded-2xl bg-white/20 px-6 py-4 text-sm font-medium text-white">
            You&rsquo;re in! Welcome to the community.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-earth-900 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-earth-900 px-6 py-3 text-sm font-medium text-cream-50 hover:bg-earth-700 transition-colors disabled:opacity-70"
            >
              {status === "loading" ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-xs text-white/70">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
