const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header shadow on scroll
const header = document.getElementById('header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });

// Mobile menu + Portfolios dropdown
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', false);
}));
document.querySelectorAll('.has-drop').forEach(d => {
  const btn = d.querySelector('.drop-btn');
  btn.addEventListener('click', () => {
    const open = d.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// Hero slideshow
const slides = [...document.querySelectorAll('.hero-slide')];
let current = 0;
if (!reduceMotion && slides.length > 1) {
  setInterval(() => {
    slides[current].classList.remove('on');
    current = (current + 1) % slides.length;
    slides[current].classList.add('on');
  }, 7000);
}

// Scale: count up when visible
const counters = document.querySelectorAll('[data-count]');
if (!reduceMotion && 'IntersectionObserver' in window) {
  counters.forEach(el => { el.textContent = '0'; });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const end = +e.target.dataset.count, start = performance.now(), dur = 1400;
      const tick = t => {
        const p = Math.min((t - start) / dur, 1);
        e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: .6 });
  counters.forEach(el => io.observe(el));
}

// Map tooltips
const tip = document.getElementById('tooltip');
document.querySelectorAll('.pin').forEach(pin => {
  pin.addEventListener('mousemove', e => {
    tip.innerHTML = `${pin.dataset.img ? `<img src="${pin.dataset.img}" alt="">` : ''}<strong>${pin.dataset.name}</strong><br>${pin.dataset.info}`;
    tip.style.left = e.clientX + 14 + 'px';
    tip.style.top = e.clientY + 14 + 'px';
    tip.classList.add('show');
  });
  pin.addEventListener('mouseleave', () => tip.classList.remove('show'));
});

// Enquiry form (placeholder: opens the mail client until a backend is connected)
document.getElementById('enquiry').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nType: ${f.get('type')}\n\n${f.get('message')}`;
  location.href = `mailto:hello@merrillion.com?subject=${encodeURIComponent('Merrillion enquiry')}&body=${encodeURIComponent(body)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
