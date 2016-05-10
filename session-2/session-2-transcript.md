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

Last class, we left with an introduction to one of the most popular patterns for creating object systems in JavaScript, the Pseudoclassical pattern. Today, we're going to understand how that pattern works under the hood, explore some of the advantages and disadvantages, and look another pattern that I perfer to use..

### Pitfalls of `this` and `new`

The Pseudoclassical pattern contains 3 steps:
1. Create a constructor function that assigns data to properties of a newly created object.
2. Attach methods to the constructor function's prototype
3. Create new objects by making a constructor call `new Constructor()`. This is known as a constructor call, where a function call is preceded by a `new` keyword.

To understand how this actually works, we need to examine what the `new` keyword is doing.

When `new` is called, 4 things happen:
1. A new object is created
2. The newly created object is `[[Prototype]]` linked
3. The newly created object is set as the `this` binding for the function call
4. Unless the function returns its own alternate object, the newly created object is automatically returned.

This is a completely valid pattern, and used widely in the JavaScript community. It's advantages are that we leverage delegation through prototypes, and have better performance from reusing same functions defined on a prototype, rather than copies of a function locally defined in each object. But it has a number of drawbacks. If we forget to call our constructor function with the `new` keyword, our program will fail without warning. This can be mitigated, but by using this feature we are vulnerable to this class of error. Creating subtypes is also awkward in this pattern, we need to use `Object.create` to create an instance of the protoype we want to inherit from, and then set that object equal to the prototype property of our new constructor.
```
function Foo() { /* */ }
function Bar() { /* */ }

Bar.prototype = Object.create(Foo.prototype);
```
`new` isn't the only feature that can be problematic. As we discussed last session , the `this ` keyword is dynamically assigned depending on how it is called, and is set by one of the four following rules:
1. `new` binding
2. Explicit binding
3. Implicit binding
4. Default binding

Working with `this` adds considerably to our cognitive load because we are not able to reason about the value by looking at how it is used within the function, we have to examine how it is called, which could be in an entirely different file. There are also a number of security concerns with `this`, because since it is assigned dynamically and defaults to the global object in ES3, it is quite possible for crackers to exploit `this` and get access to the global object. Because of the potential confusion and security implications working with `this`, I no longer use it in my programs.

So this begs the question, perhaps there's a cleaner, simpler model for object oriented programming.


### A better way to object: Power Constructor

The power constructor is a pattern popularized by Douglas Crockford. It uses "parasitic inheritance", which is named for the Tarantula Hawk wasp who lays their eggs inside a living spider, so the offspring has an incubation chamber and food for hatching day. "Parasitic inheritance" is where you create an instance of an object from another constructor, and then augment the object with your properties and methods and return it.

```
function constructor(spec) {
  var other = other_constructor(spec);
  var privateVar;
  var method = function () {
    // do work, access properties on spec, etc.
  };
  return Object.freeze({
    method: method,
    other: other
  });
}
```

In this pattern, we define all our private and public variables and methods, and return a forzen object with properties to "reveal" our public members. Freezing the object makes it immutable so other programs cannot change it from under us. This gives us integrity and reliabilty in our object system that their interfaces cannot be corrupted.

Additionally, passing in an `options` object is more flexible than named parameters, and allows us to change our api later without changing the function signature. The methods close over variables it needs access to, effectivly hiding private data. We'll get into how that works when we discuss closure after exercise 1.

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

The Browser Object Model is the core of using JavaScript on the Web. The BOM provides objects that expose browser functionality independent of any web page content.

At the core of the BOM is the window object, which represents an instance of the browser. This is the global object in JavaScript.

JavaScript runs in the browser, which can be thought of in four high level components: the javascript runtime, web apis, the callback queue, and the event loop.

The JavaScript runtime is the software component that physically executes our JavaScript. It is a single-threaded model, meaning only one thing can be happening at a time, there are no threads. The runtime has two primary components, the heap and the stack. The heap handles memory allocation for objects, and the stack is a data structure that keeps of where we currently are in our program's execution. This is done by pushing and popping, like an array, execution contexts on and off the stack.

JavaScript implementations have an event-driven, asynchronous programming model. We're used to synchronous code, where we write an operation, and that operation completes before we move on to the next statement. 

Web apis include the Browser Object Model (BOM) and the Document Object Model (DOM). WebApis push your callback onto the task callback queue.

The callback queue is a data structure that receives callbacks invoked from an api. The callbacks wait in order int

The event loop pushes the first callback from the callback queue on to the stack, if the stack is empty.

blocking code is "code that is slow". Network calls, video processing, etc. The number one rule of event driven programming, don't block the stack. When you block the stack, you can't do anything else, not scoll the page, click on a button, as far as your user is concerned, the application is broken. And they're right.

The browser is more than just the runtime, they offer apis which can do tasks concurrently. 

```
Call Stack

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n)
}

function printSquare(n) {
  var squared = square(n);
  console.log(squared);
}

printSquare(4);
```

## What is a Brower?

A web browser is an application that makes http requests and displays the response.

### ECMAScript
### How Code is Executed
### Browser APIs

## Exercise 3
