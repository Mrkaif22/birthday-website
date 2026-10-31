/* ===========================================
   HAPPY BIRTHDAY WEBSITE
   PAGE 1
   SCRIPT - PART 1
===========================================*/

// ===== PASSWORD =====
const PASSWORD = "18122025";

// ===== GET HTML ELEMENTS =====
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const nextButton = document.getElementById("nextButton");

// ===== CHECK PASSWORD =====
unlockBtn.addEventListener("click", () => {

    const entered = passwordInput.value.trim();

    if (entered === PASSWORD) {

    message.style.color = "#00ff99";
    message.innerHTML = "❤️ Welcome Princess ❤️";

    nextButton.style.display = "block";

    const bgMusic = document.getElementById("bgMusic");
    bgMusic.play();

} else {

        message.style.color = "#ff4444";
        message.innerHTML = "❌ Wrong Password";

    }

});

// ===== NEXT PAGE BUTTON =====
nextButton.addEventListener("click", () => {

    window.location.href = "page2.html";

});/* ===========================================
   PAGE 1 - SCRIPT PART 2
   FALLING HEARTS
===========================================*/

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    if(!heartsContainer) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "absolute";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.top = "-40px";

    heart.style.fontSize = (18 + Math.random()*22) + "px";

    heart.style.opacity = Math.random();

    heart.style.transition = "transform linear, top linear";

    heartsContainer.appendChild(heart);

    const duration = 7000 + Math.random()*5000;

    requestAnimationFrame(()=>{

        heart.style.top = "110%";

        heart.style.transform =
        `translateX(${(Math.random()-0.5)*250}px) rotate(${Math.random()*360}deg)`;

        heart.style.transitionDuration = duration + "ms";

    });

    setTimeout(()=>{

        heart.remove();

    },duration);

}

setInterval(createHeart,350);/* ===========================================
   PAGE 1 - SCRIPT PART 3
===========================================*/

// FLOWERS

const flowersContainer = document.getElementById("flowers");

function createFlower(){

const flower = document.createElement("div");

flower.innerHTML="🌹";

flower.style.position="absolute";

flower.style.left=Math.random()*100+"%";

flower.style.top="-50px";

flower.style.fontSize=(18+Math.random()*18)+"px";

flower.style.opacity=.9;

flower.style.transition="all linear";

flowersContainer.appendChild(flower);

const time=8000+Math.random()*4000;

requestAnimationFrame(()=>{

flower.style.top="110%";

flower.style.transform=
`translateX(${(Math.random()-0.5)*220}px)
rotate(${Math.random()*720}deg)`;

flower.style.transitionDuration=time+"ms";

});

setTimeout(()=>{

flower.remove();

},time);

}

setInterval(createFlower,500);


// SPARKLES

const sparkles=document.getElementById("sparkles");

for(let i=0;i<80;i++){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="absolute";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.fontSize=(8+Math.random()*12)+"px";

s.style.opacity=Math.random();

s.style.animation=`twinkle ${2+Math.random()*3}s infinite`;

sparkles.appendChild(s);

}


// STARS

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.innerHTML="•";

star.style.position="absolute";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.color="white";

star.style.opacity=Math.random();

star.style.fontSize=(2+Math.random()*5)+"px";

stars.appendChild(star);

}/* ===========================================
   PASSWORD SYSTEM
===========================================*/

function checkPassword(){

const password = document.getElementById("password").value;

if(password === "18122025"){

alert("❤️ Welcome My Love ❤️");

// go to next page


}

else{

alert("❌ Wrong Password");

}

}