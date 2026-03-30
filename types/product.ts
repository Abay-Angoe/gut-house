export type ProductCategory =
  | "fermented"
  | "honey"
  | "juice"
  | "wellness-shot"
  | "bundle";

export type ProductStatus = "active" | "out-of-stock" | "coming-soon";

export interface ProductVariant {
  id: string;
  label: string;
  priceInCents: number;
  sku: string;
  stockCount?: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  featuredImage: string;
  galleryImages: string[];
  variants: ProductVariant[];
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  isFeatured: boolean;
  relatedProductIds: string[];
  createdAt: string;
}
