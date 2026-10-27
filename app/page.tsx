import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import VittesaGallery from '@/components/home/VittesaGallery';
import { AboutSection } from '@/components/home/AboutSection';
import { TrustSection } from '@/components/home/TrustSection';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Featured Collections Bento Grid */}
      <VittesaGallery />

      {/* 5. Brand Introduction */}
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
