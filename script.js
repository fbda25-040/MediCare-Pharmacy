console.log("JavaScript is connected!");
const texts = [

    "Your Partner in Better Health",

    "Trusted Healthcare Solutions",

    "Quality Medicines, Expert Care",

    "Caring For Your Family's Health"

];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement =
document.getElementById("typing-headline");

function typeEffect(){

    const currentText = texts[textIndex];

    if(isDeleting){

        typingElement.textContent =
        currentText.substring(0, charIndex - 1);

        charIndex--;

    }else{

        typingElement.textContent =
        currentText.substring(0, charIndex + 1);

        charIndex++;

    }

    if(!isDeleting &&
       charIndex === currentText.length){

        isDeleting = true;

        setTimeout(typeEffect, 2000);

        return;
    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        textIndex =
        (textIndex + 1) % texts.length;
    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();
document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

alert("Message Sent Successfully!");

});
const tips = [

"Drink at least 8 glasses of water daily.",

"Exercise for 30 minutes every day.",

"Take medications as prescribed.",

"Eat fruits and vegetables regularly.",

"Get enough sleep every night."

];

document
.getElementById("tipBtn")
.addEventListener("click",()=>{

let random =
Math.floor(Math.random()*tips.length);

document
.getElementById("tipText")
.textContent =
tips[random];

});