---
layout: single
title: ""
author_profile: false
permalink: /
---
<h1 style="text-align: center;"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

<hr style="margin: 40px 0;">


<!-- ====== PHOTO SLIDER ====== -->
<div class="slider" aria-label="Photo gallery">
  <button class="nav prev" aria-label="Previous slide">‹</button>

  <div class="track" role="region" aria-live="polite">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Description 1" class="slide current">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Description 2" class="slide">
    <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Description 3" class="slide">
  </div>

  <button class="nav next" aria-label="Next slide">›</button>

  <div class="dots" role="tablist" aria-label="Choose slide"></div>
</div>

<style>
/* ====== Slider Styles ====== */
.slider {
  position: relative;
  max-width: 900px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 12px;
  /* ensures the slider has height even if an image path is wrong */
  aspect-ratio: 16/9;
  background: #f2f2f2;
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
  border: none; background: rgba(0,0,0,0.35);
  cursor: pointer;
}
.dots button[aria-selected="true"] { background: black; }
</style>

<!-- Load slider JS from assets (more reliable than inline script in Markdown) -->
<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>

<p>
The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
</p>

