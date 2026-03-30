"use client";

import { useState } from "react";
import type { Product, ProductVariant } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product;
  selectedVariant: ProductVariant;
  className?: string;
}

export default function AddToCartButton({
  product,
  selectedVariant,
  className,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [toast, setToast] = useState(false);

  function handleClick() {
    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      quantity: 1,
    });

    // V1: show a coming-soon toast
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  }

  const isOutOfStock = product.status === "out-of-stock";

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={isOutOfStock}
        className={cn(
          "w-full rounded-full py-3.5 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-400 focus-visible:ring-offset-2",
          isOutOfStock
            ? "bg-earth-300/40 text-earth-500 cursor-not-allowed"
            : "bg-moss-400 text-white hover:bg-moss-600",
          className
        )}
      >
        {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </button>

      {/* Coming-soon toast — remove when cart is implemented */}
      {toast && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-earth-900 px-4 py-2 text-sm text-cream-50 shadow-lg">
          Online shop coming soon!
        </div>
      )}
    </div>
  );
}
