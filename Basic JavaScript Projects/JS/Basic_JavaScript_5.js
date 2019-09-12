document.write(typeof "Word");

document.write(typeof 3);

function my_Function() {
    // document.getElementById("test").innerHTML = 0/0;
    // document.getElementById("test").innerHTML = isNaN('This is a string');
    document.getElementById("test").innerHTML = isNaN('007');
    document.getElementById("test2").innerHTML = 2E420;
}
document.write(2E310);
document.write(-3E310);

document.getElementById(5E1020);

// Boolean
document.write(10 > 2);
document.write(10 < 2);

// Console log
console.log(2+2);

// Coercion
document.write("10" + 5);

// Double Equal Signs
document.write(10 == 10);
document.write(3 == 11);

// Triple Eqaul Sign
age1 = 10;
age2 = 10;
document.write(age1 === age2);

gradeLevel = 5;
age = "ten";
document.write(gradeLevel === age);

height = 190;
weight = "190";
document.write(height === weight);

gradeLevel = 5;
age = 10;
document.write(gradeLevel === age);

// && (AND) and || (OR) 
document.write(5 > 2 && 10 > 4);
document.write(5 > 2 && 4 > 10);

document.write(5 > 2 || 4 > 10);
document.write(2 > 5 || 4 > 10);

// ! (NOT)
// This will display true. Five is not greater than 10 is true so true.
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

// "Double Negative" will return false
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}