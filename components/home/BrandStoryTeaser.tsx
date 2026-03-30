import Link from "next/link";
import Image from "next/image";

export default function BrandStoryTeaser() {
  return (
    <section className="relative overflow-hidden bg-earth-900 py-24 lg:py-32 grain-overlay">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/story-bg.jpg"
          alt="Fermentation jars in a kitchen"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-6">
          Our Story
        </p>
        <blockquote className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 leading-snug">
          &ldquo;We started fermenting in our kitchen because we couldn&rsquo;t
          find anything honest on the shelves. What began as a obsession became
          a calling.&rdquo;
        </blockquote>
        <p className="mt-6 text-earth-300 text-sm">
          &mdash; Founders, The Gut House
        </p>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-cream-50/50 px-8 py-3 text-sm font-medium text-cream-50 hover:bg-cream-50 hover:text-earth-900 transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
