var randomStartNum = Math.floor(Math.random() * (120 - 19) + 19);
var buttonNum1 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum2 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum3 = Math.floor(Math.random() * (12 - 1) + 1);
var buttonNum4 = Math.floor(Math.random() * (12 - 1) + 1);
var userEntryArray = [];
var arrayTotal;

/**** Random number between 19 - 120 is generated and displayed after html has loaded ****/

$( document ).ready(function() {
    $("#random-num").text(randomStartNum); 
    console.log("Random #: " + randomStartNum);
});

/**** Capture values that are randomly generated upon click of button ****/

$("#button1").on("click", function () {
    $("#button1").text(buttonNum1);
    userEntryArray.push(buttonNum1);
    console.log("Button #1: " + buttonNum1);
    totalScore();
    $("#total-score").html(arrayTotal);
    console.log ("total score: " + arrayTotal);
    
});
 
$("#button2").on("click", function () {
    $("#button2").text(buttonNum2);
    userEntryArray.push(buttonNum2);
    console.log("Button #2: " + buttonNum2);
    totalScore();
    $("#total-score").html(arrayTotal);
    console.log ("total score: " + arrayTotal);
});

$("#button3").on("click", function () {
    $("#button3").text(buttonNum3);
    userEntryArray.push(buttonNum3);
    console.log("Button #3: " + buttonNum3);
    totalScore();
    $("#total-score").html(arrayTotal);
    console.log ("total score: " + arrayTotal);
});

$("#button4").on("click", function () {
    $("#button4").text(buttonNum4);
    userEntryArray.push(buttonNum4);
    console.log("Button #4: " + buttonNum4);
    totalScore();
    $("#total-score").html(arrayTotal);
    console.log ("total score: " + arrayTotal);
});


/**** Calculations ****/

//function used to add the values in an array; passing it as a callback function in the total score function
function addArrayValues (total, num) {
    return total + num; 
}
//calculates cumulative totalScore using reduce method
function totalScore () {
    arrayTotal = userEntryArray.reduce(addArrayValues);//using reduce method to reduce array into a single value by calling a function that adds all the values in the array
    $("#total-score").text(arrayTotal);
}




