// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  var testimonialSlider = new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: false,
    autoplay: {
      delay: 2500, // set the delay in milliseconds between slides
      disableOnInteraction: false, // continue autoplay even when user interacts with the slider
    },
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 5,
      },
    },
  });
})();
