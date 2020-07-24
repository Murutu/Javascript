// Generate Random Fractions
/* Use the Math.random (); 
It can never be 1*/

function randomFraction() {

    return Math.random();
}

// Generate Random Whole Numbers
/* Use Math.floor() */

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range

function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin +1)) + ourMin;
}

ourRandomRange(1,9);

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

var myRandom = randomRange(5, 15);


