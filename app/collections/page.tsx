import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'The Collection — VITTESA Porcelain Maison',
  description:
    'Softly muted olive-grey porcelain with rounded, organic silhouettes. Discover the exclusive OLIVERA porcelain collection.',
};

export default function CollectionsGatewayPage() {
  return (
    <>
      {/* COLLECTIONS INDEX HERO */}
      <header className="collection-hero" style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0 2rem' }}>
        <div className="container">
          <div className="breadcrumb-bar" style={{ marginBottom: '1.5rem', fontSize: '0.8125rem' }}>
            <Link href="/" style={{ color: 'var(--ink-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span className="sep" style={{ margin: '0 0.5rem', color: 'var(--border-medium)' }}>
              /
            </span>
            <span className="current" style={{ color: 'var(--ink-primary)' }}>
              Collection
            </span>
          </div>

          <div className="editorial-header-block" style={{ marginBottom: 0, maxWidth: 860 }}>
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Curated Hospitality Porcelain
            </span>
            <h1 style={{ fontSize: 'clamp(2.75rem, 5vw, 4.25rem)', margin: '0.5rem 0 1rem' }}>
              THE COLLECTION
            </h1>
            <p
              style={{
                fontSize: 'clamp(1.0625rem, 1.6vw, 1.25rem)',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
              }}
            >
              European-style hospitality porcelain crafted for fine dining and luxury hospitality.
            </p>
          </div>
        </div>
      </header>

      {/* FEATURED COLLECTION CARD */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="olivera-split-layout"
            style={{
              background: 'var(--bg-porcelain-alt)',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              border: '1px solid var(--border-subtle)',
              alignItems: 'center',
            }}
          >
            <div className="olivera-feature-media">
              <Link href="/collections/olivera" aria-label="Explore OLIVERA Collection">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/catalogue/olivera-editorial-hero.jpg"
                  alt="OLIVERA Porcelain Collection Editorial"
                  className="olivera-feature-img"
                  loading="eager"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Link>
            </div>

            <div className="olivera-feature-info">
              <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                Flagship Line • 17 Pieces
              </span>
              <h2 className="olivera-feature-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                OLIVERA
              </h2>
              <p className="olivera-feature-desc" style={{ fontSize: '1rem', lineHeight: 1.6, margin: '1rem 0 2rem' }}>
                Defined by softly muted olive-grey mineral glazes and tactile, organic contours. Designed specifically
                for contemporary presentation across culinary courses.
              </p>
              <div className="olivera-feature-cta-wrap">
                <Link href="/collections/olivera" className="btn-primary">
                  EXPLORE OLIVERA (17 PIECES) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BULK BANNER */}
      <section className="bulk-banner-section" id="bulk-banner">
        <div className="container">
          <div className="bulk-banner-card">
            <div className="bulk-banner-content">
              <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
                Trade &amp; Hospitality
              </span>
              <h2 className="bulk-banner-title">Looking for Bulk or Wholesale Orders?</h2>
              <p className="bulk-banner-desc">
                Contact VITTESA to discuss product requirements, quantities, and available shipping options.
              </p>
            </div>
            <div className="bulk-banner-cta">
              <Link href="/#contact" className="btn-primary bulk-banner-btn">
                ENQUIRE ABOUT BULK ORDERS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
