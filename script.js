const projex = document.querySelector(".projex");
let projectCtn = document.querySelector(".project-ctn");
const myProject = document.querySelector(".myProjects");
const aboutMe = document.querySelector(".aboutMyself")
const navList = document.querySelector(".nav-list");
const listItem = document.querySelectorAll(".list-item");
var projectLink = document.querySelectorAll(".projectLink");
const projectContent = document.querySelectorAll(".projexContent");
const projectType = document.querySelectorAll(".project-type");


const colors = ["#00beef","#00aa88", "#44667a", "#0a0095", "#000 "];

function openType(type, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    for ( let i = 0; i < projectContent.length; i++) {
      projectContent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    for (i = 0; i < projectLink.length; i++) {
      projectLink[i].style.backgroundColor = "";
    }
  
    document.getElementById(type).style.display = "grid";
    
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = "transparent";
}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
for (let i = 0; i < colors.length; i++) {
  projectLink[i].addEventListener("click", () => {
     
    
     projex.style.background = `linear-gradient(${colors[i]}, #000, ${colors[i]})`;
     document.querySelector(".welcome").style.background = `linear-gradient(${colors[i]}, #000, ${colors[i]})`;
     document.querySelector(".container").style.background = `linear-gradient(rgb(0 0 0/80%), ${colors[i]})`;
     if (colors[i] === "#000") {
      document.querySelector(".welcome").style.background = `linear-gradient(${colors[i]}, #00beef, ${colors[i]})`;
      document.querySelector(".projex").style.background = `linear-gradient(${colors[i]}, #00beef, ${colors[i]})`;
     }
    
  });
}

const stroke1 = document.querySelectorAll("#firstBorn");
const stroke2 = document.querySelectorAll("#secondBorn");
const stroke3 = document.querySelectorAll("#lastBorn");

for (let i = 0; i < stroke1.length; i++) {

  const strk1 = stroke1[i].getAttributeNode("stroke");
  const strk2 = stroke2[i].getAttributeNode("stroke");
  const strk3 = stroke3[i].getAttributeNode("stroke");
  strk1.value = "#00beef";
  strk2.value = "#00beef";
  strk3.value = "#00beef";
  
}


