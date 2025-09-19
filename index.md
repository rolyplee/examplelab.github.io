---
layout: single
title: ""
author_profile: false
permalink: /
classes: wide   # <-- makes the content area wider in Minimal Mistakes
---

<h1 style="text-align:center; margin-bottom: 1rem;">
  <strong>Welcome to the Figueroa Robotics Lab</strong>
</h1>

<!-- ====== MAIN PHOTO SLIDER (no-crop) ====== -->
<div class="slider" aria-label="Figueroa Robotics Lab Photo Gallery">
  <button class="nav prev" aria-label="Previous slide">‹</button>

  <div class="track" role="region" aria-live="polite">
    <!-- Use your own images -->
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="slide current">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 2" class="slide">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 3" class="slide">
  </div>

  <button class="nav next" aria-label="Next slide">›</button>

  <div class="dots" role="tablist" aria-label="Choose slide"></div>
</div>

<style>
/* ====== Slider Styles: larger + no cropping ====== */
.slider {
  position: relative;
  max-width: 1400px;         /* larger */
  margin: 0 auto 2rem;
  overflow: hidden;
  border-radius: 12px;
  background: #f2f2f2;       /* fallback while images load */
}

.track {
  display: flex;
  align-items: stretch;
  transition: transform 300ms ease;
}

.slide {
  width: 100%;
  flex: 0 0 100%;
  display: block;

  /* NO-CROP behavior */
  height: auto;              /* let image decide height */
  object-fit: contain;       /* never crop */
  background: #00000010;     /* subtle backdrop for letterboxing */
}

/* If you prefer a fixed max height to avoid tall images, add this:
   .slide { max-height: 650px; }  (keeps no-crop) */

.nav {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  border: none;
  background: rgba(0,0,0,0.5);
  color: #fff;
  width: 48px; height: 48px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
}
.prev { left: 16px; }
.next { right: 16px; }

.dots {
  position: absolute;
  left: 50%; bottom: 16px; translate: -50% 0;
  display: flex; gap: 8px;
}
.dots button {
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(0,0,0,0.35); cursor: pointer;
}
.dots button[aria-selected="true"] { background: black; }
</style>

<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>

<p style="max-width: 1000px; margin: 2rem auto; text-align: center;">
The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
</p>
