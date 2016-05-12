// 1. Create a 'closurePerson' function, that when called, returns an object with two methods: 'getName' and 'getAge'. Both methods return the values passed to named parameters at invocation, and are then stored via closure.

function closurePerson(name, age) {
  return {
    getName: function getName() { return name; },
    getAge: function getAge() { return age; }
  }
}

// Verify. You should see: "Ester", "103"
var p1 = closurePerson('Ester', '103');
console.log(p1.getName(), p1.getAge());

// 2. Using the module pattern, create an object named 'modulePerson'. Give that person private 'age' and 'distortion' properties, and a public 'age' property. The public 'age' property should be (age - distortion). 
// The age and distortion values should come from an object you pass at the IIFE invocation.The IFFE should be called with the object, {age: 24, distortion: 2}.

var modulePerson = (function (spec) {
  var age = spec.age || 21;
  var distortion = spec.distortion || 24;
  var ageDistortion = function () {
     return age - distortion; 
  };
  return {
    age: ageDistortion()
  };
}({age: 24, distortion: 2}));

// Verify. You should see:
/*
[object Object] {
  age: 22
}
*/
console.log(modulePerson);
