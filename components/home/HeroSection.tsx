import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Fermented foods and wellness products arranged on a wooden surface"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-earth-900/50" />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="py-24 lg:py-32 lg:max-w-[60%]">
          <p className="text-xs font-semibold uppercase tracking-widest text-moss-400 mb-6">
            Live cultures &bull; Raw &bull; Small batch
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-cream-50 leading-[1.05] tracking-tight">
            Feed your gut.
            <br />
            <span className="text-moss-400">Feel the</span>
            <br />
            difference.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-cream-100/80 max-w-md">
            Small-batch fermented foods, raw honey, cold-pressed juices, and
            wellness shots — crafted slowly, the way nature intended.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-moss-400 px-8 py-3.5 text-base font-medium text-white hover:bg-moss-600 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-cream-50/60 px-8 py-3.5 text-base font-medium text-cream-50 hover:bg-cream-50 hover:text-earth-900 transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {["Unpasteurised", "No preservatives", "Traditionally made"].map(
              (tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm text-cream-100/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-moss-400 shrink-0" />
                  {tag}
                </div>
              )
            )}
          </div>

          {/* Floating stat card */}
          <div className="mt-14 inline-flex bg-earth-900/60 backdrop-blur-sm rounded-2xl px-5 py-4 border border-cream-50/10">
            <div>
              <p className="text-2xl font-serif font-bold text-cream-50">10B+</p>
              <p className="text-xs text-cream-100/70 mt-0.5">Live cultures per jar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
