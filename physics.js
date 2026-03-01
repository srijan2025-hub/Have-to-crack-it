/* CATEGORY COLORS */
const CATEGORY_COLORS = {
  c1: "#ffd700",
  c2: "#ff004f",
  c3: "#7cff00",
  c4: "#00e5ff",
  c5: "#00e7ff",
  default: "#00ffff"
};

/* AUTHOR BACKGROUND SORTING ORDER (Hidden from users) */
const AUTHOR_ORDER = {
  "H.C. Verma": 1,
  "D.C. Pandey": 2,
  "Vibrant Academy": 3,
  "Dutta Paul Guchait": 4
};

/* BOOK DATA */
const books = [
{
  name: "Concepts Of Physics – Vol 1",
  authors: ["H.C. Verma"],
  size: "18.2 MB",
  category: "c1",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1.pdf",
  gdrive: "https://drive.google.com/file/d/1FNIEG8gtjaH2L6Wdx71OXVVXZcgv6San/preview",
  drive: "https://drive.google.com/file/d/1FNIEG8gtjaH2L6Wdx71OXVVXZcgv6San/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1.pdf",
  solution: "#",
  onedrive: "#" // <-- Added OneDrive link slot here!
},
{
  name: "Concepts Of Physics – Vol 2",
  authors: ["H.C. Verma"],
  size: "18.2 MB",
  category: "c1",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol2.pdf",
  gdrive: "https://drive.google.com/file/d/1FO1nBFo75pUOGt41qkxazQVv6KHqK2az/preview",
  drive: "https://drive.google.com/file/d/1FO1nBFo75pUOGt41qkxazQVv6KHqK2az/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "Concepts Of Physics – Solutions (Vol 1 & 2)",
  authors: ["H.C. Verma"],
  size: "18.2 MB",
  category: "c1",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/HCVVol1and2solutions.pdf",
  gdrive: "https://drive.google.com/file/d/1FSxa3TndyaEPK9nu2MhLy9FXRbiCSF2j/preview",
  drive: "https://drive.google.com/file/d/1FSxa3TndyaEPK9nu2MhLy9FXRbiCSF2j/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1and2solutions.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DC Pandey – Mechanics Vol 1",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyMechanics1.pdf",
  gdrive: "https://drive.google.com/file/d/1Ft7LyjA3FLoRYhTCDHWPEu_aYbhWaeau/preview",
  drive: "https://drive.google.com/file/d/1Ft7LyjA3FLoRYhTCDHWPEu_aYbhWaeau/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyMechanics1.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DC Pandey – Mechanics Vol 2",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyMechanics2.pdf",
  gdrive: "https://drive.google.com/file/d/1Fv-w6t8fdsWGFcBcWjEK_bYjsm7fVMbm/preview",
  drive: "https://drive.google.com/file/d/1Fv-w6t8fdsWGFcBcWjEK_bYjsm7fVMbm/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyMechanics2.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DC Pandey – Waves & Thermodynamics",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeywavesandthermodynamics.pdf",
  gdrive: "https://drive.google.com/file/d/1G1LrP7QYxRhc0N_8OihvpBZ5EzoK0xzZ/preview",
  drive: "https://drive.google.com/file/d/1G1LrP7QYxRhc0N_8OihvpBZ5EzoK0xzZ/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeywavesandthermodynamics.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DC Pandey – Electricity & Magnetism",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyelectricityandmagnetism.pdf",
  gdrive: "https://drive.google.com/file/d/1YOe_Ph-RIUBGR7KPmwJhPA9C0L3mANN_/preview",
  drive: "https://drive.google.com/file/d/1YOe_Ph-RIUBGR7KPmwJhPA9C0L3mANN_/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyelectricityandmagnetism.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DC Pandey – Optics & Modern Physics",
  authors: ["D.C. Pandey"],
  size: "—",
  category: "c2",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/DCPandeyopticsandmodernphysics.pdf",
  gdrive: "https://drive.google.com/file/d/1FyFzXJjpWccUjVEr0604tseQfVikFHE7/preview",
  drive: "https://drive.google.com/file/d/1FyFzXJjpWccUjVEr0604tseQfVikFHE7/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/DCPandeyopticsandmodernphysics.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "Vibrant _Geometrical Optics Sheet",
  authors: ["Vibrant Academy"],
  size: "—",
  category: "c5",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet1geometricaloptics.pdf",
  gdrive: "https://drive.google.com/file/d/1Jsz745pb7QtNd3VESAwg9Uz7bVyaFICM/preview",
  drive: "https://drive.google.com/file/d/1Jsz745pb7QtNd3VESAwg9Uz7bVyaFICM/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet1geometricaloptics.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "Vibrant _Wave Optics Sheet 1",
  authors: ["Vibrant Academy"],
  size: "—",
  category: "c5",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet1waveoptics.pdf",
  gdrive: "https://drive.google.com/file/d/1SgUi2Ffc78-uZIwJFguH5vJYSb_RgiJD/preview",
  drive: "https://drive.google.com/file/d/1SgUi2Ffc78-uZIwJFguH5vJYSb_RgiJD/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet1waveoptics.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "Vibrant _Wave Optics Sheet 2",
  authors: ["Vibrant Academy"],
  size: "—",
  category: "c5",
  pdf: "https://srijan2025-hub.github.io/physicsstorage1/cwsheet2waveoptics.pdf",
  gdrive: "https://drive.google.com/file/d/1lWSlgVAW_Q9VLiZ9XYHTga89cXre5oLL/preview",
  drive: "https://drive.google.com/file/d/1lWSlgVAW_Q9VLiZ9XYHTga89cXre5oLL/view?usp=drive_link",
  download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/cwsheet2waveoptics.pdf",
  solution: "#",
  onedrive: "#"
},
{
  name: "DPG Reflection_Refraction",
  authors: ["Dutta Paul Guchait"],
  size: "—",
  category: "c4",
  pdf: "#",
  gdrive: "https://drive.google.com/file/d/1XmHHLldGfO48ZFDLQ3i0ACEvfvd1r7Or/preview",
  drive: "https://drive.google.com/file/d/1XmHHLldGfO48ZFDLQ3i0ACEvfvd1r7Or/view?usp=drivesdk",
  download: "#",
  solution: "#",
  onedrive: "#"
},
{
  name: "DPG lens prism opt. inst.",
  authors: ["Dutta Paul Guchait"],
  size: "—",
  category: "c4",
  pdf: "#",
  gdrive: "https://drive.google.com/file/d/1n0trNupZClJ67w4SY7kWxYteK1ICKq_8/preview",
  drive: "https://drive.google.com/file/d/1n0trNupZClJ67w4SY7kWxYteK1ICKq_8/view?usp=drivesdk",
  download: "#",
  solution: "#",
  onedrive: "#"
},
{
  name: "DPG Wave Optics",
  authors: ["Dutta Paul Guchait"],
  size: "—",
  category: "c4",
  pdf: "#",
  gdrive: "https://drive.google.com/file/d/1jHjaJMHXe_tPSo-k_NpS2Xoo8J8yXF03/preview",
  drive: "https://drive.google.com/file/d/1jHjaJMHXe_tPSo-k_NpS2Xoo8J8yXF03/view?usp=drivesdk",
  download: "#",
  solution: "#",
  onedrive: "#"
},
{
  name: "DPG Electronics & Communication System",
  authors: ["Dutta Paul Guchait"],
  size: "—",
  category: "c4",
  pdf: "#",
  gdrive: "https://drive.google.com/file/d/1A-6bGjLQb_2Fkgrx75ca2CbW9cqdIFZ9/preview",
  drive: "https://drive.google.com/file/d/1A-6bGjLQb_2Fkgrx75ca2CbW9cqdIFZ9/view?usp=drivesdk",
  download: "#",
  solution: "#",
  onedrive: "#"
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
const focusBtn = document.getElementById("focusBtn");

/* STATE */
let searchTerm = "";
let selectedAuthors = new Set();

/* AUTHORS FILTER (SIDEBAR) */
if (authorList) {
  const authors = [...new Set(books.flatMap(b => b.authors))];
  
  authors.sort((a, b) => {
    const orderA = AUTHOR_ORDER[a] || 999;
    const orderB = AUTHOR_ORDER[b] || 999;
    return orderA - orderB;
  });
  
  authorList.innerHTML = authors.map(a => {
    return `
      <label>
        <input type="checkbox" value="${a.toLowerCase()}"> ${a}
      </label>
    `;
  }).join("");

  authorList.addEventListener("change", e => {
    const a = e.target.value;
    e.target.checked ? selectedAuthors.add(a) : selectedAuthors.delete(a);
    renderBooks();
  });
}

/* AUTHOR PANEL TOGGLE */
if (authorBtn && authorPanel && closeAuthor) {
  authorBtn.addEventListener("click", () => authorPanel.classList.add("open"));
  closeAuthor.addEventListener("click", () => authorPanel.classList.remove("open"));
}

/* THEME TOGGLE */
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
  });
}

/* FOCUS MODE TOGGLE */
if (focusBtn) {
  focusBtn.addEventListener("click", () => {
    document.body.classList.toggle("focus-mode");
    focusBtn.textContent = document.body.classList.contains("focus-mode") ? "👓" : "🎯";
  });
}

/* SEARCH */
let timer;
if (searchInput) {
  searchInput.addEventListener("input", e => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      searchTerm = e.target.value.toLowerCase();
      renderBooks();
    }, 150);
  });
}

/* RENDER */
function renderBooks() {
  if (!grid) return;

  grid.innerHTML = "";
  const frag = document.createDocumentFragment();

  // 1. Filter the books
  const filteredBooks = processedBooks.filter(book => {
    if (searchTerm && !book.nameLC.includes(searchTerm)) return false;
    if (selectedAuthors.size && !book.authorsLC.some(a => selectedAuthors.has(a))) return false;
    return true;
  });

  // 2. Group the books by Author
  const groupedBooks = {};
  for (const book of filteredBooks) {
    const mainAuthor = book.authors[0] || "Unknown Author";
    if (!groupedBooks[mainAuthor]) {
      groupedBooks[mainAuthor] = [];
    }
    groupedBooks[mainAuthor].push(book);
  }

  // 3. Sort Authors by Background Serial Number
  const sortedAuthors = Object.keys(groupedBooks).sort((a, b) => {
    const orderA = AUTHOR_ORDER[a] || 999;
    const orderB = AUTHOR_ORDER[b] || 999;
    return orderA - orderB;
  });
  
  // Loop to draw each author onto the page
  for (const author of sortedAuthors) {
    const authorBooks = groupedBooks[author];

    const section = document.createElement("div");
    section.className = "author-section";

    const header = document.createElement("div");
    header.className = "author-header-toggle";
    header.innerHTML = `
      <h2>${author}</h2>
      <span class="arrow">↓</span>
    `;

    const booksContainer = document.createElement("div");
    booksContainer.className = "author-books-grid";

    header.addEventListener("click", () => {
      booksContainer.classList.toggle("collapsed");
      const arrow = header.querySelector(".arrow");
      arrow.style.transform = booksContainer.classList.contains("collapsed") ? "rotate(-90deg)" : "rotate(0deg)";
    });

    for (const book of authorBooks) {
      const card = document.createElement("div");
      card.className = "book";
      card.style.setProperty("--neon", CATEGORY_COLORS[book.category] || CATEGORY_COLORS.default);

      const viewer = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(book.pdf)}`;

      // BYPASS TRICK FOR GDRIVE
      const finalGDriveLink = book.gdrive !== "#" 
        ? `gdrive.html?url=${encodeURIComponent(book.gdrive)}` 
        : "#";

      // HTML FOR THE BOOK CARD - WITH THE 6TH ONEDRIVE BUTTON INCLUDED
      card.innerHTML = `
        <div class="book-content">
          <h3>${book.name}</h3>
          <div class="size">📦 ${book.size}</div>
          <div class="actions">
            <a href="${viewer}" target="_blank">View</a>
            <a href="${finalGDriveLink}" target="_blank" class="${book.gdrive === "#" ? "disabled" : ""}">$cloud</a>
            <a href="${book.drive}" target="_blank" class="${book.drive === "#" ? "disabled" : ""}">Drive</a>
            <a href="${book.onedrive || "#"}" target="_blank" class="${!book.onedrive || book.onedrive === "#" ? "disabled" : ""}">OneDrive</a>
            <a href="${book.solution || "#"}" target="_blank" class="${!book.solution || book.solution === "#" ? "disabled" : ""}">Solution</a>
            <a href="${book.download}" download>Download</a>
            
            </div>
        </div>
      `;

      booksContainer.appendChild(card);
    }

    section.appendChild(header);
    section.appendChild(booksContainer);
    frag.appendChild(section);
  }

  grid.appendChild(frag);
}

/* 11-SECOND GLOBAL NEON CLICK EFFECT */
const neonOverlay = document.getElementById('neonClickOverlay');
let neonTimer;

document.addEventListener('click', () => {
  if (!neonOverlay) return;
  
  clearTimeout(neonTimer);
  neonOverlay.classList.add('active');
  
  neonTimer = setTimeout(() => {
    neonOverlay.classList.remove('active');
  }, 11000);
});

/* INIT */
renderBooks();
