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
                src="/assets/catalogue/olivera-editorial-hero.webp"
                srcSet="/assets/catalogue/olivera-editorial-hero-800w.webp 800w, /assets/catalogue/olivera-editorial-hero.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="OLIVERA Porcelain Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
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
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/ivora" aria-label="Explore IVORA Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/ivora-editorial-hero.webp"
                srcSet="/assets/catalogue/ivora-editorial-hero-800w.webp 800w, /assets/catalogue/ivora-editorial-hero.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="IVORA Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
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

        {/* 3. SPECKLED BROWN Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/speckled-brown" aria-label="Explore SPECKLED BROWN Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/speckled-brown-collection.webp"
                srcSet="/assets/catalogue/speckled-brown-collection-800w.webp 800w, /assets/catalogue/speckled-brown-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="SPECKLED BROWN Stoneware Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">SPECKLED BROWN</h2>
            <p className="olivera-feature-desc">
              Artisan speckled brown vitrified stoneware featuring natural mineral flecks, organic silhouettes, and rich tactile warmth.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/speckled-brown" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 4. GREYBORNE Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/greyborne" aria-label="Explore GREYBORNE Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/greyborne-collection.webp"
                srcSet="/assets/catalogue/greyborne-collection-800w.webp 800w, /assets/catalogue/greyborne-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="GREYBORNE Stoneware Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">GREYBORNE</h2>
            <p className="olivera-feature-desc">
              Architectural mineral slate grey stoneware featuring smooth matte surfaces, refined contours, and exceptional hospitality durability.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/greyborne" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 5. MODERN SAGE GREEN Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/modern-sage-green" aria-label="Explore MODERN SAGE GREEN Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/modern-sage-green-collection.webp"
                srcSet="/assets/catalogue/modern-sage-green-collection-800w.webp 800w, /assets/catalogue/modern-sage-green-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="MODERN SAGE GREEN Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">MODERN SAGE GREEN</h2>
            <p className="olivera-feature-desc">
              Subtle modern sage green porcelain with soft satin surfaces, balanced profiles, and calm contemporary hospitality presence.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/modern-sage-green" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 6. TERRANE Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/terrane" aria-label="Explore TERRANE Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/terrane-collection.webp"
                srcSet="/assets/catalogue/terrane-collection-800w.webp 800w, /assets/catalogue/terrane-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="TERRANE Mineral Earth Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">TERRANE</h2>
            <p className="olivera-feature-desc">
              Raw earthy mineral-toned vitrified porcelain crafted with sculpted profiles, hand-accented rims, and organic tactile presence.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/terrane" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 7. MODERN PINK Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/modern-pink" aria-label="Explore MODERN PINK Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/modern-pink-collection.webp"
                srcSet="/assets/catalogue/modern-pink-collection-800w.webp 800w, /assets/catalogue/modern-pink-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="MODERN PINK Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">MODERN PINK</h2>
            <p className="olivera-feature-desc">
              Delicate modern blush pink porcelain featuring smooth satin surfaces, balanced architectural profiles, and serene contemporary dining elegance.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/modern-pink" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 8. MODERN BROWN Collection Showcase */}
        <div
          className="olivera-split-layout"
          style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}
        >
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/modern-brown" aria-label="Explore MODERN BROWN Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/modern-brown-collection.webp"
                srcSet="/assets/catalogue/modern-brown-collection-800w.webp 800w, /assets/catalogue/modern-brown-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="MODERN BROWN Warm Earth Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">MODERN BROWN</h2>
            <p className="olivera-feature-desc">
              Rich modern brown porcelain featuring velvety matte surfaces, organic depth, and grounded contemporary hospitality presence.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/modern-brown" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* 9. MODERN BLACK Collection Showcase */}
        <div className="olivera-split-layout">
          {/* Left: Large Collection Image */}
          <div className="olivera-feature-media">
            <Link href="/collections/modern-black" aria-label="Explore MODERN BLACK Collection">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/modern-black-collection.webp"
                srcSet="/assets/catalogue/modern-black-collection-800w.webp 800w, /assets/catalogue/modern-black-collection.webp 1600w"
                sizes="(max-width: 768px) 100vw, 600px"
                alt="MODERN BLACK Architectural Noir Porcelain Tableware Collection Editorial"
                className="olivera-feature-img"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* Right: Minimal Text Content */}
          <div className="olivera-feature-info">
            <h2 className="olivera-feature-title">MODERN BLACK</h2>
            <p className="olivera-feature-desc">
              Dramatic architectural matte black porcelain offering velvety satin sheen, high-contrast framing, and prestigious modern tabletop presence.
            </p>
            <div className="olivera-feature-cta-wrap">
              <Link href="/collections/modern-black" className="olivera-feature-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
