@AGENTS.md

# The Gut House — Project Overview

Holistic gut health brand website. Sells sauerkraut, raw honey, cold-pressed juices, and wellness shots.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Radix UI headless primitives, pnpm.

---

## Commands

```bash
pnpm dev      # Start development server (http://localhost:3000)
pnpm build    # Production build (runs TypeScript check + static generation)
pnpm start    # Serve the production build
```

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, benefit pillars, featured products, brand story, testimonials, newsletter |
| `/shop` | `app/shop/page.tsx` | Product catalog with live client-side category filter |
| `/shop/[productId]` | `app/shop/[productId]/page.tsx` | Product detail — gallery, variant selector, tabbed content, related products |
| `/about` | `app/about/page.tsx` | Brand story, values, process timeline, sourcing callout |
| `/contact` | `app/contact/page.tsx` | Contact form (Server Action) + FAQ accordion |

---

## Project Structure

```
wellness/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, metadata, Navbar, Footer
│   ├── globals.css                 # Tailwind v4 + CSS custom properties (brand tokens)
│   ├── page.tsx                    # Home page
│   ├── not-found.tsx               # 404 page
│   ├── about/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── actions.ts              # Server Action — saves contact submissions to JSON
│   ├── shop/
│   │   ├── page.tsx
│   │   └── [productId]/page.tsx    # generateStaticParams → all pages pre-rendered
│   └── api/
│       └── newsletter/route.ts     # POST /api/newsletter — saves email signups to JSONL
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              # Sticky header with mobile menu toggle
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx          # Slide-in drawer (locks body scroll)
│   ├── home/
│   │   ├── HeroSection.tsx         # Full-height split layout with grain overlay
│   │   ├── BenefitsPillars.tsx     # 3-column icon + text
│   │   ├── FeaturedProducts.tsx    # Pulls isFeatured products from data
│   │   ├── BrandStoryTeaser.tsx    # Dark full-bleed section with quote
│   │   ├── TestimonialsStrip.tsx   # 3 static customer quotes
│   │   └── NewsletterBand.tsx      # Email signup → /api/newsletter
│   ├── shop/
│   │   ├── ProductCard.tsx         # Card with image, badge, price, CTA
│   │   ├── ProductGrid.tsx         # Responsive grid wrapper
│   │   ├── CategoryFilter.tsx      # Pill-style filter buttons
│   │   └── ShopClient.tsx          # Client component — manages filter state
│   ├── product/
│   │   ├── ProductGallery.tsx      # Main image + thumbnail switcher (client)
│   │   ├── ProductDetails.tsx      # Full right-column — price, variants, tabs (client)
│   │   ├── VariantSelector.tsx     # Size/quantity button group (client)
│   │   ├── AddToCartButton.tsx     # V1: shows "coming soon" toast (wired to useCart stub)
│   │   └── RelatedProducts.tsx     # 3-product card row
│   ├── contact/
│   │   └── ContactForm.tsx         # Controlled form → Server Action
│   └── ui/
│       ├── Button.tsx              # Polymorphic button/link with variant + size props
│       ├── Badge.tsx               # CategoryBadge, StatusBadge, NewBadge
│       └── SectionHeading.tsx      # Eyebrow + title + subtitle, left or center aligned
│
├── data/
│   └── products.ts                 # PRODUCTS array + helper functions
│
├── types/
│   └── product.ts                  # Product, ProductVariant, ProductCategory, ProductStatus
│
├── lib/
│   ├── utils.ts                    # cn(), formatPrice(), isNew()
│   └── cart.ts                     # CartItem + CartStore interfaces (V2 stubs — no implementation)
│
├── hooks/
│   └── useCart.ts                  # Returns empty no-op CartStore (V2: swap for Zustand)
│
├── public/
│   └── images/
│       ├── products/               # ← ADD PRODUCT PHOTOS HERE
│       ├── hero/                   # ← ADD hero-main.jpg, story-bg.jpg
│       └── brand/                  # ← ADD founders.jpg, sourcing.jpg
│
└── .env.local.example              # Documents future env vars
```

---

## Design System

**Palette — "The Gut House"** (defined as CSS custom properties in `app/globals.css`):

| Token | Hex | Usage |
|---|---|---|
| `cream-50` | `#FDFAF4` | Page background |
| `cream-100` | `#F7F0E0` | Card backgrounds, section alternates |
| `earth-300` | `#C4A882` | Borders, dividers |
| `earth-500` | `#8B6E4E` | Secondary text, labels |
| `earth-700` | `#5C4033` | Primary body text |
| `earth-900` | `#2E1F14` | Footer, deep accents |
| `moss-400` | `#7C9A6E` | Primary CTAs |
| `moss-600` | `#4E7343` | CTA hover states |
| `gold-300` | `#D4A843` | Honey accent, highlights |
| `terracotta` | `#C4623A` | Badges, warm accents |

**Typography:**
- Headings: `Playfair Display` (serif) — `font-serif` class
- Body: `Inter` — default `font-sans` class
- Both loaded via `next/font/google` in `app/layout.tsx`

**Grain overlay:** Add class `grain-overlay` to any `relative` section element for the subtle texture effect.

---

## Products

7 products seeded in `data/products.ts`. All prices stored in **pesewas** (GHS smallest unit, 100 pesewas = 1 cedi — Stripe-native format):

| ID | Name | Category | Featured |
|---|---|---|---|
| `wild-ferment-sauerkraut` | Wild Ferment Sauerkraut | fermented | yes |
| `raw-forest-honey` | Raw Forest Honey | honey | yes |
| `ginger-turmeric-shot` | Ginger & Turmeric Wellness Shot | wellness-shot | yes |
| `beetroot-carrot-juice` | Beetroot & Carrot Cold-Press | juice | no |
| `kimchi` | Traditional Kimchi | fermented | no |
| `apple-cider-shot` | Apple Cider Vinegar Shot | wellness-shot | no |
| `gut-health-bundle` | Gut Reset Bundle | bundle | yes |

To add a product: add an entry to `PRODUCTS` in `data/products.ts`. Shop, featured section, and static page generation all pick it up automatically.

---

## Images — Action Required

Add your own photography to `public/images/`. Expected filenames (from `data/products.ts`):

```
public/images/products/sauerkraut.jpg, sauerkraut-2.jpg
public/images/products/honey.jpg, honey-2.jpg
public/images/products/ginger-shot.jpg, ginger-shot-2.jpg
public/images/products/beetroot-juice.jpg, beetroot-juice-2.jpg
public/images/products/kimchi.jpg, kimchi-2.jpg
public/images/products/acv-shot.jpg, acv-shot-2.jpg
public/images/products/bundle.jpg, bundle-2.jpg
public/images/hero/hero-main.jpg
public/images/hero/story-bg.jpg
public/images/brand/founders.jpg
public/images/brand/sourcing.jpg
```

---

## Contact Form (V1)

Submissions saved as JSON files in `data/contact-submissions/` via Server Action in `app/contact/actions.ts`.

**V2:** Install Resend (`pnpm add resend`), add `RESEND_API_KEY` to `.env.local`, replace `writeFile` with a Resend API call.

---

## Newsletter (V1)

Emails appended to `data/newsletter-signups/signups.jsonl` via `app/api/newsletter/route.ts`.

**V2:** Call Klaviyo or Mailchimp API inside the route handler.

---

## Payment Integration — V2 Roadmap

Everything is pre-wired. Nothing needs to be rebuilt — only filled in:

1. **`hooks/useCart.ts`** — Replace no-op body with a Zustand store (`pnpm add zustand`)
2. **`components/product/AddToCartButton.tsx`** — Already wired to `useCart`. Works in V2 with zero prop changes.
3. **`app/api/`** — Add:
   - `api/checkout/route.ts` — Create Stripe Checkout Session
   - `api/webhooks/stripe/route.ts` — Handle `payment_intent.succeeded`
4. **`.env.local.example`** — All required keys already documented

**V2 flow:** Zustand cart → cart drawer → `/checkout` page → Stripe Checkout Session → hosted checkout → webhook → confirmation.

---

## Key Decisions

- No component library — bespoke brand identity; Radix UI used only for inaccessible patterns (Tabs, Accordion)
- Prices in pence — Stripe-native, avoids float errors
- Client-side category filter — simpler for V1; URL search params can be added later for shareability
- All product pages pre-rendered via `generateStaticParams` — fast, free to host on Vercel
- Payment deferred — business decision pending; architecture fully ready for V2 sprint
