// Comparison Operators

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Given that x = 5, the table below explains the comparison operators:


// Operator	Description	Comparing	Returns	Try it
// ==	equal to	x == 8	false	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true	



// Logical Operators
// Logical operators are used to determine the logic between variables or values.

// Given that x = 6 and y = 3, the table below explains the logical operators:

// Operator	Description	Example	Try it
// &&	and	(x < 10 && y > 1) is true	
// ||	or	(x == 5 || y == 5) is false	
// !	not	!(x == y) is true

// Conditional (Ternary) Operator

// function clickme() {
//     let age = document.getElementById("age").value;
//     let voteable = (age < 18) ? "Too young" : "Old enough";
//     document.getElementById("printout").innerHTML = voteable + " to vote.";
// }


function clickme() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo").innerHTML = voteable + " to vote";
}




