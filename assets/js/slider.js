// /assets/js/slider.js
(function () {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const track  = slider.querySelector('.track');
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const prev   = slider.querySelector('.prev');
    const next   = slider.querySelector('.next');
    const dotsEl = slider.querySelector('.dots');
    let index = 0;

    // 1) Explicitly set the track width and each slide width
    track.style.width = `${slides.length * 100}%`;
    slides.forEach(s => { s.style.width = `${100 / slides.length}%`; });

    // Build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Go to slide ${i+1}`);
      b.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(b);
    });

    function update() {
      // 2) Use translate3d to avoid any transform conflicts
      track.style.transform = `translate3d(-${index * (100 / slides.length)}%, 0, 0)`;
      Array.from(dotsEl.children).forEach((b, i) =>
        b.setAttribute('aria-selected', i === index ? 'true' : 'false')
      );
    }
    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    prev.addEventListener('click', () => goTo(index - 1));
    next.addEventListener('click', () => goTo(index + 1));

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goTo(index - 1);
      if (dx < -40) goTo(index + 1);
    });

    // Autoplay (optional)
    let timer = setInterval(() => goTo(index + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => timer = setInterval(() => goTo(index + 1), 5000));

    // Start
    update();
  }
})();
