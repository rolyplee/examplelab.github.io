---
layout: single
title: ""
author_profile: false
permalink: /
---

<div class="lab-block">

  <!-- ====== HERO SLIDER ====== -->
  <div class="hero-slider" aria-label="Figueroa Robotics Lab Photo Gallery">
    <button class="hs-nav hs-prev" aria-label="Previous slide">‹</button>

    <div class="hs-track" role="region" aria-live="polite">
      <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="hs-slide hs-current">
      <img src="{{ '/assets/images/IMG_4075.JPG' | relative_url }}" alt="Lab photo 2" class="hs-slide">
      <img src="{{ '/assets/images/IMG_4115.JPG' | relative_url }}" alt="Lab photo 3" class="hs-slide">
    </div>

    <button class="hs-nav hs-next" aria-label="Next slide">›</button>
    <div class="hs-dots" role="tablist" aria-label="Choose slide"></div>
  </div>

  <!-- ====== HEADING BELOW SLIDER ====== -->
  <h1 class="lab-title"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

  <p class="lab-text">
    The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots
    to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and
    ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
  </p>

</div>

<style>
/* ===== Layout / spacing ===== */
.lab-block{
  max-width: 1600px;              /* big, but within the centered page */
  margin: 1.5rem auto 2rem;       /* tighten top gap under the menu */
  padding: 0 1rem;
  text-align: center;
}
.lab-title{
  margin: 2rem 0 1rem;
  font-size: 2rem;
  line-height: 1.2;
}
.lab-text{
  max-width: 1000px;
  margin: 2rem auto 0;
  line-height: 1.6;
}

/* ===== Slider (namespaced to avoid collisions) ===== */
.hero-slider{
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 1.5rem;
  overflow: hidden;                /* hide off-screen slides */
  border-radius: 12px;
  background: #f2f2f2;
}
.hs-track{
  display: flex;
  transition: transform 300ms ease;
  will-change: transform;
}
.hs-slide{
  flex: 0 0 100%;                 /* exactly one viewport width per slide */
  width: 100%;
  display: block;
  height: auto;                   /* no fixed height -> no cropping */
  object-fit: contain;            /* keep full image visible */
}

/* Controls */
.hs-nav{
  position: absolute; top: 50%; transform: translateY(-50%);
  border: none; background: rgba(0,0,0,0.5); color:#fff;
  width: 48px; height: 48px; border-radius: 50%;
  cursor: pointer; font-size: 24px;
}
.hs-prev{ left: 16px; }
.hs-next{ right: 16px; }

.hs-dots{
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; gap: 8px;
}
.hs-dots button{
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(0,0,0,0.35); cursor: pointer;
}
.hs-dots button[aria-selected="true"]{ background:#000; }
</style>

<script>
/* ===== Minimal, conflict-free slider JS (no width fiddling) ===== */
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
      b.setAttribute('aria-label', `Go to slide ${i+1}`);
      b.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(b);
    });

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      Array.from(dotsEl.children).forEach((b, i) =>
        b.setAttribute('aria-selected', i === index ? 'true' : 'false')
      );
    }
    function goTo(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    prev?.addEventListener('click', () => goTo(index - 1));
    next?.addEventListener('click', () => goTo(index + 1));

    // Touch swipe
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 40) goTo(index - 1);
      if (dx < -40) goTo(index + 1);
    });

    // Optional autoplay
    let timer = setInterval(() => goTo(index + 1), 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => timer = setInterval(() => goTo(index + 1), 5000));

    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
</script>
