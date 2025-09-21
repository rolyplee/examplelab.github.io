---
layout: single
title: ""
permalink: /research/
---

<style>
/* Center the theme’s page title line */
.page__title{ text-align:center !important; }

/* ===== Center & size the whole page content ===== */
.research-wrap{
  width: min(1200px, 96vw);
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

/* Headings below the theme title */
.research-h2{
  text-align: center;
  margin: .25rem 0 1rem;
}

/* Intro paragraph: wider, centered, justified with neat edges */
.research-intro{
  width: min(1100px, 92vw);
  margin: 0 auto 1.75rem;
  line-height: 1.75;
  text-align: justify;
  text-align-last: center;
}

/* ===== Grid: centered; 3 on top, 2 below at full width ===== */
.research-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  gap: 28px;
  align-items: start;
  justify-items: center;
  margin: 1rem auto 3rem;
  max-width: 1200px;          /* keeps it visually centered on wide screens */
}

/* 2-up and 1-up at narrower widths */
@media (max-width: 1100px){
  .research-grid{ grid-template-columns: repeat(2, minmax(300px, 1fr)); }
}
@media (max-width: 650px){
  .research-grid{ grid-template-columns: 1fr; }
}

/* Cards */
.research-card{
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.img-wrap{
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.08);
  background: #f5f5f5;      /* subtle letterbox color when images don’t fill */
}

/* ✅ Show full image, no cropping */
.research-card img{
  width: 100%;
  aspect-ratio: 3 / 2;      /* consistent card shape */
  object-fit: contain;      /* show the whole photo */
  display: block;
  background: #f5f5f5;      /* behind any letterboxing */
  transition: transform .3s ease, filter .3s ease;
}

.research-card h3{
  margin-top: .85rem;
  text-align: center;
  font-size: clamp(1.1rem, 1.3vw + .7rem, 1.6rem);
  font-weight: 700;
}

.research-card:hover img{ transform: scale(1.02); filter: brightness(1.03); }
</style>

<div class="research-wrap">
  <h2 class="research-h2">Our Research</h2>

  <div class="research-intro">
    Established in Fall 2022. The goal of our research group is to study and develop the physical and perceptual adaptive
    intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide-range
    of human capabilities, needs and ever-changing environments achieving fluid human-robot collaborative autonomy; i.e.,
    when humans and robots collaborate harmoniously. We focus on applications where such fluid collaboration is necessary
    or safety critical, such as teaching robots cumbersome dexterous manipulation tasks with minimal human effort,
    navigating swiftly and safely in busy human-centric spaces, physically assisting humans in heavy work and contact-rich
    activities, physical therapy and rehabilitation. We tackle these problems by developing novel and tightly coupled
    learning, control and estimation algorithms that enjoy from stability, safety, efficiency and robustness guarantees.
    This involves research at the intersection of control theory, machine learning, artificial intelligence, perception
    and biomechanics—with a physical human-robot interaction perspective.
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
