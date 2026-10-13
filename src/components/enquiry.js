/**
 * VITTESA — Trade Enquiry Form & Minimal Modal Handler
 */

export function initEnquiryForm() {
  const modal = document.getElementById('enquiry-modal');
  const closeBtn = document.getElementById('enquiry-modal-close');
  const forms = document.querySelectorAll('.vittesa-enquiry-form, #enquiry-form');

  closeBtn?.addEventListener('click', closeEnquiryModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeEnquiryModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeEnquiryModal();
    }
  });

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Transmitting Specification Request...';
      }

      setTimeout(() => {
        if (btn) {
          form.innerHTML = `
            <div style="padding: 2rem 1.5rem; text-align: center;">
              <div style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--ink-primary);">Request Received</div>
              <p style="font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                Thank you. Your specification schedule has been registered. Our international procurement team will contact you with wholesale pricing and sample details.
              </p>
              <button type="button" class="btn-primary" onclick="window.vittesaCloseEnquiryModal()" style="font-size: 0.75rem; padding: 0.6rem 1.5rem;">Close</button>
            </div>
          `;
        }
      }, 700);
    });
  });
}

export function openEnquiryModal(collectionName = '') {
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;

  const colInput = document.getElementById('enquiry-collection-input');
  const colBadge = document.getElementById('enquiry-collection-badge');

  if (colInput && collectionName) colInput.value = collectionName;
  if (colBadge) {
    colBadge.textContent = collectionName ? `Collection: ${collectionName}` : 'Hospitality Specification';
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

export function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
