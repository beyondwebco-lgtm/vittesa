import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCollections } from '@/data/collections';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';
import { CollectionFadeImage } from '@/components/collection/CollectionFadeImage';

export const metadata: Metadata = {
  title: 'Collections | VITTESA Porcelain Maison',
  description:
    'Explore VITTESA porcelain tableware collections, crafted for fine dining, boutique hospitality, and luxury table settings.',
};

export default function CollectionsGatewayPage() {
  const collections = getCollections();

  return (
    <>
      <h1 className="sr-only">VITTESA Tableware Collections</h1>

      <section
        className="featured-collection-section section-padding"
        style={{ paddingTop: 'clamp(2.5rem, 5vw, 4.5rem)' }}
      >
        <div className="container">
          {collections.map((col) => (
            <div
              key={col.id}
              className="olivera-split-layout"
              style={{
                backgroundColor: 'var(--bg-porcelain-alt)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                overflow: 'hidden',
                marginBottom: '2rem',
              }}
            >
              <div className="olivera-feature-media">
                <Link href={`/collections/${col.slug || col.id}`} aria-label={`Explore ${col.name}`}>
                  {(() => {
                    const img = col.editorialImage || col.heroImage;
                    const ext = img.lastIndexOf('.');
                    const base = ext !== -1 ? img.substring(0, ext) : img;
                    return (
                      <CollectionFadeImage
                        src={img}
                        srcSet={`${base}-800w.webp 800w, ${base}.webp 1600w`}
                        sizes="(max-width: 768px) 100vw, 600px"
                        alt={`${col.name} Porcelain Collection`}
                      />
                    );
                  })()}
                </Link>
              </div>

              <div className="olivera-feature-info" style={{ padding: 'clamp(1rem, 2.5vw, 2.5rem)' }}>
                <h2 className="olivera-feature-title">{col.name}</h2>
                <p className="olivera-feature-desc">{col.description}</p>
                <div className="olivera-feature-cta-wrap">
                  <Link href={`/collections/${col.slug || col.id}`} className="olivera-feature-btn">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BulkBannerSection />
    </>
  );
}
