const roles = ["Web Designing!", "UI/UX Designing!", "Backend Development!"];
const el = document.getElementById("typing-role");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 1200); // Pause at end
        } else {
            setTimeout(typeRole, 120);
        }
    } else {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        } else {
            setTimeout(typeRole, 60);
        }
    }
}
typeRole();