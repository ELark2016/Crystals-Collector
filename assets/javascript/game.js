var randomStartNum = Math.floor(Math.random() * (120 - 19) + 19);
var buttonNum1 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum2 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum3 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum4 = Math.floor(Math.random() * (12 - 1) + 1);
var userEntryArray = [];
var arrayTotal;
var wins = 0;
var losses = 0;


/* Random number between 19 - 120 is generated and displayed after html 
has loaded and game board is initialized */

$( document ).ready(function() {
    $("#random-num").text(randomStartNum); 
    $("#total-score").text("0");
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
    console.log("Random #: " + randomStartNum);
});



/* Capture values that are randomly generated upon click of button 
& update total score*/

$("#button1").on("click", function () {
    $("#button1").text(buttonNum1);
    userEntryArray.push(buttonNum1);
    console.log("Button #1: " + buttonNum1);
    totalScore();
    console.log ("total score: " + arrayTotal);   
    if (arrayTotal === randomStartNum) {
        $("#total-score").text(arrayTotal);
        wins += 1;
        $("#wins").text("Wins: " + wins);
        
        alert ("You win!");
        // newGame();
    }
   
    if (arrayTotal > randomStartNum) {
        $("#total-score").text(arrayTotal);
        losses += 1;
        $("#losses").text("Losses: " + losses);
        
        alert ("You lose!");
        // newGame();
    }
    
});
$("#button2").on("click", function () {
    $("#button2").text(buttonNum2);
    userEntryArray.push(buttonNum2);
    console.log("Button #2: " + buttonNum2);
    totalScore();
        if (arrayTotal === randomStartNum) {
            wins += 1;
            $("#wins").text("Wins: " + wins);
            //newGame();
        }
        if (arrayTotal > randomStartNum) {
            losses += 1;
            $("#losses").text("Losses: " + losses);
            //newGame();
        }
    console.log ("total score: " + arrayTotal);
});

$("#button3").on("click", function () {
    $("#button3").text(buttonNum3);
    userEntryArray.push(buttonNum3);
    console.log("Button #3: " + buttonNum3);
    totalScore();
    if (arrayTotal === randomStartNum) {
        wins += 1;
        $("#wins").text("Wins: " + wins);
        //newGame();
    }
    if (arrayTotal > randomStartNum) {
        losses += 1;
        $("#losses").text("Losses: " + losses);
        //newGame();
    }
    console.log ("total score: " + arrayTotal);
});

$("#button4").on("click", function () {
    $("#button4").text(buttonNum4);
    userEntryArray.push(buttonNum4);
    console.log("Button #4: " + buttonNum4);
    totalScore();
        if (arrayTotal === randomStartNum) {
            wins += 1;
            $("#wins").text("Wins: " + wins);
            //newGame();
        }
        // alert("Nice work - you win! Can you do it again?")
        if (arrayTotal > randomStartNum) {
            losses += 1;
            $("#losses").text("Losses: " + losses);
            //newGame();
        }
        // alert("You Lose. Try again!")
    console.log ("total score: " + arrayTotal);
});

//function used to add the values in an array; passing it as a callback function in the total score function
function addArrayValues (total, num) {
    return total + num; 
}
//calculates cumulative totalScore using reduce method
function totalScore () {
    arrayTotal = userEntryArray.reduce(addArrayValues);//using reduce method to reduce array into a single value by calling a function that adds all the values in the array
    $("#total-score").text(arrayTotal);
}
// Generate new random number for new game 
function newGame () {
    var newNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#random-num").text(newNum);    
    // userEntryArray = [];
}

//Things to fix:
// 1. need to display array total after users last guess prior to starting new game
// Note: right now; the total function runs after a click; need to get it outside of click
// 2. figure out where to put new game function (function works just need proper placement)





