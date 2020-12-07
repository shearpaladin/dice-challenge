//  Check if Javascript is working
//alert("Working")

// Since math.random() returns numbers from 0 to 0.99 we multiply by 6 to get it to 0 to 5.99 + 1 = 6.99 then floor it
// so now the interval is between 0 to 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1)

var randomDiceImage = "dice" + randomNumber1 + ".png"; //randomize from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png to images/dice6.png

// Select DOM images to change

var image1 = document.querySelectorAll("img")[0];

// We want to change the src attribute to randomImageSource
image1.setAttribute("src", randomImageSource)

// Second Dice

var randomNumber2 = Math.floor((Math.random() * 6) + 1)

// notice path is "images/dice" since we skipped one step
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2)

// Case 1: Player 1 Wins
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}

// Case 2: Player 2 Wins
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

// Case 3: Tie
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
