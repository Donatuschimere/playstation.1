var randomNumber1 = Math.floor(Math.random() * 6 + 1)
var randomNumber2 = Math.floor(Math.random() * 6 + 1) //1-6
// console.log(randomNumber1)

// SECOND IS TO RANDOMLY SELECT THE IMAGES
var randomDiceImage = "dice" + randomNumber1 + ".png" //dices.png -dice6.png
var randomImagesrc = "images/" + randomDiceImage; // images/dices.png-6
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImagesrc)


// FOR THE SECOND IMAGE ELEMENT
var randomDiceImage = "dice" + randomNumber2 + ".png"
var randomImagesrc = "images/" + randomDiceImage
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImagesrc)


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player number one wins"
}else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player number two wins"
}else {
    document.querySelector("h1").innerHTML = "The Game is Draw"
}