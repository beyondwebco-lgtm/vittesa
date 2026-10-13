/**
 * VITTESA — Dynamic Section Renderers (Homepage)
 */
import { HOSPITALITY_APPLICATIONS, PRIVATE_LABEL_PILLARS } from '../data/catalogue-data.js';

export function renderDynamicSections() {
  const plGrid = document.getElementById('private-label-grid');
  if (plGrid) {
    plGrid.innerHTML = PRIVATE_LABEL_PILLARS.map(p => `
      <div class="pl-card">
        <div class="pl-num">${p.number}</div>
        <h4>${p.title}</h4>
        <p>${p.description}</p>
      </div>
    `).join('');
  }

  const appsGrid = document.getElementById('apps-grid');
  if (appsGrid) {
    appsGrid.innerHTML = HOSPITALITY_APPLICATIONS.map(app => `
      <div class="app-card">
        <h4>${app.title}</h4>
        <p class="app-sub">${app.subtitle}</p>
        <div class="app-curation-tag">
          <span>Recommended Layer:</span>
          <strong>${app.curation}</strong>
        </div>
      </div>
    `).join('');
  }
}
