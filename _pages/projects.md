---
layout: page
title: projects
permalink: /projects/
description: advanced computer vision, signal processing, and deep learning solutions across academic research and industry applications
nav: true
nav_order: 2
display_categories: false
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">

<!-- Custom horizontal layout for projects -->
<div class="container-fluid">

{% assign sorted_projects = site.projects | sort: "importance" %}

{% for project in sorted_projects %}
  <!-- Project Entry -->
  <div class="row mt-5 mb-5 project-entry">
    <!-- Project Image -->
    <div class="col-md-4 d-flex align-items-center">
      {% if project.img %}
        <img src="{{ project.img | relative_url }}" class="img-fluid rounded shadow-sm mx-auto d-block" alt="{{ project.title }}" style="max-height: 250px; object-fit: cover; transition: transform 0.3s ease;">
      {% endif %}
    </div>

    <!-- Project Description -->
    <div class="col-md-8 d-flex align-items-center">
      <div class="project-content">
        <h3 class="mb-3 project-title">
          {{ project.title }}
        </h3>
        <div class="mb-3">
          {% if project.title contains "Air-Writing" %}
            <span class="badge badge-success px-3 py-2">Rajshahi University of Engineering & Technology</span>
          {% elsif project.title contains "Self-Supervised Learning for SAR Target Recognition with Multi-Task Pretext Training" %}
            <span class="badge badge-primary px-3 py-2">Tuskegee University</span>
          {% else %}
            <span class="badge badge-danger px-3 py-2">MyMedicalHUB Corp., FL, USA</span>
          {% endif %}
        </div>
        <p class="text-muted mb-4 project-description">{{ project.description }}</p>
        <div>
          <!-- To add Learn More button later, uncomment the line below and add 'show_learn_more: true' to project front matter -->
          {% if project.show_learn_more %}<a href="{{ project.url | relative_url }}" class="btn btn-outline-danger btn-lg mr-2">Learn More <i class="fas fa-arrow-right ml-2"></i></a>{% endif %}

          {% if project.title contains "Self-Supervised Learning for SAR Target Recognition with Multi-Task Pretext Training" %}
            <a href="https://github.com/MdAlSiam/ssl-sar-atr/" target="_blank" class="btn btn-outline-dark btn-lg mr-2"><i class="fab fa-github mr-2"></i>Code</a>
            <a href="https://ieeexplore.ieee.org/document/10971440" target="_blank" class="btn btn-outline-primary btn-lg"><i class="fas fa-file-pdf mr-2"></i>Paper</a>
          {% elsif project.title contains "Air-Writing" %}
            <a href="https://doi.org/10.3390/s21248407" target="_blank" class="btn btn-outline-primary btn-lg"><i class="fas fa-file-pdf mr-2"></i>Paper</a>
          {% else %}
            <!-- <a href="#" target="_blank" class="btn btn-outline-primary btn-lg"><i class="fas fa-file-pdf mr-2"></i>Paper</a> -->
          {% endif %}
        </div>
      </div>
    </div>
  </div>

  {% unless forloop.last %}
  <!-- Divider Line -->
  <hr class="my-5 project-divider" style="border-top: 2px solid #e9ecef;" />
  {% endunless %}
{% endfor %}

</div>

<style>
.project-title {
  color: var(--global-text-color) !important;
}

.project-content {
  width: 100%;
}

.project-description {
  color: var(--global-text-color-light);
  font-size: 1rem;
  line-height: 1.5;
}

.project-divider {
  border-color: var(--global-divider-color) !important;
}

.badge {
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .project-entry {
    text-align: center;
  }

  .col-md-4, .col-md-8 {
    margin-bottom: 2rem;
  }

  .project-title {
    font-size: 1.25rem;
  }
}

/* GitHub button styling for dark mode */
html[data-theme="dark"] .btn-outline-dark {
  color: #f8f9fa !important;
  border-color: #f8f9fa !important;
  background-color: transparent;
  box-shadow: 0 0 10px rgba(248, 249, 250, 0.3);
  transition: all 0.3s ease;
}

html[data-theme="dark"] .btn-outline-dark:hover {
  color: #000 !important;
  background-color: #f8f9fa !important;
  border-color: #f8f9fa !important;
  box-shadow: 0 0 15px rgba(248, 249, 250, 0.6);
  transform: translateY(-2px);
}

html[data-theme="dark"] .btn-outline-dark .fab.fa-github {
  color: inherit;
  text-shadow: 0 0 8px rgba(248, 249, 250, 0.5);
}
</style>

</div>
