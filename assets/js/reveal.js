(function () {
  var root = document.documentElement;
  var targets = [];
  var groupedSelectors = [
    ".link-grid",
    ".feature-grid",
    ".resource-list",
    ".partner-logo-grid",
    ".visualization-strip",
    ".process-flow",
    ".stat-grid"
  ];
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("has-reveal");

  function addTarget(element, delay) {
    if (!element || element.classList.contains("reveal-target")) {
      return;
    }

    element.classList.add("reveal-target");
    if (delay) {
      element.style.setProperty("--reveal-delay", delay + "ms");
    }
    targets.push(element);
  }

  function reveal(element) {
    var delay = parseInt(element.style.getPropertyValue("--reveal-delay"), 10) || 0;

    element.classList.add("is-visible");
    window.setTimeout(function () {
      element.style.removeProperty("--reveal-delay");
    }, delay + 700);
  }

  document.querySelectorAll(".page-section, .figure-panel").forEach(function (element) {
    addTarget(element, 0);
  });

  groupedSelectors.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (element, index) {
        addTarget(element, Math.min(index, 5) * 55);
      });
    });
  });

  document.querySelectorAll(".visualization-panel").forEach(function (panel) {
    var strip = panel.querySelector(".visualization-strip");
    var previous = panel.querySelector("[data-visualization-prev]");
    var next = panel.querySelector("[data-visualization-next]");

    if (!strip || !previous || !next) {
      return;
    }

    function getStep() {
      var firstCard = strip.querySelector(".visualization-card");
      var gap = parseFloat(window.getComputedStyle(strip).columnGap) || 0;

      return firstCard ? firstCard.getBoundingClientRect().width + gap : strip.clientWidth;
    }

    function updateControls() {
      var maxScroll = strip.scrollWidth - strip.clientWidth - 2;

      previous.disabled = strip.scrollLeft <= 2;
      next.disabled = strip.scrollLeft >= maxScroll;
    }

    function move(direction) {
      strip.scrollBy({
        left: direction * getStep(),
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }

    previous.addEventListener("click", function () {
      move(-1);
    });

    next.addEventListener("click", function () {
      move(1);
    });

    strip.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    updateControls();
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (element) {
      reveal(element);
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  targets.forEach(function (element) {
    observer.observe(element);
  });
})();
