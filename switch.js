// Switch Statements
/* It tests a value and can have many case statements
which define various possible values */

/* Write a switch statement which tests val and sets answers for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;



    }
    return answer;
}
 console.log(caseInSwitch(3)); // gamma

// Default Option in Switch Statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case a:
            answer = "alpha";
            break;
        case b:
            answer = "beta";
            break;
        case c:
            answer = "gamma";
            break;
        default:
            answer = "stuff";
            break;

    }
    return answer;
}
 console.log(switchOfStuff(3)); // stuff
 console.log(switchOfStuff("c")); // gamma

 // Multiple Identical Options in Switch Statements
/* switch statement where multiple statements give the same output*/

function sequentialSizes(val) {
    var answer = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer="Medium";
            break;
        case 7:
        case 8:
        case 9:
            answer="High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1)); // Low

// Replacing If Else Chains with Switch
/* Change chain of If Else statement to Switch statement*/

function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Peter";
            break;

        case 42:
            answer = "The Answer";
            break;

        case 1:
            answer = "There is no #1";
            break;

        case 99:
            answer = "Missed me by this much!"
            break;

        case 7:
            answer = "Ate Nine";
            break;
    }
}

