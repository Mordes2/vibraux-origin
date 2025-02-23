const container = document.querySelector(".welcome");
const svgBoard = document.querySelectorAll(".circuit-board");
const svgFb = document.querySelectorAll("#firstBorn");
const svgSb = document.querySelectorAll("#secondBorn");
const svgLb = document.querySelectorAll("#lastBorn");
const emc1 = document.querySelectorAll("circle");


for (const fb of svgFb) {

const pwrGrid1 = fb.getAttributeNode('d');
pwrGrid1.value = "M 150 0 150 300, M 150 30 135 30 135 90 120 120 120 450 150 465, M 150 30 135 30 135 90 120 120 120 240 0 240, M 150 30 135 30 135 90 120 120 120 225 0 225, M 150 30 135 30 135 90 120 120 120 210 0 210, M 60 210 30 195 0 195"; 

}

for (const sb of svgSb) {

    const pwrGrid2 = sb.getAttributeNode('d');
    pwrGrid2.value = "M 180 0 180 300,  M 160 480 100 540 50 540 0 480, M 160 510 0 510, M 160 480 120 450 60 450 60 400 0 400, M 80 450 80 350 40 350 40 380 0 380, M 120 450 100 450 100 280 20 280 20 300 80 300 80 320 0 320";
    
}

for (const lb of svgLb) {
    
    const pwrGrid3 = lb.getAttributeNode('d');
    pwrGrid3.value = "M 210 0 210 300, M 210 60 300 120 300 165 300 165 255 189 255 300, M 210 60 300 120 300 210 350 210 350 150 380 100 380 10 390 10 390 300 360 300";

} 

const vCir = document.querySelectorAll("#mo1");
for (const vc of vCir)  {
    const vOne = vc.getAttributeNode("path");
    vOne.value = "M 150 0 150 300, M 150 30 135 30 135 90 120 120 120 450 150 465, M 150 30 135 30 135 90 120 120 120 240 0 240, M 150 30 135 30 135 90 120 120 120 225 0 225, M 150 30 135 30 135 90 120 120 120 210 0 210, M 60 210 30 195 0 195";

}

const vCir2 = document.querySelectorAll("#mo2");
for (const vc2 of vCir2) {
    const vTwo = vc2.getAttributeNode("path");
    vTwo.value = "M 180 0 180 300,  M 160 480 100 540 50 540 0 480, M 160 510 0 510, M 120 450 60 450 60 400 0 400, M 80 450 80 350 40 350 40 380 0 380, M 120 450 100 450 100 280 20 280 20 300 80 300 80 320 0 320";
}

const vCir3 = document.querySelectorAll("#mo3");
for (const vc3 of vCir3) {
    const vThree = vc3.getAttributeNode("path");
    vThree.value = "M 210 0 210 300, M 210 60 300 120 300 165 300 165 255 189 255 300, M 210 60 300 120 300 210 350 210 350 150 380 100 380 10 390 10 390 300 360 300";
}