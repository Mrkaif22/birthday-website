/* ==========================================
   PAGE 6
========================================== */

// Elements

const chatPhoto = document.getElementById("chatPhoto");
const chatText = document.getElementById("chatText");
const nextChat = document.getElementById("nextChat");
const nextPage = document.getElementById("nextPage");

// Chat Images

const chats = [

"images/chat1.jpg",
"images/chat2.jpg",
"images/chat3.jpg",
"images/chat4.jpg",
"images/chat5.jpg",

];

// Captions

const captions = [

"You are My Everything Jawnn ❤️",

"You Never Describe how much i was Happy on that Time 🫶🏼",

"To get this Answer i wass waiting soo muchh Time 💖",

"The First Time i say You I loveee youuu my Jannn Melli Bubu 🥹",

"Kiaaaa bolaa ree 50 60 thori Hein mere pass...🫠🥹👀❤️"

];

let current = 0;

// First Chat

chatPhoto.src = chats[current];
chatText.innerHTML = captions[current];

// Next Chat

nextChat.addEventListener("click",()=>{

current++;

if(current < chats.length){

chatPhoto.style.opacity="0";
chatPhoto.style.transform="scale(0.95)";

setTimeout(()=>{

chatPhoto.src = chats[current];
chatText.innerHTML = captions[current];

chatPhoto.style.opacity="1";
chatPhoto.style.transform="scale(1)";

},500);

}else{

nextChat.style.display="none";
nextPage.style.display="inline-block";

}

});

// Continue

nextPage.addEventListener("click",()=>{

window.location.href="page7.html";

});
/* ==========================================
   PAGE 6 ANIMATIONS
========================================== */

// Hearts

const hearts = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

const emojis = ["👀","💋","🫠"];

heart.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-40px";
heart.style.fontSize=(14+Math.random()*10)+"px";

hearts.appendChild(heart);

let x=Math.random()*window.innerWidth;
let y=-40;
let angle=Math.random()*6.28;
const speed=1+Math.random()*1.5;

function animate(){

y+=speed;
angle+=0.02;
x+=Math.sin(angle)*0.6;

heart.style.left=x+"px";
heart.style.top=y+"px";

if(y<window.innerHeight+50){

requestAnimationFrame(animate);

}else{

heart.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createHeart,900);


// Jasmine Petals

const flowers = document.getElementById("flowers");

function createPetal(){

const petal = document.createElement("div");

petal.innerHTML="🌼";

petal.style.position="absolute";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-30px";
petal.style.fontSize=(12+Math.random()*8)+"px";

flowers.appendChild(petal);

let x=Math.random()*window.innerWidth;
let y=-30;
let angle=Math.random()*6.28;
const speed=.8+Math.random();

function animate(){

y+=speed;
angle+=0.015;
x+=Math.sin(angle)*0.8;

petal.style.left=x+"px";
petal.style.top=y+"px";

if(y<window.innerHeight+50){

requestAnimationFrame(animate);

}else{

petal.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createPetal,1400);


// Stars

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.innerHTML="✦";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";
star.style.fontSize=(2+Math.random()*5)+"px";
star.style.animationDelay=(Math.random()*2)+"s";

stars.appendChild(star);

}