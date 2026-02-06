/* =============================
   NAVIGATION TOGGLE
============================= */
const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

if (navButton) {
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navLinks.classList.toggle('show');

        const expanded = navButton.getAttribute("aria-expanded") === "true";
        navButton.setAttribute("aria-expanded", !expanded);
    });
}

/* =============================
   WAYFINDING (GitHub Pages Safe)
============================= */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('#nav-bar a').forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
        link.parentElement.classList.add('current');
        link.setAttribute('aria-current', 'page');
    }
});

/* =============================
   FOOTER + THEME LOAD
============================= */
const themeToggle = document.querySelector("#theme-toggle");

document.addEventListener('DOMContentLoaded', () => {
    // footer dates
    const year = document.getElementById('currentyear');
    const modified = document.getElementById('lastModified');

    if (year) year.textContent = new Date().getFullYear();
    if (modified) modified.textContent = `Last modified: ${document.lastModified}`;

    // load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeToggle) themeToggle.textContent = "☀️";
    }
});

/* =============================
   THEME TOGGLE
============================= */
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        themeToggle.textContent = isDark ? "☀️" : "🌙";

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

/* =============================
   MEMBERSHIP MODALS
============================= */
document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const dialogs = document.querySelectorAll('dialog');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modal;
            const dialog = document.getElementById(modalId);

            if (dialog) {
                dialog.showModal();
            }
        });
    });

    // Close modal when clicking outside dialog content
    dialogs.forEach(dialog => {
        dialog.addEventListener('click', (event) => {
            const rect = dialog.getBoundingClientRect();
            const clickedOutside = 
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.botton;

            if (clickedOutside) {
                dialog.close();
            }
        });
    });
});

/* =============================
   TIMESTAMP (JOIN FORM)
============================= */
const timestampField = document.getElementById('timestamp');
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

/* =============================
   THANK YOU PAGE POPULATION
============================= */
const params = new URLSearchParams(window.location.search);

if (params.has('fname')) {
    ['fname','lname','email','phone','business','timestamp'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = params.get(id);
        }
    });
}
