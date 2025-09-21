---
layout: single
title: "Research"
permalink: /research/
---

<div class="research-wrap">
  <h1 class="research-h1">Research</h1>
  <h2 class="research-h2">Our Research</h2>

  <div class="research-intro">
    Established in Fall 2022. The goal of my research group is to study and develop the physical and perceptual adaptive
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

<style>
/* ===== Center the whole page content ===== */
.research-wrap{
  width: min(1200px, 96vw);   /* nice wide container */
  margin: 0 auto;             /* <— centers everything */
  padding: 0 16px;
  box-sizing: border-box;
}

/* Titles */
.research-h1{
  text-align: center;
  margin: .25rem 0 .5rem;
}
.research-h2{
  text-align: center;
  margin: 0 0 1rem;
}

/* Intro paragraph: centered block, justified text with even edges */
.research-intro{
  width: min(1000px, 90vw);
  margin: 0 auto 1.75rem;
  text-align: justify;
  text-align-last: center;   /* last line centered */
  line-height: 1.75;
}

/* ===== Grid: centered; 3 up / 2 up / 1 up responsively ===== */
.research-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 28px;
  align-items: start;
  justify-items: center;     /* centers each card inside its cell */
  margin: 1rem auto 3rem;
}

@media (max-width: 1100px){
  .research-grid{ grid-template-columns: repeat(2, minmax(280px, 1fr)); }
}
@media (max-width: 640px){
  .research-grid{ grid-template-columns: 1fr; }
}

/* Cards */
.research-card{
  width: 100%;
  max-width: 520px;          /* prevents super-wide cards; keeps grid centered */
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
}

/* keep your current big photo look */
.research-card img{
  width: 100%;
  height: 360px;
  object-fit: cover;         /* if you prefer no cropping: switch to 'contain' */
  display: block;
  transition: transform .35s ease, filter .35s ease;
  background: #f7f7f7;
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
