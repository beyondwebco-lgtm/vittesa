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
            OUR APPROACH
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
            Designed for Hospitality.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Commercial porcelain tableware supported by considered design, product expertise and dependable business coordination.
          </p>
        </div>

        <div className="trust-grid">
          {/* Card 1 — Product Expertise */}
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
            <h3 className="trust-card-title">Product Expertise</h3>
            <p className="trust-card-desc">
              Guidance on collections, product specifications, dimensions, finishes and application requirements across hospitality settings.
            </p>
          </div>

          {/* Card 2 — Commercial & Trade Enquiries */}
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
            <h3 className="trust-card-title">Commercial &amp; Trade Enquiries</h3>
            <p className="trust-card-desc">
              Tailored quotations and coordinated supply arrangements for hotels, restaurants, resorts, catering businesses and distributors.
            </p>
          </div>

          {/* Card 3 — International Export Support */}
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
            <h3 className="trust-card-title">International Export Support</h3>
            <p className="trust-card-desc">
              Guidance on export requirements, shipping arrangements, destination coordination and delivery planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
