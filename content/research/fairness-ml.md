---
title: "Mitigating Algorithmic Bias in Clinical Decision Support Systems"
description: "We study demographic disparities in ML-based clinical predictions and propose a post-processing fairness intervention that reduces performance gaps across patient subgroups without sacrificing overall accuracy."
date: "2024-04-22"
venue: "ICLR 2024"
tags: ["AI Fairness", "Healthcare AI", "Bias Mitigation", "Ethics"]
authors: ["Your Name", "Dr. Amara Osei"]
pdf: "https://example.com"
---

## Motivation

Clinical decision support systems trained on historically biased datasets perpetuate disparities in patient outcomes. This work quantifies those disparities and introduces a fairness-aware calibration method applicable post-deployment.

## Methodology

We collected de-identified records from three hospital systems and trained readmission-risk models using gradient boosting and neural networks. Fairness metrics (equalized odds, demographic parity) were measured across age, gender, and insurance status groups.

## Findings

Our calibration intervention reduced the maximum cross-group AUC gap from 11.4% to 3.1% while maintaining overall system AUC within 0.8% of the unconstrained baseline.
