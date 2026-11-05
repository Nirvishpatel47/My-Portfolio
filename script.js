/**
 * NIRVISH PATEL — PERSONAL PORTFOLIO
 * Vanilla JavaScript: Multi-Page Theme Management, Mobile Navigation & Interactions
 */

(function () {
  'use strict';

  // =========================================================================
  // Theme Management (Light / Dark) with Persistent Storage
  // =========================================================================
  const STORAGE_KEY = 'nirvish_theme_preference';
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggleBtns.forEach(btn => {
        const text = btn.querySelector('.theme-text');
        const icon = btn.querySelector('.theme-icon');
        if (text) text.textContent = 'Light';
        if (icon) {
          // Sun Icon
          icon.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          `;
        }
      });
    } else {
      document.documentElement.removeAttribute('data-theme');
      themeToggleBtns.forEach(btn => {
        const text = btn.querySelector('.theme-text');
        const icon = btn.querySelector('.theme-icon');
        if (text) text.textContent = 'Dark';
        if (icon) {
          // Moon Icon
          icon.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          `;
        }
      });
    }
  }

  // Initialize theme on page load
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const nextTheme = isDark ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // =========================================================================
  // Mobile Navigation Drawer
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.textContent = isOpen ? '✕ Close' : '☰ Menu';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile drawer when clicking a link
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.textContent = '☰ Menu';
        document.body.style.overflow = '';
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNavDrawer.classList.contains('open')) {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.textContent = '☰ Menu';
        document.body.style.overflow = '';
      }
    });
  }

  // =========================================================================
  // Active Navigation Link Highlighting
  // =========================================================================
  function highlightActiveNav() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const normalizedHref = href.replace(/\/$/, '') || '/';

      if (normalizedHref === currentPath || (normalizedHref !== '/' && currentPath.startsWith(normalizedHref))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActiveNav();

  // =========================================================================
  // Profile Image Fallback Handler
  // =========================================================================
  const profileImgs = document.querySelectorAll('.hero-portrait-img, .about-portrait-img');
  profileImgs.forEach(img => {
    img.addEventListener('error', function () {
      this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 400' width='320' height='400'><rect width='320' height='400' fill='%23ebe7de'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia, serif' font-size='42' font-weight='600' fill='%235c594f'>NP</text><text x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='13' fill='%238a857a'>Nirvish Patel</text></svg>";
    });
  });

  // =========================================================================
  // Copy Email to Clipboard
  // =========================================================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    const feedbackEl = copyEmailBtn.querySelector('.copy-text') || copyEmailBtn;
    const defaultText = feedbackEl.textContent || 'Copy Email';
    let timeoutId = null;

    function showFeedback() {
      copyEmailBtn.classList.add('copied');
      feedbackEl.textContent = 'Copied!';
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        copyEmailBtn.classList.remove('copied');
        feedbackEl.textContent = defaultText;
      }, 2000);
    }

    function fallbackCopy(text) {
      const tempArea = document.createElement('textarea');
      tempArea.value = text;
      tempArea.style.position = 'fixed';
      tempArea.style.opacity = '0';
      document.body.appendChild(tempArea);
      tempArea.focus();
      tempArea.select();
      try {
        document.execCommand('copy');
        showFeedback();
      } catch (err) {}
      document.body.removeChild(tempArea);
    }

    copyEmailBtn.addEventListener('click', function () {
      const email = copyEmailBtn.getAttribute('data-email') || 'nirvishpatel47@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(showFeedback)
          .catch(() => fallbackCopy(email));
      } else {
        fallbackCopy(email);
      }
    });
  }

})();
