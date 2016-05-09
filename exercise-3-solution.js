// 1. Create an Pet constructor function that takes a name and type. Create a method named "speak" and console.log a funny greeting with the pets name.

function Pet(name, type) {
  this.name = name;
  this.type = type;
}

Pet.prototype.speak = function () {
  console.log("Hello there Chaps! My name is " + this.name);
};

// 2. Instantiate 2 pets, and have each of them "speak"
var pet1 = new Pet("Bubbles", "cat");
var pet2 = new Pet("Sparky", "dog");

// Verify
pet1.speak(); // Hello there Chaps! My name is Bubbles
pet2.speak(); // Hello there Chaps! My name is Sparky
