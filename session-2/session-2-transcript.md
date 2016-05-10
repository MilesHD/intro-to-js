## Introducing JavaScript: Session 2

- Objects Re-examined
  - Pitfalls of 'this' and 'new'
  - A better way to object: Power Constructor
- Exercise 1
- Closure
  - What is Closure?
  - Why should I Care?
  - Ingredients
  - How to use (Patterns)
- Exercise 2
- Browser Environment
  - What is a Browser?
  - ECMAScript
  - How Code is Executed
  - Browser APIs
- Exercise 3

## Objects Re-Examined

Last class, we left with an introduction to one of the most popular patterns for creating object systems in JavaScript, the Pseudoclassical pattern. Today, we're going to examine the pitfalls of this pattern, and examine a much simpler and more effective pattern for creating objects.

### Pitfalls of `this` and `new`

The Pseudoclassical pattern contains 3 steps:
1. Create a constructor function that assigns data to properties of a newly created object.
2. Attach methods to the constructor function's prototype
3. Create new objects by making a constructor call `new Constructor()`.

A constructor call is when a function is called with the `new` keyword in front of it. When `new` is called, 4 things happen:
1. A Therand new object is created
2. The newly created object is `[[Prototype]]` linked
3. The newly created object is set as the `this` binding for the function call
4. Unless the function returns its own alternate object, the newly created object is automatically returned.

Problems with `new`

As we discussed last session , the `this ` keyword is dynamically assigned depending on how it is called, and is set by one of the four following rules:
1. `new` binding
2. Explicit binding
3. Implicit binding
4. Default binding

Working with `this` adds considerably to our cognitive load because we are not able to reason about the value by looking at how it is used within the function. There are also a number of security concerns with `this`, because since it is assigned dynamically and defaults to the global object in ES3, it is quite possible for crackers to exploit `this` and get access to the global object. Because of the potential confusion and security implications working with `this`, I no longer use it in my programs.

Case Study: AdSafe had to remove this as the only way to create a secure container for doing mashups.

### A better way to object: Power Constructor

The power constructor is a pattern popularized by Douglas Crockford. It uses "parasitic inheritance", which is named for the Tarantula Hawk wasp who lays their eggs inside a living spider, so the offspring has an incubation chamber and food for hatching day. "Parasitic inheritance" is where you create an instance of a prototypically linked object in the first line of the constructor, and then augment and return that object.

## Exercise 1

## Closure

Closure is one of the most important breakthroughs in language design of all time. And guess which language was the first to bring closures in the mainstream? Yup, it was JavaScript.

### What is Closure?

A closure is a function that has access to variables from another function's scope. This is often accomplished by creating a function inside a function. Even if the inner function has been returned, and is being used elsewhere, it still has access to any variables it "closes" over.

This happens because when a function is called, a scope chain is created that is used to look up variables available to the function. When a function defined inside another function, it adds the containing function's scope into it's scope chain, so the containing function's variables are available to the inner function.

### Closures in Action
```
var globalArr = [1,2,3,4,5]
function getItem(idx) {
  return globalArr[idx];
}
getItem(0) // 1
```

```
function getItem(idx) {
  var localArr = [1,2,3,4,5];
  return localArr[idx];
}
getItem(0); // 1
```

```
function createClosure() {
  var closuredArr = [1,2,3,4,5];
  return {
    getItem: function (idx) {
      return closuredArr[idx];
    }
  }
}
var x = createClosure();
x.getItem(0); // 1
```
### Module Pattern

With the Module Pattern, we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.

The module pattern starts with an immediately invoked function expression. This is a pattern itself, where you define an function and invoke it in one expression. Inside the IIFE, we declare private variables and functions, and return an object of public properties and methods that use the private variables. This works because the function immediately returns the object to the variable, but the functions in the object maintain access to the private members through closure.

```
var module = (function () {
  var privateVar = 2;
  var publicvar = privateVar + 5;
  var privateFunction = function () {
    console.log("Doing private stuff.");
  }
  return {
    publicProperty: publicVar,
    publicMethod: function () {
      console.log("Inside a public method.");
      privateFunction();
    }
  }
}());
```

## Exercise 2

## What is a Brower?
### ECMAScript
### How Code is Executed
### Browser APIs

## Exercise 3
