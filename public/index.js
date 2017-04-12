$(document).ready(function() {
    
var A = 1;
var B = 3;
var C = 5;
var right = 0;
var wrong = 0;


$("#button1").click(function(){
    validate(A);
    newNumberSet();
})

$("#button2").click(function(){
    validate(B);
    newNumberSet();
})

$("#button3").click(function(){
    validate(C);
    newNumberSet();
})
    
function validate(letter) {
    let array = [A, B, C];
    array.sort(function(a,b) {return a-b});
    var rightAnswer;
    if (array [1] - array[0] > array[2] - array[1]) {
        rightAnswer = array[0];
    }
    else if (array [1] - array[0] < array[2] - array[1]) {
        rightAnswer = array[2];
    }
    else {
        rightAnswer = array[1];
    }
    
 if (letter == rightAnswer) {
     right ++;
 }
 else {
     wrong ++;
 }
 $("#right").text(right);
 $("#wrong").text(wrong);
}    

function newNumberSet() {
    var numArray = numberGen();
     A = numArray[0];
     B = numArray[1];
     C = numArray[2];

$("#answerA").text(A);
$("#answerB").text(B);
$("#answerC").text(C);

}
    
 function numberGen() {
     let number1;
     let number2;
     let number3;
     
     number1 = randomGenTen();
     number2 = number1 + randomGenTen();
     number3 = number2 + randomGenTen();
     
     let numberArr = [number1, number2, number3];
     return shuffle(numberArr);
 } 
 
function randomGenTen() {
    return Math.round(Math.random()*9) +1;
}

function randomGenTwo() {
    return Math.round(Math.random()*3);
}

function shuffle(arr) {
    for (i=0; i<8; i++) {
        let random = randomGenTwo();
        arr.push(arr[random]);
        arr.splice(random, 1);
    }
    return arr;
 }



// closes onready

 
 
});