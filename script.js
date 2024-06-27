document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".info");
    const paths = document.querySelectorAll("svg path");
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active", "entering");
                section.classList.remove("exiting");
                setTimeout(() => {
                    section.classList.remove("entering");
                    section.classList.add("entered");
                }, 0);
            } else {
                section.classList.remove("active", "entered", "entering");
                section.classList.add("exiting");
            }
        });
        highlightPath(index);
    }

    function highlightPath(index) {
        paths.forEach((path) => {
            path.classList.remove("highlight");
        });
        const currentPathId = `path-${sections[index].id}`;
        const currentPath = document.getElementById(currentPathId);
        if (currentPath) {
            currentPath.classList.add("highlight");
        }
    }

    window.navigate = function(direction) {  // Define 'navigate' in the global scope
        if (direction === 'next') {
            if (currentSection < sections.length - 1) {
                currentSection++;
            }
        } else if (direction === 'prev') {
            if (currentSection > 0) {
                currentSection--;
            }
        }
        showSection(currentSection);
    }

    // Inicializar mostrando a primeira seção
    showSection(currentSection);
});
