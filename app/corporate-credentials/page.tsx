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
                  <span
                    className="credentials-value"
                    style={{ fontSize: '0.975rem', fontWeight: 500, lineHeight: 1.5 }}
                  >
                    KITEZ, Building No. 51/2384-58, Thrissur, Kerala, India, 680004
                  </span>
                  <CopyButton text="KITEZ, Building No. 51/2384-58, Thrissur, Kerala, India, 680004" />
                </div>
                <span className="credentials-subtext">
                  Official corporate headquarters and registered administrative facility
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
                  <a
                    href="https://www.linkedin.com/in/ruthika-b-ba1b91290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credentials-profile-link"
                    title="Open Director LinkedIn Profile in a new tab"
                  >
                    <span>linkedin.com/in/ruthika-b-ba1b91290</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
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
                  <a
                    href="https://www.linkedin.com/company/vittesa-hospitality/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credentials-profile-link"
                    title="Open VITTESA LinkedIn Company Page in a new tab"
                  >
                    <span>linkedin.com/company/vittesa-hospitality</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '0.5rem' }}>
                  <a
                    href="mailto:ruthikabhimrao@gmail.com"
                    className="credentials-contact-link"
                    title="Send email to ruthikabhimrao@gmail.com"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>ruthikabhimrao@gmail.com</span>
                  </a>

                  <a
                    href="mailto:bhimraomohitee@gmail.com"
                    className="credentials-contact-link"
                    title="Send email to bhimraomohitee@gmail.com"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>bhimraomohitee@gmail.com</span>
                  </a>
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
                  <a
                    href="https://wa.me/918129796216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credentials-contact-link credentials-whatsapp-link"
                    title="Direct WhatsApp chat with VITTESA Trade Advisory"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>+91 8129796216</span>
                    <span className="credentials-badge" style={{ marginLeft: '0.35rem' }}>
                      Start Chat →
                    </span>
                  </a>
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
