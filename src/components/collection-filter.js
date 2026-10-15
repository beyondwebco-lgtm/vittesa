/**
 * VITTESA — Collection Subpage In-Page Filter
 */
export function initCollectionSubpageFilter() {
  const filterBars = document.querySelectorAll('.products-filter-bar');
  if (!filterBars.length) return;

  filterBars.forEach(bar => {
    const section = bar.closest('section') || document;
    const filterChips = bar.querySelectorAll('.filter-chip');
    const cards = section.querySelectorAll('.product-item-card');

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
  });
}

