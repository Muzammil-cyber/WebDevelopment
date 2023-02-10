var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play();
}

function nextSequence() {
    // Generate a Random number between 0 and 3?
    const rndInt = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[rndInt];
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor)
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    level++;
    $("h1").text("Level " + level);

}

$(".btn").click(function (e) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)

});



function animatePress(currentColor) {
    activeBtn = $("#" + currentColor);
    activeBtn.addClass("pressed");
    setTimeout(function () {
        activeBtn.removeClass("pressed")
    }, 100);
}

$("body").keydown(function () {
    if (!started) {
        nextSequence();
        $("h1").text("Level " + level);
        started = true;
    }
});

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
                userClickedPattern = [];
            }, 1000)
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over")
        setTimeout(function () {
            $("body").removeClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver()
        }, 1000);

    }

}

