---
layout: default
title: Project Architecture
permalink: /project/
---

<section class="page-section section-blue section-narrow">
  <div class="section-inner">
    <p class="lead">
      GAIMHE investigates a hybrid architecture for educational AI. The central design choice is to preserve the pedagogical control of adaptive intelligent tutoring systems while using generative AI only where it can reduce authoring cost, improve feedback, or support richer learning analytics.
    </p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <div class="section-head">
      <h2>Architecture at a Glance</h2>
      <p>The architecture links offline generation, validated datasets and benchmarks, personalized exercise support, and adaptive curriculum sequencing.</p>
    </div>

    <div class="process-flow">
      <div>
        <strong>1. Exercise pre-generation</strong>
        <span>Generative AI produces synthetic exercises from expert data and learner data, followed by small-scale human evaluation, LLM-as-Judge filtering, annotation, and benchmark construction.</span>
      </div>
      <div>
        <strong>2. Personalization inside exercises</strong>
        <span>Student models, teacher models, and prompted LLMs support pre-generated or online generation of hints and feedback from observed errors and learning traces.</span>
      </div>
      <div>
        <strong>3. Curriculum personalization</strong>
        <span>Adaptive teaching algorithms and generative student-trajectory models select activities and exercises inside an augmented ITS while preserving pedagogical graph constraints.</span>
      </div>
    </div>

    <figure class="figure-panel">
      <img src="{{ '/images/pipeline_gaimhe.png' | relative_url }}" alt="GAIMHE architecture pipeline">
    </figure>
  </div>
</section>

<section class="page-section section-soft section-narrow">
  <div class="section-inner">
    <h2>Adaptive Tutoring Core</h2>
    <p>The project builds on adaptive learning platforms such as Adaptiv'Math and MIA Seconde. In these systems, educational content is organized as pedagogical graphs: modules contain objectives, objectives contain activities, and activities contain exercise variants. The graph encodes prerequisite relations and constrains which activities can be proposed to a learner.</p>
    <p>The adaptive engine remains responsible for sequencing. Algorithms such as ZPDES select activities according to observed learning progress, rather than asking a generative model to decide the curriculum directly. This separation keeps personalization grounded in an explicit pedagogical structure.</p>
  </div>
</section>

<section class="page-section section-narrow">
  <div class="section-inner">
    <h2>Generative Modules</h2>
    <p>At the macro-pedagogical level, generative models are used offline. They can produce exercise variants, distractors, hints, and feedback from expert-provided templates and specifications. Each generated resource must remain aligned with a target objective, activity type, school level, interaction format, and expected misconception or difficulty.</p>
    <p>At the micro-pedagogical level, real-time generation is treated as targeted assistance. It may be triggered when a learner asks for help, repeats incorrect answers, spends unusually long on a task, or produces an open response that is difficult to classify. The generated response should support progressive scaffolding without revealing the answer too early.</p>
  </div>
</section>

<section class="page-section section-blue section-narrow">
  <div class="section-inner">
    <h2>Validation Pipeline</h2>
    <p>GAIMHE treats validation as a core part of the architecture. Generated resources are evaluated against explicit codebooks covering correctness, clarity, level appropriateness, pedagogical alignment, plausibility of distractors, and the quality of hints or feedback.</p>
    <p>The project explores LLM-as-Judge methods as pre-filtering tools, not as replacements for pedagogical expertise. Human annotations by teachers and experts provide the reference signal used to calibrate automatic checks, clarify codebooks, and identify cases where model-based judging is unreliable.</p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <div class="section-head">
      <h2>Frugality and Deployment</h2>
      <p>The architecture is designed for classroom-scale use. Generating every exercise or feedback message with a large model in real time would be costly, slow, and difficult to deploy responsibly.</p>
    </div>

    <div class="feature-grid">
      <section class="feature-panel">
        <h3>Offline first</h3>
        <p>Generation is moved offline whenever possible, so validated resources can be reused at scale.</p>
      </section>
      <section class="feature-panel">
        <h3>Filtered before review</h3>
        <p>Automatic checks help experts focus on ambiguous or pedagogically important cases.</p>
      </section>
      <section class="feature-panel">
        <h3>Limited real-time use</h3>
        <p>Online generation is reserved for clearly justified pedagogical situations.</p>
      </section>
      <section class="feature-panel">
        <h3>Auditable resources</h3>
        <p>Shared documentation and datasets make generation and evaluation pipelines easier to inspect.</p>
      </section>
    </div>
  </div>
</section>

<section class="page-section section-warm section-narrow">
  <div class="section-inner">
    <h2>Evaluation Perspective</h2>
    <p>The project evaluates hybrid AI for education through several complementary questions: whether generated content is pedagogically valid, whether adaptive sequencing remains effective with generated resources, whether models can exploit rich educational histories, and whether the resulting systems remain frugal enough for large-scale deployment.</p>
  </div>
</section>
