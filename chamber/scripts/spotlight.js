const spotlightContainer = document.querySelector(".spotlight-cards");

async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const qualified = data.companies.filter(
        m => m.membershipLevel === 2 || m.membershipLevel === 3
    );

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = "";

    selected.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="images/${company.image}" alt="${company.companyName} logo">
            <h3>${company.companyName}</h3>
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <a href="${company.website}" target="_blank">Visit Website</a>
            <p class="level">${company.membershipLevel === 3 ? "Gold Member" : "Silver Member"}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();
