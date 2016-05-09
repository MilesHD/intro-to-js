// 1. Write a function named 'add' that takes 2 arguments, 
// adds them together and returns the result.

function add(x, y) {
  return x + y;
}

// Verify
console.log(add(5, 3)); // 8

// 2. Write a function named addFn, that takes 2 functions, 
// adds the result of the two functions, and returns the result.

function fn1(x) {
  return x;
}

function fn2(y) {
  return y;
}

function addFn(x, y) {
  return add(x, y);
}


// Verify
console.log(addFn(fn1(5), fn2(3))); // 8
