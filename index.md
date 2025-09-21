---
layout: single
title: ""
author_profile: false
permalink: /
---

<!-- ===== FULL-BLEED HERO SLIDER WITH CENTERED TITLE ===== -->
<div class="hero-slider fullbleed" aria-label="Figueroa Robotics Lab Photo Gallery">

  <!-- Centered Overlay Title -->
  <div class="hero-title">
    <h1>Welcome to the Figueroa Robotics Lab</h1>
  </div>

  <button class="hs-nav hs-prev" aria-label="Previous slide">‹</button>

  <div class="hs-track" role="region" aria-live="polite">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="hs-slide hs-current">
    <img src="{{ '/assets/images/IMG_4075.JPG' | relative_url }}" alt="Lab photo 2" class="hs-slide">
    <img src="{{ '/assets/images/IMG_4115.JPG' | relative_url }}" alt="Lab photo 3" class="hs-slide">
  </div>

  <button class="hs-nav hs-next" aria-label="Next slide">›</button>
  <div class="hs-dots" role="tablist" aria-label="Choose slide"></div>
</div>

<style>
/* ---------- Slider ---------- */
.hero-slider{
  position: relative;
  overflow: hidden;
  background: #f2f2f2;       /* ✅ light grey fallback while images load */
}
.hero-slider.fullbleed{
  width: 100vw;
  max-width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  border-radius: 0;
}
.hs-track{
  display: flex;
  transition: transform 300ms ease;
  will-change: transform;
  position: relative;
  z-index: 1;                 /* images below overlay & controls */
}
.hs-slide{
  flex: 0 0 100%;
  width: 100%;
  display: block;
  height: auto;
  object-fit: contain;
  max-height: 85vh;
}

/* ---------- Overlay Title ---------- */
.hero-title{
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;       /* let clicks pass through to arrows */
  z-index: 3;                 /* above images */
}
.hero-title h1{
  color: rgba(255,255,255,0.85);   /* white, slightly transparent */
  background: rgba(0,0,0,0.25);    /* subtle dark pad for readability */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: clamp(1.8rem, 3vw + 1rem, 3rem);
  font-weight: 800;
  margin: 0;
}

/* ---------- Controls & dots ---------- */
.hs-nav{
  position: absolute; top: 50%; transform: translateY(-50%);
  border: none; background: rgba(0,0,0,0.5); color:#fff;
  width: 48px; height: 48px; border-radius: 50%; cursor: pointer; font-size: 24px;
  z-index: 4;                 /* above title overlay */
}
.hs-prev{ left: 16px; }
.hs-next{ right: 16px; }

.hs-dots{
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; gap: 8px;
  z-index: 4;
}
.hs-dots button{
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(255,255,255,0.4); cursor: pointer;
}
.hs-dots button[aria-selected="true"]{ background:#fff; }

/* Tighten gap to the masthead if needed */
.main .page__content { padding-top: 0; }
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

    if (prev) prev.addEventListener('click', () => goTo(index - 1));
    if (next) next.addEventListener('click', () => goTo(index + 1));

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goTo(index - 1);
      if (dx < -40) goTo(index + 1);
    });

    // Autoplay (pause on hover)
    let timer = setInterval(() => goTo(index + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () =>
      (timer = setInterval(() => goTo(index + 1), 5000))
    );

    update();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();
</script>
