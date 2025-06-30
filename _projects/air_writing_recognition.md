---
layout: page
title: Deep Learning Based Air-Writing Recognition with the Choice of Proper Interpolation Technique
description: We developed a deep learning-based air-writing recognition system that addresses the critical challenge of variable signal length in time-series data through innovative interpolation techniques. Our method extensively investigated different interpolation techniques on seven publicly available air-writing datasets and developed a method to recognize air-written characters using a 2D-CNN model. In both user-dependent and user-independent principles, our method outperformed all the state-of-the-art methods by a clear margin for all datasets, achieving up to 100% accuracy on digit recognition and significant improvements across all character recognition tasks.
img: assets/img/publication_preview/air_writing.png
importance: 3
category: work
giscus_comments: true
show_learn_more: false
---

We developed a deep learning-based air-writing recognition system that addresses the critical challenge of variable signal length in time-series data through innovative interpolation techniques. This research represents a significant advancement in gesture recognition and human-computer interaction technologies.

## Research Overview

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/12.jpg" title="Air-writing recognition demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Air-writing recognition using sensor data and deep learning techniques (placeholder image)
</div>

### Problem Statement
Air-writing recognition faces a fundamental challenge: **variable signal length** due to the nature of writing and data-recording procedures. Traditional methods like padding and truncation result in significant data loss, limiting model performance.

### Our Innovation
We extensively investigated **interpolation techniques** for time-series data and developed a **2D-CNN model** that outperforms all state-of-the-art methods by clear margins across multiple datasets.

## Key Contributions

### 1. Comprehensive Interpolation Analysis
We investigated four different interpolation techniques for time-series air-writing data:

- **Bicubic Interpolation** (Best performing)
- **Lanczos Interpolation**
- **Bilinear Interpolation**
- **Nearest Neighbor Interpolation**

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/9.jpg" title="Interpolation comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/10.jpg" title="Signal processing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Comparison of different interpolation techniques. Right: Signal processing pipeline. (placeholder images)
</div>

### 2. Optimal Signal Length Selection
We developed a systematic approach to determine optimal fixed signal lengths:
- **Minimize data loss** through upsampling majority of signals
- **Balance computational efficiency** with performance
- **Prevent data redundancy** while maintaining temporal features

### 3. Advanced 2D-CNN Architecture
Our proposed CNN model incorporates:
- **Four layer groups** with conv-conv-maxpool-dropout structure
- **ReLU activations** throughout the network
- **Strategic dropout placement** following best practices
- **Optimized parameter configuration** for time-series data

## Experimental Results

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/7.jpg" title="Performance comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/8.jpg" title="Dataset analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Performance comparisons and dataset analysis results (placeholder images)
</div>

### Datasets Evaluated
We evaluated our method on **seven publicly available datasets**:

1. **Smart-band Dataset** (55 subjects, 26 letters)
2. **6DMG Dataset variations** (digits, lowercase, uppercase, all combined)
3. **RTD Dataset** (trajectory-based digits)
4. **RTC Dataset** (trajectory-based characters)

### State-of-the-Art Results

#### User-Dependent Principle
- **Smart-band**: 91.34% (vs. 89.20% previous best)
- **6DMG-digit**: 100.00% accuracy
- **6DMG-all**: 98.99% (3.55% improvement)
- **RTC**: 99.63% accuracy
- **RTD**: 99.76% accuracy

#### User-Independent Principle
- **Smart-band**: 85.59% (vs. 83.20% previous best)
- **6DMG-digit**: 99.26% (0.52% improvement)
- **6DMG-all**: 91.24% (3.55% improvement)

## Technical Innovations

### Interpolation Advantage Over Traditional Methods
Our **Bicubic interpolation** approach significantly outperformed traditional methods:

| Method | Signal Length 200 | Accuracy |
|--------|------------------|----------|
| Pre-sequence Padding/Truncation | 86.58% | Poor |
| Post-sequence Padding/Truncation | 85.84% | Poor |
| **Bicubic Interpolation** | **88.54%** | **Best** |

### Computational Efficiency
- **Optimal balance** between performance and computational cost
- **Minimal inference time** compared to traditional methods
- **Reduced parameter count** through strategic architecture design

## Applications and Impact

### Next-Generation Technologies
- **Virtual Reality (VR)** and **Augmented Reality (AR)** interfaces
- **Touchless interaction** systems
- **Smart wearable devices** integration
- **Gesture-based computing** platforms

### Real-World Deployment Considerations
- **Fine-tuning** for specific deployment environments
- **User feedback loops** for continuous improvement
- **Auto-correction mechanisms** for enhanced accuracy
- **Hybrid user-dependent/independent** approaches

## Research Significance

### Academic Impact
- **Published in Sensors journal** (MDPI, 2021)
- **Open access research** contributing to the scientific community
- **Reproducible methodology** across multiple datasets
- **Comprehensive evaluation** against existing methods

### Technical Advancement
- **Novel application** of image interpolation to time-series data
- **Systematic investigation** of interpolation techniques
- **Optimized CNN architecture** for air-writing recognition
- **Significant performance improvements** across all evaluated datasets

## Future Research Directions

### Enhanced Recognition Capabilities
- **Word-level recognition** beyond individual characters
- **Multi-language support** for diverse user populations
- **Real-time processing** optimization
- **Cross-modal integration** with other input methods

### System Improvements
- **Subject characteristic analysis** for personalized recognition
- **Adaptive signal length selection** based on user patterns
- **Robust noise handling** for real-world environments
- **Energy-efficient implementations** for mobile devices

## Technical Specifications

- **Programming Framework**: TensorFlow/Keras
- **Hardware**: NVIDIA Tesla T4 GPU
- **Interpolation Library**: OpenCV
- **Evaluation Metrics**: Cross-validation accuracy
- **Training Principles**: User-dependent and user-independent
- **Input Modalities**: Accelerometer and gyroscope data

---

*This research was conducted in collaboration with the Department of Computer Science & Engineering at Rajshahi University of Engineering & Technology and The University of Aizu, representing a significant contribution to the field of gesture recognition and human-computer interaction.*

### Publication Details
**Citation**: Abir, F.A.; Siam, M.A.; Sayeed, A.; Hasan, M.A.M.; Shin, J. Deep Learning Based Air-Writing Recognition with the Choice of Proper Interpolation Technique. *Sensors* 2021, 21, 8407.

**DOI**: [10.3390/s21248407](https://doi.org/10.3390/s21248407)
