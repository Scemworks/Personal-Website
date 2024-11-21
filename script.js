// script.js

// Function to apply the theme based on localStorage value
function applyTheme() {
    const themeToggleIcon = document.getElementById("theme-toggle-icon");
    const isDark = localStorage.getItem("theme") === "dark";

    if (isDark) {
        document.body.classList.add("dark-theme");
        themeToggleIcon.classList.remove("fa-moon");
        themeToggleIcon.classList.add("fa-sun"); // Show sun icon in dark mode
    } else {
        document.body.classList.remove("dark-theme");
        themeToggleIcon.classList.remove("fa-sun");
        themeToggleIcon.classList.add("fa-moon"); // Show moon icon in light mode
    }

    // Add a small animation class for the body
    document.body.classList.add("theme-transition");
    setTimeout(() => document.body.classList.remove("theme-transition"), 500); // Remove after animation
}

// Toggle and save theme in localStorage
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Check if the icon already exists
    let themeToggleIcon = document.getElementById("theme-toggle-icon");
    if (!themeToggleIcon) {
        themeToggleIcon = document.createElement("i");
        themeToggleIcon.id = "theme-toggle-icon";
        themeToggleIcon.classList.add("fas");
        themeToggle.appendChild(themeToggleIcon);
    }

    // Apply theme on page load
    applyTheme();

    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme(); // Update the icon and trigger animation
    });
});