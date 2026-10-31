/* ==========================================
   PAGE 11
   SMOOTH FALLING HEARTS + NEXT BUTTON
========================================== */

const heartContainer = document.getElementById("heart-container");
const nextButton = document.getElementById("nextButton");


/* ==========================================
   HEART EMOJIS
========================================== */

const hearts = [
    "🙈",
    "🫂",
    "👻",
    "💋",
    "💋",
    "🌹",
    "👀",
    "🫠"
];


/* ==========================================
   CREATE SMOOTH FALLING HEART
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "falling-heart";

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];


    /* Random horizontal position */

    heart.style.left =
        Math.random() * 100 + "vw";


    /* Natural size */

    const size =
        13 + Math.random() * 13;

    heart.style.fontSize =
        size + "px";


    /* Smooth falling speed */

    const duration =
        7 + Math.random() * 3;

    heart.style.animationDuration =
        duration + "s";


    /* Random starting delay */

    heart.style.animationDelay =
        Math.random() * 2 + "s";


    /* Add heart */

    heartContainer.appendChild(heart);


    /* Remove after animation */

    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);
}


/* ==========================================
   CONTINUOUS HEARTS
========================================== */

setInterval(createHeart, 350);


/* ==========================================
   INITIAL HEARTS
========================================== */

for (let i = 0; i < 16; i++) {

    setTimeout(
        createHeart,
        i * 220
    );

}
/* ==========================================
   SPARKLES & STARS
========================================== */

const sparkleContainer =
    document.getElementById("sparkle-container");

const sparkleSymbols = [
    "✦",
    "✧",
    "⋆",
    "✦",
    "⭐"
];


function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.textContent =
        sparkleSymbols[
            Math.floor(
                Math.random() *
                sparkleSymbols.length
            )
        ];


    /* Random position */

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";


    /* Random size */

    sparkle.style.fontSize =
        (7 + Math.random() * 11) + "px";


    /* Random twinkle speed */

    const duration =
        2.5 + Math.random() * 3;

    sparkle.style.animationDuration =
        duration + "s";


    /* Random starting delay */

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";


    sparkleContainer.appendChild(sparkle);


    setTimeout(() => {

        sparkle.remove();

    }, (duration + 4) * 1000);
}


/* Create sparkles slowly */

setInterval(createSparkle, 220);


/* Initial sparkles */

for (let i = 0; i < 30; i++) {

    setTimeout(
        createSparkle,
        i * 120
    );

}


/* ==========================================
   NEXT BUTTON
========================================== */

nextButton.addEventListener("click", function () {

    window.location.href = "page12.html";

});