const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "Ahmed Sherif",
    heroSubtitle: "Data Scientist",
    heroText: "Transforming data into meaningful insights",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutTitle: "About Me",
    aboutText1: "I'm Ahmed Sherif, a passionate Data Scientist dedicated to uncovering insights from complex datasets. I combine analytical skills with technical expertise to solve real-world problems through data-driven approaches.",
    aboutText2: "With expertise in statistical analysis, machine learning, and data visualization, I help organizations make informed decisions based on data insights.",
    getInTouch: "Get in Touch",
    downloadCV: "Download CV",
    programming: "Programming",
    dataAnalysis: "Data Analysis Libraries",
    dataScienceConcepts: "Data Science Concepts",
    dataVisualization: "Data Visualization",
    statisticalAnalysis: "Statistical Analysis",
    dataCleaning: "Data Cleaning",
    customerSegmentation: "Customer Segmentation Analysis",
    customerSegmentationDesc: "Used K-means clustering to identify customer segments for a retail company, increasing targeted marketing efficiency by 35%.",
    salesForecasting: "Predictive Sales Forecasting",
    salesForecastingDesc: "Developed time-series models to predict quarterly sales figures with 92% accuracy, helping optimize inventory management.",
    sentimentAnalysis: "Sentiment Analysis Tool",
    sentimentAnalysisDesc: "Built an NLP-based sentiment analysis tool for social media data that helped a client improve product perception by identifying key pain points.",
    viewProject: "View Project",
    contactDesc: "I'm always interested in new opportunities and collaborations. Feel free to reach out!",
    yourName: "Your Name",
    yourEmail: "Your Email",
    message: "Message",
    sendMessage: "Send Message"
  },
  ar: {
    home: "الرئيسية",
    about: "عني",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "اتصل بي",
    heroTitle: "أحمد شريف",
    heroSubtitle: "عالم بيانات",
    heroText: "تحويل البيانات إلى رؤى ذات معنى",
    viewProjects: "عرض المشاريع",
    contactMe: "اتصل بي",
    aboutTitle: "نبذة عني",
    aboutText1: "أنا أحمد شريف، عالم بيانات شغوف مكرس لاكتشاف الرؤى من مجموعات البيانات المعقدة. أجمع بين المهارات التحليلية والخبرة التقنية لحل المشكلات الواقعية من خلال النهج القائم على البيانات.",
    aboutText2: "مع الخبرة في التحليل الإحصائي والتعلم الآلي وتصور البيانات، أساعد المؤسسات على اتخاذ قرارات مستنيرة بناءً على رؤى البيانات.",
    getInTouch: "تواصل معي",
    downloadCV: "تحميل السيرة الذاتية",
    programming: "البرمجة",
    dataAnalysis: "مكتبات تحليل البيانات",
    dataScienceConcepts: "مفاهيم علوم البيانات",
    dataVisualization: "تصور البيانات",
    statisticalAnalysis: "التحليل الإحصائي",
    dataCleaning: "تنظيف البيانات",
    customerSegmentation: "تحليل تقسيم العملاء",
    customerSegmentationDesc: "استخدام خوارزمية K-means للتجميع لتحديد شرائح العملاء لشركة تجزئة، مما أدى إلى زيادة كفاءة التسويق المستهدف بنسبة 35%.",
    salesForecasting: "التنبؤ التنبؤي بالمبيعات",
    salesForecastingDesc: "تطوير نماذج السلاسل الزمنية للتنبؤ بأرقام المبيعات الفصلية بدقة 92%، مما يساعد في تحسين إدارة المخزون.",
    sentimentAnalysis: "أداة تحليل المشاعر",
    sentimentAnalysisDesc: "بناء أداة تحليل مشاعر قائمة على معالجة اللغة الطبيعية لبيانات وسائل التواصل الاجتماعي ساعدت العميل في تحسين تصور المنتج من خلال تحديد نقاط الألم الرئيسية.",
    viewProject: "عرض المشروع",
    contactDesc: "أنا مهتم دائمًا بالفرص والتعاون الجديد. لا تتردد في التواصل!",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  if (window.emailjs) {
    emailjs.init("bw1nonZwyPC_je7oz");
    console.log("EmailJS initialized successfully");
  } else {
    console.error("EmailJS failed to load");
  }

  // Check if CV download button works
  const cvButton = document.querySelector(".about-cta .btn.secondary");
  if (cvButton) {
    cvButton.addEventListener("click", function (e) {
      console.log("CV download requested");
    });
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Update template parameters to match your EmailJS template
      const templateParams = {
        to_name: "Ahmed Sherif",
        from_name: `${name} (${email})`, // Combine name and email
        from_email: email,
        message: `Email: ${email}\nName: ${name}\n\nMessage:\n${message}`, // Format the message with email and name
        reply_to: email,
        contact_number: (Math.random() * 100000) | 0,
      };

      // Show sending state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Send email using EmailJS with your correct service and template IDs
      emailjs
        .send("service_contact", "template_q9wp6ei", templateParams)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);

          // Remove any existing status messages
          const existingStatus = contactForm.querySelector(".form-status");
          if (existingStatus) {
            existingStatus.remove();
          }

          // Create and insert success message before the submit button
          const successMsg = document.createElement("div");
          successMsg.classList.add("form-status", "success");
          successMsg.innerHTML = `
            email: ${email}<br>
            name: ${name}<br>
            Message sent successfully!
          `;

          // Insert before the submit button with spacing
          submitButton.parentNode.insertBefore(successMsg, submitButton);

          // Reset form
          contactForm.reset();
        })
        .catch(function (error) {
          console.log("FAILED...", error);

          // Show error message
          const errorMsg = document.createElement("div");
          errorMsg.classList.add("form-status", "error");
          errorMsg.textContent = "Failed to send message. Please try again.";
          contactForm.appendChild(errorMsg);
        })
        .finally(function () {
          // Reset button state
          submitButton.textContent = originalButtonText;
          submitButton.disabled = false;
        });
    });
  }

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuToggle.classList.toggle("active"); // Toggle active class for X icon
    });

    // Close menu when clicking a link
    document.querySelectorAll("nav ul li a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (navMenu && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
      }

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Add data visualization animation effects
  const bars = document.querySelectorAll(".chart-container .bar");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "none";
        void entry.target.offsetWidth; // Trigger reflow
        entry.target.style.animation = `barGrow ${
          2 + Math.random()
        }s ease forwards ${Math.random() * 0.5}s`;
      }
    });
  }, observerOptions);

  bars.forEach((bar) => {
    barObserver.observe(bar);
  });

  // Projects Slider Functionality
  const sliderWrapper = document.querySelector('.slider-wrapper');
  if (sliderWrapper) {
    const projectsContainer = sliderWrapper.querySelector('.projects-container');
    const projectCards = sliderWrapper.querySelectorAll('.project-card');
    const leftArrow = sliderWrapper.querySelector('.slider-arrow-left');
    const rightArrow = sliderWrapper.querySelector('.slider-arrow-right');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const totalSlides = projectCards.length;

    function updateSlider() {
      const translateX = -currentIndex * 100;
      projectsContainer.style.transform = `translateX(${translateX}%)`;
      
      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    // Event listeners for arrows
    if (leftArrow) {
      leftArrow.addEventListener('click', prevSlide);
    }
    
    if (rightArrow) {
      rightArrow.addEventListener('click', nextSlide);
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });

    // Auto-slide functionality
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    sliderWrapper.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    sliderWrapper.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    sliderWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    sliderWrapper.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          nextSlide(); // Swipe left
        } else {
          prevSlide(); // Swipe right
        }
      }
    });

    // Initialize slider
    updateSlider();
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Language switching functionality
  let currentLang = 'en';
  const langToggle = document.getElementById('langToggle');
  
  function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update navigation items
    document.querySelectorAll('nav ul li a').forEach(link => {
      const key = link.getAttribute('href').replace('#', '');
      if (translations[lang][key]) {
        link.textContent = translations[lang][key];
      }
    });
    
    // Update hero section
    document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-content h2').textContent = translations[lang].heroSubtitle;
    document.querySelector('.hero-content p').textContent = translations[lang].heroText;
    document.querySelector('.hero-buttons .btn.primary').textContent = translations[lang].viewProjects;
    document.querySelector('.hero-buttons .btn.secondary').textContent = translations[lang].contactMe;
    
    // Update about section
    document.querySelector('#about .section-title').textContent = translations[lang].aboutTitle;
    const aboutParagraphs = document.querySelectorAll('#about .about-text p');
    aboutParagraphs[0].textContent = translations[lang].aboutText1;
    aboutParagraphs[1].textContent = translations[lang].aboutText2;

    // Update about section buttons
    const aboutButtons = document.querySelectorAll('.about-cta .btn');
    aboutButtons.forEach(btn => {
        if (btn.classList.contains('primary')) {
            btn.textContent = translations[lang].getInTouch;
        } else if (btn.classList.contains('secondary')) {
            // Preserve the download icon while updating the text
            btn.innerHTML = `${translations[lang].downloadCV} <i class="fas fa-download"></i>`;
        }
    });
    
    // Update skills section
    document.querySelector('#skills .section-title').textContent = translations[lang].skills;
    document.querySelectorAll('.skill-category h3').forEach((h3, index) => {
      if (index === 0) h3.textContent = translations[lang].programming;
      if (index === 1) h3.textContent = translations[lang].dataAnalysis;
      if (index === 2) h3.textContent = translations[lang].dataScienceConcepts;
    });
    
    // Update skill names
    const skillNames = document.querySelectorAll('.skill-item span');
    skillNames.forEach(span => {
      if (span.textContent === "Data Visualization") span.textContent = translations[lang].dataVisualization;
      if (span.textContent === "Statistical Analysis") span.textContent = translations[lang].statisticalAnalysis;
      if (span.textContent === "Data Cleaning") span.textContent = translations[lang].dataCleaning;
    });
    
    // Update projects section
    document.querySelector('#projects .section-title').textContent = translations[lang].projects;
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      const btn = card.querySelector('.btn');
      
      if (index === 0) {
        title.textContent = translations[lang].customerSegmentation;
        desc.textContent = translations[lang].customerSegmentationDesc;
      } else if (index === 1) {
        title.textContent = translations[lang].salesForecasting;
        desc.textContent = translations[lang].salesForecastingDesc;
      } else if (index === 2) {
        title.textContent = translations[lang].sentimentAnalysis;
        desc.textContent = translations[lang].sentimentAnalysisDesc;
      }
      
      btn.textContent = translations[lang].viewProject;
    });
    
    // Update contact section
    document.querySelector('#contact .section-title').textContent = translations[lang].contact;
    document.querySelector('.contact-info p').textContent = translations[lang].contactDesc;
    document.querySelector('label[for="name"]').textContent = translations[lang].yourName;
    document.querySelector('label[for="email"]').textContent = translations[lang].yourEmail;
    document.querySelector('label[for="message"]').textContent = translations[lang].message;
    document.querySelector('#contactForm button').textContent = translations[lang].sendMessage;
    
    // Update language toggle button
    langToggle.innerHTML = `<i class="fas fa-globe"></i> ${lang === 'en' ? 'عربي' : 'English'}`;
  }
  
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(currentLang);
  });

});
