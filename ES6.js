// Begginning of ES6

// Differences Between the var and let Keywords
/* You can declare varibales using let and const 
let doesn't let you declare a varibale 2x
use strict is used to catch errors*/

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + "says Meow!";
}

catTalk();

// Compare Scopes of the var and let Keywords
/* let is limited to the block statement or expression that its declared in */

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.console.log("Block scope i is: ", i);
        
    }
    console.log("Function scope i is: ", i);
    return i;
    
}

checkScope();
// Block scope i is: "block scope"
// Function scope i is: "function scope"

// Declare a Read-Only Varibale with the const Keyword
/* You cannot re-assign a const 
Type in capital to remember its a const*/

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + "is cool!";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("arsenal") // arsenal is cool

// Mutate an Array Declared with const

const s = [5,7,2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

console.log(s) // [2,5,7]

// Prevent Object Mutation
/* The const doesn't protect your data from mutation
object.freeze will prevent data mutation/change */

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions
/* => is a arrow function 
a faster way instead of function */

var magic =function () {
    return new Date();
};

// instead do this

const magic = () => newDate();

// Write Arrow Functions with Parameters

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));

// Write Higher Order Arrow Functions
/* Whenever 1 function takes another function as an argument
use an arrow function */

const realNumberArray = [4, 5.6,-9.8];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


/* default parameter kicks in when the argument is not specified */

// const increment = (function()) {
//     return function increment(number, value = 1) {
//         return number + value;
//     };
// })();
// console.log(increment(5,2));
// console.log(increment(5)); // 7 6

// Use the Rest Operator with Function Parameters
/* Rest operator allows you to create a function that takes in a variable number of args 
Rest operator is 3 dots and allows you to have any number of args*/

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3,4)); //10

// Use the Spread Operator to Evaluate Arrays In-Place
/* Used to spread out an array  into its individual parts
uses 3 dots*/

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2); // ['JAN','FEB','MAR','APR','MAY']

// Use Destructing Assignment to Assign Variables from Objects
/* Neatly assigning values taken directly from an object to a varibale*/

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); //79

//Destructuring Assignment with Nested Objects

const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Use Destructing Assignment to Assign Variables from Arrays
/* from the array you cannot specify which element from the array to
go into a variable 
If you want to add something you add 2 ,*/

const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y); // 4

// switch a=6 b=8
let a=8, b=6;
(() => {
    "use strict";
    [a,b] = [b,a]

})();
console.log(a);
console.log(a);
// 6,8