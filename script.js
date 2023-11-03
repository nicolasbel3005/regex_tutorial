// Smooth scrolling for table of contents links
document.addEventListener("DOMContentLoaded", function () {
    const tocLinks = document.querySelectorAll("nav a");

    tocLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
