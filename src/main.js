/**
 * VITTESA — Application Entry Point
 * Orchestrates navigation, modals, showroom explorer, specification tray, and forms.
 */
import { initHeader, initMobileNav } from './components/navigation.js';
import { initModal, openProductModal } from './components/modal.js';
import { initTray, addToTray, removeFromTray } from './components/tray.js';
import { initShowroom } from './components/showroom.js';
import { initCollectionSubpageFilter } from './components/collection-filter.js';
import { initProductCarousels } from './components/carousel.js';
import { initEnquiryForm, openEnquiryModal, closeEnquiryModal } from './components/enquiry.js';
import { renderDynamicSections } from './components/dynamic-sections.js';
import { parseUrlParams } from './components/router.js';

// Expose global methods for inline HTML triggers
window.vittesaOpenModal = openProductModal;
window.vittesaAddToTray = addToTray;
window.vittesaRemoveFromTray = removeFromTray;
window.vittesaOpenEnquiryModal = openEnquiryModal;
window.vittesaCloseEnquiryModal = closeEnquiryModal;

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initModal();
  initTray();
  initEnquiryForm();
  initCollectionSubpageFilter();
  initShowroom();
  initProductCarousels();
  renderDynamicSections();
  parseUrlParams();
});
