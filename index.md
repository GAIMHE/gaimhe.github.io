---
layout: default
title: "GAIMHE: Generative AI and Hybrid Models for Education"
---

<section class="page-section section-blue">
  <div class="section-inner">
    <h2 class="intro-title">Hybridizing adaptive intelligent tutoring systems with generative AI.</h2>
    <p class="lead">
      GAIMHE is an industry-academic project coordinated by EvidenceB, carried out with Inria, and funded by BPI France. It explores how generative AI can be integrated into adaptive intelligent tutoring systems without giving up pedagogical control, frugality, or real-world deployability.
    </p>

    <div class="link-grid link-grid-four">
      <a class="link-card" href="{{ '/project/' | relative_url }}">
        <span class="card-kicker">Architecture</span>
        <strong>Hybrid tutoring systems</strong>
        <span>How adaptive sequencing, pedagogical graphs, and constrained generative modules work together.</span>
      </a>
      <a class="link-card" href="{{ '/datasets/' | relative_url }}">
        <span class="card-kicker">Data and Evaluation</span>
        <strong>Open resources and benchmarks</strong>
        <span>Datasets, visualization tools, evaluation code, and the research questions they support.</span>
      </a>
      <a class="link-card" href="{{ '/collaborations/' | relative_url }}">
        <span class="card-kicker">Consortium</span>
        <strong>Partners and ecosystem</strong>
        <span>The organizations contributing research, deployment, infrastructure, and dissemination.</span>
      </a>
      <a class="link-card" href="{{ '/contact/' | relative_url }}">
        <span class="card-kicker">Contact</span>
        <strong>Project channels</strong>
        <span>Where to follow public resources and reach the consortium.</span>
      </a>
    </div>
  </div>
</section>

<section class="page-section section-narrow">
  <div class="section-inner">
    <h2>Why GAIMHE?</h2>
    <p>Education systems face major challenges. <a href="https://www.oecd.org/en/publications/pisa-2022-results-volume-i_53f23881-en.html">PISA 2022</a> reports a sharp decline in mathematics and reading performance across OECD countries, while socio-economic background continues to strongly shape student achievement. Digital technologies can help, but only when they are used purposefully, regulated responsibly, and made available equitably; otherwise they can reinforce the inequalities they are meant to reduce.</p>
    <p>Adaptive learning addresses part of this challenge by personalizing learning paths to each learner's level and progression. EdTech companies have therefore developed Intelligent Tutoring Systems with strong pedagogical grounding, but these systems have not yet fully benefited from recent advances in generative AI.</p>

    <figure class="figure-panel evidence-figure">
      <img src="{{ '/images/pisa5.png' | relative_url }}" alt="PISA 2022 results for France and OECD average trends in mathematics, reading, and science">
      <figcaption>PISA indicators illustrate both the decline in core academic performance and the persistence of socio-economic learning gaps, motivating tools that combine personalization, equity, and pedagogical control.</figcaption>
    </figure>
  </div>
</section>

<section class="page-section section-narrow section-compact">
  <div class="section-inner">
    <h2>The Hybrid Opportunity</h2>
    <p>Current educational AI systems face a structural tradeoff.</p>
    <p>Adaptive intelligent tutoring systems can personalize learning trajectories over weeks or months, rely on explicit pedagogical structures, and have already been deployed at classroom scale. Their main limitation is the cost of producing high-quality exercises, hints, feedback, metadata, and pedagogical graphs by hand.</p>
    <p>Generative AI can produce content and interact in natural language, but unconstrained use raises risks: factual errors, weak pedagogical alignment, over-helpful feedback, high inference cost, and limited control for teachers and instructional designers.</p>
    <p>GAIMHE investigates a hybrid path: keep the adaptive tutoring system in charge of pedagogical sequencing, and use generative models under explicit constraints where they add value.</p>
  </div>
</section>

<section class="page-section section-soft">
  <div class="section-inner approach-split">
    <div class="section-head approach-copy">
      <h2>Controlled generation inside adaptive systems</h2>
      <p>The project keeps long-term pedagogical decisions inside the tutoring system and uses generative models only where they can be constrained, validated, and monitored.</p>
      <div class="hero-actions">
        <a class="button-primary" href="{{ '/project/' | relative_url }}">See the architecture</a>
        <a class="button-secondary" href="{{ '/ressources/whitepaper.pdf' | relative_url }}">Read the white paper</a>
      </div>
    </div>

    <div class="feature-grid feature-grid-four approach-grid">
      <section class="feature-panel">
        <h3>Adaptive core</h3>
        <p>Learning paths remain structured by expert-authored pedagogical graphs and adaptive sequencing algorithms such as ZPDES.</p>
      </section>
      <section class="feature-panel">
        <h3>Offline generation</h3>
        <p>LLMs are used to pre-generate exercises, distractors, hints, and feedback from explicit specifications and expert examples.</p>
      </section>
      <section class="feature-panel">
        <h3>Targeted assistance</h3>
        <p>Real-time generation is reserved for pedagogically justified situations, such as repeated errors or explicit help requests.</p>
      </section>
      <section class="feature-panel">
        <h3>Validated commons</h3>
        <p>Datasets, documentation, tools, and evaluation protocols are progressively shared as research resources and digital commons.</p>
      </section>
    </div>
  </div>
</section>

<section class="page-section section-dark">
  <div class="section-inner">
    <div class="section-head">
      <h2>Current Resources</h2>
      <p>Public material is added progressively as it becomes ready for scientific dissemination.</p>
    </div>

    <div class="resource-list">
      <a class="resource-item" href="ressources/whitepaper.pdf">
        <strong>White paper</strong>
        <span>Hybridizing adaptive intelligent tutoring systems with generative AI: challenges and opportunities for large-scale deployment and pedagogical impact.</span>
      </a>
      <a class="resource-item" href="https://huggingface.co/datasets/GAIMHE/MIAAM">
        <strong>MIAAM dataset</strong>
        <span>A semantically rich mathematics learning dataset linking real student attempts, exercise content, metadata, and prerequisite graphs.</span>
      </a>
      <a class="resource-item" href="https://huggingface.co/datasets/GAIMHE/Physics">
        <strong>Physics dataset</strong>
        <span>Expert-designed physics and chemistry activities prepared as reference material for synthetic exercise generation.</span>
      </a>
      <a class="resource-item" href="https://miaamdata.streamlit.app/">
        <strong>MIAAM visualization tool</strong>
        <span>Interactive inspection of usage statistics, learning trajectories, curriculum graphs, and activity-level patterns.</span>
      </a>
    </div>
  </div>
</section>

<section class="page-section section-warm section-narrow">
  <div class="section-inner">
    <h2>Research Questions</h2>
    <p>GAIMHE contributes to research in AI for education by studying how to combine the structured efficiency of classical student modeling with the representational flexibility of modern generative and multimodal models. The project focuses on practical questions that matter for deployment: what should be generated, when generation should happen, how generated resources should be validated, and how models can be evaluated against real learning histories rather than only isolated exercises.</p>
  </div>
</section>

<section class="page-section">
  <div class="section-inner">
    <div class="section-head">
      <h2>Partners</h2>
      <p>GAIMHE is carried by research, educational technology, open-source AI, infrastructure, and dissemination partners.</p>
    </div>

    <div class="partner-logo-grid">
      <a class="partner-logo-card" href="https://evidenceb.fr/">
        <strong>EvidenceB</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/evidencb_logo.png' | relative_url }}" alt="EvidenceB logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://flowers.inria.fr/">
        <strong>Inria Flowers</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/inria_logo.png' | relative_url }}" alt="Inria logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://www.cafepedagogique.net/">
        <strong>Le Caf&eacute; p&eacute;dagogique</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/cafe_logo.jpg' | relative_url }}" alt="Le Caf&eacute; p&eacute;dagogique logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://classcode.fr/">
        <strong>Class'Code</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/classcode_logo.png' | relative_url }}" alt="Class'Code logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://openllm-france.fr/">
        <strong>OpenLLM-France</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/openllm_logo.jpg' | relative_url }}" alt="OpenLLM-France logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://www.iledefrance.fr/">
        <strong>R&eacute;gion &Icirc;le-de-France</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/region_logo.jpg' | relative_url }}" alt="R&eacute;gion &Icirc;le-de-France logo">
        </span>
      </a>
      <a class="partner-logo-card" href="https://www.scaleway.com/fr/">
        <strong>Scaleway</strong>
        <span class="partner-logo-frame">
          <img src="{{ '/images/logo/scaleway_logo.png' | relative_url }}" alt="Scaleway logo">
        </span>
      </a>
    </div>
  </div>
</section>
