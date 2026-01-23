const books = [
  {
    name: "Concepts of Physics – Vol 1",
    size: "18.2 MB",
    github: "https://mozilla.github.io/pdf.js/web/viewer.html?file=https://srijan2025-hub.github.io/physicsstorage1/HCVVol1.pdf",
    drive: "#",
    driiive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1.pdf"
  },
  {
    name: "Concepts of Physics – Vol 2",
    size: "21.4 MB",
    github: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol2.pdf"
  },
  {
    name: "DC Pandey Mechanics",
    size: "12.8 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "DC Pandey Electricity",
    size: "14.1 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "HC Verma Solutions",
    size: "9.6 MB",
    github: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1and2solutions.pdf",
    drive: "#",
    download: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/df31c0ef0314f6e9226f119a2c338845531f01c6/HCVVol1and2solutions.pdf"
  },
  {
    name: "Physics PYQs",
    size: "25.3 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Modern Physics Notes",
    size: "7.9 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Electromagnetism",
    size: "16.5 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Thermodynamics",
    size: "11.2 MB",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Optics Complete Guide",
    size: "13.7 MB",
    github: "#",
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
      const div = document.createElement("div");
      div.className = "book";

      div.innerHTML = `
        <div class="book-content">
          <h3>${book.name}</h3>
          <div class="size">📦 ${book.size}</div>
          <div class="actions">
            <a href="${book.github}" target="_blank">View</a>
            <a href="${book.drive}" target="_blank">GDrive</a>
            <a href="${book.download}" download>Download</a>
          </div>
        </div>
      `;
      grid.appendChild(div);
    });
}

renderBooks();

/* SEARCH */
searchInput.addEventListener("input", e => {
  renderBooks(e.target.value.toLowerCase());
});

/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
};

/* NEON COLOR */
document.getElementById("neonPicker").addEventListener("input", e => {
  document.documentElement.style.setProperty("--neon", e.target.value);
});
