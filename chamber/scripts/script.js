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

const membersUrl = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersUrl);
        
        if (!response.ok) {
            throw new Error("Failed to fetch member data");
        }
        
        const data = await response.json();
        createCompanyCard(data.companies);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

getMembers();

function createCompanyCard(companies) {
  document.querySelector(".company-cards").innerHTML = "";
  
  const membershipMap = {
      1: "Member",
      2: "Silver Member",
      3: "Gold Member"
  };
  
  
  companies.forEach(company => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let membershipLevel = document.createElement("p");
    let description = document.createElement("p");
    let yearFounded = document.createElement("p");
    let image = document.createElement("img");


    name.textContent = company.companyName;

    image.setAttribute("src", `images/${company.image}`);
    image.setAttribute("alt", `${company.companyName}`);
    image.setAttribute("loading", "lazy");

    address.textContent = company.address;
    phone.textContent = company.phone;
    
    website.href = company.website;
    website.textContent = company.website;
    website.target = "_blank";
    website.rel = "noopener noreferrer";
    
    membershipLevel.textContent = `Membership: ${membershipMap[company.membershipLevel]}`;
    description.textContent = company.description;
    yearFounded.textContent = `Founded: ${company.yearFounded}`;

    card.append(
        image,
        name,
        address,
        phone,
        website,
        membershipLevel,
        description,
        yearFounded
    );
    card.classList.add("company-card");

    document.querySelector(".company-cards").appendChild(card);
  })
};

const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");
const companyCards = document.querySelector(".company-cards");

// default view
companyCards.classList.add("grid");

gridButton.addEventListener("click", () => {
    companyCards.classList.add("grid");
    companyCards.classList.remove("list");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    companyCards.classList.add("list");
    companyCards.classList.remove("grid");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
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

