---
layout: single
title: "Publications"
permalink: /publications/
---

<style>
/* Center the page title from the theme */
.page__title {
  text-align: center !important;
}

/* Full-width band but center all inner content */
.people-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 2rem 4rem;
  box-sizing: border-box;
  text-align: center; /* center inline content by default */
}

/* Center each section heading */
.people-section h2 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

/* Center the entire grid block and each card within it */
.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-content: center;  /* center the grid as a whole */
  justify-items: center;     /* center cards in their columns */
  align-items: start;        /* keep cards top-aligned inside each cell */
}

/* Make each card a flex column and center its contents */
.person-card {
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;  /* centers image + text horizontally */
  justify-content: flex-start;
  text-align: center;
  font-size: 0.9rem;
}

/* Image sizing + consistent box even if image fails to load */
.person-card img {
  width: 180px;
  height: 180px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 0.5rem;
  background: #f3f4f6; /* light placeholder bg */
}

/* Name styling */
.person-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0.25rem 0;
  line-height: 1.2;
  word-wrap: break-word;
  white-space: normal;
  max-width: 100%;
}

/* Tighten paragraph spacing under names */
.person-card p {
  margin: 0.15rem 0 0;
}

/* Keep name size stable on big screens */
@media (min-width: 1000px) {
  .person-card h3 {
    font-size: 0.95rem;
  }
}
</style>


<h2>Peer-Reviewed Journals and Transactions</h2>
<table class="pub-table">
  <thead>
    <tr><th>#</th><th>Authors</th><th>Title</th><th>Journal</th><th>Year</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>J1</td><td>Sun, S., Gao, H., Li, T. and Figueroa, N.</td><td>Directionality-Aware Mixture Model Parallel Sampling for Efficient Linear Parameter Varying Dynamical System Learning</td><td><em>IEEE Robotics and Automation Letters (RA-L)</em>, vol. 9, no. 7, pp. 6248–6255</td><td>2024</td><td></td></tr>
    <tr><td>J2</td><td>Koptev, M., Figueroa, N. and Billard, A.</td><td>Reactive Collision-Free Motion Generation in Joint Space via Dynamical Systems and Sampling-Based MPC</td><td><em>The International Journal of Robotics Research (IJRR)</em>, 43(13):2049–2069</td><td>2024</td><td></td></tr>
    <tr><td>J3</td><td>Fourie, C., Figueroa, N. and Shah, J.</td><td>On-Manifold Strategies for Reactive Dynamical System Modulation with Non-Convex Obstacles</td><td><em>IEEE Transactions on Robotics (TRO)</em>, 40:2390–2409</td><td>2024</td><td>Honorable Mention for IEEE TRO King-Sun Fu Memorial Best Paper Award</td></tr>
    <tr><td>J4</td><td>Jin, L., Yang, Y., Maldonado, B.O.T., Lee, S.D., Figueroa, N., Full, R.J. and Yang, S.</td><td>Ultrafast, Programmable, and Electronics-Free Soft Robots Enabled by Snapping Metacaps</td><td><em>Advanced Intelligent Systems</em></td><td>2023</td><td><a href="https://doi.org/10.1002/aisy.202300039" target="_blank">DOI</a></td></tr>
    <tr><td>J5</td><td>Koptev, M., Figueroa, N., Billard, A.</td><td>Neural Joint-Space Implicit Distance Functions for Reactive Robot Manipulator Control</td><td><em>IEEE Robotics and Automation Letters (RA-L)</em>, 8(2):480–487</td><td>2023</td><td></td></tr>
    <tr><td>J6</td><td>Figueroa, N. and Billard, A.</td><td>Locally Active Globally Stable Dynamical Systems: Theory, Learning and Experiments</td><td><em>The International Journal of Robotics Research (IJRR)</em>, 41(3):312–347</td><td>2022</td><td></td></tr>
  </tbody>
</table>

<h2> Peer-Reviewed Conference Proceedings</h2>
<table class="pub-table">
  <thead>
    <tr><th>#</th><th>Authors</th><th>Title</th><th>Conference</th><th>Year</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>C1</td><td>Jaszczuk, M. and Figueroa, N.</td><td>Rapid Mismatch Estimation via Neural Network Informed Variational Inference</td><td>9th Conference on Robot Learning (CoRL)</td><td>2025</td><td>To appear</td></tr>
    <tr><td>C2</td><td>Li, T., Sun, S., Aditya, S., and Figueroa, N.</td><td>Elastic Motion Policy: An Adaptive Dynamical System for Robust and Efficient One-Shot Imitation Learning</td><td>IEEE/RSJ IROS</td><td>2025</td><td>To appear</td></tr>
    <tr><td>C3</td><td>Gao, J., Li, T. and Figueroa, N.</td><td>Out-of-Distribution Recovery with Object-Centric Keypoint Inverse Policy for Visuomotor Imitation Learning</td><td>IEEE/RSJ IROS</td><td>2025</td><td>To appear</td></tr>
    <tr><td>C4</td><td>Zhang, Z., Xue, Y., Figueroa, N. and Åkesson, K.</td><td>Gradient Field-Based Dynamic Window Approach for Collision Avoidance in Complex Environments</td><td>IEEE/RSJ IROS</td><td>2025</td><td>To appear</td></tr>
    <tr><td>C5</td><td>Nawaz, F., Sung, M., Gadginmath, D., D’sa, J., Bae, S., Isele, D., Figueroa, N., Matni, N. and Tariq, F.M.</td><td>Graph-based Path Planning with Dynamic Obstacle Avoidance for Autonomous Parking</td><td>IEEE Intelligent Vehicles Symposium (IV)</td><td>2025</td><td>Romania</td></tr>
    <tr><td>C6</td><td>Srikanthan, A.*, Xue, Y.*, Kumar, V., Matni, N. and Figueroa, N.</td><td>ADMM-MCBF-LCA: A Layered Control Architecture for Safe Real-Time Navigation</td><td>IEEE ICRA</td><td>2025</td><td>Atlanta, USA — Equal contribution</td></tr>
    <tr><td>C7</td><td>Unger, G., Shenoy, S., Li, T., Figueroa, N., and Sung, C.</td><td>MOrF: Magnetic Origami Folding System for Repeatably Reconfigurable Structures with Enhanced Fold Angle Control</td><td>IEEE ICRA</td><td>2025</td><td>Atlanta, USA</td></tr>
    <tr><td>C8</td><td>Sun, S. and Figueroa, N.</td><td>SE(3) Linear Parameter Varying Dynamical Systems for Globally Asymptotically Stable End-Effector Control</td><td>IEEE/RSJ IROS</td><td>2024</td><td>Abu Dhabi, UAE</td></tr>
    <tr><td>C9</td><td>Nawaz, F., Peng, S., Lindemann, L., Figueroa, N. and Matni, N.</td><td>Reactive Temporal Logic-based Planning and Control for Interactive Robotic Tasks</td><td>IEEE/RSJ IROS</td><td>2024</td><td>Abu Dhabi, UAE</td></tr>
    <tr><td>C10</td><td>Martini, E., Parekh, H., Peng, S., Bombieri, N., and Figueroa, N.</td><td>A Robust Filter for Marker-less Multi-person Tracking in Human-Robot Interaction Scenarios</td><td>IEEE RO-MAN</td><td>2024</td><td>USA</td></tr>
    <tr><td>C11</td><td>Shao, Y., Li, T., Keyvanian, S., Chaudhari, P., Kumar, V., and Figueroa, N.</td><td>Constraint-Aware Intent Estimation for Dynamic Human-Robot Object Co-Manipulation</td><td>RSS</td><td>2024</td><td>Netherlands</td></tr>
    <tr><td>C12</td><td>Peng, S., Wang, X., Wang, M., Shah, J.A., and Figueroa, N.</td><td>Object Permanence Filters for Robust Tracking with Interactive Robots</td><td>IEEE ICRA</td><td>2024</td><td>Yokohama, Japan</td></tr>
    <tr><td>C13</td><td>Nawaz, F., Li, T., Matni, N. and Figueroa, N.</td><td>Learning Complex Motion Plans using Neural ODEs with Safety and Stability Guarantees</td><td>IEEE ICRA</td><td>2024</td><td>Yokohama, Japan</td></tr>
    <tr><td>C14</td><td>Zhang, Z., Li, T. and Figueroa, N.</td><td>Constrained Passive Interaction Control: Leveraging Passivity and Safety for Robot Manipulators</td><td>IEEE ICRA</td><td>2024</td><td>Yokohama, Japan</td></tr>
    <tr><td>C15</td><td>Choi, H., and Figueroa, N.</td><td>Towards Feasible Dynamic Grasping: Leveraging Gaussian Process Distance Fields, SE(3) Equivariance and Riemannian Mixture Models</td><td>IEEE ICRA</td><td>2024</td><td>Japan</td></tr>
    <tr><td>C16</td><td>Choi, H., Das, S., Peng, S., Bajcsy, R. and Figueroa, N.</td><td>On the Feasibility of EEG-based Motor Intention Detection for Real-Time Robot Assistive Control</td><td>IEEE ICRA</td><td>2024</td><td>Yokohama, Japan</td></tr>
    <tr><td>C17</td><td>Beik-Mohammadi, H., Hauberg, S., Arvanitidis, G., Figueroa, N., Neumann, G., and Rozo, L.</td><td>Neural Contractive Dynamical Systems</td><td>ICLR (Spotlight 5% acc. rate)</td><td>2024</td><td>Vienna, Austria</td></tr>
    <tr><td>C18</td><td>Keyvanian, S., Johnson, M.J. and Figueroa, N.</td><td>Learning Realistic Joint Space Boundaries for Range of Motion Analysis of Healthy and Impaired Human Arms</td><td>IEEE Humanoids</td><td>2023</td><td>Austin, USA</td></tr>
  </tbody>
</table>

---


