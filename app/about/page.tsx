import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn how The Gut House started in a kitchen and grew into a small-batch living foods brand rooted in tradition and transparency.",
};

const values = [
  {
    title: "Traditionally Fermented",
    body: "We use centuries-old methods — no shortcuts, no shortcuts. Salt, time, and patience are our only tools.",
    icon: "🫙",
  },
  {
    title: "Sourced with Care",
    body: "Every ingredient is traced to its origin. We know the farms, the farmers, and their practices.",
    icon: "🌿",
  },
  {
    title: "Community Rooted",
    body: "We share knowledge freely — fermentation belongs to everyone, not just a brand.",
    icon: "🤝",
  },
];

const steps = [
  { step: "01", title: "Source", body: "Whole, organic, seasonal ingredients from trusted suppliers." },
  { step: "02", title: "Prepare", body: "Hand-chopped, brined, and seasoned in small batches." },
  { step: "03", title: "Ferment", body: "Left to ferment slowly at controlled temperature — no rushing." },
  { step: "04", title: "Taste & Pack", body: "Every batch is tasted before it's jarred and labelled by hand." },
];

export default function AboutPage() {
  return (
    <div className="bg-cream-50">
      {/* Hero */}
      <section className="relative bg-cream-100 py-20 lg:py-28 overflow-hidden grain-overlay">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-4">
                Our Story
              </p>
              <h1 className="font-serif text-5xl font-bold text-earth-900 leading-tight">
                A kitchen obsession
                <br />
                that became a calling
              </h1>
              <div className="mt-6 space-y-4 text-earth-700 leading-relaxed">
                <p>
                  The Gut House began in a small flat in Edinburgh, where our
                  founders — frustrated by the lifeless, vinegar-soaked products
                  on supermarket shelves — started fermenting their own
                  sauerkraut. What started as a weekend experiment turned into
                  an obsession.
                </p>
                <p>
                  Within a year, friends were asking for jars. Within two, we
                  had a small commercial kitchen. Today, we still work in small
                  batches, still taste every batch before it leaves, and still
                  refuse to compromise on method.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[480px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/brand/founders.jpg"
                alt="The Gut House founders in the kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-3">
              What we stand for
            </p>
            <h2 className="font-serif text-4xl font-bold text-earth-900">
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center gap-4 rounded-2xl bg-cream-100 p-8 border border-earth-300/20"
              >
                <span className="text-4xl">{v.icon}</span>
                <h3 className="font-serif text-xl font-bold text-earth-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-earth-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-3">
              How we do it
            </p>
            <h2 className="font-serif text-4xl font-bold text-earth-900">
              The process
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.step} className="relative pl-6">
                <div className="absolute left-0 top-0 font-serif text-3xl font-bold text-earth-300">
                  {s.step}
                </div>
                <div className="pt-10">
                  <h3 className="font-serif text-lg font-bold text-earth-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-earth-500">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing callout */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 lg:h-96 w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/brand/sourcing.jpg"
                alt="Fresh vegetables and ingredients being prepared"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-4">
                Ingredients
              </p>
              <h2 className="font-serif text-3xl font-bold text-earth-900">
                We know where
                <br />
                everything comes from
              </h2>
              <p className="mt-4 leading-relaxed text-earth-700">
                Our cabbage comes from a family farm in Perthshire. Our honey
                is sourced from Highland apiaries that practice sustainable,
                low-intervention beekeeping. Our chillies for the kimchi are
                imported directly from Korea.
              </p>
              <p className="mt-4 leading-relaxed text-earth-700">
                We visit our suppliers. We know their names. That transparency
                is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-moss-400 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">
            Taste the difference
          </h2>
          <p className="mt-3 text-white/80 text-sm">
            The proof is in the jar. Try something new.
          </p>
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-earth-900 px-8 py-3.5 text-base font-medium text-cream-50 hover:bg-earth-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
