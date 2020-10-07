// Question 1:

var petArray = ["Cat", "Cow", "Dog"];

// Question 2:

console.log(petArray[1]);

// Question 3:

petArray.push("Sheep");

// Question 4:

console.log(petArray.length);

// Question 5:

var catObject = {
    name: "Cat",
    colour: "Red",
    age: 3
};

// Question 6:

console.log(catObject.age);

// Question 7:

var catArray = [
    {
        name: "Kitty",
        colour: "Red",
        age: 3
    }
];

// Question 8:

for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

// Question 9:

function logToConsole(value) {
    console.log(value);
}

// Question 10:

logToConsole("Donkey");