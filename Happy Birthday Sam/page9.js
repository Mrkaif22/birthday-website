/* ==========================================
   PAGE 9
========================================== */

// Continue Button

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click",()=>{

window.location.href="page10.html";

});
/* ==========================================
   PAGE 9 PREMIUM ANIMATIONS
========================================== */

// Hearts

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

const emojis=["🖤","🤍","🫶🏼","🫀"];

heart.innerHTML=
emojis[Math.floor(Math.random()*emojis.length)];

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-40px";
heart.style.fontSize=(14+Math.random()*10)+"px";
heart.style.pointerEvents="none";

hearts.appendChild(heart);

let x=Math.random()*window.innerWidth;
let y=-40;
let angle=Math.random()*6.28;
const speed=1+Math.random()*1.3;

function animate(){

y+=speed;
angle+=0.02;
x+=Math.sin(angle)*0.7;

heart.style.left=x+"px";
heart.style.top=y+"px";
heart.style.transform=`rotate(${angle*35}deg)`;

if(y<window.innerHeight+60){

requestAnimationFrame(animate);

}else{

heart.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createHeart,900);


// Jasmine Flowers

const flowers=document.getElementById("flowers");

function createFlower(){

const flower=document.createElement("div");

flower.innerHTML="🌼";

flower.style.position="absolute";
flower.style.left=Math.random()*100+"vw";
flower.style.top="-40px";
flower.style.fontSize=(14+Math.random()*8)+"px";

flowers.appendChild(flower);

let x=Math.random()*window.innerWidth;
let y=-40;
let angle=Math.random()*6.28;
const speed=.8+Math.random();

function animate(){

y+=speed;
angle+=0.015;
x+=Math.sin(angle)*0.8;

flower.style.left=x+"px";
flower.style.top=y+"px";

if(y<window.innerHeight+60){

requestAnimationFrame(animate);

}else{

flower.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createFlower,1400);


// Stars

const stars=document.getElementById("stars");

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