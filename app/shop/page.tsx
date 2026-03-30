import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our full range of fermented foods, raw honey, cold-pressed juices, and wellness shots.",
};

export default function ShopPage() {
  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page header */}
      <div className="bg-cream-100 border-b border-earth-300/30 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-moss-600 mb-3">
            Our Products
          </p>
          <h1 className="font-serif text-4xl font-bold text-earth-900 sm:text-5xl">
            The full range
          </h1>
          <p className="mt-4 text-earth-500 max-w-xl">
            Everything we make is alive, raw, and crafted slowly. Filter by
            category or browse the full range below.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <ShopClient products={PRODUCTS} />
      </div>
    </div>
  );
}
