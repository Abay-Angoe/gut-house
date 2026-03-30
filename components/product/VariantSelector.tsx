"use client";

import { cn } from "@/lib/utils";
import type { ProductVariant } from "@/types/product";
import { formatPrice } from "@/lib/utils";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selected: ProductVariant;
  onChange: (variant: ProductVariant) => void;
}

export default function VariantSelector({
  variants,
  selected,
  onChange,
}: VariantSelectorProps) {
  if (variants.length <= 1) return null;

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-earth-500 mb-3">
        Size
      </p>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onChange(variant)}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
              selected.id === variant.id
                ? "border-earth-900 bg-earth-900 text-cream-50"
                : "border-earth-300 text-earth-700 hover:border-earth-700"
            )}
          >
            {variant.label}
            <span className="ml-2 text-xs opacity-70">
              {formatPrice(variant.priceInCents)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
