document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement; // Use <html> for global theme change
    const themeIcon = themeToggle.querySelector("i"); 

    // Function to update the icon based on the current theme
    const updateThemeIcon = () => {
        if (html.classList.contains("dark-theme")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    };

    // Toggle theme and save preference in localStorage
    themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark-theme"); // Toggle dark mode class
        localStorage.setItem("theme", html.classList.contains("dark-theme") ? "dark" : "light"); // Save selected theme
        updateThemeIcon(); // Update the icon
    });

    // Apply saved theme on page load and update the icon
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        html.classList.add("dark-theme"); // Apply dark theme if saved
    }
    updateThemeIcon(); // Ensure the icon matches the current theme

    // Toggle visibility of the navbar menu on hamburger click
    const hamburger = document.querySelector(".hamburger");
    const navbarNav = document.querySelector(".navbar-nav");

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