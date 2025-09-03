function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
  document.getElementById(pageId).focus();
}

window.onload = () => {
  showPage('home');
  setupThemeToggle();
};

function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  let darkMode = false;

  function sunIcon() {
    return `
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" fill="#f7c948"/>
      </svg>
    `;
  }

  function moonIcon() {
    return `
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" fill="#aecff2"/>
        <path d="M19 14c0 2.8-2.2 5-5 5a5 5 0 110-10c.2 0 .5 0 .7.1a7 7 0 005.2 4.9c-.6.1-1.2.1-1.9.1z"
          fill="#0b0d2b"/>
      </svg>
    `;
  }

  function updateIcon() {
    themeIcon.innerHTML = darkMode ? moonIcon() : sunIcon();
  }

  // Load saved theme
  if (window.localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkMode = true;
  } else {
    body.classList.remove('dark-mode');
    darkMode = false;
  }
  updateIcon();

  toggleBtn.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
      body.classList.add('dark-mode');
      window.localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      window.localStorage.setItem('theme', 'light');
    }
    updateIcon();
  });
}