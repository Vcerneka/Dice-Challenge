// Rolling the dice

function randomNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

var dice1 = randomNumber();
var dice2 = randomNumber();

var dice1ImageSource = "./images/dice" + dice1 + ".png";
var dice2ImageSource = "./images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1ImageSource);
document.querySelector(".img2").setAttribute("src", dice2ImageSource);

if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!	&#128681";
} else if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// Button draw again

var drawButton = document.querySelector(".draw-button");

drawButton.addEventListener("click", function() {
    location.reload();
});