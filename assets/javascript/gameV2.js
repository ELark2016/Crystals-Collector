var randomButtonNum; 
var buttonNum1 = Math.floor(Math.random() * (12 - 1) + 1);;
var buttonNum2 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum3 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum4 = Math.floor(Math.random() * (12 - 1) + 1);
var randomStartNum;
var userEntryArray = [];
var userTotalScore;
var wins = 0;
var losses = 0;


/* Random number between 19 - 120 is generated and displayed after html 
has loaded and game board is initialized */

$(document).ready(function() {
    randomNum ();
    console.log ("Random #: " + randomStartNum);
    $("#total-score").text("0");
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
    $("#win-msg").hide();
    $("#lost-msg").hide();
});

// on click of button/gem a random number is generated and added to array to arrive at users total score 
    $("#button1").on("click", function (e) {
        userEntryArray.push(buttonNum1);
        console.log ("Button 1: " + buttonNum1);   
        usersScore();
            
    });
    $("#button2").on("click", function (e) {
        userEntryArray.push(buttonNum2);
        console.log ("Button 2: " + buttonNum2);   
        usersScore();
        
    });
    $("#button3").on("click", function (e) {
        userEntryArray.push(buttonNum3);
        console.log ("Button 3: " + buttonNum3);   
        usersScore();
        
    });
    $("#button4").on("click", function (e) {
        userEntryArray.push(buttonNum4);
        console.log ("Button 4: " + buttonNum4);   
        usersScore();
        
    });

// randomly selects a number between 19 - 120
function randomNum () {
    randomStartNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#random-num").text(randomStartNum); 
    
}
// Adds values in array by adding cumulative total to the next avail number until reaches end of array
function addArrayValues (accumulator, current) {
    return accumulator + current; 
}

// Caluculates users total number from total of numbers in array; determines if user has reached or exceeded target number
function usersScore () {
    userTotalScore = userEntryArray.reduce(addArrayValues);
    $("#total-score").text(userTotalScore);
    console.log ("Total Score: " + userTotalScore);
        if (userTotalScore > randomStartNum){
            losses += 1;
            $("#lost-msg").show();
            $("#lost-msg").hide(5000);
            $("#losses").text("Losses: " + losses);
            newGame ();
        }else if (userTotalScore === randomStartNum) {
            wins += 1;
            $("#win-msg").show();
            $("#win-msg").hide(5000);
            $("#wins").text("Wins: " + wins);
            newGame ();
        }
}

// Sets new game w/out reloading page or losing tally of wins/losses
function newGame () {
    $("#random-num").empty();
    randomNum();
    console.log("New target #: " + randomStartNum);
    userEntryArray = [];
    $("#total-score").text("0");
    resetButtons();
}

// resets random number for each buttons once a new game is started
function resetButtons () {
    buttonNum1 = 0;
    buttonNum2 = 0;
    buttonNum3 = 0;
    buttonNum4 = 0;
    buttonNum1 = Math.floor(Math.random() * (12 - 1) + 1);
    buttonNum2 = Math.floor(Math.random() * (12 - 1) + 1);
    buttonNum3 = Math.floor(Math.random() * (12 - 1) + 1);
    buttonNum4 = Math.floor(Math.random() * (12 - 1) + 1);
}






