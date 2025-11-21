document.addEventListener('DOMContentLoaded', () => {

  // Sticky Header Logic
  const navbar = document.querySelector('.topnav');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Keep observing to allow re-animation if desired, or unobserve to animate once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  const animatedElements = document.querySelectorAll('.timeline-item, .card, .animate-on-scroll, .hero h1, .hero p');

  animatedElements.forEach((el, index) => {
    // Add staggered delay for lists
    if (el.classList.contains('timeline-item') || el.classList.contains('card')) {
      el.style.transitionDelay = `${index % 3 * 0.1}s`;
    }
    observer.observe(el);
  });
});
