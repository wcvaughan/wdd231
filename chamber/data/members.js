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

    const info = document.createElement("div");
    info.classList.add("company-info");

    info.append(
        name,
        address,
        phone,
        website,
        membershipLevel,
        description,
        yearFounded
    );
    card.append(image, info);
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
