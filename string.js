//Declare String Variables
var myFirstName = "Peter";
var myLastName = "Murutu";

//Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double quotes";

//Quoting Strings with Single Quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'
//Other Way use backticks
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`

//Escape Sequences in Strings
/*****

\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
 */

 var myStr = "FirstLine\n\t\\Secondline\nThirdline"

// Concatenating Strings with Plus Operator

var myStr = "This is the start. " + "This is the end. "

// Concatenating Strings with Plus Equals Operator
var myStr = "This is the first sentence. "
myStr += "This is the second sentence. "

//Constructing strings with varibales
var myName = "Peter"
var myStr = "My name is " + myName + " and I am well!";

// Appending Variables to Strings
var anAdjective = "awesome!";
var ourStr = "Peter is";
ourStr += anAdjective;

//Find Length of String
var firstNameLength = 0;
var firstName = "Peter";
firstNameLength = firstName.length;

//Bracket Notation to Find First Character in String
var firstLetterOfLastName = "";
var lastName = "Murutu";
firstLetterOfLastName = lastName[0];

//String Immutability

/* 
Strings are immutable meaning altered once created
The individual characters of a string literal cannot be changed
*/

var myStr = "Jello World";
myStr[0] = "H";
// Have to change it in order to find the letter H

var myStr = "Hello World";

// Bracket Notation to Find Nth Character in String

/* Can use bracket notation to get any character of a string
*/

var firstName = "Peter";
var secondLetterOfFirstName = firstName[1];

// Bracket Notation to Find Last Character in String

/* you can use bracket notation to find the last letter
of the string even if you dont know how many letters are in the string
you do it based on the length
so the length is 5 (5-1) is 4
Reason for doing -1 is we count starting at 0 so the length -1 is going to
be the last index of the name
*/

var firstName = "Peter";
var lastLetterOfFirstName = firstName[firstName.length -1];

// Bracket Notation to Find Nth-to-Last Character in String
/* You can also do 3rd to last letter or 4th to last letter
so you subtract however much you want from the string */

var lastName = "Murutu";
var secondToLastLetterOfLastName = lastName[lastName.length -2];

// Word Blanks
/* Building a madlibs word game which is sentences with missing words
like nouns adjectives etc
fill in the missing sentences with words of your choice to make a sentence that could be funny
and makes abit of sense 
This uses a function*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The" + myAdjective + " " + myNoun + " " + myVerb + "to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("bike", "slow", "flew", "slowly")); // The slow bike flew to the store slowly.



