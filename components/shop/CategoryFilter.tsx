"use client";

import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types/product";

type FilterCategory = ProductCategory | "all";

const filters: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "fermented", label: "Fermented" },
  { value: "honey", label: "Honey" },
  { value: "juice", label: "Juices" },
  { value: "wellness-shot", label: "Wellness Shots" },
  { value: "bundle", label: "Bundles" },
];

interface CategoryFilterProps {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
  counts: Partial<Record<FilterCategory, number>>;
}

export default function CategoryFilter({
  active,
  onChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {filters.map((filter) => {
        const count = counts[filter.value];
        return (
          <button
            key={filter.value}
            onClick={() => onChange(filter.value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === filter.value
                ? "bg-earth-900 text-cream-50"
                : "bg-cream-100 text-earth-700 hover:bg-earth-300/30"
            )}
          >
            {filter.label}
            {count !== undefined && (
              <span
                className={cn(
                  "text-xs",
                  active === filter.value ? "text-cream-100/70" : "text-earth-500"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
