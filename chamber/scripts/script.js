const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');
const navItems = document.querySelectorAll('#nav-bar a');

// Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');

    const expanded = navButton.getAttribute("aria-expanded") === "true";
    navButton.setAttribute("aria-expanded", !expanded);
});

const currentPage = window.location.pathname;

document.querySelectorAll('#nav-bar a').forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.parentElement.classList.add('current');
        link.setAttribute('aria-current', 'page');
    }
});

// Set title of page, update current year and last modified
document.addEventListener('DOMContentLoaded', () => {

    // footer dates
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent =
        `Last modified: ${document.lastModified}`;

    // load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️";
    }

});


const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// timestamp (only if field exists)
const timestampField = document.getElementById('timestamp');
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

// thankyou page population (only if elements exist)
if (params.has('fname')) {
    ['fname','lname','email','phone','business','timestamp'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = params.get(id);
        }
    });
}

const params = new URLSearchParams(window.location.search);

['fname','lname','email','phone','business','timestamp'].forEach(id => {
    document.getElementById(id).textContent = params.get(id);
});

