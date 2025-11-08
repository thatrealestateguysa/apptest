// Mobile menu toggle
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  const mm = document.getElementById('mobileMenu');
  if (mm) mm.classList.toggle('hidden');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Panel toggles
document.addEventListener('click', (e) => {
  const t = e.target;
  if (t && t.matches('button.btn[data-panel]')) {
    const id = t.getAttribute('data-panel');
    const panel = document.getElementById(id);
    if (panel) panel.classList.toggle('hidden');
  }
});

// Bond Girl reveal card
const bondGirlTab = document.getElementById('bondGirlTab');
if (bondGirlTab) {
  bondGirlTab.addEventListener('click', (e) => {
    e.preventDefault();
    const card = document.getElementById('bondGirlCard');
    if (card) card.classList.toggle('hidden');
  });
}
