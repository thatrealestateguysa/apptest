
document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener('click', (e) => {
  const t = e.target;
  if (t && t.matches('button.btn[data-panel]')) {
    const id = t.getAttribute('data-panel');
    const p = document.getElementById(id);
    if (p) p.classList.toggle('hidden');
  }
  if (t && t.id === 'dncTab') { e.preventDefault(); document.getElementById('dncRow')?.classList.toggle('hidden'); }
  if (t && t.id === 'bondGirlTab') { e.preventDefault(); document.getElementById('bondGirlCard')?.classList.toggle('hidden'); }
});
