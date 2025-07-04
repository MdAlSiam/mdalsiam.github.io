// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "advanced computer vision, signal processing, and deep learning solutions across academic research and industry applications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "innovative STEM education, mentorship, and academic excellence across diverse learning environments",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-more",
          title: "more",
          description: "Experienced researcher and software engineer with expertise in computer vision, self-supervised learning, and deep learning applications. Currently pursuing MSc in Electrical Engineering at Tuskegee University with focus on AI and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-started-my-graduate-research-assistantship-at-tuskegee-university-working-on-computer-vision-applications-with-the-nsf-ai-institute",
          title: 'Started my Graduate Research Assistantship at Tuskegee University, working on Computer Vision applications...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-our-paper-self-supervised-learning-for-sar-target-recognition-has-been-selected-as-a-top-5-finalist-for-the-best-paper-award-at-ieee-southeastcon-2025",
          title: 'Excited to share that our paper “Self-Supervised Learning for SAR Target Recognition” has...',
          description: "",
          section: "News",},{id: "news-presented-our-paper-self-supervised-learning-for-sar-target-recognition-as-a-top-5-finalist-for-the-best-paper-award-at-ieee-southeastcon-2025",
          title: 'Presented our paper “Self-Supervised Learning for SAR Target Recognition” as a Top 5...',
          description: "",
          section: "News",},{id: "projects-deep-learning-based-air-writing-recognition-with-the-choice-of-proper-interpolation-technique",
          title: 'Deep Learning Based Air-Writing Recognition with the Choice of Proper Interpolation Technique',
          description: "We developed a deep learning-based air-writing recognition system that addresses the critical challenge of variable signal length in time-series data through innovative interpolation techniques. Our method extensively investigated different interpolation techniques on seven publicly available air-writing datasets and developed a method to recognize air-written characters using a 2D-CNN model. In both user-dependent and user-independent principles, our method outperformed all the state-of-the-art methods by a clear margin for all datasets, achieving up to 100% accuracy on digit recognition and significant improvements across all character recognition tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/air_writing_recognition.html";
            },},{id: "projects-abnormal-gait-analysis-using-video-based-signal-processing",
          title: 'Abnormal Gait Analysis using Video-based Signal Processing',
          description: "This project focuses on the development of an advanced gait event and abnormality detection system using pose estimation techniques. The system incorporates a signal-based approach to improve the accuracy of gait event detection, outperforming traditional angle-based methods, resulted in a patented solution. The project involved analyzing a diverse range of abnormal gait patterns, including Antalgic, Ataxic, Hemiplegic, Parkinsonian, and Trendelenburg gaits, using an in-house database of human participants. Collaborating closely with MyMedicalHUB&#39;s (MMH) clinical team of physicians and physical therapists, the project ensured clinical relevance and accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gait_analysis.html";
            },},{id: "projects-automated-range-of-motion-rom-measurement-using-human-pose-estimation",
          title: 'Automated Range of Motion (ROM) Measurement using Human Pose Estimation',
          description: "We developed an automated Range of Motion (ROM) measurement web/mobile application for patient and healthcare providers with real-time monitoring and scalable deployment. The platform integrates over 200 active and passive ROM exercises, utilizing full-body pose estimation models to accurately analyze patient videos. Moreover, to boost model precision, we fine-tuned exercise-specific pose estimation models using custom in-house datasets. For scalability, we designed a distributed system with a master-slave architecture to efficiently manage high-volume API requests. We also leveraged Amazon EC2 and S3 to ensure a robust, cloud-based infrastructure, supporting seamless ROM assessments in both telehealth and clinical environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rom_measurement.html";
            },},{id: "projects-self-supervised-learning-for-sar-target-recognition-with-multi-task-pretext-training",
          title: 'Self-Supervised Learning for SAR Target Recognition with Multi-Task Pretext Training',
          description: "We developed a self-supervised learning framework for Synthetic Aperture Radar (SAR) Automatic Target Recognition that eliminates dependency on synthetic data while achieving superior performance. Our framework utilizes multi-task pretext training with nine complementary transformation tasks to develop robust feature representations from measured SAR data. The experimental findings demonstrate competitive performance with 89.78% accuracy using SVM classifier and robust detection capabilities even with limited training data, outperforming traditional methods that rely on synthetic data augmentation. This work establishes a foundation for leveraging self-supervised learning in domain-specific applications with limited labeled data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sar_target_recognition.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
