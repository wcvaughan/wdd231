import { places } from "../data/discover.mjs";

const grid = document.querySelector(".discover-grid");

places.forEach((place, index) => {
    const card = document.createElement("article");
    card.classList.add("discover-card", `card${index + 1}`);

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
        <img src="${place.image}" alt="${place.name}">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
    `;
    
    grid.appendChild(card);
});

const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${diffDays} ${diffDays === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisit", now);