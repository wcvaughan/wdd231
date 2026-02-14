const form = document.querySelector("#newsletter-form");

if (form) {
    form.addEventListener("submit", () => {
        
        const name = document.querySelector("#fullname").value;
        const email = document.querySelector("#email").value;

        localStorage.setItem("subscriberName", name);
        localStorage.setItem("subscriberEmail", email);
        localStorage.setItem("isSubscribed", "true");

    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("subscriberName");
    const savedEmail = localStorage.getItem("subscriberEmail");

    if (savedName) {
        document.querySelector("#fullname").value = savedName;
    }

    if (savedEmail) {
        document.querySelector("#email").value = savedEmail;
    }
});