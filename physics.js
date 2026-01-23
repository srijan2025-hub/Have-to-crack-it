const books = [
  {
    name: "Concepts of Physics – Vol 1",
    github: "https://raw.githubusercontent.com/USERNAME/repo/main/cophysics1.pdf",
    drive: "https://drive.google.com/file/d/XXXXX/view",
    download: "https://raw.githubusercontent.com/USERNAME/repo/main/cophysics1.pdf"
  },
  {
    name: "Concepts of Physics – Vol 2",
    github: "https://raw.githubusercontent.com/USERNAME/repo/main/cophysics2.pdf",
    drive: "https://drive.google.com/file/d/XXXXX/view",
    download: "https://raw.githubusercontent.com/USERNAME/repo/main/cophysics2.pdf"
  },
  {
    name: "DC Pandey Mechanics",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "DC Pandey Electricity",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "HC Verma Solutions",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Physics PYQs",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Modern Physics Notes",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Electromagnetism",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Thermodynamics",
    github: "#",
    drive: "#",
    download: "#"
  },
  {
    name: "Optics Complete Guide",
    github: "#",
    drive: "#",
    download: "#"
  }
];

const grid = document.getElementById("bookGrid");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";

  div.innerHTML = `
    <div class="book-content">
      <h3>${book.name}</h3>
      <div class="actions">
        <a href="${book.github}" target="_blank">View</a>
        <a href="${book.drive}" target="_blank">GDrive</a>
        <a href="${book.download}" download>Download</a>
      </div>
    </div>
  `;

  grid.appendChild(div);
});

/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
};

/* NEON COLOR PICKER */
document.getElementById("neonPicker").addEventListener("input", e => {
  document.documentElement.style.setProperty("--neon", e.target.value);
});
