import React from 'react';
import Link from 'next/link';

export const BulkBannerSection: React.FC = () => {
  return (
    <section className="bulk-banner-section" id="bulk-banner">
      <div className="container">
        <div className="bulk-banner-card">
          <div className="bulk-banner-content">
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              FOR HOSPITALITY &amp; TRADE
            </span>
            <h2 className="bulk-banner-title">Let&apos;s Build the Right Tableware Solution.</h2>
            <p className="bulk-banner-desc">
              Whether you represent a hotel, restaurant, resort or distribution business, connect with VITTESA to discuss your product and commercial requirements.
            </p>
          </div>
          <div className="bulk-banner-cta">
            <Link href="/#contact" className="btn-primary bulk-banner-btn" id="bulk-banner-cta-btn">
              DISCUSS YOUR REQUIREMENTS →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
