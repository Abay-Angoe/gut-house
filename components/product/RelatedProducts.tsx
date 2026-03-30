import type { Product } from "@/types/product";
import ProductCard from "@/components/shop/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-earth-300/30 pt-16 mt-16">
      <SectionHeading
        eyebrow="You might also like"
        title="More from our range"
        align="left"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
