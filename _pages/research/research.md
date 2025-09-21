---
layout: single
title: "Research"
permalink: /research/
---

<!-- Intro block (centered, wider, justified) -->
<section class="intro-wrap">
  <h1 class="intro-title">Our Research</h1>
  <p class="intro-text">
    Established in Fall 2022. The goal of my research group is to study and develop the physical and perceptual adaptive intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide-range of human capabilities, needs and ever-changing environments achieving fluid human-robot collaborative autonomy; i.e., when humans and robots collaborate harmoniously. We focus on applications where such fluid collaboration is necessary or safety critical, such as teaching robots cumbersome dexterous manipulation tasks with minimal human effort, navigating swiftly and safely in busy human-centric spaces, physically assisting humans in heavy work and contact-rich activities, physical therapy and rehabilitation. We tackle these problems by developing novel and tightly coupled learning, control and estimation algorithms that enjoy from stability, safety, efficiency and robustness guarantees. This involves research at the intersection of control theory, machine learning, artificial intelligence, perception and biomechanics—with a physical human-robot interaction perspective.
  </p>
</section>

<!-- Research teams grid -->
<div class="research-grid">

  <!-- A (Assistive Robotics) -->
  <a class="research-card" href="{{ site.baseurl }}/research/" aria-label="Assistive Robotics">
    <div class="img-wrap">
      <img src="{{ site.baseurl }}/assets/images/Assistive Robotics.JPG" alt="Assistive Robotics team">
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

<style>
/* Center the theme's page title bar if it appears */
.page__title { text-align: center !important; }

/* ---------- Intro: centered, wider, justified ---------- */
.intro-wrap{
  width: min(92vw, 1100px);     /* wider but not edge-to-edge */
  margin: 1.5rem auto 1rem;
  padding: 0 1rem;              /* a bit of side padding */
  text-align: center;
}
.intro-title{
  margin: .25rem 0 1rem;
  font-size: clamp(1.6rem, 2.2vw + .8rem, 2.2rem);
  font-weight: 800;
}
.intro-text{
  margin: 0 auto;
  text-align: justify;          /* straight left/right edges */
  text-align-last: center;      /* last line centered for a neat end */
  text-justify: inter-word;
  hyphens: auto;                /* nicer justification on narrow viewports */
  line-height: 1.85;
  font-size: 1.02rem;
}

/* ---------- Grid: 3 / 2 / 1 columns, centered ---------- */
.research-grid{
  display: grid;
  gap: 2.5rem;
  margin: 2rem auto 1.5rem;
  max-width: 1600px;
  justify-content: center;    /* center the grid block */
  justify-items: center;      /* center cards inside columns */
}

/* 3 across on large screens */
@media (min-width: 1200px){
  .research-grid{ grid-template-columns: repeat(3, minmax(420px, 1fr)); }
}
/* 2 across on medium screens */
@media (min-width: 800px) and (max-width: 1199.98px){
  .research-grid{ grid-template-columns: repeat(2, minmax(420px, 1fr)); }
}
/* 1 across on phones */
@media (max-width: 799.98px){
  .research-grid{ grid-template-columns: 1fr; gap: 1.5rem; }
}

/* ---------- Cards & images ---------- */
.research-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 520px;            /* keep a pleasant width ceiling */
}
.research-card .img-wrap{
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.08);
}
.research-card img{
  width: 100%;
  height: 360px;               /* big team photo */
  object-fit: cover;           /* fill without squishing */
  display: block;
  transition: transform .35s ease, filter .35s ease;
}
.research-card h3{
  margin-top: .85rem;
  text-align: center;
  font-size: clamp(1.1rem, 1.3vw + .7rem, 1.6rem);
  font-weight: 700;
}
.research-card:hover img{
  transform: scale(1.03);
  filter: brightness(1.03);
}
</style>
