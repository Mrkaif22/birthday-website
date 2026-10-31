/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   PAGE 2
   PART 1
========================================== */

// ============================
// GET HTML ELEMENTS
// ============================

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const showBtn = document.getElementById("showBtn");
const letter = document.getElementById("letter");
const nextBtn = document.getElementById("nextBtn");

const hearts = document.getElementById("hearts");

// ============================
// PAGE START ANIMATION
// ============================

// Hide everything first

title.style.display = "none";
subtitle.style.display = "none";
showBtn.style.display = "none";
letter.style.display = "none";
nextBtn.style.display = "none";

// Show after 3 seconds

setTimeout(() => {

title.style.display = "block";

subtitle.style.display = "block";

showBtn.style.display = "inline-block";

title.animate(

[
{opacity:0,transform:"translateY(-40px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:1000,
fill:"forwards"
}

);

subtitle.animate(

[
{opacity:0},
{opacity:1}
],

{
duration:1200,
fill:"forwards"
}

);

showBtn.animate(

[
{opacity:0,transform:"scale(.5)"},
{opacity:1,transform:"scale(1)"}
],

{
duration:800,
fill:"forwards"
}

);

},3000);

// ============================
// SHOW LETTER
// ============================

showBtn.addEventListener("click",()=>{

showBtn.style.display="none";

letter.style.display="block";

nextBtn.style.display="inline-block";

letter.animate(

[
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:1000,
fill:"forwards"
}

);

nextBtn.animate(

[
{opacity:0,transform:"scale(.7)"},
{opacity:1,transform:"scale(1)"}
],

{
duration:900,
fill:"forwards"
}

);

});

// ============================
// PREMIUM HEART ENGINE
// ============================

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(12+Math.random()*8)+"px";

heart.style.pointerEvents="none";

heart.style.userSelect="none";

heart.style.zIndex="1";

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

setInterval(createHeart,900);/* ==========================================
   PAGE 2
   PART 2
   PREMIUM ROSES
========================================== */

const flowers = document.getElementById("flowers");

function createRose(){

const rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="absolute";
rose.style.left=Math.random()*100+"vw";
rose.style.top="-50px";
rose.style.fontSize=(16+Math.random()*10)+"px";
rose.style.pointerEvents="none";
rose.style.userSelect="none";
rose.style.zIndex="1";

flowers.appendChild(rose);

let x=Math.random()*window.innerWidth;

let y=-50;

const speed=0.8+Math.random()*1;

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
   PAGE 2
   PART 3
   FLOATING GLOW LIGHTS
========================================== */

for(let i=0;i<20;i++){

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="8px";
glow.style.height="8px";
glow.style.borderRadius="50%";
glow.style.background="rgba(255,80,150,.8)";
glow.style.boxShadow="0 0 20px hotpink";
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
nextBtn.addEventListener("click",()=>{

window.location.href = "page3.html";

});const bgMusic = document.getElementById("bgMusic");

bgMusic.play().catch(() => {
    console.log("Music will start after user interaction.");
});