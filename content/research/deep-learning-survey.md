---
title: "A Comparative Survey of Deep Learning Architectures for Sequence Modeling"
description: "An in-depth survey examining transformer variants, recurrent networks, and state space models across long-range dependency benchmarks, with ablation studies on computational efficiency."
date: "2024-09-10"
venue: "NeurIPS 2024"
tags: ["Deep Learning", "Transformers", "Sequence Modeling", "Machine Learning"]
authors: ["Your Name", "Jane Smith", "Prof. Robert Chen"]
arxiv: "https://arxiv.org"
---

## Overview

This paper presents a systematic evaluation of modern deep learning architectures applied to sequence modeling tasks. We benchmark transformer variants (BERT, GPT, LLaMA), structured state space models (S4, Mamba), and hybrid approaches across six long-range dependency datasets.

## Key Contributions

- Introduced a unified benchmarking framework for fair cross-architecture comparison
- Demonstrated that state space models achieve 2.3× speedup over transformers on sequences >4096 tokens with comparable accuracy
- Proposed a novel attention approximation that reduces quadratic complexity to near-linear scaling

## Results

Our experiments across 6 datasets and 4 model families show that no single architecture dominates all regimes, underscoring the importance of task-specific model selection.
