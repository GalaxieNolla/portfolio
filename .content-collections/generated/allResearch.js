
export default [
  {
    "title": "A Comparative Survey of Deep Learning Architectures for Sequence Modeling",
    "description": "An in-depth survey examining transformer variants, recurrent networks, and state space models across long-range dependency benchmarks, with ablation studies on computational efficiency.",
    "date": "2024-09-10",
    "venue": "NeurIPS 2024",
    "tags": [
      "Deep Learning",
      "Transformers",
      "Sequence Modeling",
      "Machine Learning"
    ],
    "authors": [
      "Your Name",
      "Jane Smith",
      "Prof. Robert Chen"
    ],
    "arxiv": "https://arxiv.org",
    "content": "## Overview\n\nThis paper presents a systematic evaluation of modern deep learning architectures applied to sequence modeling tasks. We benchmark transformer variants (BERT, GPT, LLaMA), structured state space models (S4, Mamba), and hybrid approaches across six long-range dependency datasets.\n\n## Key Contributions\n\n- Introduced a unified benchmarking framework for fair cross-architecture comparison\n- Demonstrated that state space models achieve 2.3× speedup over transformers on sequences >4096 tokens with comparable accuracy\n- Proposed a novel attention approximation that reduces quadratic complexity to near-linear scaling\n\n## Results\n\nOur experiments across 6 datasets and 4 model families show that no single architecture dominates all regimes, underscoring the importance of task-specific model selection.",
    "_meta": {
      "filePath": "deep-learning-survey.md",
      "fileName": "deep-learning-survey.md",
      "directory": ".",
      "extension": "md",
      "path": "deep-learning-survey"
    }
  },
  {
    "title": "Mitigating Algorithmic Bias in Clinical Decision Support Systems",
    "description": "We study demographic disparities in ML-based clinical predictions and propose a post-processing fairness intervention that reduces performance gaps across patient subgroups without sacrificing overall accuracy.",
    "date": "2024-04-22",
    "venue": "ICLR 2024",
    "tags": [
      "AI Fairness",
      "Healthcare AI",
      "Bias Mitigation",
      "Ethics"
    ],
    "authors": [
      "Your Name",
      "Dr. Amara Osei"
    ],
    "pdf": "https://example.com",
    "content": "## Motivation\n\nClinical decision support systems trained on historically biased datasets perpetuate disparities in patient outcomes. This work quantifies those disparities and introduces a fairness-aware calibration method applicable post-deployment.\n\n## Methodology\n\nWe collected de-identified records from three hospital systems and trained readmission-risk models using gradient boosting and neural networks. Fairness metrics (equalized odds, demographic parity) were measured across age, gender, and insurance status groups.\n\n## Findings\n\nOur calibration intervention reduced the maximum cross-group AUC gap from 11.4% to 3.1% while maintaining overall system AUC within 0.8% of the unconstrained baseline.",
    "_meta": {
      "filePath": "fairness-ml.md",
      "fileName": "fairness-ml.md",
      "directory": ".",
      "extension": "md",
      "path": "fairness-ml"
    }
  },
  {
    "title": "Cross-Modal Representation Learning for Vision-Language Alignment",
    "description": "A contrastive learning framework that aligns visual and textual embeddings in a shared latent space, enabling zero-shot image-text retrieval with state-of-the-art performance on COCO and Flickr30k.",
    "date": "2023-11-05",
    "venue": "CVPR 2023",
    "tags": [
      "Multimodal Learning",
      "Computer Vision",
      "NLP",
      "Contrastive Learning"
    ],
    "authors": [
      "Your Name",
      "Liang Wei",
      "Prof. Sara Montoya"
    ],
    "arxiv": "https://arxiv.org",
    "pdf": "https://example.com",
    "content": "## Abstract\n\nWe present CrossAlign, a scalable contrastive learning framework for vision-language alignment trained on 400M image-caption pairs. CrossAlign achieves 82.1% Recall@1 on COCO image-text retrieval (zero-shot), surpassing CLIP by 4.3 points with 40% fewer parameters.\n\n## Architecture\n\nCrossAlign employs a dual-encoder design with a novel cross-attention bridge module that facilitates bidirectional grounding without full cross-modal attention, keeping inference costs low.\n\n## Impact\n\nThe pretrained model has been adopted by two downstream applications in medical image captioning and e-commerce product search, with subsequent papers citing improvements in domain-specific retrieval tasks.",
    "_meta": {
      "filePath": "multimodal-learning.md",
      "fileName": "multimodal-learning.md",
      "directory": ".",
      "extension": "md",
      "path": "multimodal-learning"
    }
  }
]