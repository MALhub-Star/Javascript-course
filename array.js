// JavaScript Arrays
// An array is a special variable, which can hold more than one value:
// const cars = ["Saab", "Volvo", "BMW"];
// const check = cars.length;
// console.log(check)
// cars[0] = "Testing";
// cars.push("Toyota");
// cars[cars.length] = "Benz";
// document.getElementById("demo").innerHTML = cars;
// console.log(cars)


// const food = [];
// food[0] = "Rice";
// food[1] = "Beans";


// Accessing Array Elements
// You access an array element by referring to the index number:
// console.log(food[2])


// Accessing the Last Array Element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];

// console.log(fruit)

// const Fruits = ["Banana", "Orange", "Apple"];
// let type = typeof Fruits;
// console.log(type)


// JavaScript Array Methods

// JavaScript Array pop()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// fruits.unshift("Apple");
// fruits[2] = "Grape";
// fruits[fruits.length] = "Kiwi";

// console.log(fruits);

// Merging (Concatenating) Arrays

// The concat() method creates a new array 
// by merging (concatenating) existing arrays:

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls + "," + myBoys;

// document.getElementById("demo").innerHTML = myChildren;

// Example (Merging an Array with Values)

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 

// document.getElementById("demo").innerHTML = myChildren;


// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.


// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() 
// to remove elements without leaving "holes" in the array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);

// fruits.splice(0, 2,);
// console.log(fruits);

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.



// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// const citrus = fruits.slice(2);
// console.log(citrus);


// Automatic toString()
// JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

// This is always the case when you try to output an array.


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);


// Sorting an Array
// The sort() method sorts an array alphabetically:

// const fruits = [4, 5, 2, 3, 1];

// console.log(fruits);

// fruits.sort();
// fruits.reverse();
// console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;


