import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProductById, getRelatedProducts } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "@/components/product/RelatedProducts";

interface Props {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ productId: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);
  if (!product) return {};

  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) notFound();

  const related = getRelatedProducts(product.relatedProductIds);

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-earth-300/30 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <nav className="flex gap-2 text-xs text-earth-500" aria-label="Breadcrumb">
            <a href="/" className="hover:text-earth-900 transition-colors">Home</a>
            <span>/</span>
            <a href="/shop" className="hover:text-earth-900 transition-colors">Shop</a>
            <span>/</span>
            <span className="text-earth-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product section */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery
            images={product.galleryImages.length > 0 ? product.galleryImages : [product.featuredImage]}
            alt={product.name}
          />
          <ProductDetails product={product} />
        </div>

        <RelatedProducts products={related} />
      </div>
    </div>
  );
}
