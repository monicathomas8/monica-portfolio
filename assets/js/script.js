document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const careToggleBtn = document.getElementById("careToggleBtn");
  const collapseCare = document.getElementById("mounthlyCareCollapse");

  const addonToggleBtn = document.getElementById("addonToggleBtn");
  const collapseAddon = document.getElementById("addonsCollapse");

  // Care plans toggle
  if (careToggleBtn && collapseCare) {
    collapseCare.addEventListener("shown.bs.collapse", () => {
      careToggleBtn.textContent = "Hide Monthly Website Care Plans";
    });

    collapseCare.addEventListener("hidden.bs.collapse", () => {
      careToggleBtn.textContent = "View Monthly Website Care Plans";
    });
  }

  // Add-ons toggle
  if (addonToggleBtn && collapseAddon) {
    collapseAddon.addEventListener("shown.bs.collapse", () => {
      addonToggleBtn.textContent = "Hide Add-Ons";
    });

    collapseAddon.addEventListener("hidden.bs.collapse", () => {
      addonToggleBtn.textContent = "View Add-Ons";
    });
  }
});

