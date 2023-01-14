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



