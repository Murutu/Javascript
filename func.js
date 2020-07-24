// Write Reusable Code with Functions
/* Functions allow us to create Reusable code .*/

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction(); // Hi World

// Passing Values to Functions with Arguments

function functionWithArgs(a, b) {
    console.log(a+b);
}

functionWithArgs(10,5) // 15

// Global Scope and Functions

/* Scope refers to the visibility of variables
Variables that are defined outside out of a function block have 
global scope
Global scope means they can be seen everywhere in your js code
It is possible to set a variable without the var keyword*/

var myGlobal = 10;

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
}

// Local Scope and Functions
/* variables that are declared within a function as well as the function
parameters have local scope
They are only visible within the function */

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope(); // 5

//Global vs Locale Scope in Functions
/* It is possible to have both local and global with the same name
when you do this the local variable takes precedence over the global
variable */

var outerWear = "T-Shirt";

function myOutfit() {

    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit()); // T-Shirt  // sweater 
/* will say outer wear cz the locale var took precedence of the global
var */ 
console.log(outerWear()); // sweater

// Return a Value from a Function with Return

function minusSeven(num) {
    return num -7;
}

console.log(minusSeven(10)); // 3

//Understanding Undefined Value Returned from a Function 

/* Without the return it will not return anything
*/

function addFive() {
    sum +=5;
}

// Assignment with a Returned Value

var processed = 0;

function processArg(num) {
    return ( num +3) /5;
}

processed = processArg(7);

// Stand in Line
/* first add item 6 
the JSON.stringify(testArr)) changes an array to a string
add item on to the list cz of the (nextInLine(testArr,6))
We add no6 to the array so we use the arr.push()
then we want to remove the 1 and return so use arr.shift() instead of item*/

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr,6)); 

// before [1,2,3,4,5]
// after [2,3,4,5,6]

