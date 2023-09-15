const swiper = new Swiper(".slider-main-block", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".body-main-block__arrow.swiper-button-next",
    prevEl: ".body-main-block__arrow.swiper-button-prev",
  },
});

// Таби

// 1-й етап це делагування, відслідковування натиску/кліку на об'єкт
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  // відсіюємо
  if (targetElement.closest(".tabs-deals__button")) {
    console.log("Yes!");
  }
});
