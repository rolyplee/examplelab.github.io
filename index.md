---
layout: single
title: ""
author_profile: false
permalink: /
classes: wide
---

<div class="lab-wrapper">
  <h1 class="lab-title"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

  <div class="slider" aria-label="Figueroa Robotics Lab Photo Gallery">
    <button class="nav prev" aria-label="Previous slide">‹</button>

    <div class="track" role="region" aria-live="polite">
      <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 1" class="slide current">
      <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 2" class="slide">
      <img src="{{ '/assets/images/IMG_4148.JPG' | relative_url }}" alt="Lab photo 3" class="slide">
    </div>

    <button class="nav next" aria-label="Next slide">›</button>
    <div class="dots" role="tablist" aria-label="Choose slide"></div>
  </div>

  <p class="lab-text">
    The goal of our research is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide range of human capabilities, needs, and ever-changing environments—achieving fluid human-robot collaborative autonomy: when humans and robots collaborate harmoniously.
  </p>
</div>

<style>
/* ----- Hard-center everything inside the page content ----- */
.main .page__content .lab-wrapper {
  /* push below sticky masthead */
  padding-top: 5.5rem;

  /* center the whole block in the page */
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  /* override theme padding/flow */
  display: flex;
  flex-direction: column;
  align-items: center;   /* <- centers title, slider, and paragraph */
  gap: 1.25rem;
  text-align: center;
}

/* Title */
.lab-title { margin: 0; line-height: 1.2; font-size: 2rem; }

/* Paragraph */
.lab-text {
  max-width: 1000px;
  line-height: 1.6;
  margin: 0;            /* flex gap handles spacing */
}

/* ----- Slider (no cropping, grows big, stays centered) ----- */
.slider {
  position: relative;
  width: min(100%, 1400px);  /* never exceed wrapper */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  background: #f2f2f2;
}
.track { display: flex; transition: transform 300ms ease; }
.slide {
  width: 100%;
  flex: 0 0 100%;
  display: block;
  height: auto;              /* natural height */
  object-fit: contain;       /* no cropping */
}

/* Controls */
.nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  border: none; background: rgba(0,0,0,0.5); color: #fff;
  width: 48px; height: 48px; border-radius: 50%;
  cursor: pointer; font-size: 24px;
}
.prev { left: 16px; } .next { right: 16px; }
.dots {
  position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; gap: 8px;
}
.dots button {
  width: 12px; height: 12px; border-radius: 50%;
  border: none; background: rgba(0,0,0,0.35); cursor: pointer;
}
.dots button[aria-selected="true"] { background: #000; }

/* Optional: if the masthead is taller in your config, bump this up a bit */
@media (min-width: 992px) {
  .main .page__content .lab-wrapper { padding-top: 6rem; }
}
</style>

<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>
