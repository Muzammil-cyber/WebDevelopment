
function Roll() {
    // Generates random Number
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Changes Image
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Checks who wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    }
    else {
        document.querySelector("h1").textContent = "!! Tie !!"
    }

}


