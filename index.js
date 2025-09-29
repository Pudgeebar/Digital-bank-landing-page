const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle("active");
    hamburgerMenu.classList.toggle('active');
});