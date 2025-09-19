---
layout: single
title: ""
author_profile: false
permalink: /
---

<div class="lab-wrapper">

  <!-- ====== MAIN PHOTO SLIDER ====== -->
  <div class="slider" aria-label="Figueroa Robotics Lab Photo Gallery">
    <button class="nav prev" aria-label="Previous slide">‹</button>

    <div class="track" role="region" aria-live="polite">
      <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="slide current">
      <img src="{{ '/assets/images/IMG_4075.JPG' | relative_url }}" alt="Lab photo 2" class="slide">
      <img src="{{ '/assets/images/IMG_4115.JPG' | relative_url }}" alt="Lab photo 3" class="slide">
    </div>

    <button class="nav next" aria-label="Next slide">›</button>
    <div class="dots" role="tablist" aria-label="Choose slide"></div>
  </div>

  <!-- ====== HEADING BELOW SLIDER ====== -->
  <h1 class="lab-title"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

  <p class="lab-text">
    The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
  </p>

</div>

<style>
/* Wrapper: center all content and reduce top gap */
.lab-wrapper{
  max-width: 1600px;
  margin: 1.5rem auto 2rem;   /* top margin tightened */
  padding: 0 1rem;
  text-align: center;
}

/* Heading below slider */
.lab-title{
  margin: 2rem 0 1rem;
  font-size: 2rem;
  line-height: 1.2;
}

/* Description paragraph */
.lab-text{
  max-width: 1000px;
  margin: 2rem auto 0;
  line-height: 1.6;
  text-align: center;
}

/* ===== Slider ===== */
.slider{
  position: relative;
  width: 100%;
  max-width: 1600px;      /* large but still centered */
  margin: 0 auto 1.5rem;
  overflow: hidden;
  border-radius: 12px;
  background: #f2f2f2;
}

.track{
  display: flex;
  transition: transform 300ms ease;
  will-change: transform;
}

.slide{
  flex: 0 0 100%;   /* exactly one viewport width per slide */
  width: 100%;
  height: auto;
  object-fit: contain;    /* show entire image, no crop */
  display: block;
}

/* Navigation arrows */
.nav{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(0,0,0,0.5);
  color: #fff;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
}
.prev{ left: 16px; }
.next{ right: 16px; }

/* Dots */
.dots{
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.dots button{
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.35);
  cursor: pointer;
}
.dots button[aria-selected="true"]{ background: #000; }
</style>

<script>
// /assets/js/slider.js replacement (inline for convenience)
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

    // Swipe support
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
})();
</script>
