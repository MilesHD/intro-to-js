// 1. Write a function named 'add' that takes 2 arguments, 
// adds them together and returns the result.

function add(x, y) {
  return x + y;
}

// Verify
console.log(add(5, 3)); // 8

// 2. Write a function named applyFn, that takes 3 arguments, a function and 
// two numbers, and applies the function to the numbers, and returns the result.

function applyFn(fn, x, y) {
  return fn(x, y);
}

// Verify
console.log(add, 5, 3); // 8

// 3. Write a function named add5 that returns a function, which you can call at a
// later time with an argument, and it will add 5 to the argument and return the sum.

function add5() {
  return function (x) {
    return add(x, 5);
  }
}

// Verify
console.log(add5()(3)); // 8
