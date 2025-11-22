/**
 * Harvard-Level Academic Portfolio
 * Content-Rich Prestige Edition
 * Core Logic & Animation Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Animation Engine (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.05, // Trigger earlier for smoother feel
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-text, .card-editorial, .card-link, .card-recommendation, .timeline-node');
  revealElements.forEach((el, index) => {
    // Smart Staggering: Limit max delay to avoid waiting too long
    const delay = Math.min((index % 4) * 0.1, 0.3);
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });

  // --- 2. Navigation Logic ---
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  // Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle (Robust)
  if (mobileBtn) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent immediate close
      const isHidden = navMenu.style.display === 'none' || navMenu.style.display === '';

      if (isHidden) {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FCFCFC';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        navMenu.style.borderTop = '3px solid #A51C30';
        navMenu.style.zIndex = '1002';
      } else {
        navMenu.style.display = 'none';
      }
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navMenu.style.display === 'flex' && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
        navMenu.style.display = 'none';
      }
    });
  }

  // --- 3. Parallax Engine ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollValue * 0.3}px) scale(1.1)`;
      }
    });
  }

  // --- 4. Magnetic Buttons ---
  const buttons = document.querySelectorAll('.btn-magnetic');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) * 0.15; // Subtle
      const deltaY = (y - centerY) * 0.15;

      btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

});
