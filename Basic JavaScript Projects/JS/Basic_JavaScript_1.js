alert("ALLOOOOHHHHA!");

// WINDOW.ALERT() METHOD
// causes an alert window to pop up using the window.alert() method as well:
// now two pop up windows will appear from this JS file.
window.alert("I didn't here you");


// DOCUMENT.WEITE() METHOD
// another way to display text using JavaScript
document.write('Sup brah! ');



// VARIABLES

var A = "This is a string. ";
document.write(A);

var A2 = "I said, 'ALLOOOOHHHHHAAAA!'";
window.alert(A2);

// STRING- BACKSLASH
// backslash is referred to as "escaping" the characterand tells the computer that the character that follows has a special meaning.
// \' or \" will not end the string but instead will be printed on the screen."
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll dad!\" \"Eat my shorts!\" Bart responded. ");


// CONCATENATING A STRING
// this connect things together, like links in a chain.
document.write("\"Be who you are and say what you feel," 
                + " because those who mind don\'t matter and those who matter matter dont\'t mind."
                + "-Dr. Seuss. ");

var B = "Concatenated" + " String. ";
document.write(B);

// MULTIPLE VARIABLES
var Family = "The Arezzinis", Dad = "Jeremiah ", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
    document.write(Dad);

// STR.FONTCOLOR() METHOD
// use to change font color
var blues = "I have the blues. ";
var blues = blues.fontcolor("blue");
document.write(blues);
// Here is a variable that was a string called "blues." We assigned that variable the color blue and then displayed it.
var A = A.fontcolor("red");
document.write(A);
var A2 = A2.fontcolor("yellow");
document.write(A2);
var B = B.fontcolor("green");
var Family = Family.fontcolor("Orange");
document.write(B);

// EXPRESSIONS
// a combination of values that are computerd by the computer.
document.write(3+3);

// EVENTS
// HTML events are "things" that happen to elements. These can include actions the browser takes or actions the user takes.
// FUNCTIONS
// a repeatable block of code that executes certain actions and performs tasks. Functions are valuable because of code reusability - you can invoke functions over and over.
// document.getElementById is a method that returns an element. It is used to control or get informatino from an element within your code.
function myFirstFunction() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function mouseOver() {
    document.getElementById("demo").style.color = "red";
    }

    function mouseOut() {
    document.getElementById("demo").style.color = "black";
    }

    