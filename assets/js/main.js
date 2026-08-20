(() => {
  "use strict";

  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector("#nav-menu");
  const openIcon = navToggle?.querySelector("[data-menu-open]");
  const closeIcon = navToggle?.querySelector("[data-menu-close]");
  const toggleLabel = navToggle?.querySelector(".sr-only");

  const setNavigationOpen = (open) => {
    navMenu?.classList.toggle("hidden", !open);
    navToggle?.setAttribute("aria-expanded", String(open));
    openIcon?.classList.toggle("hidden", open);
    closeIcon?.classList.toggle("hidden", !open);
    if (toggleLabel)
      toggleLabel.textContent = open ? "Close navigation" : "Open navigation";
  };

  navToggle?.addEventListener("click", () => {
    setNavigationOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  const dropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

  const closeDropdowns = () => {
    dropdownToggles.forEach((toggle) => {
      toggle.closest(".nav-dropdown")?.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  };

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const dropdown = toggle.closest(".nav-dropdown");
      const willOpen = !dropdown?.classList.contains("active");
      closeDropdowns();
      dropdown?.classList.toggle("active", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    setNavigationOpen(false);
    navToggle?.focus();
  });

  const testimonialSlider = document.querySelector(".testimonial-slider");
  if (testimonialSlider && typeof Swiper !== "undefined") {
    new Swiper(testimonialSlider, {
      spaceBetween: 24,
      loop: false,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1100: { slidesPerView: 5 },
      },
    });
  }
})();
