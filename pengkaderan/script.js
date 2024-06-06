// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// burger
const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  navMenu.classList.toggle("hidden");
});




// media
const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 120}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();
