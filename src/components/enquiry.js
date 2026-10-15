/**
 * VITTESA — Trade Enquiry Form & Minimal Modal Handler
 */

export function initEnquiryForm() {
  const modal = document.getElementById('enquiry-modal');
  const closeBtn = document.getElementById('enquiry-modal-close');
  const forms = document.querySelectorAll('.vittesa-enquiry-form, #enquiry-form, #b2b-enquiry-form');

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
      const originalText = btn ? btn.textContent : 'Submit';
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Transmitting Specification Request...';
      }

      setTimeout(() => {
        const formStatus = form.querySelector('#form-status');
        if (formStatus) {
          formStatus.innerHTML = `
            <div style="padding: 1.5rem; text-align: center; background: rgba(122, 129, 110, 0.1); border: 1px solid var(--border-medium); border-radius: 4px; margin-top: 1rem;">
              <div style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--ink-primary);">Request Received</div>
              <p style="font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.6;">
                Thank you. Your enquiry has been received. Our team will contact you promptly with sample and procurement details.
              </p>
            </div>
          `;
          form.reset();
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        } else if (btn) {
          form.innerHTML = `
            <div style="padding: 2rem 1.5rem; text-align: center;">
              <div style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--ink-primary);">Request Received</div>
              <p style="font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
                Thank you. Your request has been registered. Our team will contact you promptly with pricing and sample details.
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
  if (modal) {
    const colInput = document.getElementById('enquiry-collection-input');
    const colBadge = document.getElementById('enquiry-collection-badge');
    const notesInput = modal.querySelector('textarea[name="notes"]') || modal.querySelector('#enq-notes');

    if (colInput && collectionName) colInput.value = collectionName;
    if (colBadge) {
      colBadge.textContent = collectionName ? collectionName : 'Collection: OLIVERA';
    }
    if (notesInput && collectionName && !notesInput.value) {
      notesInput.value = `Enquiry regarding: ${collectionName}\n`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else {
    // If no modal on this page, scroll to contact form and prefill notes
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const notes = document.getElementById('enquiry-notes') || document.getElementById('enq-notes');
      if (notes && collectionName) {
        notes.value = `Enquiry regarding: ${collectionName}\n` + (notes.value.includes(collectionName) ? '' : notes.value);
        notes.focus();
      }
    }
  }
}

export function closeEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

