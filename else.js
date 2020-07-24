// Else Statements
function testElse(val) {
    var result = "";
    
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
}

// Else If Statements
/* Used if you have multiple conditions to be addressed
Its a way of chaining if statements together*/

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }   else if (val < 5) {
        return "Smaller than 5";
    }   else {
        return "Between 5 and 10";
    }
}

// Logical Order in If Else Statements
/* When using Else If Statements 
Order is very important
As below we've started with 5 going down to 10 */

function orderMyLogic(val) {
    if (val < 5 ) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
 console.log(orderMyLogic(3)); // less than 5

// Chaining If Else Statements

function testSize(num) {
    if ( num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(7)); //small

// Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par -2){
        return names[1]
    }  else if (strokes == par -1){
        return names[2]
    }  else if (strokes == par){
        return names[3]
    }
}

console.log(golfScore(4,2)) // Eagle

