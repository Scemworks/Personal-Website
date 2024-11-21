// Function to apply the theme based on localStorage value
function applyTheme() {
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    const isDark = localStorage.getItem("theme") === "dark";

    if (isDark) {
        document.body.classList.add("dark-theme");
        themeToggleIcon.classList.remove("fa-moon");
        themeToggleIcon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark-theme");
        themeToggleIcon.classList.remove("fa-sun");
        themeToggleIcon.classList.add("fa-moon");
    }
}

// Toggle and save theme in localStorage
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const navbarNav = document.getElementById("navbar-nav");
    const hamburger = document.getElementById("hamburger");

    let themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (!themeToggleIcon) {
        themeToggleIcon = document.createElement("i");
        themeToggleIcon.id = "theme-toggle-icon";
        themeToggleIcon.classList.add("fas");
        themeToggle.appendChild(themeToggleIcon);
    }

    applyTheme();

    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    });

    // Hamburger menu toggle
    hamburger.addEventListener("click", function () {
        navbarNav.classList.toggle("active");
    });
});