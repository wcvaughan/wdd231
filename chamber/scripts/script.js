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

// change state of page to current
navItems.forEach(link => {
    link.addEventListener("click", (e) => {
        navItems.forEach(a =>
            a.parentElement.classList.remove("current")
        );

        e.currentTarget.parentElement.classList.add("current");
    });
});

// Set title of page, update current year and last modified
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-bar a');
    const pageTitle = document.querySelector('main h1');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const pageName = link.dataset.page;

            pageTitle.textContent = pageName;

            document.querySelectorAll('#nav-bar li').forEach(li => {
                li.classList.remove('current');
            });
        });
    });

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

});

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved preference
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️"
    }
});

