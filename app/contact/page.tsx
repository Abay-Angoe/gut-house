import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Gut House — wholesale enquiries, orders, or just to say hello.",
};

const faqs = [
  {
    q: "Do you ship UK-wide?",
    a: "Yes — we ship to all UK mainland addresses. Orders are dispatched Monday to Wednesday to ensure freshness. Refrigerated packaging is included.",
  },
  {
    q: "Are your products suitable for vegans?",
    a: "Our sauerkraut, kimchi, juices, and wellness shots are all vegan. Our honey, by its nature, is not vegan but is suitable for vegetarians.",
  },
  {
    q: "How long do the products last?",
    a: "Fermented products last 3-6 months refrigerated (they continue to develop in flavour). Cold-pressed juices last up to 5 days refrigerated. Wellness shots last 2-3 weeks. Raw honey is shelf-stable for years.",
  },
  {
    q: "Do you offer wholesale or trade pricing?",
    a: "Yes! We supply independent delis, health food shops, and cafes. Contact us using the form with your business details and we'll send over our trade terms.",
  },
  {
    q: "Can I visit your kitchen or buy locally?",
    a: "We don't currently have a retail space, but we attend several farmers markets in Edinburgh. Follow us on Instagram for market dates.",
  },
  {
    q: "What if my order arrives damaged?",
    a: "Please get in touch within 48 hours of delivery with a photo and we'll arrange a replacement or full refund immediately — no questions asked.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Header */}
      <div className="bg-cream-100 border-b border-earth-300/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl font-bold text-earth-900 sm:text-5xl">
            Say hello
          </h1>
          <p className="mt-4 text-earth-500 max-w-xl">
            Whether you have a question about an order, want to discuss wholesale, or just want to geek out about fermentation — we&rsquo;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-earth-900 mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-earth-900 mb-4">
                Contact details
              </h3>
              <ul className="space-y-3 text-sm text-earth-700">
                <li>
                  <span className="font-medium text-earth-500 uppercase tracking-wide text-xs">Email</span>
                  <p className="mt-0.5">hello@theguthouse.co.uk</p>
                </li>
                <li>
                  <span className="font-medium text-earth-500 uppercase tracking-wide text-xs">Instagram</span>
                  <p className="mt-0.5">@theguthouse</p>
                </li>
                <li>
                  <span className="font-medium text-earth-500 uppercase tracking-wide text-xs">Based in</span>
                  <p className="mt-0.5">Edinburgh, Scotland</p>
                </li>
                <li>
                  <span className="font-medium text-earth-500 uppercase tracking-wide text-xs">Hours</span>
                  <p className="mt-0.5">Mon–Fri, 9am–5pm GMT</p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-cream-100 border border-earth-300/20 p-5">
              <p className="text-xs font-medium text-earth-500 uppercase tracking-wider mb-2">
                Response time
              </p>
              <p className="text-sm text-earth-700">
                We reply to all messages within 1-2 business days. For urgent order issues, please include your order number.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl font-bold text-earth-900">
              Common questions
            </h2>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            className="max-w-3xl mx-auto divide-y divide-earth-300/30 border-t border-earth-300/30"
          >
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`}>
                <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-earth-900 hover:text-moss-600 transition-colors group">
                  {faq.q}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4 shrink-0 ml-4 text-earth-500 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Accordion.Trigger>
                <Accordion.Content className="pb-5 text-sm leading-relaxed text-earth-600 data-[state=open]:animate-none">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
