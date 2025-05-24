document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('open');
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when a nav link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Auto-close menu on scroll (mobile)
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('open')) {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
        }
    });
});