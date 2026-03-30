import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "I've been eating their sauerkraut every day for three months. My digestion is transformed — I didn't even realise how bad it was until it got this good.",
    author: "Sarah M.",
    location: "Edinburgh",
  },
  {
    quote:
      "The ginger shots are part of my morning now. I stopped getting the afternoon energy crash I'd been dealing with for years. I'm a total convert.",
    author: "James T.",
    location: "London",
  },
  {
    quote:
      "As a nutritionist I'm very picky about fermented foods. The Gut House genuinely uses traditional methods — you can taste the difference immediately.",
    author: "Dr. Priya K.",
    location: "Manchester",
  },
];

export default function TestimonialsStrip() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What people say"
          title="Trusted by gut health enthusiasts"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl bg-cream-50 p-8 border border-earth-300/30"
            >
              <blockquote className="text-sm leading-relaxed text-earth-700 italic">
                <span className="font-serif text-2xl text-gold-300 leading-none mr-1 not-italic">&ldquo;</span>
                {t.quote}
                <span className="font-serif text-2xl text-gold-300 leading-none ml-1 not-italic">&rdquo;</span>
              </blockquote>
              <figcaption className="mt-6 text-xs font-medium text-earth-500 uppercase tracking-wide">
                {t.author} &mdash; {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
