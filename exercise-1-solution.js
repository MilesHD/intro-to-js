// Exercise 1: Syntax and Language Fundamentals

// 1. Initialize a variable 'foo', to the string primitive 'bar'

var foo = "bar";

// Verify
console.log(foo); // "bar"

// 2. Create an object named 'bar', with one property 'a' assigned to 4 and a method 'b' that writes 'Hello baz' to the console when called.

var bar = {
  a: 4,
  b: function () {
    console.log('Hello baz')
  }
};

// Verify
console.log(bar.a); // 4
bar.b(); // 'Hello baz'

// 3. Create an array named 'arr', with three elements: "JavaScript", "Is", "Fun"

var arr = ["JavaScript", "Is", "Fun"];

// Verify
console.log(arr[0]); // "JavaScript"
console.log(arr.length); // 3

// 4. Remove "JavaScript" and "Fun from the arr using built-in array methods, and add "Miles" to the beginning of arr and "Great" to the end of arr.

arr.shift();
arr.pop();
arr.unshift("Miles");
arr.push("Great");

// Verify
console.log(arr); // ["Miles", "Is", "Great"]

// 5. If "Is" is at index 1 of the array, log "I knew Is was there!", otherwise log "Guess it wasn't".

if (arr[1] === "Is") {
  console.log("I knew Is was there!");
} else {
  console.log("Guess it wasn't");
}
  
// Verify
// I knew Is was there! 
