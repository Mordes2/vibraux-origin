
let slideIndex = 1;
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
for (let i = 0; i < prev.length; i++)
next[i].addEventListener("click", () => {
    prev[i].addEventListener("click", plusSlides(1));
})
// Next/previous controls

function showSlides(n, obj) {
  if (n > obj.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = obj.length }
  for (let i = 0; i < obj.length; i++) {
     obj[i].style.display = "none";

  }
 obj[slideIndex - 1].style.display = "flex";
}

const formSlides = document.querySelectorAll(".form-card");

const appSlides = document.querySelectorAll(".app-card");
const docSlides = document.querySelectorAll(".docs-card");
const landSlides = document.querySelectorAll(".product-card");
const miscSlides = document.querySelectorAll(".misc-card");
function plusSlides(n) {
  const projectCntnt = document.querySelectorAll(".projexContent");
  if (projectCntnt[0].style.display === "grid") {
showSlides(slideIndex += n, formSlides);
  } else if (projectCntnt[1].style.display === "grid") {
    showSlides(slideIndex += n, appSlides);
    
  } else if (projectCntnt[2].style.display === "grid") {
    showSlides(slideIndex += n, docSlides);
    
  } else if (projectCntnt[3].style.display === "grid") {
    showSlides(slideIndex += n, landSlides);
    
  } else if (projectCntnt[4].style.display === "grid") {
    showSlides(slideIndex += n, miscSlides);
    
  }
  }



