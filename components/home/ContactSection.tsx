'use client';

import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !companyName.trim() || !businessEmail.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Log submitted payload with updated field names
      if (typeof window !== 'undefined') {
        console.log('Enquiry transmitted:', {
          fullName,
          companyName,
          businessEmail,
          requirements,
        });
      }
      setIsSubmitting(false);
      setSubmitted(true);
      setFullName('');
      setCompanyName('');
      setBusinessEmail('');
      setRequirements('');
    }, 700);
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
                <a
                  href="mailto:ruthikabhimrao@gmail.com"
                  className="contact-info-link"
                >
                  ruthikabhimrao@gmail.com
                </a>
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
            {submitted ? (
              <div className="enquiry-success-state">
                <div className="enquiry-success-icon" aria-hidden="true">
                  ✓
                </div>
                <h3 className="enquiry-success-title">Request Received</h3>
                <p className="enquiry-success-desc">
                  Thank you. Your enquiry has been received. Our team will get in touch.
                </p>
                <button
                  type="button"
                  className="btn-primary enquiry-btn-reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form id="b2b-enquiry-form" onSubmit={handleSubmit} noValidate={false}>
                <div className="enquiry-form-header">
                  <h3 className="enquiry-form-title">Send Us an Enquiry</h3>
                  <p className="enquiry-form-desc">
                    Tell us about your business and requirements. Our team will get in touch.
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
                    disabled={isSubmitting}
                    className="btn-primary btn-submit-enquiry"
                  >
                    {isSubmitting ? 'TRANSMITTING ENQUIRY...' : 'SEND ENQUIRY'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
