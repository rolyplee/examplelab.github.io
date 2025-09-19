---
layout: single
title: ""
author_profile: false
permalink: /
---

<div class="lab-wrapper">
  <h1 class="lab-title"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

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

  <p class="lab-text">
    The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
  </p>
</div>

<style>
.lab-wrapper{
  max-width: 1400px;
  margin: 5rem auto 2rem;
  text-align: center;
  padding: 0 1rem;
}
.lab-title{ margin-bottom: 1rem; font-size: 2rem; line-height: 1.2; }
.lab-text{ max-width: 1000px; margin: 2rem auto 0; line-height: 1.6; }

/* ===== Slider ===== */
.slider{
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto 2rem;
  overflow: hidden;             /* hide off-screen slides */
  border-radius: 12px;
  background: #f2f2f2;
}
.track{
  display: flex;
  transition: transform 300ms ease;
  will-change: transform;       /* smoother */
}
.slide{
  /* The trio below ensures a perfect horizontal strip */
  flex: 0 0 100%;
  min-width: 100%;
  max-width: 100%;

  display: block;
  height: auto;                 /* no cropping */
  object-fit: contain;
}

/* Controls */
.nav{
  position: absolute; top: 50%; transform: translateY(-50%);
  border: none; background: rgba(0,0,0,0.5); color:#fff;
  width: 48px; height: 48px; border-radius: 50%;
  cursor: pointer; font-size: 24px;
}
.prev{ left: 16px; } .next{ right: 16px; }
.dots{
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; gap: 8px;
}
.dots button{
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(0,0,0,0.35); cursor: pointer;
}
.dots button[aria-selected="true"]{ background:#000; }
</style>

<!-- keep using your external JS file -->
<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>
