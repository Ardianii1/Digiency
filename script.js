document.addEventListener("DOMContentLoaded", function () {
   const wrapper = document.querySelector(".slider-wrapper");
   const prevButton = document.querySelector(".prev-button");
   const nextButton = document.querySelector(".next-button");
   const itemWidth = document.querySelector(".slider-item").offsetWidth;

   let currentIndex = 0;

   function updateSlider() {
      const translateValue = -currentIndex * itemWidth;
      wrapper.style.transform = `translateX(${translateValue}px)`;
   }

   function prevSlide() {
      if (currentIndex > 0) {
         currentIndex--;
         updateSlider();
      }
   }

   function nextSlide() {
      const totalItems = document.querySelectorAll(".slider-item").length;
      if (currentIndex < totalItems - 3) {
         currentIndex++;
         updateSlider();
      }
   }

   prevButton.addEventListener("click", prevSlide);
   nextButton.addEventListener("click", nextSlide);
});
