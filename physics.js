/* CATEGORY COLORS */
const CATEGORY_COLORS = {
  c1: "#ffd700",
  c2: "#ff004f",
  c3: "#7cff00",
  c4: "#00e5ff",
  c5: "#00e7ff",
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
  size: "18.2 MB",
  category: "c1",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol2.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf"
},
{
  name: "Concepts Of Physics – Solutions (Vol 1 & 2)",
  authors: ["H.C. Verma"],
  size: "18.2 MB",
  category: "c1",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1and2solutions.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1and2solutions.pdf"
},
{
  name: "DC Pandey – Mechanics Vol 1",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyMechanics1.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyMechanics1.pdf"
},
{
  name: "DC Pandey – Mechanics Vol 2",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyMechanics2.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyMechanics2.pdf"
},
{
  name: "DC Pandey – Waves & Thermodynamics",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c3",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeywavesandthermodynamics.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeywavesandthermodynamics.pdf"
},
{
  name: "DC Pandey – Electricity & Magnetism",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyelectricityandmagnetism.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyelectricityandmagnetism.pdf"
},
{
  name: "DC Pandey – Optics & Modern Physics",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyopticsandmodernphysics.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyopticsandmodernphysics.pdf"
},
{
  name: "Career Will – Geometrical Optics Sheet",
  authors: ["Career Will"],
  size: "—",
  category: "c5",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet1geometricaloptics.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet1geometricaloptics.pdf"
},
{
  name: "Career Will – Wave Optics Sheet 1",
  authors: ["Career Will"],
  size: "—",
  category: "c6",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet1waveoptics.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet1waveoptics.pdf"
},
{
  name: "Career Will – Wave Optics Sheet 2",
  authors: ["Career Will"],
  size: "—",
  category: "c3",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet2waveoptics.pdf",
  gdrive: "#",
  drive: "#",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet2waveoptics.pdf"
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
const authorBtn = document.getElementById("authorBtn");
const authorPanel = document.getElementById("authorPanel");
const closeAuthor = document.getElementById("closeAuthor");
const authorList = document.getElementById("authorList");
const toggle = document.getElementById("themeToggle");

/* STATE */
let searchTerm = "";
let selectedAuthors = new Set();

/* AUTHORS FILTER */
if (authorList) {
  const authors = [...new Set(books.flatMap(b => b.authors))];
  authorList.innerHTML = authors.map(a => `
    <label>
      <input type="checkbox" value="${a.toLowerCase()}"> ${a}
    </label>
  `).join("");

  authorList.addEventListener("change", e => {
    const a = e.target.value;
    e.target.checked ? selectedAuthors.add(a) : selectedAuthors.delete(a);
    renderBooks();
  });
}

/* AUTHOR PANEL */
authorBtn && (authorBtn.onclick = () => authorPanel.classList.add("open"));
closeAuthor && (closeAuthor.onclick = () => authorPanel.classList.remove("open"));

/* THEME TOGGLE */
toggle && (toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

/* SEARCH */
let timer;
searchInput && searchInput.addEventListener("input", e => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchTerm = e.target.value.toLowerCase();
    renderBooks();
  }, 150);
});

/* RENDER */
function renderBooks() {
  if (!grid) return;

  grid.innerHTML = "";
  const frag = document.createDocumentFragment();

  for (const book of processedBooks) {
    if (searchTerm && !book.nameLC.includes(searchTerm)) continue;
    if (selectedAuthors.size && !book.authorsLC.some(a => selectedAuthors.has(a))) continue;

    const card = document.createElement("div");
    card.className = "book";
    card.style.setProperty("--neon", CATEGORY_COLORS[book.category] || CATEGORY_COLORS.default);

    const viewer =
      `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(book.pdf)}`;

    card.innerHTML = `
      <div class="book-content">
        <h3>${book.name}</h3>
        <div class="size">📦 ${book.size}</div>
        <div class="actions">
          <a href="${viewer}" target="_blank">View</a>
          <a href="${book.gdrive}" class="${book.gdrive === "#" ? "disabled" : ""}">GDrive</a>
          <a href="${book.drive}" class="${book.drive === "#" ? "disabled" : ""}">Drive</a>
          <a href="${book.download}" download>Download</a>
        </div>
      </div>
    `;

    frag.appendChild(card);
  }

  grid.appendChild(frag);
}

/* INIT */
renderBooks();
