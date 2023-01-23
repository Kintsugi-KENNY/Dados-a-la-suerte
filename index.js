
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png


var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png


var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

//Jugador 1 gana
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "¡🚩El jugador 1 gana!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML ="¡El jugador 2 gana!🚩"
}
else {
    document.querySelector("h1").innerHTML ="Empatados"
}

