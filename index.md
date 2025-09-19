---
layout: single
title: "Photo Gallery"
permalink: /gallery/
author_profile: false
---

<h1 style="text-align: center;"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

<div style="text-align: center; margin: 20px 0;">
  <img src="{{ site.baseurl }}/assets/images/IMG_4148.JPG"
       alt="Figueroa Robotics Lab"
       style="max-width: 100%; height: auto; border-radius: 8px;">
</div>

<p>
The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
</p>

<hr style="margin: 40px 0;">

<h2 style="text-align: center;">Lab Photo Slider</h2>

<!-- ====== PHOTO SLIDER ====== -->
<div class="slider" aria-label="Photo gallery">
  <button class="nav prev" aria-label="Previous slide">‹</button>

  <div class="track" role="region" aria-live="polite">
    <img src="{{ site.baseurl }}/assets/images/IMG_4148.JPG" alt="Description 1" class="slide current">
    <img src="{{ site.baseurl }}/assets/images/IMG_4148.JPG" alt="Description 2" class="slide">
    <img src="{{ site.baseurl }}/assets/images/IMG_4148.JPG" alt="Description 3" class="slide">
    <!-- Add more <img> elements as needed -->
  </div>

  <button class="nav next" aria-label="Next slide">›</button>

  <div class="dots" role="tablist" aria-label="Choose slide"></div>
</div>

<style>
/* ====== Slider Styles ====== */
.slider {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 12px;
}
.track {
  display: flex;
  transition: transform 300ms ease;
}
.slide {
  width: 100%;
  flex: 0 0 100%;
  object-fit: cover;
  display: block;
}
.nav {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  border: none;
  background: rgba(0,0,0,0.5);
  color: #fff;
  width: 40px; height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
}
.prev { left: 10px; }
.next { right: 10px; }
.dots {
  position: absolute; left: 50%; bottom: 10px; translate: -50% 0;
  display: flex; gap: 6px;
}
.dots button {
  width: 10px; height: 10px; border-radius: 50%;
  border: none; background: rgba(255,255,255,0.6);
  cursor: pointer;
}
.dots button[aria-selected="true"] { background: white; }
</style>

<script>
/* ====== Slider Script ====== */
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.slider');
  const track  = slider.querySelector('.track');
  const slides = [...slider.querySelectorAll('.slide')];
  const prev   = slider.querySelector('.prev');
  const next   = slider.querySelector('.next');
  const dotsEl = slider.querySelector('.dots');
  let index = 0;

  slides.forEach((_, i) => {
    const b = document.createElement('button');
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Go to slide ${i+1}`);
    b.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(b);
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsEl.children].forEach((b, i) =>
      b.setAttribute('aria-selected', i === index ? 'true' : 'false')
    );
  }
  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  let startX = 0;
  track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive:true});
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 40) goTo(index - 1);
    if (dx < -40) goTo(index + 1);
  });

  let timer = setInterval(() => goTo(index + 1), 4000);
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => timer = setInterval(() => goTo(index + 1), 4000));

  update();
});
</script>
