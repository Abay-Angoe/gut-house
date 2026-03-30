import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "All Products" },
  { href: "/shop?category=fermented", label: "Fermented" },
  { href: "/shop?category=honey", label: "Honey" },
  { href: "/shop?category=juice", label: "Juices" },
  { href: "/shop?category=wellness-shot", label: "Wellness Shots" },
];

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-bold text-cream-50 hover:text-gold-300 transition-colors"
            >
              Ferment & Field
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-earth-300 max-w-xs">
              Small-batch living foods crafted to nourish your gut and restore your natural vitality.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-earth-300 hover:text-cream-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-earth-300">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-earth-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-earth-700 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-earth-500">
            &copy; {new Date().getFullYear()} Ferment & Field. All rights reserved.
          </p>
          <p className="text-xs text-earth-500">
            Made with care &mdash; small batch, always.
          </p>
        </div>
      </div>
    </footer>
  );
}
