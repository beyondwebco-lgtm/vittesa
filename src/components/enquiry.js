/**
 * VITTESA — Trade Enquiry Form Handler
 */
export function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Transmitting Specification Request...';
    }

    setTimeout(() => {
      if (btn) {
        btn.textContent = 'Specification Request Submitted';
        btn.style.backgroundColor = '#565D46';
        form.innerHTML = `
          <div style="margin-top: 1rem; padding: 1.25rem; background: #EAF2EB; border: 1px solid #7FA884; color: #2C5E33; font-size: 0.875rem; border-radius: 2px;">
            <strong>Thank you.</strong> Your hospitality specification schedule has been registered. Our international procurement desk will contact you with volume pricing and technical datasheets.
          </div>
        `;
      }
      form.reset();
    }, 900);
  });
}
