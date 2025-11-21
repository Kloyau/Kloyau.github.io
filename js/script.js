/**
 * Harvard-Level Academic Portfolio
 * Ultimate Prestige Edition
 * Core Logic & Animation Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Animation Engine (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-text, .card-editorial, .card-link, .card-recommendation, .timeline-node');
  revealElements.forEach((el, index) => {
    // Smart Staggering: Calculate delay based on index within its container
    // This prevents massive delays on long lists
    const delay = (index % 4) * 0.15;
    el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });

  // --- 2. Navigation Logic ---
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  // Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
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
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        navMenu.style.borderTop = '3px solid #A51C30';
      } else {
        navMenu.style.display = 'none';
      }
    });
  }

  // --- 3. Parallax Engine ---
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      // Limit parallax to viewport height to save performance
      if (scrollValue < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollValue * 0.4}px) scale(1.1)`;
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

      const deltaX = (x - centerX) * 0.2; // Strength
      const deltaY = (y - centerY) * 0.2;

      btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
    });
  });

});
