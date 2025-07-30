document.addEventListener("DOMContentLoaded", function () {
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
