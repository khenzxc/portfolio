document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const STAR_COUNT = 120;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.2 + 0.3,
                d: Math.random() * 0.5 + 0.2
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        for (let star of stars) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, false);
            ctx.fill();
        }
    }

    function animateStars() {
        for (let star of stars) {
            star.y += star.d;
            if (star.y > canvas.height) {
                star.x = Math.random() * canvas.width;
                star.y = 0;
            }
        }
        drawStars();
        requestAnimationFrame(animateStars);
    }

    function init() {
        resizeCanvas();
        createStars();
        drawStars();
        animateStars();
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        createStars();
    });

    setTimeout(init, 300);
});