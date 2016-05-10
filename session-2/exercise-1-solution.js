// 1. Using the Power Constructor Pattern, create a 'Vehicle' object constructor. The plane should have a color, and a go method.

function vehicleConstructor(spec) {
  var go = function (color) {
    console.log("I'm Going! And I sure look " + color);
  };

  return Object.freeze({
    color: spec.color,
    go: go,
  });
}

// 2. Using the Power Constructor Pattern, create a 'Plane' object constructor. The plane should have a vehicle property that points to their vehicle  
function carConstructor(spec) {
  var vehicle = vehicleConstructor({color: spec.color});

  return Object.freeze({
    color: vehicle.color,
    go: go
  });
}

// Verify
var c1 = carConstructor({color: 'red'});
console.log(cl.color);
console.log(cl.go);
