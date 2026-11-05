'use client';

import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [emailLaunched, setEmailLaunched] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');
  const [lastGmailUrl, setLastGmailUrl] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, fieldId: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (typeof document !== 'undefined') {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.warn('Clipboard copy failed:', err);
    }
  };

  const triggerMailApp = (url: string) => {
    if (typeof window === 'undefined') return;
    try {
      const link = document.createElement('a');
      link.href = url;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      }, 300);
    } catch {
      window.location.href = url;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !companyName.trim() || !businessEmail.trim()) {
      return;
    }

    const primaryRecipient = 'ruthikabhimrao@gmail.com';
    const ccRecipient = 'bhimraomohitee@gmail.com';
    const subject = `VITTESA Tableware Enquiry — ${companyName.trim() || fullName.trim()}`;
    const body = `VITTESA Commercial Tableware Enquiry
========================================

Full Name:
${fullName.trim()}

Company Name:
${companyName.trim()}

Business Email:
${businessEmail.trim()}

Requirements:
${requirements.trim() || 'General tableware inquiry & product specifications'}

========================================`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // mailto with standard ?cc= ensures 100% compatibility across Outlook, Windows Mail, Apple Mail, and mobile clients
    const mailtoUrl = `mailto:${primaryRecipient}?cc=${ccRecipient}&subject=${encodedSubject}&body=${encodedBody}`;
    
    // Direct Gmail Web compose link for visitors using browser webmail
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${primaryRecipient}&cc=${ccRecipient}&su=${encodedSubject}&body=${encodedBody}`;

    setLastMailtoUrl(mailtoUrl);
    setLastGmailUrl(gmailUrl);

    // Trigger default OS email application immediately
    triggerMailApp(mailtoUrl);

    setEmailLaunched(true);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* 1. Section Header */}
        <div className="contact-section-header">
          <span className="eyebrow contact-section-eyebrow">B2B ENQUIRIES</span>
          <h2 className="contact-section-heading">Let&apos;s Discuss Your Requirements.</h2>
          <p className="contact-section-desc">
            Connect with VITTESA for commercial porcelain tableware, contract manufacturing and international supply requirements.
          </p>
        </div>

        <div className="contact-layout">
          {/* 2. Contact Information Column */}
          <div className="contact-info-col">
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <span className="contact-info-label">GENERAL ENQUIRIES</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <a
                    href="mailto:ruthikabhimrao@gmail.com"
                    className="contact-info-link"
                    title="Send email to ruthikabhimrao@gmail.com"
                  >
                    ruthikabhimrao@gmail.com
                  </a>
                  <a
                    href="mailto:bhimraomohitee@gmail.com"
                    className="contact-info-link"
                    title="Send email to bhimraomohitee@gmail.com"
                  >
                    bhimraomohitee@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-label">INTERNATIONAL BUSINESS</span>
                <p className="contact-info-text">
                  Export enquiries, distribution partnerships and commercial supply.
                </p>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-label">PRODUCT ENQUIRIES</span>
                <p className="contact-info-text">
                  Collections, specifications, samples and customised requirements.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Enquiry Form Column */}
          <div className="enquiry-form-card">
            <form id="b2b-enquiry-form" onSubmit={handleSubmit} noValidate={false}>
              <div className="enquiry-form-header">
                <h3 className="enquiry-form-title">Send Us an Enquiry</h3>
                <p className="enquiry-form-desc">
                  Tell us about your business and requirements. Submitting opens your default email application prefilled with your enquiry details.
                </p>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-full-name">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="contact-full-name"
                  name="fullName"
                  className="form-input"
                  placeholder="Your full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-company-name">
                  COMPANY NAME *
                </label>
                <input
                  type="text"
                  id="contact-company-name"
                  name="companyName"
                  className="form-input"
                  placeholder="Your company name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-business-email">
                  BUSINESS EMAIL *
                </label>
                <input
                  type="email"
                  id="contact-business-email"
                  name="businessEmail"
                  className="form-input"
                  placeholder="Your business email"
                  required
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-requirements">
                  YOUR REQUIREMENTS
                </label>
                <textarea
                  id="contact-requirements"
                  name="requirements"
                  className="form-textarea"
                  rows={4}
                  placeholder="Tell us about your enquiry..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn-primary btn-submit-enquiry"
                >
                  SEND ENQUIRY
                </button>
              </div>

              {/* Status helper & webmail fallback */}
              {emailLaunched && (
                <div
                  className="enquiry-email-fallback-notice"
                  style={{
                    marginTop: '1.25rem',
                    padding: '1.25rem 1.35rem',
                    backgroundColor: 'var(--bg-porcelain, #FBFBF9)',
                    border: '1px solid var(--border-medium, #D5D1CB)',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                    color: 'var(--ink-secondary, #4A4641)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                      fontSize: '0.9375rem',
                    }}
                  >
                    <span style={{ color: 'var(--tone-gold, #9E7B3B)', fontSize: '1.1rem' }}>✉</span>
                    <span>Default email application launched!</span>
                  </div>
                  <p style={{ margin: '0 0 0.85rem 0' }}>
                    Your email client should now be open with your enquiry prefilled. Please review and click <strong>Send</strong> in your mail app.
                  </p>

                  {/* Direct Action Buttons */}
                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => triggerMailApp(lastMailtoUrl)}
                      className="credentials-copy-btn"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem', background: '#FFFFFF' }}
                    >
                      Re-open Mail App
                    </button>
                    {lastGmailUrl && (
                      <a
                        href={lastGmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="credentials-copy-btn"
                        style={{
                          padding: '0.45rem 0.85rem',
                          fontSize: '0.75rem',
                          background: 'var(--ink-primary, #181716)',
                          color: '#FFFFFF',
                          borderColor: 'var(--ink-primary, #181716)',
                          textDecoration: 'none',
                        }}
                      >
                        Open in Gmail (Web) ↗
                      </a>
                    )}
                  </div>

                  <div
                    style={{
                      borderTop: '1px solid var(--border-subtle, #EAE6DE)',
                      paddingTop: '0.85rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--ink-muted)',
                        marginBottom: '0.45rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      Direct recipient addresses:
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          background: '#FFFFFF',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-subtle, #EAE6DE)',
                        }}
                      >
                        <a
                          href="mailto:ruthikabhimrao@gmail.com"
                          style={{
                            color: 'var(--ink-primary)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                          }}
                        >
                          ruthikabhimrao@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('ruthikabhimrao@gmail.com', 'email1')}
                          className="credentials-copy-btn"
                          aria-label="Copy ruthikabhimrao@gmail.com"
                        >
                          {copiedField === 'email1' ? 'Copied' : 'Copy'}
                        </button>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '0.5rem',
                          background: '#FFFFFF',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-subtle, #EAE6DE)',
                        }}
                      >
                        <a
                          href="mailto:bhimraomohitee@gmail.com"
                          style={{
                            color: 'var(--ink-primary)',
                            fontWeight: 500,
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                          }}
                        >
                          bhimraomohitee@gmail.com
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard('bhimraomohitee@gmail.com', 'email2')}
                          className="credentials-copy-btn"
                          aria-label="Copy bhimraomohitee@gmail.com"
                        >
                          {copiedField === 'email2' ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
