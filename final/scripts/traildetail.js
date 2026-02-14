import { fetchTrails } from "./api.js";

const nameEl = document.querySelector("#trail-name");
const locationEl = document.querySelector("#trail-location");
const heroImg = document.querySelector("#trail-hero-img");
const statsEl = document.querySelector("#trail-stats");
const decsEl = document.querySelector("#trail-description");

const modal = document.querySelector("#trail-modal");
const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelector("#close-modal");

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const trailId = params.get("id");


function displayTrail(trail) {

    // Hero
    nameEl.textContent = trail.name;
    locationEl.textContent = trail.location;
    heroImg.src = trail.image;
    heroImg.alt = trail.name;

    // Stats card
    statsEl.innerHTML = `
    <h2>Trail Stats</h2>
    <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
    <p><strong>Distance:</strong> ${trail.distance}</p>
    <p><strong>Elevation Gain:</strong> ${trail.elevation}</p>
    `;

    // Description
    decsEl.textContent = trail.description;
}

async function init() {
    try {
        const trails = await fetchTrails();

        let trail;
        if (trailId) {
            trail = trails.find(t => t.id === trailId);
        }
        if (!trail) {
            const randomIndex = Math.floor(Math.random() * trails.length);
            trail = trails[randomIndex];
        }

        displayTrail(trail);

    } catch {
        document.querySelector(".trail-details").innerHTML = 
            "<p>Trail information could not be loaded.</p>";
    }
}

// Modal functionality
openModalBtn?.addEventListener("click", () => modal.showModal());
closeModalBtn?.addEventListener("click", () => modal.close());

init();