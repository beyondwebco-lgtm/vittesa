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
}
