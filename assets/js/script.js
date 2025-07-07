// Wait for the full DOM to load before attaching any event listeners
document.addEventListener("DOMContentLoaded", function () {
  // ===== BACK TO TOP BUTTON =====
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show/hide the "Back to Top" button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block"; // Show button when scrolled down more than 300px
    } else {
      backToTopBtn.style.display = "none"; // Hide button when scrolled up
    }
  });

  // ===== TOGGLE BUTTON TEXT (Care Plans & Add-Ons) =====
  const careToggleBtn = document.getElementById("careToggleBtn");
  const collapseCare = document.getElementById("mounthlyCareCollapse");

  const addonToggleBtn = document.getElementById("addonToggleBtn");
  const collapseAddon = document.getElementById("addonsCollapse");

  // Care plans toggle
  if (careToggleBtn && collapseCare) {
    // When care plans section is expanded
    collapseCare.addEventListener("shown.bs.collapse", () => {
      careToggleBtn.textContent = "Hide Monthly Website Care Plans";
    });

    // When care plans section is collapsed
    collapseCare.addEventListener("hidden.bs.collapse", () => {
      careToggleBtn.textContent = "View Monthly Website Care Plans";
    });
  }

  // Add-ons toggle
  if (addonToggleBtn && collapseAddon) {
    // When add-ons section is expanded
    collapseAddon.addEventListener("shown.bs.collapse", () => {
      addonToggleBtn.textContent = "Hide Add-Ons";
    });

    // When add-ons section is collapsed
    collapseAddon.addEventListener("hidden.bs.collapse", () => {
      addonToggleBtn.textContent = "View Add-Ons";
    });
  }

  // ===== FLIP CARD FUNCTIONALITY (Tap-to-Flip on Mobile) =====
   const flipCards = document.querySelectorAll(".flip-card");

  let index = 0;

  setInterval(() => {
    // Flip the current card
    const currentCard = flipCards[index];
    const inner = currentCard.querySelector(".flip-inner");
    inner.classList.add("flipped");

    // Flip back after 2.5 seconds
    setTimeout(() => {
      inner.classList.remove("flipped");
    }, 2500);

    // Move to next card (loop back if at end)
    index = (index + 1) % flipCards.length;
  }, 4000); // Every 4 seconds, flip a new one
});
