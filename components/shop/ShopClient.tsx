"use client";

import { useState, useMemo } from "react";
import type { Product, ProductCategory } from "@/types/product";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";

type FilterCategory = ProductCategory | "all";

interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const [active, setActive] = useState<FilterCategory>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [products, active]
  );

  // Count per category
  const counts = useMemo(() => {
    const c: Partial<Record<FilterCategory, number>> = {
      all: products.length,
    };
    for (const p of products) {
      c[p.category] = (c[p.category] ?? 0) + 1;
    }
    return c;
  }, [products]);

  return (
    <div>
      <div className="mb-8">
        <CategoryFilter active={active} onChange={setActive} counts={counts} />
      </div>
      <p className="text-sm text-earth-500 mb-6">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {active !== "all" ? " in this category" : ""}
      </p>
      <ProductGrid products={filtered} />
    </div>
  );
}
