// ======================================
// NOVA SCIENCE HUB
// SCRIPT.JS - PART 1A
// ======================================


// ===============================
// TYPEWRITER EFFECT
// ===============================

const typing = document.getElementById("typing");

const words = [

    "Learn with Concepts...",
    "Master Physics Easily...",
    "Practice MCQs...",
    "Watch Video Lectures...",
    "Build Your Future..."

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ===============================
// START BUTTON
// ===============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.querySelector(".features").scrollIntoView({

        behavior: "smooth"

    });

});


// ===============================
// NAVBAR SHADOW
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,212,255,.25)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.30)";

    }

});


// ===============================
// SIMPLE CARD ANIMATION
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = ".8s";

    observer.observe(card);

});
// =====================================
// PART 2A
// STARS + COUNTER + MOUSE EFFECT
// =====================================


// ===============================
// FLOATING STARS
// ===============================

const starsContainer = document.createElement("div");
starsContainer.className = "stars";
document.body.appendChild(starsContainer);

for(let i=0;i<150;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    starsContainer.appendChild(star);

}



// ===============================
// COUNTER ANIMATION
// ===============================

const counters=document.querySelectorAll(".stat-box h2");

const speed=40;

const runCounter=()=>{

    counters.forEach(counter=>{

        const target=parseInt(counter.innerText);

        let count=0;

        const update=()=>{

            if(count<target){

                count+=Math.ceil(target/speed);

                counter.innerText=count+"+";

                requestAnimationFrame(update);

            }else{

                counter.innerText=target+"+";

            }

        };

        update();

    });

};

const statSection=document.querySelector(".stats");

const statObserver=new IntersectionObserver(entries=>{

    if(entries[0].isIntersecting){

        runCounter();

        statObserver.disconnect();

    }

});

statObserver.observe(statSection);



// ===============================
// SHOOTING STAR
// ===============================

setInterval(()=>{

    const shooting=document.createElement("div");

    shooting.style.position="fixed";

    shooting.style.width="3px";

    shooting.style.height="120px";

    shooting.style.background="linear-gradient(white,transparent)";

    shooting.style.left=Math.random()*window.innerWidth+"px";

    shooting.style.top="-120px";

    shooting.style.transform="rotate(35deg)";

    shooting.style.pointerEvents="none";

    shooting.style.zIndex="-1";

    shooting.style.opacity=".9";

    shooting.style.transition="2s linear";

    document.body.appendChild(shooting);

    setTimeout(()=>{

        shooting.style.top="120%";
        shooting.style.left=(parseInt(shooting.style.left)+250)+"px";

    },50);

    setTimeout(()=>{

        shooting.remove();

    },2200);

},3500);



// ===============================
// MOUSE GLOW
// ===============================

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="180px";

glow.style.height="180px";

glow.style.borderRadius="50%";

glow.style.background="radial-gradient(rgba(0,212,255,.18),transparent 70%)";

glow.style.pointerEvents="none";

glow.style.transform="translate(-50%,-50%)";

glow.style.zIndex="0";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});
// ======================================
// PART 2B
// LOADER + SCROLL TOP + NAVIGATION
// ======================================


// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";

        document.body.style.opacity="1";

    },200);

});



// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00d4ff";
topBtn.style.color="#08111f";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";
topBtn.style.boxShadow="0 0 20px rgba(0,212,255,.5)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});



// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="scale(3)";
ripple.style.opacity="0";

},10);

setTimeout(()=>{

ripple.remove();

},600);

});

});



// ===============================
// GREETING
// ===============================

const hour=new Date().getHours();

let greeting="";

if(hour<12){

greeting="☀ Good Morning";

}
else if(hour<17){

greeting="🌤 Good Afternoon";

}
else{

greeting="🌙 Good Evening";

}

console.log(greeting+" | Welcome to Nova Science Hub!");
/* ===================================
   NOVA AI CHAT - PART 1
=================================== */

const aiButton = document.getElementById("aiButton");
const aiChat = document.getElementById("aiChat");
const closeChat = document.getElementById("closeChat");

// Open Chat

aiButton.addEventListener("click", () => {

    aiChat.style.display = "flex";

});

// Close Chat

closeChat.addEventListener("click", () => {

    aiChat.style.display = "none";

});
/* ===================================
   NOVA AI CHAT - PART 2
=================================== */

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

function sendMessage() {

    let question = userInput.value.trim();

    if(question === "") return;

    // User Message
    let userMsg = document.createElement("div");

    userMsg.className = "bot-message";

    userMsg.style.background = "#00d4ff";
    userMsg.style.color = "#08111f";
    userMsg.style.marginLeft = "50px";

    userMsg.innerHTML = question;

    chatBody.appendChild(userMsg);

    let answer = "";

    let q = question.toLowerCase();

    // Physics Answers

    if(q.includes("force")){

        answer = "Force is a push or pull acting on an object.<br><br><b>Formula:</b> F = m × a";

    }

    else if(q.includes("newton")){

        answer = "Newton's First Law states that an object remains at rest or in uniform motion unless acted upon by an external force.";

    }

    else if(q.includes("velocity")){

        answer = "Velocity is the speed of an object in a particular direction.";

    }

    else if(q.includes("speed")){

        answer = "Speed is the distance travelled per unit time.";

    }

    else if(q.includes("energy")){

        answer = "Energy is the ability to do work.";

    }

    else if(q.includes("work")){

        answer = "Work is done when a force moves an object.<br><br><b>Formula:</b> W = F × d";

    }

    else if(q.includes("power")){

        answer = "Power is the rate of doing work.<br><br><b>Formula:</b> P = W / t";

    }

    else if(q.includes("hello") || q.includes("hi")){

        answer = "Hello 👋 Welcome to Nova Science Hub. Ask me any Physics question.";

    }

    else{

        answer = "🤖 Sorry! I don't know this answer yet. More Physics topics will be added soon.";

    }

    setTimeout(()=>{

        let botMsg = document.createElement("div");

        botMsg.className = "bot-message";

        botMsg.innerHTML = answer;

        chatBody.appendChild(botMsg);

        chatBody.scrollTop = chatBody.scrollHeight;

    },600);

    userInput.value="";

}

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});
/* ===================================
   NOVA AI CHAT - PART 3
=================================== */

const physicsAnswers = {

    "force":"Force is a push or pull acting on an object.<br><br><b>Formula:</b> F = m × a",

    "newton":"Newton's Laws explain the relationship between force and motion.",

    "velocity":"Velocity is speed in a specific direction.<br><br><b>Formula:</b> v = displacement / time",

    "speed":"Speed is distance travelled per unit time.<br><br><b>Formula:</b> Speed = Distance / Time",

    "distance":"Distance is the total path travelled by an object.",

    "displacement":"Displacement is the shortest distance between initial and final position.",

    "acceleration":"Acceleration is the rate of change of velocity.<br><br><b>Formula:</b> a = (v-u)/t",

    "momentum":"Momentum is mass multiplied by velocity.<br><br><b>Formula:</b> p = mv",

    "energy":"Energy is the ability to do work.",

    "kinetic":"Kinetic Energy = ½mv²",

    "potential":"Potential Energy = mgh",

    "work":"Work is done when force moves an object.<br><br><b>Formula:</b> W = F × d",

    "power":"Power is the rate of doing work.<br><br><b>Formula:</b> P = W / t",

    "pressure":"Pressure is Force per unit Area.<br><br><b>Formula:</b> P = F / A",

    "gravity":"Gravity is the force that attracts objects toward Earth.",

    "mass":"Mass is the amount of matter in an object.",

    "weight":"Weight is the gravitational force acting on a body.<br><br><b>Formula:</b> W = mg",

    "wave":"A wave transfers energy from one place to another.",

    "light":"Light is an electromagnetic wave.",

    "electricity":"Electricity is the flow of electric charge.",

    "current":"Electric Current = Charge / Time",

    "voltage":"Voltage is the electrical potential difference.",

    "ohm":"Ohm's Law:<br><br><b>V = I × R</b>",

    "atom":"An atom is the smallest unit of matter.",

    "electron":"Electron is a negatively charged particle.",

    "proton":"Proton carries positive charge.",

    "neutron":"Neutron has no electric charge."

};
/* ===================================
   NOVA AI CHAT - PART 4
=================================== */

function getPhysicsAnswer(question){

    let q = question.toLowerCase();

    // Greetings

    if(q.includes("hello") || q.includes("hi")){

        return "👋 Hello! Welcome to <b>Nova Science Hub</b>.<br><br>Ask me any Physics question.";

    }

    if(q.includes("good morning")){

        return "🌞 Good Morning! Ready to learn Physics today?";

    }

    if(q.includes("good night")){

        return "🌙 Good Night! Keep learning and stay curious.";

    }

    if(q.includes("thanks") || q.includes("thank you")){

        return "😊 You're welcome! Happy Learning.";

    }

    if(q.includes("bye")){

        return "👋 Goodbye! See you again on Nova Science Hub.";

    }

    // Physics Topics

    for(let key in physicsAnswers){

        if(q.includes(key)){

            return physicsAnswers[key];

        }

    }

    return "🤖 Sorry! I don't know this answer yet.<br><br>More Physics chapters will be added in future updates.";
}


// Replace old sendMessage()

sendMessage = function(){

    let question = userInput.value.trim();

    if(question==="") return;

    // User Message

    let user=document.createElement("div");

    user.className="bot-message";

    user.style.background="#00d4ff";

    user.style.color="#08111f";

    user.style.marginLeft="50px";

    user.innerHTML=question;

    chatBody.appendChild(user);

    chatBody.scrollTop=chatBody.scrollHeight;

    // Typing Animation

    let typing=document.createElement("div");

    typing.className="bot-message";

    typing.id="typingAI";

    typing.innerHTML="🤖 Nova AI is typing...";

    chatBody.appendChild(typing);

    chatBody.scrollTop=chatBody.scrollHeight;

    // AI Reply

    setTimeout(()=>{

        typing.remove();

        let bot=document.createElement("div");

        bot.className="bot-message";

        bot.innerHTML=getPhysicsAnswer(question);

        chatBody.appendChild(bot);

        chatBody.scrollTop=chatBody.scrollHeight;

    },1200);

    userInput.value="";

}