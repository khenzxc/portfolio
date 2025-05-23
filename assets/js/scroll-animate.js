document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.scroll-fade');
    function checkFade() {
        faders.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60 && rect.bottom > 60) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }
    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);
    checkFade();
});