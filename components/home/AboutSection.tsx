import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      className="about-section section-padding"
      id="about"
      style={{
        backgroundColor: 'var(--bg-porcelain-alt)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        <div className="about-editorial-layout">
          <div className="about-text-col">
            <span className="eyebrow eyebrow-dark">About VITTESA</span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Thoughtfully Chosen Porcelain.
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--ink-secondary)',
                marginBottom: '1.5rem',
              }}
            >
              VITTESA brings refined design and considered porcelain craftsmanship to dining
              spaces, boutique hospitality, and professional table settings.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-secondary)' }}>
              Each piece balances tactile artistry with commercial endurance, engineered to frame
              culinary presentations with warmth, distinction, and timeless elegance.
            </p>
          </div>

          <div className="about-media-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/catalogue/about-us.webp"
              alt="Serene Earth-Toned Ceramic Table Setting — VITTESA Porcelain Maison"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
