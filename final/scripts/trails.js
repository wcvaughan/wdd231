import { fetchTrails } from "./api.js";

const trailContainer = document.querySelector(".trail-card");

function displayTrails(trails) {
  trailContainer.innerHTML = "";

  trails.forEach(trail => {
    const card = document.createElement("section");
    card.classList.add("trail-item");

    card.innerHTML = `
      <img src="${trail.image}" alt="${trail.name}" loading="lazy" width="400" height="250">
      <h3>${trail.name}</h3>
      <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
      <p><strong>Distance:</strong> ${trail.distance}</p>
      <p><strong>Location:</strong> ${trail.location}</p>
      <a href="trail.html?id=${trail.id}" class="details-btn">View Details</a>
    `;

    trailContainer.appendChild(card);
  });
}

async function init() {
    try {
        const trails = await fetchTrails();
        displayTrails(trails);
    } catch (error) {
        console.error("Trail load failed:", error);
        trailContainer.innerHTML = "<p>Unable to load trails.</p>";
    }
}

init();

