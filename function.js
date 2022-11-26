
// Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)

// function myfirstcode(num1,num2) {
//     var Number = num1 * num2;
//     console.log(Number);
// }

// myfirstcode(2,3);


// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":
var total = myfirstcode(2, 3);

function myfirstcode(num1, num2) {
    return num1 * num2;
}


console.log(total);

// Local Variables
// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName