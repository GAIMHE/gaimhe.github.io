---
layout: default
title: Project Architecture
permalink: /project/
---

# Project Architecture

[Back to Home]({{ '/' | relative_url }})

GAIMHE investigates a hybrid architecture for educational AI. The central design choice is to preserve the pedagogical control of adaptive intelligent tutoring systems while using generative AI only where it can reduce authoring cost, improve feedback, or support richer learning analytics.

## Architecture at a Glance

<div class="process-flow">
  <div>
    <strong>1. Expert specifications</strong>
    <span>Pedagogical objectives, activity templates, expected answers, distractor logic, and validation criteria.</span>
  </div>
  <div>
    <strong>2. Offline generation</strong>
    <span>Exercises, hints, feedback, and variants are generated from explicit constraints and examples.</span>
  </div>
  <div>
    <strong>3. Automated pre-filtering</strong>
    <span>LLM-as-Judge tools flag low-quality or misaligned outputs before expert review.</span>
  </div>
  <div>
    <strong>4. Human validation</strong>
    <span>Teachers and domain experts validate, revise, and document generated resources.</span>
  </div>
  <div>
    <strong>5. Adaptive deployment</strong>
    <span>Validated resources are integrated into pedagogical graphs and sequenced by the tutoring system.</span>
  </div>
</div>

## Adaptive Tutoring Core

The project builds on adaptive learning platforms such as Adaptiv'Math and MIA Seconde. In these systems, educational content is organized as pedagogical graphs: modules contain objectives, objectives contain activities, and activities contain exercise variants. The graph encodes prerequisite relations and constrains which activities can be proposed to a learner.

The adaptive engine remains responsible for sequencing. Algorithms such as ZPDES select activities according to observed learning progress, rather than asking a generative model to decide the curriculum directly. This separation keeps personalization grounded in an explicit pedagogical structure.

## Generative Modules

At the macro-pedagogical level, generative models are used offline. They can produce exercise variants, distractors, hints, and feedback from expert-provided templates and specifications. Each generated resource must remain aligned with a target objective, activity type, school level, interaction format, and expected misconception or difficulty.

At the micro-pedagogical level, real-time generation is treated as targeted assistance. It may be triggered when a learner asks for help, repeats incorrect answers, spends unusually long on a task, or produces an open response that is difficult to classify. The generated response should support progressive scaffolding without revealing the answer too early.

## Validation Pipeline

GAIMHE treats validation as a core part of the architecture. Generated resources are evaluated against explicit codebooks covering correctness, clarity, level appropriateness, pedagogical alignment, plausibility of distractors, and the quality of hints or feedback.

The project explores LLM-as-Judge methods as pre-filtering tools, not as replacements for pedagogical expertise. Human annotations by teachers and experts provide the reference signal used to calibrate automatic checks, clarify codebooks, and identify cases where model-based judging is unreliable.

## Frugality and Deployment

The architecture is designed for classroom-scale use. Generating every exercise or feedback message with a large model in real time would be costly, slow, and difficult to deploy responsibly. GAIMHE therefore prioritizes:

- offline generation whenever possible;
- automatic filtering before human validation;
- limited real-time generation for clearly justified pedagogical situations;
- compact student models and evaluation protocols that can operate at scale;
- documentation and shared resources that make the pipeline auditable.

## Evaluation Perspective

The project evaluates hybrid AI for education through several complementary questions: whether generated content is pedagogically valid, whether adaptive sequencing remains effective with generated resources, whether models can exploit rich educational histories, and whether the resulting systems remain frugal enough for large-scale deployment.

[Back to Home]({{ '/' | relative_url }})
