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

Asynchronous programming is best understood by first contrasting it with synchronous programming. Synchronous programming is how we're used to programs running, one after the other, each statement completing before moving on to the next. Asynchronous programming, however, has at least two distinct parts of the program. A part that will run now, and parts that will run later. The parts the run later are the callbacks you pass to Asynchronous APIs, which do work without blocking the call stack, and pushing your callback with the result to the event queue upon completion. That's why Async is so difficult, our brains don't think that way, and it's not long before a long, asynchronous chain of operations becomes unreasonable to us.

### Callbacks

The fundamental mechanism for managing asynchronicity is the callback. A callback is a function you pass as an argument to an asynchronous API, and then is used to retrieve the value from the api and perform any other "program continuing" work. If you've worked with Node before, code like this may seem familar to you.
```
asyncOp1(function (value1) {
  asyncOp2(function (value2) {
    asyncOp3(function (value3) {
      console.log("Got all values after all operations have completed!");
    }
  }
}
```

This code suffers from two major problems that is known as "callback hell". And I'm not talking about nesting for indentation. All callbacks suffer from inversion of control and non-local, non-sequential reasoning.

Inversion of control, in this context, means that I am relying on the `asyncOp1` not to call the callback I pass in too early, too late, too many times, too few times, etc. There is this implicit trust, where you are completely at the APIs mercy to treat your callback right. This may be a manageable probelm for async utilites you're calling within your own codebase, but what if a 3rd party library has a breakdown in their deployment process and deploys a feature that calls your callback every second for five seconds? Your app will be breaking and there's nothing you can do about it. 

Non-local, non-sequential reasonabilty of programs, means that you are not able to reason about callbacks. Our brains work in a synchronous, planning fashion, and it's at the moment where our brains divert from the way the JavaScript engine works is where bug's happen. So our goal is to learn how we can write programs that make sense to us.

### Thunks

Thunks are a pattern that enables us to factor time out of our code. 

### Promises
