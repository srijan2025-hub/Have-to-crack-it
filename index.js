const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

/* Ripple effect for taps */
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.background = "rgba(255,255,255,0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.width = ripple.style.height = "120px";
    ripple.style.left = `${e.offsetX - 60}px`;
    ripple.style.top = `${e.offsetY - 60}px`;
    ripple.style.animation = "ripple 0.6s linear";
    item.appendChild(ripple);

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
