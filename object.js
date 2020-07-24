//Build Javasript Objects
/* Use properties in Objects to access data 
Properties are everything behind the colons
Values are after the colons*/

var myDog = {
    "name": "Chubbs",
    "legs": 3,
    "tails": 2,
    "friends": []
}

// Accessing Object Properties with Dot Notation
/* put the . then the name of the property */

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing Object Properties with Bracket Notation
/* It is required if the name has a space in it */

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["my sied"];

//Accessing Object Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// Updating Object Properties
/* Use . notation to update object properties */

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCode Campers"]
}

myDog.name = "Happy Coder";


// Add New Properties to an Object
/* You can use . notation or [] notation */

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCode Campers"]
}

myDog['bark'] = "woof!";

// Delete Properties From an Object

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCode Campers"],
    "bark": "woof"
};

delete myDog.tails;

// Using Objects for Lookups

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie")); // Chicago

// Testing Objects for Properties
/* Use the hasOwnproperty method */

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkobj("gift")); // pony

// Manipulating Complex Objects
/* Each Obj holds data in a property 
 which is the key value format */

var myMusic = [
    {
        "artist": "Frank Ocean ",
        "title": "Authentic",
        "release_year": 2009,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
]

// Accessing Nested Objects
/* To access sub properties of an Obj you can
chain toether the . or [] notation */

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents) //maps

//Accessing Nested Arrays

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; // pine

// Record Collection
/* Create updates record function */

var collection = {
    "2548":{
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, pop, value) {
    if(value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
/* {1245: {artist: "Robert Palmer", tracks: []}, 2468: {albums: "1999", artist: "Prince", tracks:
["1999", "Little Red Covette"]}, 2548: {album: "Slippery When Wet", artist: "Bon Jovi", tracks:["Let It Rock","You Give Love a Bad Name"]},
 5439: {album: "ABBA Gold", artist: "ABBA"}} */


 