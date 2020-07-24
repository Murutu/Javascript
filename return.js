// Returning Boolean Values from Functions
/* Trick if you want a function to return a boolean of true r false */

function isLess(a, b) {
    if (a < b) {
        return true;
    }   else {
        return false;
    }
}

/* Do this instead */

function isLess(a, b) {
    return a < b;
}

console.log(isLess(10,15)); // true

// Returning Early Pattern from Functions
/* You can return early from a function with a return statement */

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2)); //8

// Counting Cards
/* Create blackjack counting card function 
Low card the count goes up
High card the count goes down
Middle card the count stays the same
Card is positive you should bet high
Card is 0 r negative you should bet low
Use switch statement
*/

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }

    var holdbet = 'Hold'
    if (count> 0) {
        holdbet = 'Bet'
    }
    return count + "" + holdbet;
}

cc(2); cc(9); cc(7); cc('K'); cc('A'); //Bet
cc(2); cc('K'); cc(7); cc(10); cc('A'); //Hold


