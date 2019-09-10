function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication() {
    var multiply = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 = " + multiply;
}

function division() {
    var division = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("PEMDAS").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math;
}

function modulus_Operator() {
    var modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "What is the remainer of 25 divided by 6? Answer: " + modulus;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("negative").innerHTML = "What is the negative number for 10? Answer: " + -x;
}

var X = 5;
X++;
document.write(X + ", ");

var Y = 5.25;
Y--;
document.write(Y + ", ");

// Random number between 1 and 0
window.alert(Math.random());

// Random number between 0 and 100
window.alert(Math.random() * 100);