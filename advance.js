// Javascript Promise

// A promise may have one of the three states

// Pending (Undefined)
// Fulfilled (Value)
// Rejected (Error)

// let promise = new Promise(function(resolve, reject) {
//     // Statement
// });

// Promise Method

// Example

// const counts= true;

// let countValue = new Promise(function (resolve, reject) {
//     if(counts) {
//         resolve('There is a count value.');
//     } else{
//         reject("There is no count value");
//     }
// });

// Example using Timeout

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love to Code!!")}, 5000); 
// });

// myPromise.then(function(value){
//     console.log(value);
// })

// Javascript Async/Await

// Async and Await make promise easier to write. Basically, async makes a function
// Return a promise
// Await make a function to wait for a promise

// Syntax for Async function

// async function name(parameter1, parameter2, ...parameter1N) {
//     // Statement
// }

// Async function Example

// async function fun() {
//     console.log('I am an Async Function');
//     return Promise.resolve(1);
// }

// fun();

// Await syntax

// let value = await promise;

// Example

let promise = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve('Promise resloved')
    }, 3000);
});
// Async function

async function asynFunc() {
    // wait until promise reslove
    let result = await promise;

    console.log(result);
    console.log('Hello');

}
// calling the async function
asynFunc();
