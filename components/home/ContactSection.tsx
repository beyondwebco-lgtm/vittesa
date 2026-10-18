'use client';

import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('general');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setNotes('');
    }, 700);
  };

  return (
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
              Ask us about OLIVERA or IVORA products, bulk orders, or shipping options.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-block">
                <span>Direct Enquiries</span>
                <strong>
                  <a
                    href="mailto:enquiries@vittesa.com"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    enquiries@vittesa.com
                  </a>
                </strong>
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
            {submitted ? (
              <div
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: 'rgba(122, 129, 110, 0.1)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: 'var(--ink-primary)',
                  }}
                >
                  Request Received
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--ink-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  Thank you. Your enquiry has been received. Our team will contact you promptly with
                  sample and procurement details.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setSubmitted(false)}
                  style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}
                >
                  Send Another Message
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
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
                    placeholder="Ask us about OLIVERA or IVORA products, bulk orders, or shipping options..."
                    required
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      backgroundColor: 'var(--ink-primary)',
                      color: '#FFF',
                      width: '100%',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? 'Transmitting Specification Request...' : 'SEND ENQUIRY'}
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
