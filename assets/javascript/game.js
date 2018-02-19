var randomStartNum = Math.floor(Math.random() * (120 - 19) + 19);
var userEntryArray = [];

/**** Random number between 19 - 120 is generated and displayed after html has loaded ****/

$( document ).ready(function() {
    $("#random-num").text(randomStartNum); 
    console.log("Random #: " + randomStartNum);
});

/**** Capture values that are randomly generated upon click of button ****/

$("#button1").on("click", function () {
    var buttonNum1 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#button1").text(buttonNum1);
    userEntryArray.push(buttonNum1);
    console.log("Button #1: " + buttonNum1);
    
});
 
$("#button2").on("click", function () {
    var buttonNum2 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#button2").text(buttonNum2);
    userEntryArray.push(buttonNum2);
    console.log("Button #2: " + buttonNum2);
});

$("#button3").on("click", function () {
    var buttonNum3 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#button3").text(buttonNum3);
    userEntryArray.push(buttonNum3);
    console.log("Button #3: " + buttonNum3);
});

$("#button4").on("click", function () {
    var buttonNum4 = Math.floor(Math.random() * (12 - 1) + 1);
    $("#button4").text(buttonNum4);
    userEntryArray.push(buttonNum4);
    console.log("Button #4: " + buttonNum4);
});


/**** Perform Calculations ****/

//function used to add the values in an array; passing it as a callback function in the total score function
function addArrayValues (total, num) {
    return total + num; 
}
//calculates totalScore per entry

// Issue: totalScore function is not being called; but it works
// Issue: button value changes each time you click; need it to stay same for current game and reset for next game (for loop)
function totalScore () {
    var arrayTotal = userEntryArray.reduce(addArrayValues);//using reduce method to reduce array into a single value by calling a function that adds all the values in the array
    $("#total-score").text(arrayTotal);
    console.log ("total score: " + arrayTotal); 
        // if (arrayTotal === randomStartNum) {
        //     alert("you win!");
        // }
        // else if(arrayTotal > randomStartNum) {
        //     alert ("you lose!");
        // }
}




