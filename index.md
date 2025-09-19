---
layout: single
title: ""
author_profile: false
permalink: /
classes: wide
---

<div class="lab-wrapper">
  <h1 class="lab-title"><strong>Welcome to the Figueroa Robotics Lab</strong></h1>

  <!-- Slider -->
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
/* 1) Neutralize Minimal Mistakes' left/right padding on this page only */
.main .page__content {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* 2) A true centered container for title + slider + text */
.lab-wrapper{
  /* push below sticky header */
  padding-top: 5.5rem;

  /* hard center */
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  /* center children */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
  padding-inline: 1rem; /* small breathing room on tiny screens */
}

.lab-title{ margin: 0; font-size: 2rem; line-height: 1.2; }

.lab-text{
  max-width: 1000px;
  margin: 0;             /* spacing comes from flex gap */
  line-height: 1.6;
}

/* 3) Slider (no cropping) */
.slider{
  position: relative;
  display: block;
  width: min(100%, 1400px);
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-radius: 12px;
  background: #f2f2f2;
}
.track{ display: flex; transition: transform 300ms ease; }
.slide{
  width: 100%;
  flex: 0 0 100%;
  display: block;
  height: auto;           /* natural height */
  object-fit: contain;    /* no cropping */
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

@media (min-width: 992px){
  .lab-wrapper{ padding-top: 6rem; } /* if your masthead is taller */
}
</style>

<script src="{{ '/assets/js/slider.js' | relative_url }}" defer></script>
