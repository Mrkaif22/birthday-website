/* ==========================================
   PAGE 8
========================================== */

const balloonArea = document.getElementById("balloonArea");
const counter = document.getElementById("counter");
const nextPage = document.getElementById("nextPage");

let popped = 0;

const balloonEmoji = [

"🫀",
"🫠",
"💋",
"👀",
"💘",
"🖤",
"🩷",
"🩵",
"🫀",
"🫠",
"💋",
"👀",
"💘",
"🖤",
"🩷",
"🩵"

];

// Create Balloons One By One

for(let i=0;i<16;i++){

setTimeout(()=>{

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML = balloonEmoji[
Math.floor(Math.random()*balloonEmoji.length)
] + "🎈";

balloon.onclick=function(){

balloon.style.pointerEvents="none";

// Balloon grows before popping

balloon.style.transition=".25s";

balloon.style.transform="scale(1.35) rotate(10deg)";

setTimeout(()=>{

balloon.innerHTML="💥";

balloon.style.transform="scale(.3)";

balloon.style.opacity="0";

createConfetti(balloon);

},180);

popped++;

counter.innerHTML=
popped+" / 16 Balloons Popped";

if(popped===16){

counter.innerHTML=
"🎉 Happy Birtgday to the most most nosttttt prettiest person in the world The most cute person in the worldd bubu i amm soo soo Happy For your Birthdayy Begummm jii.. May allah Always Bless you Always Protect you Fron me..🌚May Allah Accept your All Duas...              I loveeeeeeeeeeeeeeeee youuuuuuuuuuuuu sooooo Muchhhh Melli Jaan myyy Begunmmm meriiu Choti don..🫠🥹🫂👀🫀......Bubu I loveeeeeeeeee Youuuuuuuu Todayyyyy,Tomorrow , And Alwayssssssss I am onlyyy Your's begummmmmm🎂";

setTimeout(()=>{

nextPage.style.display="inline-block";

},1200);

}

};

balloonArea.appendChild(balloon);

},i*350);

}

// Continue

nextPage.addEventListener("click",()=>{

window.location.href="page9.html";

});
/* ==========================================
   PAGE 8 PREMIUM ANIMATIONS
========================================== */

// Hearts

const hearts = document.getElementById("hearts");

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
const speed=1+Math.random()*1.4;

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
/* ==========================================
   MINI CONFETTI
========================================== */

function createConfetti(balloon){

const rect=balloon.getBoundingClientRect();

for(let i=0;i<18;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.left=rect.left+25+"px";

piece.style.top=rect.top+25+"px";

piece.style.width="7px";

piece.style.height="7px";

piece.style.borderRadius="50%";

const colors=[
"#ff1493",
"#ff69b4",
"#ffd700",
"#00ff99",
"#00bfff",
"#ffffff"
];

piece.style.background=
colors[Math.floor(Math.random()*colors.length)];

piece.style.pointerEvents="none";

document.body.appendChild(piece);

const x=(Math.random()-0.5)*180;

const y=(Math.random()-0.5)*180;

piece.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:700,
easing:"ease-out"

});

setTimeout(()=>{

piece.remove();

},700);

document.getElementById("birthdayMessage").innerHTML =
"Your long birthday message...";

}

}