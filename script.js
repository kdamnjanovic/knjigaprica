const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


//faq sekcija

let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;
let isClicked5 = true;
let isClicked6 = true;
let isClicked7 = true;
let isClicked8 = true;

const showHide = function(toggleId) {
    switch (toggleId) {
        case "toggleContainer1":
            if (isClicked1) {
                document.querySelector("#toggle1").style.display = "block";
                isClicked1 = false;
            } else {
                document.querySelector("#toggle1").style.display = "none";
                isClicked1 = true;
            }
            break;
        case "toggleContainer2":
            if (isClicked2) {
                document.querySelector("#toggle2").style.display = "block";
                isClicked2 = false;
            } else {
                document.querySelector("#toggle2").style.display = "none";
                isClicked2 = true;
            }
            break;
        case "toggleContainer3":
            if (isClicked3) {
                document.querySelector("#toggle3").style.display = "block";
                isClicked3 = false;
            } else {
                document.querySelector("#toggle3").style.display = "none";
                isClicked3 = true;
            }
            break;
        case "toggleContainer4":
            if (isClicked4) {
                document.querySelector("#toggle4").style.display = "block";
                isClicked4 = false;
            } else {
                document.querySelector("#toggle4").style.display = "none";
                isClicked4 = true;
            }
            break;
        case "toggleContainer5":
            if (isClicked5) {
                document.querySelector("#toggle5").style.display = "block";
                isClicked5 = false;
            } else {
                document.querySelector("#toggle5").style.display = "none";
                isClicked5 = true;
            }
            break;
        case "toggleContainer6":
            if (isClicked6) {
                document.querySelector("#toggle6").style.display = "block";
                isClicked6 = false;
            } else {
                document.querySelector("#toggle6").style.display = "none";
                isClicked6 = true;
            }
            break;
        case "toggleContainer7":
            if (isClicked7) {
                document.querySelector("#toggle7").style.display = "block";
                isClicked7 = false;
            } else {
                document.querySelector("#toggle7").style.display = "none";
                isClicked7 = true;
            }
            break;
        case "toggleContainer8":
            if (isClicked8) {
                document.querySelector("#toggle8").style.display = "block";
                isClicked8 = false;
            } else {
                document.querySelector("#toggle8").style.display = "none";
                isClicked8 = true;
            }
            break;
    }
}
