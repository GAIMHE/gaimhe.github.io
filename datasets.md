---
layout: default
title: Data & Evaluation
permalink: /datasets/
---

# Data and Evaluation

GAIMHE shares datasets, documentation, visual inspection tools, and evaluation code to support reproducible research on AI for education.

## MIAAM Dataset

MIAAM is a large-scale mathematics learning dataset built from real interactions collected on the Adaptiv'Math and MIA Seconde adaptive learning platforms.

<div class="stat-grid">
  <div><strong>7.24M</strong><span>student attempts</span></div>
  <div><strong>45,848</strong><span>learners</span></div>
  <div><strong>7,845</strong><span>exercises</span></div>
  <div><strong>365</strong><span>activities</span></div>
</div>

The dataset links student attempts to exercise content and pedagogical context. Released resources include:

- attempt-level interaction logs with anonymized identifiers, exercise identifiers, submitted answers, correctness, timing, work mode, and attempt order;
- exercise-level metadata including gameplay type, structured content, expected answer, feedback, curriculum mapping, and pedagogical intents;
- screenshots of rendered exercise interfaces for visual and multimodal analysis;
- objective-level and activity-level prerequisite graphs used to structure adaptive progression;
- filtered experiment-ready tables, preprocessing scripts, baseline evaluation code, and visualization tools.

<div class="resource-list">
  <a class="resource-item" href="https://huggingface.co/datasets/GAIMHE/MIAAM">
    <strong>MIAAM on Hugging Face</strong>
    <span>Dataset repository with documentation and access conditions.</span>
  </a>
  <a class="resource-item" href="https://miaamdata.streamlit.app/">
    <strong>Visualization application</strong>
    <span>Interactive exploration of statistics, trajectories, curriculum graphs, bottlenecks, and activity-level patterns.</span>
  </a>
  <a class="resource-item" href="https://github.com/flowersteam/evaluation-miaam">
    <strong>Evaluation code</strong>
    <span>Experiment code for reproducing baseline evaluations and knowledge-tracing comparisons.</span>
  </a>
</div>

## Physics Dataset

The Physics dataset contains expert-designed physics and chemistry activities prepared as reference material for synthetic exercise generation. It is based on open educational resources and adapted to EvidenceB-style interactive activities, with pedagogical metadata and structure suitable for downstream generation and validation.

This dataset supports the generation of new exercises from expert references while preserving target objectives, activity formats, and pedagogical constraints.

<div class="resource-list">
  <a class="resource-item" href="https://huggingface.co/datasets/GAIMHE/Physics">
    <strong>Physics on Hugging Face</strong>
    <span>Expert reference activities and documentation for generation experiments.</span>
  </a>
</div>

## Evaluation Goals

GAIMHE uses these resources to evaluate several families of models and methods:

- knowledge tracing models that predict future student performance from interaction histories;
- multimodal or language models that use exercise text, screenshots, answers, and pedagogical metadata;
- student models that must remain efficient enough for large-scale adaptive learning;
- generation and validation pipelines for exercises, hints, distractors, and feedback;
- visualization tools that help researchers and educators inspect learning trajectories and curriculum structure.

## Data Protection and Access

Educational data is treated as high-stakes data. Public datasets are anonymized and minimized before release: student, classroom, and session identifiers are anonymized; temporal information is transformed to preserve order and durations without exposing direct timestamps; names, school identifiers, demographic free text, and geographic identifiers are not shared.

Some resources are distributed through gated access on Hugging Face so users acknowledge the license and intended use conditions before downloading the data. This allows GAIMHE to support open research while preserving safeguards around sensitive educational traces.
