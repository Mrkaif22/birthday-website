/* ==========================================
   PAGE 12
   FINAL BIRTHDAY SURPRISE 🎂
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const particleContainer =
    document.getElementById("particle-container");

const heartContainer =
    document.getElementById("heart-container");

const candles =
    document.querySelectorAll(".candle");

const birthdayMessage =
    document.getElementById("birthday-message");


/* ==========================================
   SPARKLES & STARS
========================================== */

const sparkleSymbols = [
    "✦",
    "✧",
    "⋆",
    "⭐",
    "✨",
    "✦"
];


function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";

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
        (7 + Math.random() * 12) + "px";


    /* Random animation */

    const duration =
        2 + Math.random() * 2;

    sparkle.style.animationDuration =
        duration + "s";

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";


    particleContainer.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, (duration + 4) * 1000);
}


/* Create sparkles */

setInterval(
    createSparkle,
    250
);


/* Initial sparkles */

for (let i = 0; i < 20; i++) {

    setTimeout(
        createSparkle,
        i * 180
    );

}


/* ==========================================
   FALLING HEARTS
========================================== */

const heartSymbols = [
    "❤️",
    "🩷",
    "💖",
    "💕",
    "💗",
    "💓"
];


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "falling-heart";

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    /* Position */

    heart.style.left =
        Math.random() * 100 + "vw";


    /* Size */

    heart.style.fontSize =
        (12 + Math.random() * 13) + "px";


    /* Slow smooth falling */

    const duration =
        7 + Math.random() * 4;

    heart.style.animationDuration =
        duration + "s";


    heart.style.animationDelay =
        Math.random() * 2 + "s";


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);
}


/* Create hearts slowly */

setInterval(
    createHeart,
    400
);


/* Initial hearts */

for (let i = 0; i < 14; i++) {

    setTimeout(
        createHeart,
        i * 220
    );

}


/* ==========================================
   CANDLE SYSTEM
========================================== */

let candlesExtinguished = 0;


/* ==========================================
   CANDLE CLICK
========================================== */

candles.forEach((candle) => {

    candle.addEventListener(
        "click",
        function () {

            /* Already turned off */

            if (
                candle.classList.contains(
                    "extinguished"
                )
            ) {
                return;
            }


            /* Turn off THIS candle */

            candle.classList.add(
                "extinguished"
            );


            candlesExtinguished++;


            /* Small sparkle burst */

            createCandleSparkles(
                candle
            );


            /* Check all candles */

            if (
                candlesExtinguished ===
                candles.length
            ) {

                revealBirthdayMessage();

            }

        }
    );

});


/* ==========================================
   CANDLE SPARKLE BURST
========================================== */

function createCandleSparkles(
    candle
) {

    const rect =
        candle.getBoundingClientRect();


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const sparkle =
            document.createElement("div");

        sparkle.className =
            "sparkle";

        sparkle.textContent =
            "✦";

        sparkle.style.left =
            rect.left +
            Math.random() *
            rect.width +
            "px";

        sparkle.style.top =
            rect.top +
            Math.random() *
            rect.height +
            "px";

        sparkle.style.fontSize =
            (8 + Math.random() * 8) +
            "px";

        sparkle.style.animationDuration =
            "1.5s";

        sparkle.style.animationDelay =
            Math.random() *
            0.3 +
            "s";

        particleContainer.appendChild(
            sparkle
        );


        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

}


/* ==========================================
   REVEAL BIRTHDAY MESSAGE
========================================== */

function revealBirthdayMessage() {

    /* Small delay for final candle */

    setTimeout(() => {

        birthdayMessage.classList.add(
            "show"
        );


        /* Celebration sparkles */

        createFinalCelebration();

    }, 700);

}


/* ==========================================
   FINAL CELEBRATION
========================================== */

function createFinalCelebration() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(() => {

            createSparkle();

        }, i * 70);

    }

}