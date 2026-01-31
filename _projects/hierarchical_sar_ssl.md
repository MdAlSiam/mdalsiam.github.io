---
layout: page
title: Advancing SAR Target Recognition Through Hierarchical Self-Supervised Learning with Multi-Task Pretext Training
description: Synthetic Aperture Radar (SAR) Automatic Target Recognition (ATR) systems face significant challenges due to limited labeled data availability and persistent domain gaps between synthetic and measured imagery. This paper presents a comprehensive self-supervised learning (SSL) framework that eliminates dependency on synthetic data while achieving state-of-the-art performance through multi-task pretext training and extensive downstream classifier evaluation. We systematically evaluate our SSL framework across diverse downstream classifiers spanning different computational paradigms and architectural families. Results demonstrate that SSL significantly improves SAR ATR performance, with SVM achieving 99.63% accuracy, ResNet18 reaching 97.40% accuracy, and Random Forest demonstrating 99.26% accuracy.
img: assets/img/publication_preview/sar_recognition.png
importance: 0
category: work
giscus_comments: true
show_learn_more: false
---

<div class="mb-3">
  <a href="https://www.mdpi.com/1424-8220/26/1/122" target="_blank" class="btn btn-primary btn-sm">
    <i class="ai ai-doi"></i> Paper
  </a>
  <a href="https://github.com/MdAlSiam/ssl-sar-atr-2-v2/" target="_blank" class="btn btn-dark btn-sm">
    <i class="fab fa-github"></i> Code
  </a>
</div>

**Institution**: Tuskegee University

---

We present a comprehensive self-supervised learning (SSL) framework for Synthetic Aperture Radar (SAR) Automatic Target Recognition (ATR) that eliminates dependency on synthetic data while achieving state-of-the-art performance through multi-task pretext training and extensive downstream classifier evaluation.

### Research Problem Addressed
SAR Automatic Target Recognition systems face critical challenges:
- **Limited labeled data availability** due to complex operational conditions and expensive data collection
- **Persistent domain gaps** between synthetic and measured imagery that severely limit ATR performance
- **Lack of systematic evaluation** across diverse classifier architectures and computational paradigms

Our framework fundamentally addresses these challenges by leveraging inherent radar data structure without synthetic augmentation.

### Our Comprehensive Approach
Unlike traditional methods that rely on synthetic data, our SSL framework employs nine carefully designed pretext tasks organized into three strategic categories:

**1. Geometric Invariance Tasks**
- Rotation prediction
- Flip detection
- Jigsaw puzzle solving

**2. Signal Robustness Tasks**
- Noise prediction
- Gaussian blur prediction
- Salt-and-pepper noise prediction

**3. Multi-Scale Analysis Tasks**
- Brightness adjustment prediction
- Resolution change detection
- Aspect angle change prediction

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/sar_recognition.png" title="Hierarchical SSL Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hierarchical self-supervised learning framework for SAR target recognition with multi-task pretext training
</div>

### Extensive Evaluation Across Classifier Families

We systematically evaluated our SSL framework across **diverse downstream classifiers** spanning different computational paradigms:

**Traditional Machine Learning:**
- Support Vector Machine (SVM): **99.63% accuracy**
- Random Forest: **99.26% accuracy**
- XGBoost: **99.26% accuracy**
- Gradient Boosting: **99.07% accuracy**

**Deep Convolutional Neural Networks:**
- ResNet18: **97.40% accuracy**
- ResNet50: **96.72% accuracy**
- MobileNetV2: **96.42% accuracy**
- EfficientNet-B0: **95.98% accuracy**
- U-Net: **95.35% accuracy**

**Generative Models:**
- Conditional GAN: **96.33% accuracy**

### Key Achievements

1. **Elimination of Synthetic Data Dependency**: Our framework achieves superior performance using only measured SAR data, removing the need for synthetic augmentation

2. **State-of-the-Art Performance**: SVM classifier achieves **99.63% accuracy**, surpassing traditional methods by significant margins

3. **Robust Cross-Validation**: Rigorous 5-fold cross-validation validates generalizability across different data splits

4. **Multi-Task SSL Superiority**: Systematic comparison demonstrates that task-based SSL outperforms contrastive learning (SimCLR) for SAR ATR

5. **Computational Efficiency**: Traditional ML classifiers (SVM, Random Forest) demonstrate superior performance with significantly lower computational requirements compared to deep learning approaches

6. **Comprehensive Classifier Analysis**: First systematic evaluation across traditional ML, deep CNNs, and generative models for SSL-based SAR ATR

### Experimental Validation

**Dataset**: SAMPLE (Sandia National Laboratories' SAR dataset)
- 1,355 labeled SAR images
- Three target classes: 2S1, BMP2, BRDM2
- Rigorous evaluation protocols with 5-fold cross-validation

**Performance Highlights:**
- SVM achieves **99.63% accuracy** with SSL pretraining
- ResNet18 reaches **97.40% accuracy**, demonstrating deep learning effectiveness
- Random Forest demonstrates **99.26% accuracy** with minimal computational overhead
- Consistent performance improvements across all classifier families

### Technical Innovation

**Multi-Task Pretext Training Strategy:**
1. Encoder trained simultaneously on nine complementary transformation tasks
2. Each task contributes unique perspective on SAR data characteristics
3. Hierarchical task organization ensures comprehensive feature learning
4. Task-specific prediction heads enable focused representation learning

**SSL vs. Contrastive Learning:**
Our systematic comparison with SimCLR baseline validates that task-based SSL outperforms contrastive learning for SAR ATR, establishing domain-specific SSL as the preferred approach.

### Impact and Applications

This research establishes a new paradigm for SAR ATR that:
- **Eliminates synthetic data requirements** while maintaining superior performance
- **Provides practical guidelines** for deploying SSL-based SAR ATR systems
- **Demonstrates systematic evaluation methodology** across diverse classifier architectures
- **Establishes foundation** for future domain-specific self-supervised learning research in remote sensing

### Future Directions

Our framework opens exciting avenues for:
1. Extension to multi-modal remote sensing fusion
2. Integration with vision-language models for SAR understanding
3. Transfer learning to other radar modalities
4. Real-time deployment optimization for operational systems

---

### Publication Details

**Paper**: [Sensors, MDPI 2025](https://www.mdpi.com/1424-8220/26/1/122)

**Code**: [GitHub Repository](https://github.com/MdAlSiam/ssl-sar-atr-2-v2/)

**Authors**: Md Al Siam, Dewan Fahim Noor, Mandoye Ndoye, Jesmin Farzana Khan

**Affiliation**: Tuskegee University, NSF AI Institute for Artificial and Natural Intelligence (ARNI)

---

### Citation

```bibtex
@article{siam2025advancing,
  title={Advancing SAR Target Recognition Through Hierarchical Self-Supervised Learning with Multi-Task Pretext Training},
  author={Siam, Md Al and Noor, Dewan Fahim and Ndoye, Mandoye and Khan, Jesmin Farzana},
  journal={Sensors},
  volume={26},
  number={1},
  pages={122},
  year={2025},
  publisher={MDPI}
}
```
