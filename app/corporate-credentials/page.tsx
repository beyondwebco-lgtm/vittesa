import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CopyButton } from '@/components/corporate/CopyButton';

export const metadata: Metadata = {
  title: 'Corporate Credentials | VITTESA PRIVATE LIMITED',
  description:
    'Verified corporate identity, statutory registrations, enterprise identifiers, professional profiles, and official contact channels for VITTESA PRIVATE LIMITED.',
};

export default function CorporateCredentialsPage() {
  return (
    <div className="credentials-page">
      {/* Hero Header */}
      <header className="credentials-hero">
        <div className="container">
          <nav className="credentials-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Corporate Credentials</span>
          </nav>
          <div className="editorial-header-block" style={{ marginBottom: 0, maxWidth: '820px' }}>
            <span className="eyebrow credentials-section-eyebrow">
              Official Disclosures &amp; Compliance
            </span>
            <h1 className="credentials-hero-title">Corporate Credentials</h1>
            <p className="credentials-hero-desc">
              Statutory enterprise registrations, regulatory identifiers, professional leadership
              profiles, and verified corporate contact channels for VITTESA PRIVATE LIMITED.
            </p>
          </div>
        </div>
      </header>

      {/* Main Credentials Content */}
      <div className="container">
        <div className="credentials-container">
          {/* SECTION 1: Corporate Identity & Registrations */}
          <section className="credentials-section" aria-labelledby="section-corporate-identity">
            <div className="credentials-section-header">
              <span className="credentials-section-eyebrow">Statutory Registrations</span>
              <h2 id="section-corporate-identity" className="credentials-section-title">
                Corporate Identity &amp; Registrations
              </h2>
              <p className="credentials-section-desc">
                Official enterprise registrations certified under the Ministry of Corporate Affairs
                and the Government of India.
              </p>
            </div>

            <div className="credentials-grid-2">
              {/* Company Name */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">Company Name</span>
                  <span className="credentials-badge">Verified Legal Entity</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-value">VITTESA PRIVATE LIMITED</span>
                  <CopyButton text="VITTESA PRIVATE LIMITED" />
                </div>
                <span className="credentials-subtext">
                  Private Limited Company incorporated under the Companies Act, 2013
                </span>
              </div>

              {/* Corporate Identification Number (CIN) */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">Corporate Identification Number (CIN)</span>
                  <span className="credentials-badge">MCA Registered</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-value mono">U46305KL2026PTC101267</span>
                  <CopyButton text="U46305KL2026PTC101267" />
                </div>
                <span className="credentials-subtext">
                  Ministry of Corporate Affairs, Registrar of Companies, Kerala
                </span>
              </div>

              {/* Goods and Services Tax Identification Number (GSTIN) */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">
                    Goods and Services Tax Identification Number (GSTIN)
                  </span>
                  <span className="credentials-badge">Active Taxpayer</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-value mono">32AALCV9448F1ZZ</span>
                  <CopyButton text="32AALCV9448F1ZZ" />
                </div>
                <span className="credentials-subtext">
                  Goods and Services Tax Network (GSTN), Government of India
                </span>
              </div>

              {/* Udyam Registration Number */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">Udyam Registration Number</span>
                  <span className="credentials-badge">MSME Registered</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-value mono">UDYAM-KL-13-0120761</span>
                  <CopyButton text="UDYAM-KL-13-0120761" />
                </div>
                <span className="credentials-subtext">
                  Ministry of Micro, Small and Medium Enterprises, Government of India
                </span>
              </div>

              {/* Importer Exporter Code (IEC) */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">Importer Exporter Code (IEC)</span>
                  <span className="credentials-badge">DGFT Authorised</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-value mono">AALCV9448F</span>
                  <CopyButton text="AALCV9448F" />
                </div>
                <span className="credentials-subtext">
                  Directorate General of Foreign Trade, Ministry of Commerce and Industry
                </span>
              </div>

              {/* Headquarters Office Address */}
              <div className="credentials-card">
                <div className="credentials-card-top">
                  <span className="credentials-label">Headquarters Office Address</span>
                  <span className="credentials-badge">Registered Office</span>
                </div>
                <div className="credentials-value-row">
                  <span className="credentials-placeholder-tag">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    [Headquarters Office Address — To be updated]
                  </span>
                </div>
                <span className="credentials-subtext">
                  Official registered facility and corporate headquarters address
                </span>
              </div>
            </div>
          </section>

          {/* SECTION DIVIDER */}
          <hr className="credentials-divider" />

          {/* SECTION 2: Corporate & Professional Profiles */}
          <section
            className="credentials-section credentials-profiles-container"
            aria-labelledby="section-professional-profiles"
          >
            <div className="credentials-section-header">
              <span className="credentials-section-eyebrow">Leadership &amp; Company Presence</span>
              <h2 id="section-professional-profiles" className="credentials-section-title">
                Corporate &amp; Professional Profiles
              </h2>
              <p className="credentials-section-desc">
                Verified professional representation and corporate networks of VITTESA PRIVATE LIMITED.
              </p>
            </div>

            <div className="credentials-grid-2">
              {/* Director – LinkedIn Profile */}
              <div className="credentials-profile-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="credentials-icon-wrap" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="credentials-label" style={{ display: 'block' }}>
                      Director – LinkedIn Profile
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                      Executive Leadership
                    </span>
                  </div>
                </div>

                <div>
                  <span className="credentials-placeholder-tag">
                    [Director LinkedIn Profile — To be updated]
                  </span>
                </div>

                <span className="credentials-subtext">
                  Verified executive leadership, management advisory, and corporate governance profile.
                </span>
              </div>

              {/* VITTESA – LinkedIn Company Page */}
              <div className="credentials-profile-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div className="credentials-icon-wrap" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <span className="credentials-label" style={{ display: 'block' }}>
                      VITTESA – LinkedIn Company Page
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                      Corporate Enterprise Page
                    </span>
                  </div>
                </div>

                <div>
                  <span className="credentials-placeholder-tag">
                    [VITTESA – LinkedIn Company Page — To be updated]
                  </span>
                </div>

                <span className="credentials-subtext">
                  Official corporate announcements, trade milestones, and institutional supply updates.
                </span>
              </div>
            </div>
          </section>

          {/* SECTION DIVIDER */}
          <hr className="credentials-divider" />

          {/* SECTION 3: Contact Information */}
          <section
            className="credentials-section credentials-contact-container"
            aria-labelledby="section-contact-info"
          >
            <div className="credentials-section-header">
              <span className="credentials-section-eyebrow">Direct Desk Communications</span>
              <h2 id="section-contact-info" className="credentials-section-title">
                Contact Information
              </h2>
              <p className="credentials-section-desc">
                Dedicated business correspondence avenues for institutional procurement, international trade, and regulatory affairs.
              </p>
            </div>

            <div className="credentials-grid-2">
              {/* Business Enquiries – Email */}
              <div className="credentials-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div className="credentials-icon-wrap" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="credentials-label" style={{ display: 'block' }}>
                      Business Enquiries – Email
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                      Commercial &amp; Trade Desks
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="credentials-placeholder-tag">
                    [Business Enquiries – Email — To be updated]
                  </span>
                </div>

                <span className="credentials-subtext">
                  Formal procurement RFQs, bulk catalogue specifications, and export arrangements.
                </span>
              </div>

              {/* Business Enquiries – WhatsApp */}
              <div className="credentials-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                  <div className="credentials-icon-wrap" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="credentials-label" style={{ display: 'block' }}>
                      Business Enquiries – WhatsApp
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                      Instant Trade Advisory Desk
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="credentials-placeholder-tag">
                    [Business Enquiries – WhatsApp — To be updated]
                  </span>
                </div>

                <span className="credentials-subtext">
                  Rapid specification coordination, catalogue requests, and logistics support.
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
