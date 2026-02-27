(function () {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (btn && nav) {
    btn.addEventListener("click", () => nav.classList.toggle("collapsed"));
  }

  // Highlight active nav link by path
  const path = window.location.pathname.replace(/\/+$/, "");
  const links = document.querySelectorAll(".nav a[data-path]");

  links.forEach(a => {
    const target = a.getAttribute("data-path").replace(/\/+$/, "");
    if (target === path || (target === "" && path === "")) {
      a.classList.add("active");
    }
  });

  // Close mobile nav after clicking
  document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 760px)").matches) {
        nav?.classList.add("collapsed");
      }
    });
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();