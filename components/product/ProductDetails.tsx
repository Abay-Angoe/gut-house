"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import type { Product } from "@/types/product";
import { CategoryBadge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";
import VariantSelector from "./VariantSelector";
import AddToCartButton from "./AddToCartButton";
import type { ProductVariant } from "@/types/product";

interface ProductDetailsProps {
  product: Product;
}

const trustBadges = [
  "Raw & Unpasteurised",
  "No Preservatives",
  "Small Batch",
  "Traditionally Made",
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Category + name */}
      <div>
        <CategoryBadge category={product.category} className="mb-3" />
        <h1 className="font-serif text-3xl font-bold text-earth-900 sm:text-4xl leading-tight">
          {product.name}
        </h1>
        <p className="mt-2 text-earth-500">{product.tagline}</p>
      </div>

      {/* Price */}
      <div>
        <span className="text-3xl font-semibold text-earth-900">
          {formatPrice(selectedVariant.priceInCents)}
        </span>
        {product.variants.length > 1 && (
          <span className="ml-2 text-sm text-earth-500">
            ({selectedVariant.label})
          </span>
        )}
      </div>

      {/* Variant selector */}
      <VariantSelector
        variants={product.variants}
        selected={selectedVariant}
        onChange={setSelectedVariant}
      />

      {/* Short description */}
      <p className="text-sm leading-relaxed text-earth-700">
        {product.description.split(". ").slice(0, 2).join(". ") + "."}
      </p>

      {/* Add to cart */}
      <AddToCartButton product={product} selectedVariant={selectedVariant} />

      {/* Trust badges */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-earth-300/30">
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-xs text-earth-600"
          >
            <span className="h-1 w-1 rounded-full bg-moss-400" />
            {badge}
          </span>
        ))}
      </div>

      {/* Benefits */}
      <div className="rounded-2xl bg-cream-100 p-5 border border-earth-300/20">
        <p className="text-xs font-semibold uppercase tracking-wider text-earth-500 mb-3">
          Why you&rsquo;ll love it
        </p>
        <ul className="space-y-2">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-earth-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Tabs: full content */}
      <Tabs.Root defaultValue="description" className="mt-4">
        <Tabs.List className="flex border-b border-earth-300/40 gap-1">
          {[
            { value: "description", label: "Description" },
            { value: "ingredients", label: "Ingredients" },
            { value: "how-to-use", label: "How to Use" },
          ].map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className="px-4 py-2.5 text-sm font-medium text-earth-500 data-[state=active]:text-earth-900 data-[state=active]:border-b-2 data-[state=active]:border-earth-900 transition-colors -mb-px"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="description" className="pt-5 text-sm leading-relaxed text-earth-700">
          {product.description}
        </Tabs.Content>

        <Tabs.Content value="ingredients" className="pt-5">
          <ul className="space-y-2">
            {product.ingredients.map((ing) => (
              <li key={ing} className="flex items-center gap-2 text-sm text-earth-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300 shrink-0" />
                {ing}
              </li>
            ))}
          </ul>
        </Tabs.Content>

        <Tabs.Content value="how-to-use" className="pt-5 text-sm leading-relaxed text-earth-700">
          {product.howToUse}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
