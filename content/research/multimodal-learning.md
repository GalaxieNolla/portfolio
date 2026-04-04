---
title: "Cross-Modal Representation Learning for Vision-Language Alignment"
description: "A contrastive learning framework that aligns visual and textual embeddings in a shared latent space, enabling zero-shot image-text retrieval with state-of-the-art performance on COCO and Flickr30k."
date: "2023-11-05"
venue: "CVPR 2023"
tags: ["Multimodal Learning", "Computer Vision", "NLP", "Contrastive Learning"]
authors: ["Your Name", "Liang Wei", "Prof. Sara Montoya"]
arxiv: "https://arxiv.org"
pdf: "https://example.com"
---

## Abstract

We present CrossAlign, a scalable contrastive learning framework for vision-language alignment trained on 400M image-caption pairs. CrossAlign achieves 82.1% Recall@1 on COCO image-text retrieval (zero-shot), surpassing CLIP by 4.3 points with 40% fewer parameters.

## Architecture

CrossAlign employs a dual-encoder design with a novel cross-attention bridge module that facilitates bidirectional grounding without full cross-modal attention, keeping inference costs low.

## Impact

The pretrained model has been adopted by two downstream applications in medical image captioning and e-commerce product search, with subsequent papers citing improvements in domain-specific retrieval tasks.
