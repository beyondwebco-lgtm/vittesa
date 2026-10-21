import React from 'react';
import type { Metadata } from 'next';
import { getProductsByCollection } from '@/data/products';
import { CollectionProductGrid } from '@/components/collection/CollectionProductGrid';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';

export const metadata: Metadata = {
  title: 'SPECKLED BROWN Collection | VITTESA Porcelain Maison',
  description:
    'Artisan speckled brown vitrified stoneware featuring natural mineral flecks, organic silhouettes, and rich tactile warmth. Official 17-piece catalogue.',
};

export default function SpeckledBrownCollectionPage() {
  const products = getProductsByCollection('speckled-brown');

  return (
    <>
      {/* 2. COMPACT COLLECTION HEADING & EDITORIAL IMAGE */}
      <section className="olivera-intro-section" style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 0 1rem' }}>
        <div className="container text-center">
          <span className="collection-intro-label">VITTESA · PORCELAIN MAISON</span>
          <h1 className="collection-intro-title" style={{ margin: '0.25rem 0 0.5rem', letterSpacing: '0.08em' }}>
            SPECKLED BROWN
          </h1>
          <p
            className="collection-intro-desc"
            style={{
              maxWidth: 580,
              margin: '0 auto clamp(1.5rem, 3vw, 2.5rem)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'var(--ink-secondary)',
            }}
          >
            Artisan speckled brown vitrified stoneware featuring natural mineral flecks, organic silhouettes, and rich tactile warmth.
          </p>

          <div
            className="olivera-hero-media"
            style={{
              maxWidth: 1040,
              margin: '0 auto',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/catalogue/speckled-brown-collection.webp"
              srcSet="/assets/catalogue/speckled-brown-collection-800w.webp 800w, /assets/catalogue/speckled-brown-collection.webp 1600w"
              sizes="(max-width: 768px) 100vw, 1040px"
              alt="SPECKLED BROWN Stoneware Tableware Collection"
              className="olivera-hero-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOGUE — MAIN FOCUS (17 PIECES) */}
      <CollectionProductGrid products={products} />

      {/* 4. BULK & WHOLESALE HOSPITALITY BANNER */}
      <BulkBannerSection />
    </>
  );
}
