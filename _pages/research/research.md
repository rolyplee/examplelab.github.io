---
layout: single
title: "Research"
permalink: /research/
---

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

<section class="rb-grid">
  <a class="rb-card" href="{{ site.baseurl }}/research/">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Assistive_Robotics.JPG" alt="Assistive Robotics team">
    </div>
    <h3>Assistive Robotics</h3>
  </a>

  <a class="rb-card" href="{{ site.baseurl }}/research/">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Control_Estimation.JPG" alt="Control & Estimation team">
    </div>
    <h3>Control &amp; Estimation</h3>
  </a>

  <a class="rb-card" href="{{ site.baseurl }}/research/">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/hardware.JPG" alt="Hardware team">
    </div>
    <h3>Hardware</h3>
  </a>

  <a class="rb-card" href="{{ site.baseurl }}/research/">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Imitation_Learning.JPG" alt="Imitation Learning team">
    </div>
    <h3>Imitation Learning</h3>
  </a>

  <a class="rb-card" href="{{ site.baseurl }}/research/">
    <div class="rb-img">
      <img src="{{ site.baseurl }}/assets/images/Perception_for_manipulation.JPG" alt="Perception for Manipulation team">
    </div>
    <h3>Perception for Manipulation</h3>
  </a>
</section>

<style>
.main .page__content { padding-top: 0.5rem; }

/* full-width intro */
.rb-fullbleed{
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
.rb-intro{
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 24px;
  text-align: justify;
  text-justify: inter-word;
}
.rb-intro h1{
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 800;
}
.rb-intro p{
  margin: 0 auto;
  line-height: 1.85;
  max-width: 1000px;
}

/* grid */
.rb-grid{
  max-width: 1800px;          /* allow a wider grid */
  margin: 0 auto 3rem;
  padding: 0 24px;
  display: grid;
  gap: 40px;                  /* bigger space between cards */
  grid-template-columns: 1fr;
  justify-items: center;
}
@media (min-width: 700px){ .rb-grid{ grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1100px){ .rb-grid{ grid-template-columns: repeat(3, 1fr); } }

/* cards */
.rb-card{
  width: 100%;
  max-width: 800px;           /* ✅ wider cards for bigger pictures */
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rb-img{
  width: 100%;
  aspect-ratio: 4 / 3;        /* ✅ taller frame for larger photos */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0,0,0,.1);
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rb-img img{
  width: 100%;
  height: 100%;
  object-fit: contain;        /* show full image, no crop */
  display: block;
  transition: transform .35s ease, filter .35s ease;
}

.rb-card:hover .rb-img img{
  transform: scale(1.02);
  filter: brightness(1.02);
}

.rb-card h3{
  margin: 1rem 0 0;
  text-align: center;
  font-size: clamp(1.2rem, 1.5vw + .9rem, 1.8rem);
  font-weight: 800;
}
</style>
