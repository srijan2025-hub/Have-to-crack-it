/* CATEGORY → NEON COLOR (YOU CONTROL THIS) */
const CATEGORY_COLORS = {
  hcv: "#ffd700",   // Yellow
  dcp: "#ff004f",   // Red ❤️
  notes: "#7cff00",
  pyq: "#00e5ff",
  default: "#00ffff"
};

const books = [
  {
    name: "Concepts of Physics – Vol 1",
    size: "18.2 MB",
    category: "hcv",
    pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1.pdf",
    gdrive: "#",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1.pdf"
  },
  {
    name: "Concepts of Physics – Vol 2",
    size: "21.4 MB",
    category: "hcv",
    pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol2.pdf",
    gdrive: "#",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf"
  },
  {
    name: "DC Pandey – Mechanics 1",
    size: "14.1 MB",
    category: "dcp",
    pdf: "#",
    gdrive: "#",
    drive: "#",
    download: "#"
  }
];

const grid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");

function renderBooks(filter = "") {
  grid.innerHTML = "";

  books
    .filter(b => b.name.toLowerCase().includes(filter))
    .forEach(book => {

      const neon = CATEGORY_COLORS[book.category] || CATEGORY_COLORS.default;
      const viewer =
        book.pdf !== "#"
          ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(book.pdf)}`
          : "#";

      const card = document.createElement("div");
      card.className = "book";
      card.style.setProperty("--neon", neon);

      card.innerHTML = `
        <div class="book-content">
          <h3>${book.name}</h3>
          <div class="size">📦 ${book.size}</div>

          <div class="actions">
            <a href="${viewer}" target="_blank" class="${book.pdf === "#" ? "disabled" : ""}">View</a>
            <a href="${book.gdrive}" target="_blank" class="${book.gdrive === "#" ? "disabled" : ""}">GDrive</a>
            <a href="${book.drive}" target="_blank" class="${book.drive === "#" ? "disabled" : ""}">Drive</a>
            <a href="${book.download}" download class="${book.download === "#" ? "disabled" : ""}">Download</a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });
}

renderBooks();

/* SEARCH */
searchInput.addEventListener("input", e => {
  renderBooks(e.target.value.toLowerCase());
});

/* DARK / LIGHT TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
};
