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

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});
