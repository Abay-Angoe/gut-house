import type { Product, ProductCategory } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "wild-ferment-sauerkraut",
    name: "Wild Ferment Sauerkraut",
    tagline: "Tangy, alive, and bursting with natural probiotics.",
    description:
      "Our sauerkraut is made the old way — just cabbage and salt, left to ferment slowly in ceramic crocks over three weeks. No vinegar. No shortcuts. Just billions of live cultures working quietly to support your gut microbiome. The result is a deeply flavourful kraut with a satisfying crunch and a gentle tang that improves with every jar.",
    category: "fermented",
    status: "active",
    featuredImage: "/images/products/sauerkraut.jpg",
    galleryImages: [
      "/images/products/sauerkraut.jpg",
      "/images/products/sauerkraut-2.jpg",
    ],
    variants: [
      { id: "sauerkraut-350g", label: "350g", priceInCents: 6500, sku: "SKR-350" },
      { id: "sauerkraut-700g", label: "700g", priceInCents: 11000, sku: "SKR-700" },
    ],
    ingredients: ["Organic white cabbage", "Sea salt"],
    benefits: [
      "Rich in live lactobacillus cultures",
      "Supports digestive health",
      "Natural source of vitamin C & K2",
      "Unpasteurised — cultures stay alive",
      "No additives, vinegar, or preservatives",
    ],
    howToUse:
      "Serve straight from the jar as a side, stir into grain bowls, or layer into wraps. Store in the fridge and use within 3 months of opening. Always use a clean utensil to preserve cultures.",
    isFeatured: true,
    relatedProductIds: ["kimchi", "gut-health-bundle"],
    createdAt: "2025-11-01",
  },
  {
    id: "raw-forest-honey",
    name: "Raw Forest Honey",
    tagline: "Unpasteurised wildflower honey, straight from the hive.",
    description:
      "Sourced from small family apiaries in the Scottish Highlands, our raw forest honey is never heated above 40°C — preserving its natural enzymes, pollen, and antioxidants. Dark, complex, and slightly floral, it's nothing like the runny supermarket stuff. Spread it, swirl it into warm water, or take a spoonful straight.",
    category: "honey",
    status: "active",
    featuredImage: "/images/products/honey.jpg",
    galleryImages: [
      "/images/products/honey.jpg",
      "/images/products/honey-2.jpg",
    ],
    variants: [
      { id: "honey-250g", label: "250g", priceInCents: 9000, sku: "HNY-250" },
      { id: "honey-500g", label: "500g", priceInCents: 16000, sku: "HNY-500" },
    ],
    ingredients: ["Raw wildflower honey (100%)"],
    benefits: [
      "Retains natural enzymes and pollen",
      "Prebiotic properties support gut flora",
      "Natural antimicrobial compounds",
      "Rich in antioxidants",
      "Unpasteurised — living nutrition",
    ],
    howToUse:
      "Enjoy at room temperature on sourdough, stirred into herbal tea (never above 40°C to preserve enzymes), or as a natural sweetener. Store in a cool, dark cupboard.",
    isFeatured: true,
    relatedProductIds: ["ginger-turmeric-shot", "gut-health-bundle"],
    createdAt: "2025-11-01",
  },
  {
    id: "ginger-turmeric-shot",
    name: "Ginger & Turmeric Wellness Shot",
    tagline: "A 60ml hit of anti-inflammatory fire.",
    description:
      "Cold-pressed ginger root, fresh turmeric, black pepper (for bioavailability), and a squeeze of lemon. That's it. No fillers, no sugars, no dilution. Taken daily, this shot supports digestion, reduces bloating, and gives your immune system a natural nudge. Made in small batches and bottled immediately to preserve potency.",
    category: "wellness-shot",
    status: "active",
    featuredImage: "/images/products/ginger-shot.jpg",
    galleryImages: [
      "/images/products/ginger-shot.jpg",
      "/images/products/ginger-shot-2.jpg",
    ],
    variants: [
      { id: "ginger-shot-single", label: "Single (60ml)", priceInCents: 2000, sku: "GST-060" },
      { id: "ginger-shot-7pack", label: "7-Day Pack (7 × 60ml)", priceInCents: 12500, sku: "GST-7PK" },
      { id: "ginger-shot-28pack", label: "Monthly Supply (28 × 60ml)", priceInCents: 45000, sku: "GST-28PK" },
    ],
    ingredients: [
      "Cold-pressed ginger root (62%)",
      "Fresh turmeric (25%)",
      "Lemon juice",
      "Black pepper extract",
    ],
    benefits: [
      "Supports healthy digestion and reduces bloating",
      "Natural anti-inflammatory compounds",
      "Immune system support",
      "Black pepper increases curcumin absorption by 2000%",
      "No added sugar or fillers",
    ],
    howToUse:
      "Shake well and take one shot each morning, ideally on an empty stomach. Chase with a glass of water. Can also be stirred into smoothies or warm water with honey.",
    isFeatured: true,
    relatedProductIds: ["apple-cider-shot", "beetroot-juice"],
    createdAt: "2025-12-01",
  },
  {
    id: "beetroot-carrot-juice",
    name: "Beetroot & Carrot Cold-Press",
    tagline: "Earthy, sweet, and vibrantly alive.",
    description:
      "Cold-pressed in small batches at low speed to retain every enzyme and nutrient. Organic beetroot and carrot are balanced with a hint of apple and ginger, creating a juice that tastes as vibrant as it looks. High in nitrates, beta-carotene, and natural sugars that fuel without spiking.",
    category: "juice",
    status: "active",
    featuredImage: "/images/products/beetroot-juice.jpg",
    galleryImages: [
      "/images/products/beetroot-juice.jpg",
      "/images/products/beetroot-juice-2.jpg",
    ],
    variants: [
      { id: "beetroot-250ml", label: "250ml", priceInCents: 3500, sku: "BCJ-250" },
      { id: "beetroot-500ml", label: "500ml", priceInCents: 6000, sku: "BCJ-500" },
    ],
    ingredients: [
      "Organic beetroot (55%)",
      "Organic carrot (30%)",
      "Apple",
      "Fresh ginger",
    ],
    benefits: [
      "High in dietary nitrates for energy and circulation",
      "Rich in beta-carotene (vitamin A precursor)",
      "Supports liver detoxification",
      "Natural electrolytes",
      "Cold-pressed — no heat damage to nutrients",
    ],
    howToUse:
      "Shake well before drinking. Best enjoyed chilled, as a morning drink or pre-workout. Consume within 3 days of opening. Store refrigerated.",
    isFeatured: false,
    relatedProductIds: ["ginger-turmeric-shot", "apple-cider-shot"],
    createdAt: "2025-12-15",
  },
  {
    id: "kimchi",
    name: "Traditional Kimchi",
    tagline: "Fiery, funky, and full of fermentation magic.",
    description:
      "Made with napa cabbage, Korean chilli flakes, garlic, ginger, and spring onion — fermented for two weeks at controlled temperature for maximum probiotic development. Our kimchi is vegan, naturally gluten-free, and hits that perfect balance of heat, umami, and sour that makes it dangerously addictive.",
    category: "fermented",
    status: "active",
    featuredImage: "/images/products/kimchi.jpg",
    galleryImages: [
      "/images/products/kimchi.jpg",
      "/images/products/kimchi-2.jpg",
    ],
    variants: [
      { id: "kimchi-350g", label: "350g", priceInCents: 7000, sku: "KMC-350" },
      { id: "kimchi-700g", label: "700g", priceInCents: 12000, sku: "KMC-700" },
    ],
    ingredients: [
      "Napa cabbage",
      "Korean chilli flakes (gochugaru)",
      "Garlic",
      "Fresh ginger",
      "Spring onion",
      "Sea salt",
    ],
    benefits: [
      "Billions of diverse live cultures",
      "Supports immune function through gut health",
      "Rich in vitamins A, B, and C",
      "Natural source of digestive enzymes",
      "Vegan and gluten-free",
    ],
    howToUse:
      "Use as a side dish, stir into fried rice, add to noodle soups, or pile on avocado toast. Store refrigerated and consume within 3 months. It gets funkier and more sour over time — that's a feature, not a flaw.",
    isFeatured: false,
    relatedProductIds: ["wild-ferment-sauerkraut", "gut-health-bundle"],
    createdAt: "2026-01-10",
  },
  {
    id: "apple-cider-shot",
    name: "Apple Cider Vinegar Shot",
    tagline: "The original gut tonic, done properly.",
    description:
      "Organic apple cider vinegar with the mother, pressed from heritage variety apples and aged in oak barrels for depth of flavour. We blend it with lemon juice, raw honey, and a pinch of cayenne for a shot that's sharp, warming, and genuinely effective. Taken daily before meals, it supports stomach acid production and nutrient absorption.",
    category: "wellness-shot",
    status: "active",
    featuredImage: "/images/products/acv-shot.jpg",
    galleryImages: [
      "/images/products/acv-shot.jpg",
      "/images/products/acv-shot-2.jpg",
    ],
    variants: [
      { id: "acv-single", label: "Single (60ml)", priceInCents: 2500, sku: "ACV-060" },
      { id: "acv-7pack", label: "7-Day Pack", priceInCents: 15000, sku: "ACV-7PK" },
    ],
    ingredients: [
      "Organic apple cider vinegar with mother (75%)",
      "Lemon juice",
      "Raw wildflower honey",
      "Cayenne pepper",
    ],
    benefits: [
      "Contains the mother — live enzymes and good bacteria",
      "Supports healthy stomach acid levels",
      "May improve nutrient absorption",
      "Natural appetite regulation",
      "Helps balance blood sugar response",
    ],
    howToUse:
      "Take one shot 15–20 minutes before a meal. Dilute with water if needed. Never brush teeth immediately after — wait 30 minutes. Not recommended for those with acid reflux or tooth enamel sensitivity.",
    isFeatured: false,
    relatedProductIds: ["ginger-turmeric-shot", "raw-forest-honey"],
    createdAt: "2026-01-15",
  },
  {
    id: "gut-health-bundle",
    name: "Gut Reset Bundle",
    tagline: "Everything you need to start your fermentation journey.",
    description:
      "Our most popular starter pack — curated for people who are serious about rebuilding their gut health from the ground up. You get one jar each of our Wild Ferment Sauerkraut and Traditional Kimchi, a 7-day supply of Ginger & Turmeric Wellness Shots, and a jar of our Raw Forest Honey. Packaged in a reusable gift box, it also makes an exceptional present.",
    category: "bundle",
    status: "active",
    featuredImage: "/images/products/bundle.jpg",
    galleryImages: [
      "/images/products/bundle.jpg",
      "/images/products/bundle-2.jpg",
    ],
    variants: [
      { id: "bundle-standard", label: "Standard Box", priceInCents: 32000, sku: "BDL-STD" },
    ],
    ingredients: [
      "Wild Ferment Sauerkraut (350g)",
      "Traditional Kimchi (350g)",
      "Ginger & Turmeric Shots (7 × 60ml)",
      "Raw Forest Honey (250g)",
    ],
    benefits: [
      "Diverse probiotic strains from multiple sources",
      "A week of daily gut support",
      "Save 20% versus buying individually",
      "Reusable kraft gift box included",
      "Perfect introduction to living foods",
    ],
    howToUse:
      "Follow the included Gut Reset Guide for a suggested 7-day protocol. Introduce fermented foods gradually if you're new to them — start with a tablespoon of sauerkraut or kimchi daily and build up.",
    isFeatured: true,
    relatedProductIds: ["wild-ferment-sauerkraut", "kimchi", "ginger-turmeric-shot"],
    createdAt: "2025-11-01",
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured && p.status === "active");
}

export function getRelatedProducts(ids: string[]): Product[] {
  return ids
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}
