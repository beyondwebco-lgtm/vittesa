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
        {/* 1. OLIVERA Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
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

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">OLIVERA</h2>
            <p className="olivera-feature-desc">
              Softly muted olive-grey porcelain with rounded, organic silhouettes crafted for contemporary dining.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/olivera" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 2. IVORA Collection Showcase */}
        <div className="olivera-split-layout">
          {/* Left: Large Collection Image */}
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

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">IVORA</h2>
            <p className="olivera-feature-desc">
              Timeless ivory-toned porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/ivora" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
