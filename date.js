// JavaScript Date Objects

// JavaScript Date Output
// By default, JavaScript will use the browser's time zone and display a date as a full text string:

// JavaScript new Date()
// const Today = new Date();

// console.log(Today);

// new Date(date string)
// new Date(date string) creates a date object from a date string:

// const Today = new Date("October 13, 2014 11:13:00");

// console.log(Today);

// new Date(year, month, ...)


// new Date(year, month, ...) creates a date object with a specified date and time.

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

// const Today = new Date(2018, 1, 24, 10, 33, 30, 0);

// console.log(Today);


// JavaScript Date Input
// There are generally 3 types of JavaScript date input formats:

// Type	Example
// ISO Date	    "2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"


// const Today = new Date("2015-03-25");
// console.log(Today);


// The new Date() Constructor
// In JavaScript, date objects are created with new Date().

// new Date() returns a date object with the current date and time. 


// Date Get Methods
// Method	Description
// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	    Get month as a number (0-11)
// getDate()	    Get day as a number (1-31)
// getDay()	        Get weekday as a number (0-6)
// getHours()	    Get hour (0-23)
// getMinutes()	    Get minute (0-59)
// getSeconds()	    Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	    Get time (milliseconds since January 1, 1970)

const Today = new Date();
const right = "&copy;";
const example = "All right Reserved"
document.getElementById("demo3").innerHTML = right + Today.getFullYear() + " " + example;