---
layout: single
title: ""
author_profile: false
permalink: /
---

<!-- ===== FULL-BLEED HERO SLIDER ===== -->
<div class="hero-slider fullbleed" aria-label="Figueroa Robotics Lab Photo Gallery">
  <button class="hs-nav hs-prev" aria-label="Previous slide">‹</button>

  <div class="hs-track" role="region" aria-live="polite">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="hs-slide hs-current">
    <img src="{{ '/assets/images/IMG_4075.JPG' | relative_url }}" alt="Lab photo 2" class="hs-slide">
    <img src="{{ '/assets/images/IMG_4115.JPG' | relative_url }}" alt="Lab photo 3" class="hs-slide">
  </div>

  <button class="hs-nav hs-next" aria-label="Next slide">›</button>
  <div class="hs-dots" role="tablist" aria-label="Choose slide"></div>
</div>

<!-- ===== CONTENT BELOW ===== -->
<section class="content-wrap">
  <h1 class="lab-title">Welcome to the Figueroa Robotics Lab</h1>

</section>

<style>
/* ---------- Slider: full-browser-width, centered ---------- */
.hero-slider{
  position: relative;
  overflow: hidden;
  background: #f2f2f2;
}
.hero-slider.fullbleed{
  width: 100vw;
  max-width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 0;
}
.hs-track{ display: flex; transition: transform 300ms ease; will-change: transform; }
.hs-slide{
  flex: 0 0 100%; width: 100%; display: block;
  height: auto; object-fit: contain; max-height: 85vh;
}

/* Controls & dots */
.hs-nav{
  position: absolute; top: 50%; transform: translateY(-50%);
  border: none; background: rgba(0,0,0,0.5); color:#fff;
  width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 24px;
}
.hs-prev{ left: 16px; } .hs-next{ right: 16px; }
.hs-dots{
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; gap: 8px;
}
.hs-dots button{
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(0,0,0,0.35); cursor: pointer;
}
.hs-dots button[aria-selected="true"]{ background:#000; }

/* ---------- Text layout below slider ---------- */
.content-wrap{
  width: 100%;
  max-width: 1600px;
  margin: 2.25rem auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  /* NEW: force inner elements to center regardless of theme padding */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lab-title{
  margin: 1.75rem 0 1.25rem;
  font-weight: 800;
  font-size: clamp(1.6rem, 2.2vw + 0.6rem, 2.4rem);
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;         /* keep one line on large screens */
}
@media (max-width: 768px){
  .lab-title{
    white-space: normal;       /* allow wrapping on phones */
    font-size: clamp(1.4rem, 4vw + 0.6rem, 2rem);
  }
}

.lab-text{
  margin: 0 auto;
  max-width: 95ch;             /* comfortable line length */
  line-height: 1.85;
  text-align: center;
}

/* Tighten gap to the masthead if needed */
.main .page__content { padding-top: 1.25rem; }
</style>

<script>
/* ===== Minimal, conflict-free slider JS ===== */
(function () {
  function init() {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const track  = slider.querySelector('.hs-track');
    const slides = Array.from(slider.querySelectorAll('.hs-slide'));
    const prev   = slider.querySelector('.hs-prev');
    const next   = slider.querySelector('.hs-next');
    const dotsEl = slider.querySelector('.hs-dots');
    let index = 0;

    // Build dots
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(b);
    });

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      Array.from(dotsEl.children).forEach((b, i) =>
        b.setAttribute('aria-selected', i === index ? 'true' : 'false')
      );
    }
    function goTo(i){ index = (i + slides.length) % slides.length; update(); }

    prev?.addEventListener('click', () => goTo(index - 1));
    next?.addEventListener('click', () => goTo(index + 1));

    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goTo(index - 1);
      if (dx < -40) goTo(index + 1);
    });

    let timer = setInterval(() => goTo(index + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () =>
      timer = setInterval(() => goTo(index + 1), 5000)
    );

    update();
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
</script>
