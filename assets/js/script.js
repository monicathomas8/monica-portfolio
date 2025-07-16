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

// ===== FADE-IN EFFECT ON SCROLL =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // Trigger when 20% of the element is visible
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// === IMAGE FADE-IN + GROW ===
const growImages = document.querySelectorAll('.fade-in-grow');

const growObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

growImages.forEach(img => {
  growObserver.observe(img);
});
