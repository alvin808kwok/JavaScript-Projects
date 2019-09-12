// Scope - global and local variables
// Global Variable - variable(s) assigned outside the function
// var X = 10;
// function Add_numbers_1() {
//     document.write(20 + X + "<br>");
// }
// function Add_numbers_2() {
//     document.write(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();
// Local Variable - variable(s) written within the function
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
// Error Function
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// If Statements
// Date().getHours() method returns the hour in the specified date according to the local time and the hours are listed as integers between 0 and 23.
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_statement() {
    if(1 < 2){
        document.getElementById("if").innerHTML = "The left number is smaller than the number on the right"; 
    }
}

// Else Statements
function Age_Function() {
    Age = document.getElementById("Age").value;
    if(Age >= 18) {
        Access = "Welcome to XanderNXavierXena.com! As the founder, Xander, my brother Xavier and sister Xena run the XanderNXavierXena.com website aka XNXX.";
    }
    else {
        Access = "You are not old enough to enter.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Access;
}

// Else If Statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}