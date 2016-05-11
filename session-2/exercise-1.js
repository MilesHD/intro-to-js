// 1. Using the Power Constructor Pattern, create a 'vehicleConstructor' object constructor. The function should accept a 'spec' object with a color property as a parameter. The function returns a public color method and a go function that logs to the console..

// Your Code Here

// Verify
var vehicle1 = vehicleConstructor({color: 'red'});
console.log(vehicle1.color); // red
console.log(vehicle1.go()); // I'm Going!

// 2. Using the Power Constructor Pattern, create a 'carConstructor' object constructor. The carConstructor should inherit from vehicleConstructor using 'parasitic inheritance'. 

// Your Code Here

// Verify
var car1 = carConstructor({color: 'red'});
console.log(car1.color); // red
console.log(car1.go()); // I'm going! And I'm also a car
