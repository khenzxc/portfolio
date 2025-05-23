const hamburger = document.getElementById('hamburger-btn');
const nav = document.querySelector('header nav');
const navClose = document.getElementById('nav-close-btn');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
});

if (navClose) {
    navClose.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    });
}