// parseInt Function
/* Takes a string and returns an integer */

function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

// parseInt Function with a Radix
/* Radix specifies the base of a number in a string */

function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");

// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
    return a === b ? true : false;

    return a === b;
}

// Use Multiple Conditional (Ternary) Operators
/* You can nest them within each other which gives em
even more power */

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0)); //zero
console.log(checkSign(-1)); //negative
console.log(checkSign(10)); //positive

/* End of JS begginner */

//Explore Differences Between the var and let Keywords

