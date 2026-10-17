'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { getFeaturedProducts } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(8);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: 'general',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* 3. FULL-SCREEN CINEMATIC HERO SECTION */}
      <section className="hero-section hero-fullscreen" id="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Exquisite Porcelain.<br />
              Refined Dining.
            </h1>

            <div className="hero-cta-group">
              <Link href="/collections" className="btn-hero-primary">
                EXPLORE COLLECTIONS
              </Link>
              <a href="#contact" className="btn-hero-secondary">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED COLLECTIONS SHOWCASE (OLIVERA & IVORY) */}
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
              maxWidth: 640,
              margin: '0 auto clamp(2rem, 4vw, 3rem)',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Curated Lines
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
              The Collections
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Considered porcelain tableware designed for exceptional dining tables.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            {/* Collection 1: OLIVERA */}
            <div
              style={{
                background: 'var(--bg-porcelain)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Link href="/collections/olivera" style={{ display: 'block', overflow: 'hidden' }} aria-label="Explore OLIVERA Collection">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/catalogue/olivera-editorial-hero.jpg"
                  alt="OLIVERA Porcelain Collection"
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </Link>
              <div style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="eyebrow" style={{ color: 'var(--tone-gold)', marginBottom: '0.35rem' }}>
                  Natural Earth Series • 17 Pieces
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', margin: '0 0 0.75rem' }}>
                  OLIVERA
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ink-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                  Softly muted olive-grey porcelain with rounded, organic silhouettes.
                </p>
                <div>
                  <Link href="/collections/olivera" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    EXPLORE OLIVERA
                  </Link>
                </div>
              </div>
            </div>

            {/* Collection 2: IVORY */}
            <div
              style={{
                background: 'var(--bg-porcelain)',
                border: '1px solid var(--border-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Link href="/collections/ivory" style={{ display: 'block', overflow: 'hidden' }} aria-label="Explore IVORY Collection">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/catalogue/ivory-editorial-hero.png"
                  alt="IVORY Porcelain Collection"
                  style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </Link>
              <div style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="eyebrow" style={{ color: 'var(--tone-gold)', marginBottom: '0.35rem' }}>
                  Timeless Porcelain • 17 Pieces
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 2.5vw, 2.2rem)', margin: '0 0 0.75rem' }}>
                  IVORY
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ink-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                  Timeless ivory-toned porcelain for refined dining experiences.
                </p>
                <div>
                  <Link href="/collections/ivory" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    EXPLORE IVORY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SECTION */}
      <section className="olivera-catalogue-section section-padding" id="products">
        <div className="container">
          <div
            className="editorial-header-block"
            style={{
              textAlign: 'center',
              maxWidth: 680,
              margin: '0 auto clamp(2rem, 4vw, 3rem)',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--tone-gold)' }}>
              Selected for Your Table
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.75rem)', margin: '0.5rem 0 0.75rem' }}>
              Selected for Your Table
            </h2>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Curated porcelain tableware from the OLIVERA and IVORY collections.
            </p>
          </div>

          {/* Curated Products Grid */}
          <div className="products-grid-catalog olivera-cards-grid" id="collection-products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* View All Products CTA */}
          <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            <Link
              href="/showroom"
              className="btn-primary"
              style={{ padding: '0.95rem 2.5rem', fontSize: '0.8125rem' }}
            >
              EXPLORE ALL PIECES (34 PIECES) →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BRAND INTRODUCTION — SHORT & VISUALLY REFINED */}
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
                VITTESA brings refined design and considered porcelain craftsmanship to dining spaces,
                boutique hospitality, and professional table settings.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-secondary)' }}>
                Each piece balances tactile artistry with commercial endurance, engineered to frame
                culinary presentations with warmth, distinction, and timeless elegance.
              </p>
            </div>

            <div className="about-media-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/catalogue/about-us.png"
                alt="Serene Earth-Toned Ceramic Table Setting — VITTESA Porcelain Maison"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & TRUST SECTION (CHOSEN WITH CARE) */}
      <section className="trust-section section-padding" id="trust">
        <div className="container">
          <div
            className="editorial-header-block"
            style={{
              textAlign: 'center',
              maxWidth: 680,
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
                Dedicated guidance on individual piece selections, tabletop dimensions, and technical porcelain specifications.
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
                Flexible order volumes and bespoke quotation schedules for hospitality, boutique dining, and trade projects.
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
                Direct consultation on available international freight, delivery destinations, and logistics options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BULK AND WHOLESALE ENQUIRY BANNER */}
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
              <a
                href="#contact"
                className="btn-primary bulk-banner-btn"
                id="bulk-banner-cta-btn"
                onClick={() => setFormData((prev) => ({ ...prev, enquiryType: 'bulk' }))}
              >
                ENQUIRE ABOUT BULK ORDERS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SIMPLIFIED CONTACT SECTION */}
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Business Details */}
            <div className="contact-sidebar">
              <span className="eyebrow">Direct Desk</span>
              <h2>How Can We Help?</h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-secondary)',
                  margin: '1rem 0 1.75rem',
                }}
              >
                Ask us about OLIVERA products, bulk orders, or shipping options.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-block">
                  <span>Direct Enquiries</span>
                  <strong>enquiries@vittesa.com</strong>
                </div>
                <div className="contact-detail-block">
                  <span>Telephone</span>
                  <strong>+44 20 7946 0892</strong>
                </div>
                <div className="contact-detail-block">
                  <span>Showroom Support</span>
                  <strong>Physical sample boxes, quotation schedules, and shipping consultations</strong>
                </div>
              </div>
            </div>

            {/* Right Column: Streamlined Enquiry Form */}
            <div className="enquiry-form-card">
              {formSubmitted ? (
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    background: 'var(--bg-porcelain-alt)',
                    borderRadius: '4px',
                  }}
                >
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                    Thank You for Your Enquiry
                  </h3>
                  <p style={{ color: 'var(--ink-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    Our hospitality desk will review your requirements and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        enquiryType: 'general',
                        notes: '',
                      });
                    }}
                    className="btn-primary"
                    style={{ marginTop: '1.5rem', padding: '0.65rem 1.5rem', fontSize: '0.75rem' }}
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              ) : (
                <form id="b2b-enquiry-form" onSubmit={handleSubmit}>
                  <input type="hidden" name="collection" value="OLIVERA" />

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="enq-name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="enq-name"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="enq-email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="enq-email"
                        name="email"
                        className="form-input"
                        placeholder="name@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="enq-company">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="enq-company"
                        name="company"
                        className="form-input"
                        placeholder="e.g. Grand Horizon Hotel"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="enq-phone">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="enq-phone"
                        name="phone"
                        className="form-input"
                        placeholder="+44 20 0000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enq-type">
                      Enquiry Type (Optional)
                    </label>
                    <select
                      id="enq-type"
                      name="enquiryType"
                      className="form-select"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="general">General Enquiry</option>
                      <option value="product">Product Order / Specification</option>
                      <option value="bulk">Bulk / Wholesale Enquiry</option>
                      <option value="samples">Sample Box Request</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="enquiry-notes">
                      Message *
                    </label>
                    <textarea
                      id="enquiry-notes"
                      name="notes"
                      className="form-textarea"
                      rows={4}
                      placeholder="Ask us about OLIVERA products, bulk orders, or shipping options..."
                      required
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ backgroundColor: 'var(--ink-primary)', color: '#FFF', width: '100%' }}
                    >
                      SEND ENQUIRY
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
