// JavaScript For Loop

// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Often this is the case when working with arrays:

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// // Variable
// let text = "";
// // Loop
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("Looping").innerHTML = text;

// From the example above, you can read:

// Expression 1 sets a variable before the loop starts (let i = 0).

// Expression 2 defines the condition for the loop to run (i must be less than 5).

// Expression 3 increases a value (i++) each time the code block in the loop has been executed.



// Expression 1
// Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

// This is not always the case. JavaScript doesn't care. Expression 1 is optional.

// You can initiate many values in expression 1 (separated by comma):


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("Looping").innerHTML = text;


// And you can omit expression 1 (like when your values are set before the loop starts):

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 2;
// let len = cars.length;
// let text = "";

// for (; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// Expression 2
// Often expression 2 is used to evaluate the condition of the initial variable.

// This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

// If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

// If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.




// JavaScript For In

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:


// for (key in object) {
//   // code block to be executed
// }


// const car = {carname:"Toyota", color: "blue", year: 2023};
// console.log(car)

// let output = "";
// for (let y in car) {
//   output += car[y] + " ";
// }

// console.log(output);

// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]


// For In Over Arrays
// The JavaScript for in statement can also loop over the properties of an Array:


// for (variable in array) {
//   code
// }

// const car = [20,10,30,67,43]
// console.log(car)

// let output = "";
// for (let y in car) {
//   output += car[y] + " ";
// }

// console.log(output);

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// const car = [20,10,30,67,43]
// let output = "";
// car.forEach(looping);
// document.getElementById("Looping").innerHTML = output;
// function looping (value, index, array) {
//   output += value + "<br>";
// }


// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself


// JavaScript For Of

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

// const motor = ["BMW", "Volvo", "Saab", "Ford"];

// let move = "";
// document.getElementById("Looping").innerHTML = output;
// for (let z of motor) {
//   move += z;
// }

// JavaScript While Loop

// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }

let count = "";
let num = 10;
while (num < 100) {
  count += "<br> Number " + num; num++;
}

document.getElementById("Looping").innerHTML = count;

// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

// The Do While Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
//   // code block to be executed
// }
// while (condition);
