// --- Theme Toggle ---
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// --- Click Ripple Effect ---
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => { ripple.remove(); }, 600);
});

// --- Page Transition Logic (Vanilla JS) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fade IN on load (handled by CSS default opacity 1)
    
    // 2. Handle Fade OUT on click
    const links = document.querySelectorAll('.page-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop immediate load
            const targetUrl = this.href;
            
            // Add fade-out class to body
            document.body.classList.add('fade-out');
            
            // Wait for animation (400ms matches CSS transition)
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400);
        });
    });
});
