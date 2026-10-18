import React from 'react';

export const TrustSection: React.FC = () => {
  return (
    <section className="trust-section section-padding" id="trust">
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
            Our Commitment
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
            Chosen with Care.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Refined porcelain tableware supported by direct advisory and attentive service.
          </p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-card-icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <h3 className="trust-card-title">Product Enquiries Welcome</h3>
            <p className="trust-card-desc">
              Dedicated guidance on individual piece selections, tabletop dimensions, and technical
              porcelain specifications.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-card-icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 className="trust-card-title">Bulk &amp; Wholesale Enquiries</h3>
            <p className="trust-card-desc">
              Flexible order volumes and bespoke quotation schedules for hospitality, boutique
              dining, and trade projects.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-card-icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="trust-card-title">International Shipping Options — Contact Us</h3>
            <p className="trust-card-desc">
              Direct consultation on available international freight, delivery destinations, and
              logistics options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
