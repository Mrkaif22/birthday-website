/* ==========================================
   PAGE 10
   SMOOTH FALLING HEARTS
========================================== */

const heartContainer = document.getElementById("heart-container");
const nextButton = document.getElementById("nextButton");

const hearts = [
    "❤️",
    "🩷",
    "💖",
    "💕",
    "💗",
    "💓",
    "💞",
    "💘"
];


/* ==========================================
   CREATE SMOOTH HEART
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "falling-heart";

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];


    /* Random starting position */

    heart.style.left =
        Math.random() * 100 + "vw";


    /* Natural size */

    const size =
        13 + Math.random() * 13;

    heart.style.fontSize =
        size + "px";


    /* Smooth random speed */

    const duration =
        8 + Math.random() * 3;

    heart.style.animationDuration =
        duration + "s";


    /* Different starting points */

    heart.style.animationDelay =
        Math.random() * 2 + "s";


    /* Add heart */

    heartContainer.appendChild(heart);


    /* Remove automatically */

    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);
}


/* ==========================================
   CREATE HEARTS SLOWLY
========================================== */

setInterval(createHeart, 850);


/* ==========================================
   INITIAL HEARTS
========================================== */

for (let i = 0; i < 7; i++) {

    setTimeout(
        createHeart,
        i * 500
    );

}


/* ==========================================
   NEXT BUTTON
========================================== */

nextButton.addEventListener("click", function () {

    window.location.href = "page11.html";

});