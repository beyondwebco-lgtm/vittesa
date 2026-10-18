import React from 'react';
import Link from 'next/link';

export const FeaturedCollectionSection: React.FC = () => {
  return (
    <section
      className="featured-collection-section section-padding"
      id="featured-collection"
      style={{
        backgroundColor: 'var(--bg-porcelain-alt)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div
          className="editorial-header-block"
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto clamp(2rem, 3.5vw, 3rem)',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
            Curated Porcelain Collections
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
            Two Signatures of European Dining
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Explore VITTESA&apos;s signature porcelain collections, crafted for fine dining and boutique hospitality.
          </p>
        </div>

        {/* 1. OLIVERA Collection Showcase */}
        <div className="olivera-split-layout" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {/* Left: Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/olivera" aria-label="Explore OLIVERA Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/olivera-editorial-hero.jpg"
                alt="OLIVERA Porcelain Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Right: Collection Information */}
          <div className="olivera-feature-info">
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Series 02 • Natural Earth
            </span>
            <h2 className="olivera-feature-title">OLIVERA</h2>
            <p className="olivera-feature-desc">
              Softly muted olive-grey porcelain with rounded, organic silhouettes.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/olivera" className="btn-primary olivera-feature-btn">
                EXPLORE OLIVERA
              </Link>
            </div>
          </div>
        </div>

        {/* 2. IVORA Collection Showcase */}
        <div className="olivera-split-layout" style={{ flexDirection: 'row-reverse' }}>
          {/* Right on Desktop / Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/ivora" aria-label="Explore IVORA Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/ivora-editorial-hero.png"
                alt="IVORA Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Left on Desktop / Information */}
          <div className="olivera-feature-info">
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Series 01 • Timeless Ivora
            </span>
            <h2 className="olivera-feature-title">IVORA</h2>
            <p className="olivera-feature-desc">
              Timeless ivora-toned porcelain for refined dining experiences.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/ivora" className="btn-primary olivera-feature-btn">
                EXPLORE IVORA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
