// Toggle style
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) 
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// Cambio Colores
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

// Tema Oscuro
const darkMode = document.querySelector(".dark-mode");
darkMode.addEventListener("click", () => {
    darkMode.querySelector("i").classList.toggle("bxs-sun");
    darkMode.querySelector("i").classList.toggle("bxs-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        darkMode.querySelector("i").classList.add("bxs-sun");
    } else {
        darkMode.querySelector("i").classList.add("bxs-moon");
    }
})