// Isolated review enhancement. Content and native <details> navigation work without it.
const picker = document.querySelector('.theme-control');
const select = picker?.querySelector('select');
const requested = new URLSearchParams(location.search).get('theme');
if (requested === 'dark' || requested === 'light') document.documentElement.dataset.theme = requested;
if (picker && select) {
  picker.hidden = false;
  select.value = requested === 'dark' || requested === 'light' ? requested : 'system';
  select.addEventListener('change', () => {
    if (select.value === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = select.value;
  });
}
const menu = document.querySelector('.mobile-nav');
menu?.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
