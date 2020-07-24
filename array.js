// Store Multiple Values with Arrays

/* Arrays allow you to store several pieces of data in one place.
Arrays always start with a bracket and end with a bracket
Every element in an array is separated by a , The elements can be any data type
*/

var myArray = ["Peter", 1]; // Cz Peter is number 1

//Nested Arrays

/* When one of the elements in an array is another array that is called a nested array
or a multidimentional array */

var myArray = [["Crisp", 23], ["Red", 11]];

//Access Array Data with Indexes

var myArray = [50, 60, 70];
var myData = myArray[0]; // equals 50

// Modify Array Data with Indexes

var myArray =[18,64,99];

myArray[0] = 45; // Array has now been updated from 18 to 45.

//Access Multi-Dimensional Arrays with Indexes

/* To access an array that is within the array you use a double 
bracket notation */

var myArray = [[1,2,3], [4,5,6], [7,8,9] [[10,11,12], 13, 14]];

/* Try finding the value 8 
first bracket notation will be 2
second bracket notation will be 1
*/

var myData = myArray[2][1]; // eqauls 8

// Manipulate Arrays with push ()
/* 
You can append data to the end of an array with a push function
*/

var myArray = [["Peter", 12], ["dog", 2]];
myArray.push(["cat", 3])
// my array eqauls ["Peter", 12 , "dog", 2 , ["cat",3]]

// Manipulate Arrays with pop()

/* Can remove an item from an array with a pop function
its a function cz of the parenthesis () */

var myArray = [["Peter", 12], ["dog", 2]];
var removedFromMyArray = myArray.pop(); 
// removedFromMyArray eqauls ["dog", 2] and myArray equals ["Peter", 12]

//Manipulate Arrays with shift()

/* shift function removes first element of the array */

var myArray = [["Peter", 12], ["dog", 2]];
var removedFromMyArray = myArray.shift(); 
// removedFromMyArray eqauls["Peter", 12] and myArray equals ["dog", 2]

// Manipulate Arrays with unshift()

/* unshift () adds an element in the beginning of an array */

var myArray = [["Peter", 12], ["dog", 2]];
myArray.shift(); // myArray eqauls ["dog", 2]
myArray.unshift(["Majid",9]); 
// myArray equals ["Majid",9] , ["dog", 2]

//Shopping List

var myList = [["cereal", 3], ["milk", 2], ["Apple", 3], ["Juice",2]];

