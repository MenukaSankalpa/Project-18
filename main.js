const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen?"ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
});