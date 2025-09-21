---
layout: single
title: "Research"
permalink: /research/
---

<div class="research-wrap">

  <h1 class="research-title">Our Research</h1>

  <div class="research-text">
    Established in Fall 2022. The goal of my research group is to study and develop the physical and
    perceptual adaptive intelligence necessary for robots to learn from and interact with humans,
    while being able to adapt to a wide-range of human capabilities, needs and ever-changing
    environments achieving fluid human-robot collaborative autonomy; i.e., when humans and robots
    collaborate harmoniously. We focus on applications where such fluid collaboration is necessary
    or safety critical, such as teaching robots cumbersome dexterous manipulation tasks with minimal
    human effort, navigating swiftly and safely in busy human-centric spaces, physically assisting
    humans in heavy work and contact-rich activities, physical therapy and rehabilitation. We tackle
    these problems by developing novel and tightly coupled learning, control and estimation
    algorithms that enjoy stability, safety, efficiency and robustness guarantees. This involves
    research at the intersection of control theory, machine learning, artificial intelligence,
    perception and biomechanics—with a physical human-robot interaction perspective.
  </div>

  <div class="research-grid">

    <!-- Assistive Robotics -->
    <a class="research-card" href="{{ site.baseurl }}/research/">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Assistive_Robotics.JPG" alt="Assistive Robotics team">
      </div>
      <h3>Assistive Robotics</h3>
    </a>

    <!-- Control & Estimation -->
    <a class="research-card" href="{{ site.baseurl }}/research/">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Control_Estimation.JPG" alt="Control and Estimation team">
      </div>
      <h3>Control &amp; Estimation</h3>
    </a>

    <!-- Hardware -->
    <a class="research-card" href="{{ site.baseurl }}/research/">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/hardware.JPG" alt="Hardware team">
      </div>
      <h3>Hardware</h3>
    </a>

    <!-- Imitation Learning -->
    <a class="research-card" href="{{ site.baseurl }}/research/">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Imitation_Learning.JPG" alt="Imitation Learning team">
      </div>
      <h3>Imitation Learning</h3>
    </a>

    <!-- Perception for Manipulation -->
    <a class="research-card" href="{{ site.baseurl }}/research/">
      <div class="img-wrap">
        <img src="{{ site.baseurl }}/assets/images/Perception_for_manipulation.JPG" alt="Perception for Manipulation team">
      </div>
      <h3>Perception for Manipulation</h3>
    </a>

  </div>
</div>

<style>
/* Remove default narrow column from theme */
.page__content,
.page .page__inner-wrap {
  max-width: none !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* Overall wrapper – wide and centered with responsive side padding */
.research-wrap{
  max-width: 1400px;                 /* overall page width */
  margin: 0 auto;
  padding: 0 clamp(16px, 5vw, 48px) 3rem;
  text-align: center;
}

/* Title */
.research-title{
  margin: 2rem 0 1rem;
  font-weight: 800;
  font-size: clamp(1.8rem, 2.6vw + .8rem, 2.8rem);
}

/* Paragraph block: comfortably wide + better justification */
.research-text{
  max-width: min(1800px, 90vw);      /* tweak this to widen/narrow the text */
  margin: 0 auto 3rem;
  font-size: 1.05rem;
  line-height: 1.85;
  text-align: justify;
  text-justify: inter-word;
  text-align-last: center;
  hyphens: auto;
  padding: 0 0.5rem;
}

/* On narrower screens, don’t fully justify to avoid rivers */
@media (max-width: 1100px){
  .research-text{
    text-align: left;
    text-align-last: auto;
  }
}

/* Team grid centered, big images */
.research-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.research-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.research-card .img-wrap{
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(0,0,0,.08);
}

.research-card img{
  width: 100%;
  height: 360px;
  object-fit: contain;        /* show full image (no cropping) */
  background: #f5f5f5;
  transition: transform .35s ease, filter .35s ease;
}

.research-card h3{
  margin-top: .85rem;
  font-size: clamp(1.2rem, 1.4vw + .8rem, 1.8rem);
  font-weight: 700;
  text-align: center;
}

.research-card:hover img{
  transform: scale(1.03);
  filter: brightness(1.05);
}

@media (max-width: 640px){
  .research-grid{
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .research-card img{
    height: 300px;
  }
}
</style>
