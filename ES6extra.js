// Use Destructing Assignment with the Rest Operator
/* Rest operator used for skipping objects
using  ,, ...arr  or a,b, ...arr*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [,, ...arr] = list;

    return arr;
}

const arr = removeFirstTwo(source);
console.log((arr)); // [3,4,5,6,8,9,10]
console.log((source)); // [1,2,3,4,5,6,7,8,9,10]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
/* Use max and min to get what you need
mostly used in API calls */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

// {max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, average: 35.85 }

// Create Strings using Teplate Literals
/* Teplate Literals helps create complex strings easier 
make em using ``*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray) // ["<li class="text-warning">${arr[i]}</li>""]

//Write Concise Object Literal Declarations Using Simple Fields

const createPerson = (name, age, gender) => ({ name, age, gender});

console.log(createPerson("Zodiac Hasbro",56,"male")); // {name: "Zodiac Hasbro" age:,56, gender: "male"}

//Write Concise Declarative Functions

const bicycle = {
    gear:2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear); //3

//Use class Syntax to Define a Constructor Function

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zues = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet) //Jupiter

//Use getters and setters to Control Access to an Object
/* Using _ means its something private you can't access*/

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp); //26

// Understand the Differences Between import and require

import { capitalizeString } from ""
const cap = capitalizeString("hello!")

console.log(cap);

// Use export to Reuse a Code Block
 
 const capitalizeString = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1);
 }

 export { capitalizeString };

 export const foo = "bar";
 export const bar = "foo";

// Use * to Import Everything from a File

 import * as capitalizeString from "capitalizeString";

// Create an Export Fallback with export default

export default function subtract(x,y) {return x-y;}

// Import a Default Export

import subtract from "math_functions";

subtract(7,3);

