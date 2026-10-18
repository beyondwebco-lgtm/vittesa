import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer olivera-minimal-footer">
      <div className="container text-center">
        <Link
          href="/"
          aria-label="VITTESA Home"
          style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '0.75rem' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo/vittesa-monogram-gold.png"
            alt="VITTESA"
            className="footer-brand-wordmark"
            style={{ margin: '0 auto' }}
          />
        </Link>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--ink-muted)',
            maxWidth: '540px',
            margin: '0 auto 1.5rem',
            lineHeight: 1.6,
          }}
        >
          European-Style Premium Hospitality Porcelain. Dedicated to refined tabletop presentations.
        </p>

        <div
          className="footer-minimal-links"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
            fontSize: '0.8125rem',
          }}
        >
          <Link href="/" style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <Link
            href="/collections/olivera"
            style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}
          >
            OLIVERA
          </Link>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <Link
            href="/collections/ivora"
            style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}
          >
            IVORA
          </Link>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <Link
            href="/showroom"
            style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}
          >
            Products
          </Link>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <Link href="/#about" style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}>
            About
          </Link>
          <span style={{ color: 'var(--border-medium)' }}>•</span>
          <Link href="/#contact" style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}>
            Contact
          </Link>
        </div>

        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--ink-secondary)',
            marginBottom: '1.25rem',
          }}
        >
          <a
            href="mailto:enquiries@vittesa.com"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            enquiries@vittesa.com
          </a>{' '}
          • <span>+44 20 7946 0892</span>
        </div>

        <div
          className="footer-minimal-copy"
          style={{ fontSize: '0.6875rem', color: 'var(--ink-muted)' }}
        >
          © 2026 VITTESA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
