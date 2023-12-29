var randomNumber1 = Math.floor(Math.random()*6)+1;    //Declaring the vars with the random numbers between 1 - 6
var randomNumber2 = Math.floor(Math.random()*6)+1;


var src1 = "./images/dice" + randomNumber1 + ".png";      // Declaring the vars for the images according to the rolled dice
var src2 = "./images/dice" + randomNumber2 + ".png";   


document.querySelector(".img1").setAttribute("src" , src1);      //Setting the Attribute src to the correct img
document.querySelector(".img2").setAttribute("src" , src2);

if (randomNumber1>randomNumber2){                                   //Checking results to declare the winner
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins" ;
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}

