/**
 * VITTESA — Global Client State
 */
export const state = {
  activeCollectionFilter: 'all',
  activeCategoryFilter: 'all',
  searchQuery: '',
  specTray: JSON.parse(localStorage.getItem('vittesa_spec_tray') || '[]'),
  currentModalProduct: null
};
