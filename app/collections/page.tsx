import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getCollections } from '@/data/collections';
import { BulkBannerSection } from '@/components/home/BulkBannerSection';

export const metadata: Metadata = {
  title: 'Collections | VITTESA Porcelain Maison',
  description:
    'Explore VITTESA European porcelain tableware collections, crafted for fine dining, boutique hospitality, and luxury table settings.',
};

export default function CollectionsGatewayPage() {
  const collections = getCollections();

  return (
    <>
      <section className="olivera-intro-section" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 2rem' }}>
        <div className="container text-center">
          <span className="collection-intro-label">VITTESA · PORCELAIN MAISON</span>
          <h1
            className="collection-intro-title"
            style={{ margin: '0.25rem 0 0.5rem', letterSpacing: '0.08em' }}
          >
            TABLEWARE COLLECTIONS
          </h1>
          <p
            className="collection-intro-desc"
            style={{
              maxWidth: '620px',
              margin: '0 auto clamp(2rem, 3vw, 3rem)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.6,
              color: 'var(--ink-secondary)',
            }}
          >
            Each VITTESA collection represents a distinct material philosophy, balancing tactile
            artistry with commercial vitrified porcelain resilience.
          </p>
        </div>
      </section>

      <section className="featured-collection-section section-padding" style={{ paddingTop: 0 }}>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={col.editorialImage || col.heroImage}
                    alt={`${col.name} Porcelain Collection`}
                    className="olivera-feature-img"
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className="olivera-feature-info">
                <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                  Series 02 • Natural Earth
                </span>
                <h2 className="olivera-feature-title">{col.name}</h2>
                <p className="olivera-feature-desc">{col.description}</p>
                <div style={{ margin: '1rem 0 1.5rem', fontSize: '0.8125rem', color: 'var(--ink-secondary)' }}>
                  <strong>{col.itemCount || col.piecesCount} Verified Pieces</strong> • Vitrified Porcelain • Dishwasher &amp; Microwave Safe
                </div>
                <div className="olivera-feature-cta-wrap">
                  <Link href={`/collections/${col.slug || col.id}`} className="btn-primary olivera-feature-btn">
                    EXPLORE {col.name.toUpperCase()} COLLECTION
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
