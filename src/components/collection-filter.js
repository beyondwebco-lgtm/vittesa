/**
 * VITTESA — Collection Subpage In-Page Filter
 */
export function initCollectionSubpageFilter() {
  const filterChips = document.querySelectorAll('.products-filter-bar .filter-chip');
  const cards = document.querySelectorAll('#collection-products-grid .product-item-card');

  if (!filterChips.length || !cards.length) return;

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
