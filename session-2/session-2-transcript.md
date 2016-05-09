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

### A better way to object: Power Constructor

## Exercise 1

## Closure
### What is Closure?
### Why should I care?
### Ingredients
### How to use?

## Exercise 2

## What is a Brower?
### ECMAScript
### How Code is Executed
### Browser APIs

## Exercise 3
