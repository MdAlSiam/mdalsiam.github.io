---
layout: page
title: Automated Range of Motion (ROM) Measurement using Human Pose Estimation
description: We developed an automated Range of Motion (ROM) measurement web/mobile application for patient and healthcare providers with real-time monitoring and scalable deployment. The platform integrates over 200 active and passive ROM exercises, utilizing full-body pose estimation models to accurately analyze patient videos. Moreover, to boost model precision, we fine-tuned exercise-specific pose estimation models using custom in-house datasets. For scalability, we designed a distributed system with a master-slave architecture to efficiently manage high-volume API requests. We also leveraged Amazon EC2 and S3 to ensure a robust, cloud-based infrastructure, supporting seamless ROM assessments in both telehealth and clinical environments.
img: assets/img/projects_preview/ROM.gif
importance: 1
category: work
giscus_comments: true
show_learn_more: false
---

We developed an automated Range of Motion (ROM) measurement web/mobile application for patients and healthcare providers with real-time monitoring and scalable deployment. This innovative platform represents a significant advancement in telehealth and clinical assessment tools.

## Key Features

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="ROM measurement demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Real-time Range of Motion measurement using pose estimation (placeholder image)
</div>

### Comprehensive Exercise Library
The platform integrates **over 200 active and passive ROM exercises**, utilizing full-body pose estimation models to accurately analyze patient videos. This extensive library covers all major joint movements and therapeutic exercises commonly used in physical therapy.

### Advanced 3D Pose Estimation
I contributed to developing a novel **3D pose estimation** technique specifically designed to enhance the measurement of **trunk rotation ROM**. This innovation addresses one of the most challenging aspects of ROM assessment - accurately capturing rotational movements in three-dimensional space.

### Machine Learning Optimization
To boost model precision, we **fine-tuned** exercise-specific pose estimation models using **custom in-house datasets**. This targeted approach ensures high accuracy across different exercise types and patient populations.

## Technical Architecture

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/7.jpg" title="System architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/9.jpg" title="Cloud infrastructure" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Distributed system architecture. Right: Cloud infrastructure setup. (placeholder images)
</div>

### Scalable System Design
For scalability, I designed a **distributed system with a master-slave architecture** to efficiently manage high-volume API requests. This design ensures consistent performance even under heavy load conditions.

### Cloud Infrastructure
We leveraged **Amazon EC2 and S3** to ensure a robust, cloud-based infrastructure, supporting seamless ROM assessments in both telehealth and clinical environments. The system can automatically scale based on demand and maintains high availability.

## Clinical Applications

### Telehealth Integration
The platform seamlessly integrates with existing telehealth workflows, allowing healthcare providers to:
- Conduct remote ROM assessments
- Monitor patient progress over time
- Provide real-time feedback during exercises
- Generate comprehensive reports for clinical documentation

### Real-World Impact
The system has been deployed in clinical environments, demonstrating:
- Improved patient engagement in physical therapy
- Reduced need for in-person assessment visits
- Enhanced accuracy in ROM measurements
- Streamlined clinical workflows

## Technical Specifications

- **Platform**: Web and mobile application
- **Pose Estimation**: Full-body and 3D trunk rotation models
- **Exercise Library**: 200+ active and passive ROM exercises
- **Infrastructure**: AWS EC2/S3 with auto-scaling
- **Architecture**: Distributed master-slave system
- **Real-time Processing**: Low-latency video analysis

---

*This project was developed at MyMedicalHUB Corp., FL, USA, representing a significant advancement in digital health technology and remote patient monitoring.*
