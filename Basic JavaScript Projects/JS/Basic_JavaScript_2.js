function mySecondFunction() {
    var str = "Highlighted Text";
    var result = str.fontcolor("yellow");
    document.getElementById("Yellow_Text").innerHTML = result;
} 

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

