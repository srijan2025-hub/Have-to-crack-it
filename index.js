const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("dark") ? "ðŸŒ™" : "â˜€ï¸";
});

/* Ripple Effect */
document.querySelectorAll(".subject-card").forEach(card => {
  card.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = "150px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.4)";
    ripple.style.left = `${e.offsetX - 75}px`;
    ripple.style.top = `${e.offsetY - 75}px`;
    ripple.style.animation = "ripple 0.6s linear";
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

const style = document.createElement("style");
style.textContent = `
@keyframes ripple {
  from { transform: scale(0); opacity: 1; }
  to { transform: scale(2); opacity: 0; }
}`;
document.head.appendChild(style);
