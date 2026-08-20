(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  const setAccordionOpen = (item, header, open) => {
    const content = item.querySelector(".accordion-content");
    if (!content) return;

    item.classList.toggle("active", open);
    header.setAttribute("aria-expanded", String(open));

    if (prefersReducedMotion.matches) {
      content.style.height = open ? "auto" : "0px";
      return;
    }

    if (open) {
      content.style.height = `${content.scrollHeight}px`;
      return;
    }

    if (content.style.height === "auto" || content.style.height === "") {
      content.style.height = `${content.scrollHeight}px`;
    }
    content.offsetHeight;
    content.style.height = "0px";
  };

  document.querySelectorAll("[data-accordion]").forEach((header) => {
    const item = header.closest(".accordion");
    const content = item?.querySelector(".accordion-content");

    content?.addEventListener("transitionend", (event) => {
      if (event.propertyName !== "height") return;
      if (item.classList.contains("active")) content.style.height = "auto";
    });

    header.addEventListener("click", () => {
      if (!item) return;
      setAccordionOpen(item, header, !item.classList.contains("active"));
    });
  });
})();
