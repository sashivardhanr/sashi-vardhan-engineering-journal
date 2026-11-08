// Runs before paint. Storage may be unavailable; CSS still follows the OS.
(() => {
  try {
    const choice = localStorage.getItem('journal-theme');
    if (choice === 'light' || choice === 'dark') {
      document.documentElement.dataset.theme = choice;
    }
  } catch { /* A blocked store must never prevent rendering. */ }
})();
