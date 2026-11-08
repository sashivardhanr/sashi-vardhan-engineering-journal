type Theme = 'system' | 'light' | 'dark';
const root = document.documentElement;
const picker = document.querySelector<HTMLSelectElement>('#theme-choice');
const themeLabel = document.querySelector<HTMLElement>('[data-theme-control]');
if (picker && themeLabel) {
  picker.value = root.dataset.theme === 'dark' || root.dataset.theme === 'light' ? root.dataset.theme : 'system';
  themeLabel.hidden = false;
  picker.addEventListener('change', () => {
    const choice = picker.value as Theme;
    if (choice === 'system') delete root.dataset.theme;
    else root.dataset.theme = choice;
    try {
      if (choice === 'system') localStorage.removeItem('journal-theme');
      else localStorage.setItem('journal-theme', choice);
    } catch { /* The in-memory choice still works. */ }
  });
  // Keep other open tabs aligned. An absent override continues following OS changes via CSS.
  window.addEventListener('storage', event => {
    if (event.key !== 'journal-theme' && event.key !== null) return;
    if (event.newValue === 'light' || event.newValue === 'dark') root.dataset.theme = event.newValue;
    else delete root.dataset.theme;
    picker.value = root.dataset.theme ?? 'system';
  });
}

const menu = document.querySelector<HTMLDetailsElement>('#mobile-menu');
const trigger = menu?.querySelector<HTMLElement>('summary');
if (menu && trigger) {
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      event.preventDefault();
      menu.open = false;
      trigger.focus();
    }
  });
  menu.querySelectorAll<HTMLAnchorElement>('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.open = false;
      if (!link.hash || link.pathname !== location.pathname) return;
      const target = document.getElementById(link.hash.slice(1));
      target?.focus({ preventScroll: true });
    });
  });
  matchMedia('(min-width: 56rem)').addEventListener('change', event => {
    if (!event.matches) return;
    const focused = document.activeElement;
    const wasInside = focused instanceof HTMLElement && menu.contains(focused);
    const href = focused instanceof HTMLAnchorElement ? focused.getAttribute('href') : '/';
    menu.open = false;
    if (wasInside) Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a')).find(link => link.getAttribute('href') === href)?.focus();
  });
}
