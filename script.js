// Reveal sections gently as they enter the viewport
const revealTargets = document.querySelectorAll(
  '.service-card, .portfolio-card, .price-row, .hero-copy, .hero-visual'
);

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(14px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// Respect reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach(el => {
    el.style.transition = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
