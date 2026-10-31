/* ==========================================
   PAGE 5
   PART 3
========================================== */

// Elements

const memoryPhoto = document.getElementById("memoryPhoto");
const photoText = document.getElementById("photoText");
const nextPhoto = document.getElementById("nextPhoto");
const nextPage = document.getElementById("nextPage");

// Photos

const photos = [

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg"

];

// Captions

const captions = [

"Kuchhhh Yaaadddd Aayaa janemann ❤️",

"The Only Smile which Kill me 🖤",

"Every moment with you is my best part of life 🌹",

"I Am your's & You aree mine..‽ ✨",

"I belive Never someone Break our relationship ❤️"

];

let current = 0;

// Show First Photo

memoryPhoto.src = photos[current];
photoText.innerHTML = captions[current];
document.getElementById("photoCount").innerHTML =
`Photo ${current + 1} / ${photos.length}`;

// Next Photo Button

nextPhoto.addEventListener("click",()=>{

current++;

if(current < photos.length){

memoryPhoto.style.transition="0.6s";
memoryPhoto.style.opacity="0";
memoryPhoto.style.transform="scale(0.9)";

setTimeout(()=>{

memoryPhoto.src=photos[current];

photoText.innerHTML=captions[current];

document.getElementById("photoCount").innerHTML =
`Photo ${current + 1} / ${photos.length}`;

memoryPhoto.style.opacity="1";
memoryPhoto.style.transform="scale(1)";

},500);

}

else{

nextPhoto.style.display="none";

nextPage.style.display="inline-block";

}

});

// Continue

nextPage.addEventListener("click",()=>{

window.location.href="page6.html";

});/* ==========================================
   PAGE 5
   PART 4
   PREMIUM ANIMATIONS
========================================== */

// Background Elements

const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");
const stars = document.getElementById("stars");

// 🖤 Black Hearts

function createHeart(){

const heart=document.createElement("div");

const heartEmojis = [
"🖤",
"💋",
"🫶🏼",
"🫀"
];

heart.innerHTML =
heartEmojis[Math.floor(Math.random()*heartEmojis.length)];

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-40px";
heart.style.fontSize=(12+Math.random()*8)+"px";
heart.style.pointerEvents="none";

hearts.appendChild(heart);

let x=Math.random()*window.innerWidth;
let y=-40;
const speed=1+Math.random()*1.2;
let angle=Math.random()*6.28;

function animate(){

y+=speed;
angle+=0.02;
x+=Math.sin(angle)*0.5;

heart.style.left=x+"px";
heart.style.top=y+"px";
heart.style.transform=`rotate(${angle*30}deg)`;

if(y<window.innerHeight+60){

requestAnimationFrame(animate);

}else{

heart.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createHeart,900);

// 🌼 White Jasmine Petals

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌼";

petal.style.position="absolute";
petal.style.left=Math.random()*100+"vw";
petal.style.top="-40px";
petal.style.fontSize=(14+Math.random()*8)+"px";
petal.style.pointerEvents="none";

flowers.appendChild(petal);

let x=Math.random()*window.innerWidth;
let y=-40;
const speed=.8+Math.random();
let angle=Math.random()*6.28;

function animate(){

y+=speed;
angle+=0.015;
x+=Math.sin(angle)*0.7;

petal.style.left=x+"px";
petal.style.top=y+"px";
petal.style.transform=`rotate(${angle*40}deg)`;

if(y<window.innerHeight+60){

requestAnimationFrame(animate);

}else{

petal.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createPetal,1400);

// ⭐ Twinkling Stars

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