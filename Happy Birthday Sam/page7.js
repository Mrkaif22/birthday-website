/* ==========================================
   PAGE 7
========================================== */

// Elements

const memoryPhoto = document.getElementById("memoryPhoto");
const photoText = document.getElementById("photoText");
const nextPhoto = document.getElementById("nextPhoto");
const nextPage = document.getElementById("nextPage");

// Photos

const photos = [

"images/memory1.jpg",
"images/memory2.jpg",
"images/memory3.jpg",
"images/memory4.jpg",
"images/memory5.jpg",
"images/memory6.jpg",
"images/memory7.jpg",
"images/memory8.jpg",
"images/memory9.jpg",
"images/memory10.jpg"

];

// Captions

const captions = [

"Ohh ohhhh Beautiful..🌹",

"Ye Smile Mujheee dede Guru..🙃🫠",

"What the pretty Hair yrr mein to Fidda hogaya..💘",

"Sundhar Aankhein , Bikhre Baal kia Jan logi kia muhtarmaa..😭",

"Ohhh ohhh Chashmish..👻",

"Hayeeee meinn to Marr hi gaya jii..😭",

"Miss pretty Kahan bhethii hoo ree..🙃",

"Pehle Dil pe Phir Bag pe kabzaa...🤌🏼😭",

"Yeee to mardalien gi mujhee..❤️‍🩹",

"Ufff Alfazz Khatam..🤌🏼😭"

];

let current = 0;

// First Photo

memoryPhoto.src = photos[current];
photoText.innerHTML = captions[current];

// Next Memory

nextPhoto.addEventListener("click",()=>{

current++;

if(current < photos.length){

memoryPhoto.style.opacity="0";
memoryPhoto.style.transform="scale(.95)";

setTimeout(()=>{

memoryPhoto.src=photos[current];
photoText.innerHTML=captions[current];

memoryPhoto.style.opacity="1";
memoryPhoto.style.transform="scale(1)";

},500);

}else{

nextPhoto.style.display="none";

// Final Message

photoText.innerHTML =
"💖 Kiyaaa hii item hoo yrr app Maza aagaya...👀🌚";

// Glow Effect

document.querySelector(".glass").style.transition="1s";
document.querySelector(".glass").style.boxShadow=
"0 0 30px #ff69b4, 0 0 60px #ff1493";

// Show Continue after 2 seconds

setTimeout(()=>{

nextPage.style.opacity="0";
nextPage.style.display="inline-block";

setTimeout(()=>{

nextPage.style.transition=".8s";
nextPage.style.opacity="1";

},100);

},2000);

}

});

// Continue

nextPage.addEventListener("click",()=>{

window.location.href="page8.html";

});/* ==========================================
   PAGE 7 PREMIUM ANIMATIONS
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
const speed=1+Math.random()*1.5;

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
flower.style.pointerEvents="none";

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
flower.style.transform=`rotate(${angle*40}deg)`;

if(y<window.innerHeight+60){

requestAnimationFrame(animate);

}else{

flower.remove();

}

}

requestAnimationFrame(animate);

}

setInterval(createFlower,1300);


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