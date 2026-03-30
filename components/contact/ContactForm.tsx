"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/contact/actions";

const subjectOptions = [
  "General Enquiry",
  "Wholesale / Trade",
  "Order Issue",
  "Press & Media",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const result = await submitContactForm(data);
      if (result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setErrorMsg(result.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-moss-400/10 border border-moss-400/30 p-8 text-center">
        <p className="font-serif text-xl font-bold text-earth-900 mb-2">
          Message received!
        </p>
        <p className="text-sm text-earth-500">
          We&rsquo;ll get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-1.5">
            Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-earth-300/60 bg-cream-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-moss-400/50 focus:border-moss-400 transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-1.5">
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-earth-300/60 bg-cream-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-moss-400/50 focus:border-moss-400 transition"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-earth-700 mb-1.5">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-earth-300/60 bg-cream-50 px-4 py-3 text-sm text-earth-900 focus:outline-none focus:ring-2 focus:ring-moss-400/50 focus:border-moss-400 transition"
        >
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-1.5">
          Message <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-earth-300/60 bg-cream-50 px-4 py-3 text-sm text-earth-900 placeholder:text-earth-300 focus:outline-none focus:ring-2 focus:ring-moss-400/50 focus:border-moss-400 transition resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-moss-400 py-3.5 text-sm font-medium text-white hover:bg-moss-600 transition-colors disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
