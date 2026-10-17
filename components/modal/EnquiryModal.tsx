'use client';

import React, { useState, useEffect } from 'react';
import { useModalStore } from '@/store/modalStore';

export const EnquiryModal: React.FC = () => {
  const { isOpen, subject, notes: initialNotes, closeEnquiryModal } = useModalStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNotes(initialNotes);
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeEnquiryModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, initialNotes, closeEnquiryModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setProperty('');
      setNotes('');
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`enquiry-modal-backdrop ${isOpen ? 'open' : ''}`}
      id="enquiry-modal"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEnquiryModal();
      }}
    >
      <div className="enquiry-modal-window">
        <button
          type="button"
          className="enquiry-modal-close"
          id="enquiry-modal-close"
          aria-label="Close modal"
          onClick={closeEnquiryModal}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
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
                marginBottom: '1.5rem',
              }}
            >
              Thank you. Your enquiry regarding <strong>{subject}</strong> has been registered. Our
              team will contact you promptly with pricing, availability, and sample details.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={closeEnquiryModal}
              style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="collection-intro-label" id="enquiry-collection-badge">
                {subject}
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginTop: '0.25rem' }}>
                Product &amp; Trade Enquiry
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
                Direct procurement pricing, lead times, and physical sample boxes for hospitality
                projects.
              </p>
            </div>

            <form className="vittesa-enquiry-form" id="enquiry-form" onSubmit={handleSubmit}>
              <input type="hidden" name="collection" value={subject} />

              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                  htmlFor="modal-enq-name"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modal-enq-name"
                  name="name"
                  className="form-input"
                  placeholder="Your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.875rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                  htmlFor="modal-enq-email"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="modal-enq-email"
                  name="email"
                  className="form-input"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.875rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                  htmlFor="modal-enq-property"
                >
                  Company / Property Name (Optional)
                </label>
                <input
                  type="text"
                  id="modal-enq-property"
                  name="property"
                  className="form-input"
                  placeholder="e.g. Grand Horizon Hotel"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.875rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: '0.35rem',
                  }}
                  htmlFor="modal-enq-notes"
                >
                  Message *
                </label>
                <textarea
                  id="modal-enq-notes"
                  name="notes"
                  className="form-textarea"
                  rows={3}
                  placeholder="Tell us about your requirements, required pieces, or sample request..."
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.875rem',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{
                  width: '100%',
                  background: 'var(--ink-primary)',
                  color: '#FFF',
                  padding: '0.85rem',
                  fontSize: '0.8125rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Transmitting Request...' : 'SEND ENQUIRY'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
