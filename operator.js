// Assignment Operator

// let food = "Rice"; // Assign the value Rice to food

// The Addition Operator (+) adds numbers:

// var num1 = 100 + 200;
// var num2 = 10;
// var num3 = 5;

// var sum = num1 + num2 + num3;

// console.log(sum);

// The Multiplication Operator (*) multiplies numbers.

// var num1 = 100 + 200;
// var num2 = 10;
// var num3 = 5;

// var sum = num1 * num2 * num3;

// console.log(sum);

// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

// Arithmetic Operators

// let score = 2;
// let position = (10 + 16) / score;

// console.log(position);

// Assignment Operators
// The Addition Assignment Operator (+=) adds a value to a variable.
// let numbers = 30;
// numbers %=10;

// numbers += 10;
// let Num4 = 10;
// let Num5 = numbers + Num4;

// console.log(numbers);

// Operator	    Description
// +	        Addition
// -	        Subtraction
// *	        Multiplication
// **	        Exponentiation (ES2016)
// /	        Division
// %	        Modulus (Division Remainder)
// ++	        Increment
// --	        Decrement


// Operator	    Example	        Same As
// =	        x = y	        x = y
// +=	        x += y	        x = x + y
// -=	        x -= y	        x = x - y
// *=	        x *= y	        x = x * y
// /=	        x /= y	        x = x / y
// %=	        x %= y	        x = x % y
// **=	        x **= y	        x = x ** y


// Adding JavaScript Strings

// let text = "Hello";
// text += " World!";

// console.log(text);
// let text1 = "World!";

// let text2 = text + " " + text1;
// console.log(text2);


// let example = 5 + "5";

// console.log(example);

// JavaScript Comparison Operators


// Operator	    Description
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator


// ==	        equal to

// let a = 3;
// let b = 4;

// let c = a == b;
// console.log(c);

// let a = 3;
// let b = 3;

// let c = a == b;
// console.log(c);


// ===	        equal value and equal type

// let a = "Yes";
// let b = "Yes";

// let c = a === b;
// console.log(c);

// !=	        not equal

// let a = "No";
// let b = 4;

// let c = a !== b;
// console.log(c);

// Operator	Description
// &&	        logical and
// ||	        logical or
// !	        logical not

// var a = 2;
// var b = 2;

// function calculate() {
//     var a = 2;
//     var b = 1;
//     var sum = a + b;
//     if (sum < 2 || sum == 4){
//         alert("Nice One");
//     } else if (sum == 3 || sum < 3){
//         alert("Testing");
//     } 
//     console.log(sum);
    
// }



// var check = {
//     age: 20,
//     ismarried: false,
//     firstname: "John Doe"
// };

// console.log(check);


// JavaScript Data Types

// var car = "Honda"; // String
// var carNum = 30; // Number
// var Cars = {
//     product: "Toyota",
//     year: 2010,
//     color: "Gray",
//     isnew: false,  // Boolean
// } //Object
// var course = ["Frontend Developer", "UIUX", "Data Science"];
// console.log(course);
// The typeof Operator
// Undefined
// Empty Values

// console.log(typeof(car));
// console.log(typeof(carNum));
// console.log(Cars);

// let x = 16 + "20";

// console.log(x);

// let x;           // Now x is undefined
// x = 5;           // Now x is a Number
// x = "John";      // Now x is a String

// console.log(x);

// JavaScript Strings
// A string (or a text string) is a series of 
// characters like "John Doe".

// Strings are written with quotes. You can use 
// single or double quotes:

// var message = 'Code Is Fun'; //String
// var Text = 'Code Is "Fun"';

// console.log(message);
// console.log(Text);

// let answer1 = "It's alright";             // Single quote inside double quotes
// let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
// let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes


// console.log(answer1);
// console.log(answer2);
// console.log(answer3);

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression: