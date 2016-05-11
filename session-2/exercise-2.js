// 1. Create a 'closurePerson' function, that when called, returns an object with two methods: 'getName' and 'getAge'. Both methods return the values passed to named parameters at invocation, and are then stored via closure.

// Your Code Here

// Verify. You should see: "Ester", "103"
var p1 = closurePerson('Ester', '103');
console.log(p1.getName(), p1.getAge());

// 2. Using the module pattern, create an object named Person. Give that person private 'age' and 'distortion' properties, and a public 'age' property. The public 'age' property should be (age - distortion). The age and distortion values should come from an object you pass at the IIFE invocation.

// Your Code Here

// Verify. You should see:
/*
[object Object] {
  age: 22
}
*/
console.log(modulePerson);
