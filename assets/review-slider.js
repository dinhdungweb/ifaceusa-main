document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".review-track");
  const slides = document.querySelectorAll(".review-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let index = 0;
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;

  function updateSlider() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (index < totalSlides - 1) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener("resize", function () {
    updateSlider();
  });
});
