// JavaScript if, else, and else if
// Conditional statements are used to perform different actions based on different conditions.

// Conditional Statements
// Very often when you write code, you want to perform different actions for different decisions.

// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed


// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

// The if Statement
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
if (new Date().getHours() < 12) {
    console.log("Good Afternoon");
    // The else Statement
    // Use the else statement to specify a block of code to be executed if the condition is false.
} else if (new Date().getHours() == 14 || new Date().getHours() == 16) {
    console.log("Good Morning");
    //     The else if Statement
    // Use the else if statement to specify a new condition if the first condition is false.
} else {
    console.log("Every Condition Is False");
}

