const navButton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navlinks.classList.toggle('show');
});