import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="Our best sellers"
          subtitle="Start here. Each product is a gateway into the world of living, fermented food."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-earth-700 px-8 py-3 text-sm font-medium text-earth-700 hover:bg-earth-700 hover:text-cream-50 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
