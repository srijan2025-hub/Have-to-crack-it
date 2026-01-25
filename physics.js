/* CATEGORY COLORS */
const CATEGORY_COLORS = {
  c1: "#ffd700",   // Yellow
  c2: "#ff004f",   // Red
  c3: "#7cff00",   // Green
  c4: "#00e5ff",   // Cyan
  default: "#00ffff"
};

/* BOOK DATA */
const books = [
  {
    name: "Concepts Of Physics – Vol 1",
    subject: "physics",
    authors: ["H.C. Verma"],
    size: "18.2 MB",
    category: "c1",
    pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1.pdf",
    gdrive: "#",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1.pdf"
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
const tabs = document.querySelectorAll(".tab");
const authorBtn = document.getElementById("authorBtn");
const authorPanel = document.getElementById("authorPanel");
const closeAuthor = document.getElementById("closeAuthor");
const authorList = document.getElementById("authorList");
const toggle = document.getElementById("themeToggle");

/* STATE */
let searchTerm = "";
let selectedSubject = "physics";
let selectedAuthors = new Set();

/* AUTHORS */
const authors = [...new Set(books.flatMap(b => b.authors))];
authorList.innerHTML = authors.map(a => `
  <label>
    <input type="checkbox" value="${a.toLowerCase()}"> ${a}
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

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    selectedSubject = tab.dataset.subject;
    renderBooks();
  };
});

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
};

/* SEARCH */
let timer;
searchInput.addEventListener("input", e => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    searchTerm = e.target.value.toLowerCase();
    renderBooks();
  }, 150);
});

/* RENDER */
function renderBooks() {
  const frag = document.createDocumentFragment();
  grid.innerHTML = "";

  for (const book of processedBooks) {
    if (book.subject !== selectedSubject) continue;
    if (searchTerm && !book.nameLC.includes(searchTerm)) continue;
    if (selectedAuthors.size && !book.authorsLC.some(a => selectedAuthors.has(a))) continue;

    const card = document.createElement("div");
    card.className = "book";
    card.style.setProperty("--neon", CATEGORY_COLORS[book.category] || CATEGORY_COLORS.default);

    const viewer = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(book.pdf)}`;

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
