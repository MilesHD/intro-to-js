## Introducing JavaScript: Session 2

- Objects Re-examined
  - Pitfalls of 'this' and 'new'
  - A better way to object: Power Constructor
- Exercise 1
- Closure
  - What is Closure?
  - Closures in Action
  - Module Pattern
- Exercise 2
- Browser Environment
  - What is a browser?
  - How is JavaScript executed?
  - How to run JavaScript in the browser?
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

In our first example, we are defining an array in the global scope. While we are able to access the values from the array, global varaibles are at risk of being clobbered by another library. The browser loads all scripts on an HTML page into the global scope, so if another library you're loading also defines a `globalArr` as a global variabl, those names will clash and your program will break. Since there's no way of knowing when and how that collision will happen, just that's its possible, you have made an unreliable system.
```
var globalArr = [1,2,3,4,5]
function getItem(idx) {
  return globalArr[idx];
}
getItem(0) // 1
```

Our next example is a little better, here we define `localArr` inside the function itself. This means that every time the function is called, the `localArr` is created and destroyed within memory. This is both inefficient and requires all initializtion for the array to be included in the function. 
```
function getItem(idx) {
  var localArr = [1,2,3,4,5];
  return localArr[idx];
}
getItem(0); // 1
```

In this example, we finally have closure. Here we are defining `closuredArr` inside our createClosure function, and returning an object with a `getItem` method that closes over the `closuredArr`. Once `createClosure` is executed, the `closuredArr` array is created in memory and a reference saved within the `getItem` function. Even after the object has been returned, and is used somewhere else within your program, it retains access to the array.
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

One of the most popular patterns involving closure is the module pattern. The module pattern is an object creational pattern where we're able to include both public/private functions and variables inside a single object, thus shielding particular parts from the global scope. As we discussed, this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.

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

Thus far we have been looking at specifically at the JavaScript langauge, but the JavaScript runtime alone doesn't do anything that interesting. JavaScript runtimes are implemented in a host environment, which provides the programming model and APIs to actually do stuff. The two host environments we'll be looking at in this class are the browser and node.js. Both environments are fundamentally the same model, but differ in what apis are available on the client vs. the server. Today, we'll be looking at the browser.

### What is a browser?

A web browser, at its simplest level, is an application that makes HTTP requests and renders their response. These HTTP requests go to servers like facebook.com or milesdickinson.com and returns an HTML document, associated stylesheets, JavaScript files, and other assets. The browser parses the HTML document into a node tree, which is a hierarchical representation of all the nodes in the HTML document. This node tree offers functionality for adding, modifying, and removing nodes, and is called the Document Object Model or (DOM). This is the API the browser provides for interacting with your page content.

Another API, The Browser Object Model (BOM) provides objects that expose browser functionality independent of any web page content.At the core of the BOM is the `window` object, which represents an instance of the browser, and is the global object in JavaScript. All global APIs are properties of the `window` object, such as `setTimeout` and `XMLHttpRequest`. The BOM also includes the `location` object, the `Navigator` object, the `screen` object, and the `history` object.

### How is JavaScript executed?

JavaScript runs in the browser, which can be thought of in four high level components: the JavaScript runtime, web apis, the callback queue, and the event loop.

The JavaScript runtime is the software component that executes JavaScript code. The runtime has two primary components, the heap and the stack. The heap handles memory allocation for objects, and the stack is a data structure that keeps of where we currently are in our program's execution. This is done by pushing and popping, like an array, execution contexts on and off the stack.

JavaScript implementations have an single-threaded, event-driven, asynchronous programming model. That was a mouthful, so let's break down that statement. A single-threaded model means only one thing can happen at a time; there are no threads in JavaScript. This does not mean the browser is only capable of doing one thing at a time, just our JavaScript code. Event-driven means that our programs are interactive, meant to continue running and respond to user events, as opposed to a batch program, where they execute and exit upon completion. This is obviously a good thing since we're programming user interfaces, and a user interface that doesn't listen and respond to user events isn't very useful. But how do we handle a user moving his mouse while scrolling the page if JavaScript can only handle 1 thing at a time. That's where we need to leave the comfortable, synchronous programming model behind for an aynschronous one. We're used to synchronous code, where we write an operation, and that operation completes before we move on to the next statement. In asynchronous code, we make an API call and pass a function that is expected to be called by the API once it completes with the result passed in as an argument to the function. When you pass a function this way it is known as a "callback.". This model prevents the stack from being blocked, but is often a new and tricky paradigm for unfamiliar developers to adopt. But when you block the call stack, you can't do anything else, not scoll the page, click on a button, as far as your user is concerned, the application is broken. And they're right.

Let's say we have a function that calls the `setTimeout` web API, and passes in a callback that logs the string "Hello" to the console.
```
setTimeout(function () {
  console.log('Hello');
}, 1000);
```

After 1000 milliseconds (1 second), this WebApi will push your callback onto the callback queue. The callback queue is a data structure that receives callbacks invoked from an api, and they wait until the stack is clear before being executed one by one. Functions currently executing on the stack can't be interrupted just because some API call is complete. That's why timers in JavaScript don't mean "this will happen after exactly 1 second" but "This will happen sometime after at least 1 second has passed", because the call stack must be empty before any function in the callback queue wil run.

That brings us to the final piece of the puzzle, the event loop. The function of the event loop is pretty simple, if the stack is empty, pushes the first callback from the callback queue on to the stack.

As we can see, the browser is more than just the JavaScript runtime, its and environment that offers apis which can do tasks concurrently. Why don't we see it in action with a tool called loupe.

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

### How to run JavaScript in the Browser?

The web was designed as a scientific retrieval system, but was hacked into an application devliery platform. An `html` file acts as the bootstrap for your application, where you can load in script and syling files. JavaScript is loaded through a `<script>` tag in the browser with the `src` attribute pointing to your JavaScript file. Although best practice forbids doing this, you could write code inline as well. Let's take a look in JSBin.

```
<html>
  <head>
  </head>
  <body>
    <script>
      console.log("Look at me! I'm JavaScript");
    </script>
  </body>
</html>

```

Another effective way to protoype code is in your developer tools console. This can be found in the settings in chrome, under dev tools, also with a keyboard shortcut. You can inspect global variables as well.

## Exercise 3
