const filterButtons = document.querySelectorAll('[data-filter]');
const protocolCards = document.querySelectorAll('[data-tags]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    protocolCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.tags.split(' ').includes(selectedFilter);
      card.hidden = !matches;
    });
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
