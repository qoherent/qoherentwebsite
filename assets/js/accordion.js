(() => {
  "use strict";

  document.querySelectorAll("[data-accordion]").forEach((header) => {
    header.addEventListener("click", () => {
      const open = !header.parentElement.classList.contains("active");
      header.parentElement.classList.toggle("active", open);
      header.setAttribute("aria-expanded", String(open));
    });
  });
})();
