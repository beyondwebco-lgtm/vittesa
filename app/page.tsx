import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCollectionSection } from '@/components/home/FeaturedCollectionSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { TrustSection } from '@/components/home/TrustSection';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Featured OLIVERA Collection */}
      <FeaturedCollectionSection />

      {/* 5. Featured Products Grid (Curated 8-Piece) */}
      <FeaturedProductsSection />

      {/* 6. Brand Introduction */}
      <AboutSection />

      {/* 7. Trust & Commitment Section */}
      <TrustSection />

      {/* 8. Bulk & Wholesale Banner */}
      <BulkBannerSection />

      {/* 9. Contact Desk & Form */}
      <ContactSection />
    </>
  );
}
