---
layout: single
title: "Research"
permalink: /research/
---

<div class="research-wrap">
  <h1 class="research-title">Our Research</h1>

  <div class="research-text">
    <p>
      Established in Fall 2022. The goal of my research group is to study and develop the physical and perceptual
      adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a
      wide-range of human capabilities, needs and ever-changing environments achieving fluid human-robot collaborative
      autonomy; i.e., when humans and robots collaborate harmoniously. We focus on applications where such fluid
      collaboration is necessary or safety critical, such as teaching robots cumbersome dexterous manipulation tasks
      with minimal human effort, navigating swiftly and safely in busy human-centric spaces, physically assisting humans
      in heavy work and contact-rich activities, physical therapy and rehabilitation. We tackle these problems by
      developing novel and tightly coupled learning, control and estimation algorithms that enjoy from stability, safety,
      efficiency and robustness guarantees. This involves research at the intersection of control theory, machine
      learning, artificial intelligence, perception and biomechanics—with a physical human-robot interaction perspective.
    </p>
  </div>

  <div class="research-grid">

    <!-- A (Assistive Robotics) -->
    <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Assistive Robotics">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Assistive_Robotics.JPG" alt="Assistive Robotics team">
      </div>
      <h3>Assistive Robotics</h3>
    </a>

    <!-- C (Control & Estimation) -->
    <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Control & Estimation">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Control_Estimation.JPG" alt="Control and Estimation team">
      </div>
      <h3>Control &amp; Estimation</h3>
    </a>

    <!-- H (Hardware) -->
    <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Hardware">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/hardware.JPG" alt="Hardware team">
      </div>
      <h3>Hardware</h3>
    </a>

    <!-- I (Imitation Learning) -->
    <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Imitation Learning">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Imitation_Learning.JPG" alt="Imitation Learning team">
      </div>
      <h3>Imitation Learning</h3>
    </a>

    <!-- P (Perception for Manipulation) -->
    <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Perception for Manipulation">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Perception_for_manipulation.JPG" alt="Perception for Manipulation team">
      </div>
      <h3>Perception for Manipulation</h3>
    </a>

  </div>
</div>

<style>
/* ===== Center the entire page content wider than Minimal-Mistakes default ===== */
.page__content {
  max-width: none;     /* remove theme’s built-in narrow width */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  padding-right: 0;
}

/* Wrap and optional manual nudge */
.research-wrap {
  max-width: 1400px;          /* total width of the centered block */
  margin-left: auto;
  margin-right: auto;
  padding: 0 3vw;
  /* ---- OPTIONAL manual nudge ----
     Uncomment and tweak the value below if you want to shift the
     whole block horizontally (positive = right, negative = left) */
  /* transform: translateX(-20px); */
}

/* Title + paragraph */
.research-title {
  text-align: center;
  font-size: clamp(1.8rem, 2.4vw + 0.6rem, 2.6rem);
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.research-text {
  max-width: 1000px;          /* wider text block */
  margin: 0 auto 2rem auto;
  line-height: 1.85;
  text-align: justify;        /* even left/right edges */
  text-align-last: center;    /* center last line for balanced finish */
}

/* Grid of team images */
.research-grid {
  display: grid;
  justify-content: center;    /* center grid inside wrapper */
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
}

.research-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.img-wrap {
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.08);
}

.research-card img {
  width: 100%;
  height: auto;               /* show full image without cropping */
  display: block;
  transition: transform .35s ease, filter .35s ease;
}

.research-card h3 {
  margin-top: .85rem;
  text-align: center;
  font-size: clamp(1.1rem, 1.3vw + .7rem, 1.6rem);
  font-weight: 700;
}

.research-card:hover img {
  transform: scale(1.03);
  filter: brightness(1.05);
}

@media (max-width: 640px) {
  .research-grid { gap: 1.5rem; grid-template-columns: 1fr; }
}
</style>
