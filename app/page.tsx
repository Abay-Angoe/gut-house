import HeroSection from "@/components/home/HeroSection";
import BenefitsPillars from "@/components/home/BenefitsPillars";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStoryTeaser from "@/components/home/BrandStoryTeaser";
import TestimonialsStrip from "@/components/home/TestimonialsStrip";
import NewsletterBand from "@/components/home/NewsletterBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsPillars />
      <FeaturedProducts />
      <BrandStoryTeaser />
      <TestimonialsStrip />
      <NewsletterBand />
    </>
  );
}
