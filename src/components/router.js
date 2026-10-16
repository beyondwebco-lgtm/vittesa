/**
 * VITTESA — URL Parameter Routing
 */
import { state } from './state.js';
import { renderShowroomGrid } from './showroom.js';

export function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const colParam = params.get('collection');
  if (colParam && document.getElementById('showroom-grid')) {
    state.activeCollectionFilter = colParam;
    document.querySelectorAll('[data-collection]').forEach(c => {
      c.classList.toggle('active', c.dataset.collection === colParam);
    });
    renderShowroomGrid();
  }

  const enquireParam = params.get('enquire') || params.get('product');
  if (enquireParam) {
    const notes = document.getElementById('enquiry-notes') || document.getElementById('enq-notes');
    if (notes && !notes.value) {
      notes.value = `Enquiry regarding: ${enquireParam}\n`;
    }
    const enqType = document.getElementById('enq-type');
    if (enqType) {
      enqType.value = 'product';
    }
    if (window.vittesaOpenEnquiryModal) {
      setTimeout(() => {
        window.vittesaOpenEnquiryModal(enquireParam);
      }, 200);
    }
  }

  // Handle Bulk & Wholesale CTA button click on the page
  document.addEventListener('click', (e) => {
    const bulkBtn = e.target.closest('#bulk-banner-cta-btn, .bulk-banner-btn');
    if (bulkBtn) {
      const enqType = document.getElementById('enq-type');
      if (enqType) enqType.value = 'bulk';
      const notes = document.getElementById('enquiry-notes');
      if (notes && !notes.value) {
        notes.value = 'Enquiry regarding bulk / wholesale order requirements.\n';
      }
    }
  });
}
