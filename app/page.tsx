import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import VittesaGallery from '@/components/home/VittesaGallery';
import { TrustSection } from '@/components/home/TrustSection';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Section */}
      <HeroSection />

      {/* About VITTESA */}
      <AboutSection />

      {/* 4. Featured Collections Bento Grid */}
      <VittesaGallery />

      {/* 7. Trust & Commitment Section */}
      <TrustSection />

      {/* 8. Bulk & Wholesale Banner */}
      <BulkBannerSection />

      {/* 9. Contact Desk & Form */}
      <ContactSection />
    </>
  );
}
