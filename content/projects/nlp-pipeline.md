---
title: "NLP Pipeline for Academic Paper Summarization"
description: "An end-to-end pipeline that fetches papers from arXiv, extracts structured metadata, generates abstractive summaries using fine-tuned BART, and serves results via a REST API."
tags: ["Python", "HuggingFace", "FastAPI", "PostgreSQL", "Docker"]
github: "https://github.com"
content: |
  Processes 1,000+ papers per day with async task queuing. Fine-tuned BART-large on a curated academic corpus achieves ROUGE-L of 0.42 on the SciTLDR test set, outperforming zero-shot GPT-3.5 baselines.
---
