---
layout: single
title: ""
permalink: /research/
---

<div class="research-band">
  <h1 class="research-page-title">Research</h1>

  <h2 class="research-intro-title">Our Research</h2>
  <p class="research-intro">
    Established in Fall 2022. The goal of my research group is to study and develop the physical and perceptual adaptive
    intelligence necessary for robots to learn from and interact with humans, while being able to adapt to a wide-range
    of human capabilities, needs and ever-changing environments achieving fluid human-robot collaborative autonomy; i.e.,
    when humans and robots collaborate harmoniously. We focus on applications where such fluid collaboration is necessary
    or safety critical, such as teaching robots cumbersome dexterous manipulation tasks with minimal human effort, navigating
    swiftly and safely in busy human-centric spaces, physically assisting humans in heavy work and contact-rich activities,
    physical therapy and rehabilitation. We tackle these problems by developing novel and tightly coupled learning, control
    and estimation algorithms that enjoy from stability, safety, efficiency and robustness guarantees. This involves
    research at the intersection of control theory, machine learning, artificial intelligence, perception and biomechanics—
    with a physical human-robot interaction perspective.
  </p>

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
/* ===== Centered, wide content band ===== */
.research-band{
  width: min(96vw, 1400px);
  margin: 0 auto 2.25rem;
  padding: 0 1rem;
}

/* Page titles */
.research-page-title{
  text-align: center;
  margin: 0.75rem 0 0.25rem;
}
.research-intro-title{
  text-align: center;
  margin: 0.4rem 0 0.75rem;
}

/* Wider, centered intro with balanced edges */
.research-intro{
  margin: 0 auto 1.75rem;
  max-width: 1100px;              /* wider than before */
  text-align: justify;            /* straight left & right edges */
  text-align-last: center;        /* last line sits centered */
  line-height: 1.8;
  font-size: 1.05rem;
}

/* ===== Grid: 3 cards on wide screens, then 2, then 1 ===== */
.research-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  gap: 2.25rem;
  justify-content: center;        /* center the grid block */
  align-items: start;
}

/* Cards */
.research-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

/* Image wrapper:
   - fixed visual height for consistent rows
   - object-fit: contain so the FULL image is visible (no cropping)
   - light background to “letterbox” when aspect ratio differs
*/
.research-card .img-wrap{
  width: 100%;
  height: 360px;
  background: #f4f5f7;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-card img{
  max-width: 100%;
  max-height: 100%;
  width: auto;             /* keep image’s aspect */
  height: auto;            /* keep image’s aspect */
  object-fit: contain;     /* show entire image; no cropping */
  display: block;
  transition: transform .3s ease, filter .3s ease;
}

.research-card h3{
  margin-top: .85rem;
  text-align: center;
  font-size: clamp(1.1rem, 1.2vw + .7rem, 1.55rem);
  font-weight: 700;
}

.research-card:hover img{
  transform: scale(1.02);
  filter: brightness(1.03);
}

/* 2-up */
@media (max-width: 1200px){
  .research-grid{
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 2rem;
  }
}
/* 1-up on phones */
@media (max-width: 640px){
  .research-band{ width: min(98vw, 100%); }
  .research-intro{ max-width: 92vw; text-align-last: left; } /* mobile reads better */
  .research-grid{
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .research-card .img-wrap{ height: 300px; }
}
</style>
