/* CATEGORY → NEON COLORS */
const CATEGORY_COLORS = {
  c1: "#ffd700",
  c2: "#ff004f",
  c3: "#7cff00",
  c4: "#00e5ff",
  default: "#00ffff"
};

/* BOOK DATA */
const books = [
  {
    name: "Concepts Of Physics – Vol 1",
    authors: ["H.C. Verma"],
    size: "18.2 MB",
    category: "c1",
    pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1.pdf",
    gdrive: "#",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1.pdf"
  },
  {
    name: "Concepts Of Physics – Vol 2",
    authors: ["H.C. Verma"],
    size: "21.4 MB",
    category: "c1",
    pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol2.pdf",
    gdrive: "#",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf"
  }
];

/* PREPROCESS */
const processedBooks = books.map(b => ({
  ...b,
  nameLC: b.name.toLowerCase(),
  authorsLC: b.authors.map(a => a.toLowerCase())
}));

/* DOM */
const grid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const toggle = document.getElementById("themeToggle");
const authorBtn = document.getElementById("authorBtn");
const authorPanel = document.getElementById("authorPanel");
const closeAuthor = document.getElementById("closeAuthor");
const authorList = document.getElementById("authorList");

/* STATE */
let searchTerm = "";
let selectedAuthors = new Set();

/* BUILD AUTHOR LIST */
const authors = [...new Set(books.flatMap(b => b.authors))];
authorList.innerHTML = authors.map(a => `
  <label>
    <input type="checkbox" value="${a.toLowerCase()}">
    ${a}
  </label>
`).join("");

/* EVENTS */
authorBtn.onclick = () => authorPanel.classList.add("open");
closeAuthor.onclick = () => authorPanel.classList.remove("open");

authorList.addEventListener("change", e => {
  const a = e.target.value;
  e.target.checked ? selectedAuthors.add(a) : selectedAuthors.delete(a);
  renderBooks();
});

/* RENDER */
function renderBooks() {
  const fragment = document.createDocumentFragment();

  for (const book of processedBooks) {
    if (searchTerm && !book.nameLC.includes(searchTerm)) continue;

    if (
      selectedAuthors.size &&
      !book.authorsLC.some(a => selectedAuthors.has(a))
    ) continue;

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

    fragment.appendChild(card);
  }

  grid.innerHTML = "";
  grid.appendChild(fragment);
}

/* SEARCH (DEBOUNCED) */
let timer;
searchInput.addEventListener("input", e => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchTerm = e.target.value.trim().toLowerCase();
    renderBooks();
  }, 150);
});

/* THEME TOGGLE */
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
};

/* INIT */
renderBooks();
