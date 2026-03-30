import { cn } from "@/lib/utils";
import type { ProductCategory, ProductStatus } from "@/types/product";

const categoryLabels: Record<ProductCategory, string> = {
  fermented: "Fermented",
  honey: "Honey",
  juice: "Juice",
  "wellness-shot": "Wellness Shot",
  bundle: "Bundle",
};

const categoryColors: Record<ProductCategory, string> = {
  fermented: "bg-moss-400/15 text-moss-600",
  honey: "bg-gold-300/20 text-earth-700",
  juice: "bg-terracotta/15 text-terracotta",
  "wellness-shot": "bg-earth-300/30 text-earth-700",
  bundle: "bg-earth-900/10 text-earth-900",
};

const statusColors: Record<ProductStatus, string> = {
  active: "",
  "out-of-stock": "bg-earth-300/30 text-earth-700",
  "coming-soon": "bg-gold-300/20 text-earth-700",
};

interface CategoryBadgeProps {
  category: ProductCategory;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
        categoryColors[category],
        className
      )}
    >
      {categoryLabels[category]}
    </span>
  );
}

interface StatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  if (status === "active") return null;

  const label = status === "out-of-stock" ? "Out of Stock" : "Coming Soon";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium",
        statusColors[status],
        className
      )}
    >
      {label}
    </span>
  );
}

interface NewBadgeProps {
  className?: string;
}

export function NewBadge({ className }: NewBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-terracotta/90 px-3 py-0.5 text-xs font-medium text-white",
        className
      )}
    >
      New
    </span>
  );
}
