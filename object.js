// JavaScript Objects
// You have already learned that JavaScript variables 
// are containers for data values.

// const fruit = { type: "Mango", price: "#20", color: "yellow" };

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName
// objectName["propertyName"]

// console.log(person.firstName);
// console.log(person["lastName"] + " " + person.age);

// Object Methods

// Object Methods
// Objects can also have methods.

// Methods are actions that can be performed on objects.

// Methods are stored in properties as function definitions.

// const Person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     // Object Method
//     fullName: function () {
//         return this.firstName + " " + this.id;
//     }
// };

// console.log(Person.fullName());

// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
