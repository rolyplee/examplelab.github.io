---
layout: single
title: "Research"
permalink: /research/
---

<!-- ===== FULL-WIDTH BAND (breaks out of theme container) ===== -->
<section class="rb-fullbleed">
  <div class="rb-intro">
    <h1>Our Research</h1>
    <p>
      Established in Fall 2022. The goal of my research group is to study and develop the physical and perceptual adaptive
      intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide-range of human
      capabilities, needs and ever-changing environments achieving fluid human-robot collaborative autonomy; i.e., when humans and robots
      collaborate harmoniously. We focus on applications where such fluid collaboration is necessary or safety critical, such as teaching
      robots cumbersome dexterous manipulation tasks with minimal human effort, navigating swiftly and safely in busy human-centric spaces,
      physically assisting humans in heavy work and contact-rich activities, physical therapy and rehabilitation. We tackle these problems
      by developing novel and tightly coupled learning, control and estimation algorithms that enjoy stability, safety, efficiency and
      robustness guarantees. This involves research at the intersection of control theory, machine learning, artificial intelligence,
      perception and biomechanics—with a physical human-robot interaction perspective.
    </p>
  </div>
</section>

<!-- ===== GRID (3 across desktop / 2 tablet / 1 phone) ===== -->
<section class="rb-grid">
  <!-- A -->
  <a class="rb-card" href="{{ site.baseurl }}/research/" aria-label="Assistive Robotics">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Assistive_Robotics.JPG" alt="Assistive Robotics team">
    </div>
    <h3>Assistive Robotics</h3>
  </a>

  <!-- C -->
  <a class="rb-card" href="{{ site.baseurl }}/research/" aria-label="Control & Estimation">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Control_Estimation.JPG" alt="Control & Estimation team">
    </div>
    <h3>Control &amp; Estimation</h3>
  </a>

  <!-- H -->
  <a class="rb-card" href="{{ site.baseurl }}/research/" aria-label="Hardware">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/hardware.JPG" alt="Hardware team">
    </div>
    <h3>Hardware</h3>
  </a>

  <!-- I -->
  <a class="rb-card" href="{{ site.baseurl }}/research/" aria-label="Imitation Learning">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Imitation_Learning.JPG" alt="Imitation Learning team">
    </div>
    <h3>Imitation Learning</h3>
  </a>

  <!-- P -->
  <a class="rb-card" href="{{ site.baseurl }}/research/" aria-label="Perception for Manipulation">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Perception_for_manipulation.JPG" alt="Perception for Manipulation team">
    </div>
    <h3>Perception for Manipulation</h3>
  </a>
</section>

<style>
/* Remove extra top spacing from theme content area */
.main .page__content { padding-top: 0.5rem; }

/* ---------- FULL-BLEED WRAPPER ---------- */
/* Make this section span the full browser width (escapes theme container) */
.rb-fullbleed{
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: transparent;
}

/* Centered intro content inside the full-bleed band */
.rb-intro{
  /* change this to taste; this controls how wide the text can get */
  max-width: 1200px;
  margin: 0 auto 1.75rem;
  padding: 0 24px;
  text-align: justify;
  text-justify: inter-word;
}
.rb-intro h1{
  text-align: center;
  margin: 0 0 1rem;
  font-weight: 800;
}
.rb-intro p{
  margin: 0 auto;
  line-height: 1.85;
  /* keep the paragraph a bit narrower than the container for comfort */
  max-width: 1000px;
}

/* ---------- RESPONSIVE GRID ---------- */
.rb-grid{
  /* grid container is also wide and centered, but not full-bleed */
  max-width: 1400px;
  margin: 0 auto 2.5rem;
  padding: 0 24px;
  display: grid;
  gap: 28px;
  grid-template-columns: 1fr;            /* phones: 1 across */
  justify-items: center;                  /* center cards in their tracks */
}

/* Tablets: 2 across */
@media (min-width: 700px){
  .rb-grid{ grid-template-columns: repeat(2, 1fr); }
}

/* Desktops: 3 across */
@media (min-width: 1000px){
  .rb-grid{ grid-template-columns: repeat(3, 1fr); }
}

/* ---------- CARD ---------- */
.rb-card{
  width: 100%;
  max-width: 520px;                       /* keeps columns from getting *too* wide on huge screens */
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rb-img{
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.08);
  background: #f3f4f6;
}

/* Choose ONE look:
   1) Consistent card height (slight cropping): object-fit: cover + fixed height.
   2) Never crop (heights vary): height:auto.  */
.rb-img img{
  width: 100%;
  height: 340px;          /* consistent card height */
  object-fit: cover;      /* crop edges to fill nicely */
  display: block;
  transition: transform .35s ease, filter .35s ease;
}

.rb-card:hover .rb-img img{
  transform: scale(1.03);
  filter: brightness(1.03);
}

.rb-card h3{
  margin: .85rem 0 0;
  text-align: center;
  font-size: clamp(1.05rem, 1.1vw + .8rem, 1.5rem);
  font-weight: 800;
}
</style>
