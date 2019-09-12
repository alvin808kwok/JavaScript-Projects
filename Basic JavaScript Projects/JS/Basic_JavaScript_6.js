// Tenary Operator
document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voter_Age() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 18) ? "You are legal age":"You are not legal age";
    document.getElementById("Voter").innerHTML = Can_vote + " to vote."
}

// Object-Oriented Programming - keywords: "this" and "new"
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function vehicleFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drive a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufacture in " + Erik.Vehicle_Year;
}

function smartPhone(Make, Model, Year, Color) {
    this.smartPhone_Make = Make;
    this.smartPhone_Model = Model;
    this.smartPhone_Year = Year;
    this.smartPhone_Color = Color;
}
var Alvin = new smartPhone("iPhone", "X", 2017, "Space Gray");
function smartPhone_Function() {
    document.getElementById("New_and_This").innerHTML =
    "Alvin has the " + Alvin.smartPhone_Year + " " + 
    Alvin.smartPhone_Color + "-colored " + Alvin.smartPhone_Make + 
    Alvin.smartPhone_Model + ".";
}

// Nested Function
 function count_Function() {
     document.getElementById("Counting").innerHTML = Count();
     function Count() {
         var Starting_point = 9;
         function Plus_one() {Starting_point += 1;}
         Plus_one();
         return Starting_point;
     }
 }

 function nestedFunction() {
     document.getElementById("Nested_Function").innerHTML = function1();
     function function1() {
         var starting_point = 12;
         function function2() {starting_point += 1;}
         function2();
         return starting_point;
     }
 }