// JavaScript Form Validation
// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

// Using JS in CSS/HTML Form
function validateForm2() {
    var y = document.forms["myForm2"]["fname"].value;
    var z = document.forms["myForm2"]["lname"].value;
    if (y == "" || z == "") {
        alert("First and last name must be filled out");
        return false;
    }
}

