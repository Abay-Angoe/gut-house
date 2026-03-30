import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { CategoryBadge, NewBadge } from "@/components/ui/Badge";
import { formatPrice, isNew } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.priceInCents));
  const showNewBadge = isNew(product.createdAt);
  const isOutOfStock = product.status === "out-of-stock";

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-cream-50 border border-earth-300/30 hover:border-earth-300 hover:shadow-md transition-all duration-200"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-100">
        <Image
          src={product.featuredImage}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-103 ${
            isOutOfStock ? "opacity-60" : ""
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {showNewBadge && <NewBadge />}
          {isOutOfStock && (
            <span className="inline-flex items-center rounded-full bg-earth-900/70 px-3 py-0.5 text-xs font-medium text-cream-50">
              Out of Stock
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <CategoryBadge category={product.category} />
        <h3 className="font-serif text-base font-bold text-earth-900 leading-snug">
          {product.name}
        </h3>
        <p className="text-xs text-earth-500 leading-relaxed line-clamp-2 flex-1">
          {product.tagline}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-semibold text-earth-900">
            {product.variants.length > 1 ? "From " : ""}
            {formatPrice(lowestPrice)}
          </span>
          <span className="text-xs font-medium text-moss-600 group-hover:underline underline-offset-2">
            {isOutOfStock ? "Join Waitlist" : "View Details"}
          </span>
        </div>
      </div>
    </Link>
  );
}
