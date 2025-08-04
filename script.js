document.addEventListener("DOMContentLoaded", function () {
  // Language Toggle functionality
  const languageToggle = document.getElementById("languageToggle");
  const languageDropdown = document.getElementById("languageDropdown");
  const currentLanguageSpan = document.getElementById("currentLanguage");
  let currentLanguage = "en"; // Default language is English

  function updateLanguage(lang) {
    const elements = document.querySelectorAll("[data-en][data-zh]");
    elements.forEach((element) => {
      if (lang === "zh") {
        element.textContent = element.getAttribute("data-zh");
      } else {
        element.textContent = element.getAttribute("data-en");
      }
    });

    // Update current language display
    if (lang === "zh") {
      currentLanguageSpan.textContent = "中文";
    } else {
      currentLanguageSpan.textContent = "EN";
    }

    // Update document language attribute
    document.documentElement.lang = lang;

    // Update page title
    const titleElement = document.querySelector("title");
    if (titleElement) {
      if (lang === "zh") {
        titleElement.textContent = titleElement.getAttribute("data-zh");
      } else {
        titleElement.textContent = titleElement.getAttribute("data-en");
      }
    }
  }

  // Toggle dropdown menu
  function toggleDropdown() {
    const isOpen = languageDropdown.classList.contains("show");
    if (isOpen) {
      languageDropdown.classList.remove("show");
      languageToggle.classList.remove("active");
    } else {
      languageDropdown.classList.add("show");
      languageToggle.classList.add("active");
    }
  }

  // Language toggle button click event
  languageToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  // Dropdown item click events
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      const selectedLang = this.getAttribute("data-lang");
      if (selectedLang !== currentLanguage) {
        currentLanguage = selectedLang;
        updateLanguage(currentLanguage);
      }
      toggleDropdown();
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !languageToggle.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("show");
      languageToggle.classList.remove("active");
    }
  });

  // Show More/Less functionality
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const hiddenProjects = document.querySelectorAll(".project-hidden");

  // Show More functionality
  showMoreBtn.addEventListener("click", function () {
    hiddenProjects.forEach((project) => {
      project.style.display = "flex";
    });
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline-block";
  });

  // Show Less functionality
  showLessBtn.addEventListener("click", function () {
    hiddenProjects.forEach((project) => {
      project.style.display = "none";
    });
    showLessBtn.style.display = "none";
    showMoreBtn.style.display = "inline-block";

    // Smooth scroll to Other Projects section
    document.querySelector(".other-projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  // Image Carousel functionality for Relationship project
  const relationshipImages = document.querySelectorAll(
    "#relationshipCarousel .carousel-image"
  );
  const relationshipIndicators = document.querySelectorAll(
    "#relationshipCarousel .indicator"
  );
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let relationshipCurrentSlide = 0;

  function showRelationshipSlide(index) {
    // Hide all images
    relationshipImages.forEach((img) => img.classList.remove("active"));
    relationshipIndicators.forEach((indicator) =>
      indicator.classList.remove("active")
    );

    // Show current image
    relationshipImages[index].classList.add("active");
    relationshipIndicators[index].classList.add("active");
  }

  function nextRelationshipSlide() {
    relationshipCurrentSlide =
      (relationshipCurrentSlide + 1) % relationshipImages.length;
    showRelationshipSlide(relationshipCurrentSlide);
  }

  function prevRelationshipSlide() {
    relationshipCurrentSlide =
      (relationshipCurrentSlide - 1 + relationshipImages.length) %
      relationshipImages.length;
    showRelationshipSlide(relationshipCurrentSlide);
  }

  // Event listeners for Relationship carousel buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", nextRelationshipSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevRelationshipSlide);
  }

  // Event listeners for Relationship indicators
  relationshipIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      relationshipCurrentSlide = index;
      showRelationshipSlide(relationshipCurrentSlide);
    });
  });

  // Image Carousel functionality for Automatic Scoring System project
  const autoImages = document.querySelectorAll("#autoCarousel .carousel-image");
  const autoIndicators = document.querySelectorAll("#autoCarousel .indicator");
  const prevBtnAuto = document.getElementById("prevBtnAuto");
  const nextBtnAuto = document.getElementById("nextBtnAuto");
  let autoCurrentSlide = 0;

  function showAutoSlide(index) {
    // Hide all images
    autoImages.forEach((img) => img.classList.remove("active"));
    autoIndicators.forEach((indicator) => indicator.classList.remove("active"));

    // Show current image
    autoImages[index].classList.add("active");
    autoIndicators[index].classList.add("active");
  }

  function nextAutoSlide() {
    autoCurrentSlide = (autoCurrentSlide + 1) % autoImages.length;
    showAutoSlide(autoCurrentSlide);
  }

  function prevAutoSlide() {
    autoCurrentSlide =
      (autoCurrentSlide - 1 + autoImages.length) % autoImages.length;
    showAutoSlide(autoCurrentSlide);
  }

  // Event listeners for Auto carousel buttons
  if (nextBtnAuto) {
    nextBtnAuto.addEventListener("click", nextAutoSlide);
  }

  if (prevBtnAuto) {
    prevBtnAuto.addEventListener("click", prevAutoSlide);
  }

  // Event listeners for Auto indicators
  autoIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      autoCurrentSlide = index;
      showAutoSlide(autoCurrentSlide);
    });
  });
});
