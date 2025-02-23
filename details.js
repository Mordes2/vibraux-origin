var ctnr = document.querySelector(".container");
const dtlsBtn = document.getElementById("aboutMe");
const imgCtn = document.querySelector(".portfolio-title");
const kWz = document.querySelectorAll("#energy");
const passage = document.querySelector("article");
const proPic = document.querySelector(".pro-pic");
const dP = document.getElementById("pro-pic");
const wlcmNote = document.querySelector(".welcome-note");

dtlsBtn.addEventListener("click", () => {
    imgCtn.style.display = "none";
    dtlsBtn.style.display = "none";
    wlcmNote.style.display = "flex";
    wlcmNote.style.flexDirection = "column";
    passage.style.width = "100%";
    proPic.style.display = "flex";
    dP.style.display = "flex";
    ctnr.style.width = "90%";
    ctnr.style.height = "85vh";
    ctnr.style.boxShadow = "none";
    ctnr.style.background = "transparent";
    ctnr.style.backdropFilter = "blur(0) brightness(50%)";
for (let i = 0; i < kWz.length; i++) {
    kWz[i].style.filter = "blur(20px) brightness(5000%) saturate(200%)";
}
})
let i = 0;
const para1 = "Greetings and welcome to my portfolio. My name is Mordecai Thulani Makatini. I have less than one year experience in software development, with a basic to intemediate understanding of HTML, CSS, and JavaScript." 

const para2 = "My background is occupied with over eight years experience in the logistics and supply chain industry. I strongly believe that it has prepared me for this career path change, contributing to my development of key qualities that are essentially necessary in software development. Qualities such as attention to detail, time management, being well-organised, problem solving, (which is the main purpose for programming), good communication, teamwork, etc." 
const para3 = "I also have a lot of experience with digital music production systems such as FL studios, PropellerHead Reason and CubaseSX. Though it is a hobbie, it - along with using warehouse management systems(WMS), Microsoft Excel, and more - has aided my comprehension and confidence in working with complex systems and technology. As you browse through my portfolio, you will notice that I am a creative at heart. And I believe that a creative and innovative mindset is the backbone of web development." 
const para4 = "Thank you reading about me and taking the time to go through my portfolio.\n Regards\n Mordecai";

let speed = 100;


function typeWrite(para) {
    if (i < para.length)
        document.getElementById("note").innerHTML += welcomeNote.charAt(i);
    i++;
    setTimeout(typeWrite, speed);

}

typeWrite()
