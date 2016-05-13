## Introducing JavaScript: Session 3

- Introducing Node
  - What is Node?
  - How does it work?
  - Node APIs
- Asynchronous Programming
 - Callbacks
 - Thunks
 - Promises
 
## Introducing Node

### What is Node?

Node.js is a JavaScript host environment built on top Google's V8 JavaScript Engine. It's a C++ program that you install on on your server that allows you to write highly concurrent services in JavaScript. Node.js is implemented as an event-driven, single-threadded runtime, and conceptually similar to the architecture of a browser. We have a JavaScript engine, Node APIs, callback queue, and an event loop.

### How does it work?

We covered this in session 2, but lets have a brief review of how an event-driven model works. The JavaScript engine executes the source code, and as new functions are invoked, a frame is pushed on the stack. The stack keeps track of where we are in the execution of our program. Many of these function calls will be to Node's built-in or 3rd party APIs. These APIs are asynchronous, meaning you need to pass a function to the API that will be called to return the result once the API is complete. It's not that straightforward though, if an API could arbitrarily interrupt our stack, there would be chaos. Instead, the APIs push their callbacks to the callback queue, where they wait in line until it's their turn to be run (pushed on the call stack). Finally, the event loop is the bouncer, who moves callbacks from the queue to the stack when the stack is empty.

Programming in this single-threadded, non-blocking fashion requires an entirely different paradigm, Asynchronous programming. That will be the focus of the second half of our class.

### Node APIs

Node.js is a c++ program, which provides bindings for JavaScript syntax that translate into c++ calls, which can do anything on your computer. Node actually has an API where you can load C and C++ code directly into your JavaScript program. Node has a module system based on the commonjs standard, and primarily consists of loading modules with `require` and sharing public objects and functions with `exports`. Node has a number of built in modules, which you can require by simpling referencing the name of the module in the require statement `var fs = require('fs');`. For local modules, you need to specify it's relative path, like this `var myModule = requrie('./myModule');`.

Node's built in functionality is immense, so i'm going to cover a couple of the most relevant and useful modules.



I hope you all have had the chance to install Node.js, it will make participating in exercise 1 more fun. 

## Asynchronous Programming

### Callbacks

## Thunks

## Promises
