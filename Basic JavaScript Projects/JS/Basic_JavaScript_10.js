// While Loop
// A repeating "if statement": while _____ (blank) is occuring, do ______ (blank)
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

// String Length
function string_length() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

// For Loops
// Used to repeat a section of code a number of times. For loops are used when the number of iterations are known.
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects
// Arrays is a collection of data, a group of related things that are stored together in a sequence.
// Arrays are a special type of objects.
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + "."
}

function nba_standings() {
    var nba_team = [];
    nba_team[0] = "Lakers";
    nba_team[1] = "Clippers";
    nba_team[2] = "Kings"
    nba_team[3] = "Warriors";
    nba_team[4] = "Suns";
    document.getElementById("nba").innerHTML = "The Pacific Conference Champions are the Golden State " +
    nba_team[3] + "."
}

// Constant Keywords
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Let - declares variables that can have block scope
var X = 82;
document.write("<br>" + X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
// var do not have block scope - meaning they can be accessed from outside the block of code.
var X = 82;
document.write("<br>" + X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Objects - a data structure used to store different types of data types
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Break Statement
// The break statement "jumps out" of a loop. It breaks the loop and continues executing the code after the loop (if any)
var text = "";
var i;

for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>"
}
document.getElementById("demo2").innerHTML = text;

// Continue Statement
//Breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop
var text2 = ""
var i2

for (i2 = 0; i2 < 10; i2++) {
    if(i2 === 3) { continue; }
    text2 += "The number is " + i2 + "<br>";
}
document.getElementById("demo3").innerHTML = text2;
