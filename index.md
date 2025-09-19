---
layout: single
title: ""
author_profile: false
permalink: /
---

<!-- ====== MAIN PHOTO SLIDER ====== -->
<div class="slider" aria-label="Figueroa Robotics Lab Photo Gallery">
  <button class="nav prev" aria-label="Previous slide">‹</button>

  <div class="track" role="region" aria-live="polite">
    <!-- Replace these image paths with your own -->
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="slide current">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 2" class="slide">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 3" class="slide">
  </div>

  <button class="nav next" aria-label="Next slide">›</button>

  <div class="dots" role="tablist" aria-label="Choose slide"></div>
</div>

<style>
/* ====== Slider Styles (larger hero) ====== */
.slider {
  position: relative;
  max-width: 1200px;   /* wider than before */
  margin: 0 auto 2rem; /* center and add space below */
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 21/9;  /* cinematic wide aspect ratio */
  background: #f2f2f2; /* fallback background */
}
.track {
  display: flex;
  height: 100%;
  transition: transform 300ms ease;
}
.slide {
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  object-fit: cover;   /* crop/scale images nicely */
  display: block;
}
.nav {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  border: none;
  background: rgba(0,0,0,0.5);
  color: #fff;
  width: 48px; height: 48px;  /* bigger buttons */
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
}
.prev { left: 16px; }
.next { right: 16px; }
.dots {
  position: absolute;
  left: 50%;
  bottom: 16px;
  translate: -50% 0;
  display: flex;
  gap: 8px;
}
.dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.6);
  cursor: pointer;
}
.dots button[aria-selected="true"] { background: white; }
</style>

<!-- Link to external JS (placed in /assets/js/slider.js) -->
<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>

<p style="max-width: 900px; margin: 2rem auto; text-align: center;">
The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
</p>
