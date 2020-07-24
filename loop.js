// Iterate with While Loops
 /* Loops allow you to run the same code multiple times */

 var myArray = [];

 var i = 0;
 while(i < 5) {
     myArray.push(i);
     i++;
 }
console.log(myArray); // [0,1,2,3,4]

// Iterate with For Loops
/* Most For loops start with a var that you going to initialize for 
a For loop */

var myArray = [];

for (var i =1; i, 6; i++) {
    myArray.push(i);
}
console.log(myArray) // [1,2,3,4,5]

// Iterate Odd Numbers with a For Loop

var ourArray = [];

for (var i =1; i< 10; i+= 2) {
    ourArray.push(i);
}
console.log(myArray) // [0,2,4,6,8]

//Count Backwards with a For Loop

var ourArray = [];

for (var i =10; i > 0; i-= 2) {
    ourArray.push(i);
}
console.log(myArray) // [10,8,6,4,2]

// Iterate Through an Array with a For Loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i =0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourArray);//42

//Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product); //5040

// Iterate with Do ... While Loops
/* A while loop first checks the condition before it runs any code within the loop
A do while loop will always run atleast one time and then it will check the condition*/

// While loop

var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray); // 10,[] not >

// do while loop
var myArray = [];
var i = 10;

 do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);  //11,[10]

// Profile Lookup
// create lookup function

var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Laine",
        "number":"09876532",
        "likes":["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"09876532",
        "likes":["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName":"Sherlock",
        "lastName":"Holmes",
        "number":"09876532",
        "likes":["Intruiging Cases", "Violin"]
    },
    {
        "firstName":"Kristian",
        "lastName":"Vos",
        "number":"unknown",
        "likes":["Javascript", "Gaming", "Foxes"]
    },
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data); //"Pizza", "Coding", "Brownie Points"