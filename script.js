document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const hamburger = document.querySelector(".hamburger");
    const navbarNav = document.querySelector(".navbar-nav");

    // Toggle theme and save preference in localStorage
    themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark-theme"); // Toggle dark mode class
        const theme = html.classList.contains("dark-theme") ? "dark" : "light";
        localStorage.setItem("theme", theme); // Save selected theme
    });

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        html.classList.add("dark-theme"); // Apply dark theme if saved
    }

    // Toggle visibility of the navbar menu on hamburger click
    hamburger.addEventListener("click", () => {
        navbarNav.classList.toggle("active"); // Show/hide the menu
    });

    // Close the menu when a link inside it is clicked (optional)
    navbarNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navbarNav.classList.remove("active"); // Hide the menu
        });
    });
});