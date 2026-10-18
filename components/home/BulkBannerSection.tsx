import React from 'react';
import Link from 'next/link';

export const BulkBannerSection: React.FC = () => {
  return (
    <section className="bulk-banner-section" id="bulk-banner">
      <div className="container">
        <div className="bulk-banner-card">
          <div className="bulk-banner-content">
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Trade &amp; Hospitality
            </span>
            <h2 className="bulk-banner-title">Looking for Bulk or Wholesale Orders?</h2>
            <p className="bulk-banner-desc">
              Contact VITTESA to discuss product requirements, quantities, and available shipping
              options.
            </p>
          </div>
          <div className="bulk-banner-cta">
            <Link href="/#contact" className="btn-primary bulk-banner-btn" id="bulk-banner-cta-btn">
              ENQUIRE ABOUT BULK ORDERS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
