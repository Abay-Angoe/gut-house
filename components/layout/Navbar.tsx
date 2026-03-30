"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-sm border-b border-earth-300/40">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-bold text-earth-900 tracking-tight hover:text-moss-600 transition-colors"
          >
            The Gut House
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-earth-700 hover:text-moss-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-moss-400 px-5 py-2 text-sm font-medium text-white hover:bg-moss-600 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-6 bg-earth-700" />
            <span className="block h-0.5 w-6 bg-earth-700" />
            <span className="block h-0.5 w-4 bg-earth-700" />
          </button>
        </nav>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
