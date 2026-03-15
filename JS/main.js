const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


 const container = document.querySelector(".travel-cards");

let scrollAmount = 0;

setInterval(() => {

scrollAmount += 1;

container.scrollLeft = scrollAmount;

if(scrollAmount >= container.scrollWidth - container.clientWidth){
scrollAmount = 0;
}

}, 20);