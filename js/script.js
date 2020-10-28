const doc = document;

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

// Mobile navigation
// const menuOpen = doc.querySelector(".menu");
// const menuClose = doc.querySelector(".close");
// const overlay = doc.querySelector(".overlay");

// menuOpen.addEventListener("click", () => {
//     overlay.classList.add("overlay--active");
// });

// menuClose.addEventListener("click", () => {
//     overlay.classList.remove("overlay--active");
// });

// Modal
const img1 = doc.querySelector(".work--img-1");
const img2 = doc.querySelector(".work--img-2");
const img3 = doc.querySelector(".work--img-3");
const modal1 = doc.querySelector(".modal-1");
const modal2 = doc.querySelector(".modal-2");
const modal3 = doc.querySelector(".modal-3");
const button = doc.querySelector(".close--button");
const modals = doc.querySelector(".modals");

button.addEventListener("click", () => {
    modal1.classList.add("opacity--active");
    modal2.classList.add("opacity--active");
    modal3.classList.add("opacity--active");
    button.classList.add("opacity--active");
});

img1.addEventListener("click", () => {
    modal1.classList.remove("opacity--active");
    button.classList.remove("opacity--active");
});

img2.addEventListener("click", () => {
    modal2.classList.remove("opacity--active");
    button.classList.remove("opacity--active");
});

img3.addEventListener("click", () => {
    modal3.classList.remove("opacity--active");
    button.classList.remove("opacity--active");
});

// Navbar
const showNav = doc.querySelector(".next__button");
const hideNav = doc.querySelector(".logo__text");
const opacity = doc.querySelector(".header__nav");
const home = doc.querySelector(".home");
const content = doc.querySelector(".main__content");
const body = doc.querySelector("body");

showNav.addEventListener("click", () => {
    opacity.classList.remove("opacity--active");
    home.classList.add("opacity--active");
    content.classList.remove("opacity--active");
    body.classList.remove("scroll--lock");
});

hideNav.addEventListener("click", () => {
    opacity.classList.add("opacity--active");
    home.classList.remove("opacity--active");
    content.classList.add("opacity--active");
    body.classList.add("scroll--lock");
});