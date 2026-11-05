'use client';

import React, { useState, useEffect } from 'react';
import { useModalStore } from '@/store/modalStore';

export const EnquiryModal: React.FC = () => {
  const { isOpen, subject, notes: initialNotes, closeEnquiryModal } = useModalStore();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [property, setProperty] = useState('');
  const [notes, setNotes] = useState('');
  const [emailLaunched, setEmailLaunched] = useState(false);
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

  useEffect(() => {
    if (isOpen) {
      setNotes(initialNotes);
      setEmailLaunched(false);
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

    if (!name.trim() || !email.trim() || !notes.trim()) {
      return;
    }

    const recipients = 'ruthikabhimrao@gmail.com,bhimraomohitee@gmail.com';
    const emailSubject = `VITTESA Specification Enquiry: ${subject || 'Tableware'} — ${property.trim() || name.trim()}`;
    const emailBody = `VITTESA Product & Trade Enquiry
----------------------------------------
Subject / Piece: ${subject || 'General Tableware'}
Full Name: ${name.trim()}
Email Address: ${email.trim()}
Company / Property Name: ${property.trim() || 'Not specified'}

Specifications & Requirements:
${notes.trim()}
----------------------------------------`;

    const mailtoUrl = `mailto:${recipients}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }

    setEmailLaunched(true);
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

        <div style={{ marginBottom: '1.25rem' }}>
          <span className="collection-intro-label" id="enquiry-collection-badge">
            {subject}
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginTop: '0.25rem' }}>
            Product &amp; Trade Enquiry
          </h3>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginTop: '0.25rem' }}>
            Submitting will open your default email application prefilled with your specifications.
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
              autoComplete="name"
              className="form-input"
              placeholder="Your full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border-medium)',
                fontSize: '1rem',
                minHeight: '44px',
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
              inputMode="email"
              autoComplete="email"
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
                fontSize: '1rem',
                minHeight: '44px',
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
              autoComplete="organization"
              className="form-input"
              placeholder="e.g. Grand Horizon Hotel"
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border-medium)',
                fontSize: '1rem',
                minHeight: '44px',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
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
                fontSize: '1rem',
              }}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{
              width: '100%',
              minHeight: '46px',
              background: 'var(--ink-primary)',
              color: '#FFF',
              padding: '0.85rem',
              fontSize: '0.8125rem',
              letterSpacing: '0.14em',
              fontWeight: 600,
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            SEND ENQUIRY
          </button>

          {/* Email launch status notice & copy fallback */}
          {emailLaunched && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-porcelain, #FBFBF9)',
                border: '1px solid var(--border-medium, #D5D1CB)',
                borderRadius: '6px',
                fontSize: '0.8125rem',
                lineHeight: 1.5,
                color: 'var(--ink-secondary, #4A4641)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.35rem',
                  fontWeight: 600,
                  color: 'var(--ink-primary)',
                }}
              >
                <span style={{ color: 'var(--tone-gold, #9E7B3B)' }}>✉</span>
                <span>Opening your email client...</span>
              </div>
              <p style={{ margin: '0 0 0.65rem 0' }}>
                Please review and click <strong>Send</strong> in your email app.
              </p>
              <div style={{ borderTop: '1px solid var(--border-subtle, #EAE6DE)', paddingTop: '0.5rem' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'var(--ink-muted)',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Email app didn&apos;t open? Send directly or copy recipients:
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#FFFFFF',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle, #EAE6DE)',
                    }}
                  >
                    <a
                      href="mailto:ruthikabhimrao@gmail.com"
                      style={{ color: 'var(--ink-primary)', fontWeight: 500, fontSize: '0.78rem', textDecoration: 'none' }}
                    >
                      ruthikabhimrao@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('ruthikabhimrao@gmail.com', 'modal_email1')}
                      className="credentials-copy-btn"
                      style={{ padding: '0.2rem 0.45rem', fontSize: '0.625rem' }}
                    >
                      {copiedField === 'modal_email1' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#FFFFFF',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-subtle, #EAE6DE)',
                    }}
                  >
                    <a
                      href="mailto:bhimraomohitee@gmail.com"
                      style={{ color: 'var(--ink-primary)', fontWeight: 500, fontSize: '0.78rem', textDecoration: 'none' }}
                    >
                      bhimraomohitee@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('bhimraomohitee@gmail.com', 'modal_email2')}
                      className="credentials-copy-btn"
                      style={{ padding: '0.2rem 0.45rem', fontSize: '0.625rem' }}
                    >
                      {copiedField === 'modal_email2' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
