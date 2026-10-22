'use client';

import React, { useState, useEffect } from 'react';
import { useTrayStore } from '@/store/trayStore';
import { useModalStore } from '@/store/modalStore';
import { downloadSpecificationPdf } from '@/lib/pdf-generator';

export const SpecificationTrayDrawer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { items, isOpen, closeTray, removeFromTray } = useTrayStore();
  const openEnquiryModal = useModalStore((state) => state.openEnquiryModal);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeTray();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeTray]);

  const activeItems = mounted ? items : [];

  const handleTransferToEnquiry = () => {
    closeTray();
    const itemLines = activeItems
      .map((i) => `• ${i.name} (${i.code}) — ${i.dimensions || 'Standard'}`)
      .join('\n');
    const note = `Specification Schedule Request (${activeItems.length} items):\n${itemLines}\n\nPlease provide quotation and sample availability for the selected tableware schedule.`;

    openEnquiryModal('Specification Schedule Request', note);
  };

  const handleExportPdf = () => {
    if (activeItems.length === 0) return;
    downloadSpecificationPdf(activeItems);
  };

  return (
    <>
      <div
        className={`tray-backdrop ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.45)',
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        onClick={closeTray}
      />

      <aside
        className={`spec-tray-drawer ${isOpen ? 'open' : ''}`}
        id="spec-tray"
        role="dialog"
        aria-modal="true"
        aria-label="Cart"
        style={{
          zIndex: 9999,
        }}
      >
        <div className="tray-header">
          <div>
            <h3>Your Cart</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
              Selected Tableware Items ({activeItems.length} {activeItems.length === 1 ? 'item' : 'items'})
            </p>
          </div>
          <button className="btn-close-tray" aria-label="Close Cart" onClick={closeTray}>
            ✕
          </button>
        </div>

        <div className="tray-body">
          {activeItems.length === 0 ? (
            <div id="tray-empty" className="tray-empty-state" style={{ display: 'block' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Your Cart is Empty
              </p>
              <p style={{ fontSize: '0.8125rem' }}>
                Explore collections to add items to your cart.
              </p>
            </div>
          ) : (
            <div id="tray-items" className="tray-items-list">
              {activeItems.map((item) => (
                <div key={item.id} className="tray-item-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="tray-item-thumb" />
                  <div className="tray-item-info">
                    <div className="tray-item-title">{item.name}</div>
                    <div className="tray-item-collection">
                      {item.collection} {item.dimensions ? `• ${item.dimensions}` : ''}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="tray-item-remove"
                    onClick={() => removeFromTray(item.id)}
                    title="Remove piece"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="tray-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {activeItems.length > 0 && (
            <button
              type="button"
              onClick={handleExportPdf}
              className="btn-secondary"
              style={{
                width: '100%',
                textAlign: 'center',
                padding: '0.75rem',
                fontSize: '0.8125rem',
                border: '1px solid var(--border-medium)',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              ↓ Download PDF Schedule
            </button>
          )}

          <button
            type="button"
            id="tray-proceed-btn"
            disabled={activeItems.length === 0}
            onClick={handleTransferToEnquiry}
            className="btn-primary"
            style={{
              backgroundColor: 'var(--ink-primary)',
              color: '#FFF',
              width: '100%',
              textAlign: 'center',
              opacity: activeItems.length === 0 ? 0.5 : 1,
              cursor: activeItems.length === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Transfer to Trade Enquiry →
          </button>
        </div>
      </aside>
    </>
  );
};
