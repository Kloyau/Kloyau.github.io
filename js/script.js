document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Observer for Text Reveals
  const observerOptions = {
    threshold: 0.15,
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

  const revealElements = document.querySelectorAll('.reveal-text, .card-editorial, .timeline-node');
  revealElements.forEach((el, index) => {
    // Stagger animations slightly
    el.style.transitionDelay = `${index % 3 * 0.1}s`;
    observer.observe(el);
  });

  // 2. Navbar Transition
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Parallax Effect for Hero Background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      heroBg.style.transform = `translateY(${scrollValue * 0.4}px) scale(1.1)`;
    });
  }

  // 4. Magnetic Button Effect
  const buttons = document.querySelectorAll('.btn-magnetic');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) * 0.3; // Magnetic pull strength
      const deltaY = (y - centerY) * 0.3;

      btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
    });
  });

  // 5. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      if (navMenu.style.display === 'flex') {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FCFCFC';
        navMenu.style.padding = '2rem';
        navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }
    });
  }
});
