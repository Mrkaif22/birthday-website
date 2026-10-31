/* ==========================================
   PAGE 4
   PART 1
========================================== */

// Elements

const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");
const stars = document.getElementById("stars");
const sparkles = document.getElementById("sparkles");
const nextBtn = document.getElementById("nextBtn");

// 🖤 Smooth Falling Black Hearts

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="🖤";

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

// 🌹 Roses

function createRose(){

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="absolute";
rose.style.left=Math.random()*100+"vw";
rose.style.top="-50px";
rose.style.fontSize=(16+Math.random()*10)+"px";
rose.style.pointerEvents="none";

flowers.appendChild(rose);

let x=Math.random()*window.innerWidth;
let y=-50;
const speed=.8+Math.random();
let angle=Math.random()*6.28;

function animate(){

y+=speed;
angle+=0.015;
x+=Math.sin(angle)*0.7;

rose.style.left=x+"px";
rose.style.top=y+"px";
rose.style.transform=`rotate(${angle*40}deg)`;

if(y<window.innerHeight+80){

requestAnimationFrame(animate);

}else{

rose.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createRose,1400);/* ==========================================
   PAGE 4
   PART 2
========================================== */

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

// ✨ Glow Particles

for(let i=0;i<20;i++){

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="8px";

glow.style.height="8px";

glow.style.borderRadius="50%";

glow.style.background="rgba(255,255,255,.7)";

glow.style.boxShadow="0 0 20px white";

glow.style.left=Math.random()*100+"vw";

glow.style.top=Math.random()*100+"vh";

glow.style.pointerEvents="none";

glow.style.zIndex="0";

document.body.appendChild(glow);

let y=parseFloat(glow.style.top);

function move(){

y-=0.3;

if(y<-10){

y=window.innerHeight+10;

glow.style.left=Math.random()*100+"vw";

}

glow.style.top=y+"px";

requestAnimationFrame(move);

}

move();

}

// Continue Button

nextBtn.addEventListener("click",()=>{

window.location.href="page5.html";

});