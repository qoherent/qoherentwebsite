(() => {
  "use strict";

  const navToggle = document.querySelector("#nav-toggle");
  const navMenu = document.querySelector("#nav-menu");
  const toggleLabel = navToggle?.querySelector(".sr-only");

  const setNavigationOpen = (open) => {
    navMenu?.classList.toggle("is-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
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
})();
