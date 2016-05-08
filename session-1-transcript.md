# Intro to JS: Session 1

## Outline
 - Introduction
  - About Me
  - My Mentors
  - Course Overview and Goals
 - Why JavaScript
 - What is JavaScript
  - History
  - Acenstors
 - Language Fundamentals
  - Expressions and Statements
  - Types, Values, and Variables
  - Control Flow
 - Functions and Scope
  - What is a Function?
  - Functions as First Class Values
  - What is Scope?
  - Lexical Scope
 - Prototypal Object System
  - What are Objects?
  - Prototypal vs. Classical
  - Prototype Chain
  - 'this'
  - Pseudoclassical Pattern
 

## Introduction

Hello everyone, and welcome to "Introduction to JavaScript", or alternately titled "How I learned to Stop Worrying and Love the JavaScript." My name is Miles Dickinson, and my first introduction to JavaScript as a sophmore in high school when I started developing websites. My first few years with the language was a struggle, because I made a fundamental mistake that is made by many professional programmers today. I tried to use the language without understanding it. That is the core reason for many negative things you may think or have heard about JavaScript.

JavaScript is famous for both being the world's most misunderstood programming language, and having more good parts and bad parts than any other language. Over the next four sessions, I am going to teach a combination of the good parts, and the parts you will most likely encounter in the wild. There are some parts of the languge I will not be covering both for the sake of time, and you'll never want to program with them anyway. But as you continue your education in JavaScript I encourage to learn about them for learning why those features are dangerous is important.

### My Mentors

I want to take a second to introduce you to three people you should absolutely know about in the JavaScript community. Douglas Crockford, Kyle Simpson, and Dr. Axel Rauschmayer. They're incredibly smart people, and have given enormously to the community in terms of education, open source development, and leading the future of the language. I highly recommend you look them up and check out their collective works to take your JavaScirpt to the next level.

### Course Outline and Goals

This is a four session class, and each session will have three 15 minute lectures, and three exercies.

Some of the exercies I expect you to complete in 5 minutes, some I don't, and that's okay. I'll be capping exercise time at exactly 5 minutes to stay on schedule, and we will review the solution before starting the next lecture. I also highly encourage you to revisit the exercises later today to reinforce what you've learned.

I've reserved the conference room for an extra 30 minutes for questions. If you're hear in person raise your hand, and if you're remote please mute your line and ask questions through the webex chat.

Today, in session 1 we're going to discuss what JavaScript is, why we should care, and dive into language fundamentals. We'll then examine, functions, scope, and wrap up with a look at the object system.

## What is JavaScript

Contrary to it's name, JavaScript has almost nothing to do with Java. As far as mechanics of the language, Java and JavaScript couldn't be more fundamentally different. JavaScript is a mix of Java Syntax, first class functions and lexical scope from Scheme, a protypal object system from Self, and a couple of the creators own ideas. But how did this language come to be?

### History

Let's jump back to 1995. Netscape made Navigator, one of the first popular web browsers, and they wanted to add interactivity to the next version, Navigator 2. They hired Brendan Eich for the job and he wanted to write a scheme interpreter, but Netscape thought the syntax was too weird and wanted him to use somthing more familiar like Visual Basic or Java. The langauge he wrote was a mix of three languages, Java because he had to, Scheme, and Self, and in about 10 days he had completed the first version of LiveScript. To give you a basis of comparison, smalltalk80, considered one of the best designed languages of all time, was designed in about 8 years.

Netscape wasn't alone in this space, Microsoft had Internet Explorer. Sun Microsystems, the creators of Java, and Netscape realized they needed to work together against Microsoft, so Microsoft wouldn't pit them against eachother. But the biggest area of contention between the two companies was what to do with LiveScript. Sun's position was to put Java in Netscape's browser and kill Livescript. Netscape wanted a simpler programming model to capture a wider developer base. They were at an impasse, when the suggestion came, possibly as a joke, "Lets change the name to JavaScript." And it worked.

Microsoft decided they needed to copy Netscape's model to stay competitive so they reverse engineered the JavaScript engine and called it JScript. Netscape, alarmed the language was being embraced and extended, decided it needed to be standardized, and ended up at the European Computer Manufacturer's Association. The committe created a standard, but was not able to name it JavaScript, because even though Sun tried to kill the language, they claimed trademark on the name. Therefore, the committe published the standard under the working title ECMAScript. So now we have JavaScript, JScript, and ECMAScript, and they are all the same language.

## Why JavaScript

1. JavaScript is the language of the browser. Whether you like it or not, if you want to have any client-side interactivity, you need to use JavaScript.

2. JavaScript is everywhere. It's one of the most popular languages in the world, and JavaScript runtimes are spreading everwhere from servers, robots, and even watches. This gave rise to "Atwood's Law" which states, "Any application that can be written in JavaScript, will eventually be written in JavaScript." JavaScript is also what gave rise to the concept of a full-stack developer. For the first time, we can write our entire application in one language, and the benefits of simplicity, code resuse, and not having to switch contexts as you go from client to server cannot be overstated.

3. Now that we'eve established you will most likey be working in JavaScript at some point, you can't program in a language you don't understand. Going back to understanding the langauge, a bug is simply a manifestation of confusion in your program. It's where you think your program is doing something different than it is actually doing. If you don't understand what your code is doing, how can ever know your programs will work?
 
4. The good parts are really, really good. When I mention good parts, I'm specifically talking about Douglas Crockford's "Good Parts", which is a subset of the JavaScript language where confusing and problematic features are removed. The fundamental principal behind the good parts, which I think is brilliant and should be applied to all languages, is "if you have a feature that is sometimes useful and sometimes probelmatic, and there is an alternative, always use the alternative." It's not that the bad parts of JavaScript aren't useful, it's that there's never a case where they aren't confusing. And we've already established confusion is our mortal enemy.

5. Finally, you should learn JavaScript because GE needs you to learn JavaScript. Not only for the opportunities of using JavaScript with Predix, but I have seen JavaScript in production being used in ways that i've never seen before, and that's not a good thing.


## Syntax

JavaScript's syntax borrows heavily from Java and other C-like languages such as Pearl. The fundamental building blocks of a JavaScript program are statements, which are made of one or more expressions. An expression produces a value, and a statement affects change in the world. By world, I mean the context of your program, and every statement in your program should move the problem state of your world toward its solution state. You name all the variables, functions, properties, and function arguments in your world with identifiers.

An identifier may be one or more characters in the following format:
 - The first letter must be a ltter, and underscore (_), or a dollar sign ($)
 - All other characters may be letters, underscores, dollar signs, or numbers.
 - use camelCase
 - everything is case sensitive

Also, JavaScript uses C-style comments for single line comments `// comment here` and block level comments
```
/* 
block 
of multiple lines
*/
```

Finally, ECMAScript 5 introduced `strict-mode`, which is a differnt parsing and execution model for JavaScript where some of the troublesome behavior of 3rd edition of the standard is addressed and errors are thrown for unsafe activities. I reccommend you write all your programs in `strict-mode` if possible.

## Variables

Variables in JavaScript are loosely typed, which means that they can hold any type of data. Contrary to a strongly typed langauge like Java, where a variable must be declared to only hold a specific type. In JavaScript, a variable is simply a placeholder for a value.

To define a variable, use the `var` operator followed by a identifier.
```
// Define a variable, miles, and initialize it to "rocks"
var miles = "rocks";
```

## Data Types

### Primitive and Reference Values

Two types of values can be stored in JavaScript variables: primitive values and reference values. 

Primitive values have one of the five primitive data types: undefined, null, boolean, string, and number. They are a fixed size and are stored on the stack in memory. Copying primitive values from one variable to another creates a second copy of the value.

Reference values are objects and are stored on the heap in memory. A variable containing a reference value actually contains just a pointer to the object, not the object itself. The pointer is a variable that holds a memory address. Coying a reference value to anohter variable copies tjust the pointer, so both variables are referencing the same object.

The `typeof` operator determine's a variable's primitive type, whereas the `instaceof` operator determines the reference type of the value.

### Primitive Types

There are five simple data types, also called primitives, in JavaScript.
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
And one complex data type: `object`.

The `string` data type represents a sequence of zero or more 16-bit unicode characters. Strings can be delineated by either double quotes `"` or single quotes `'`. You can also use character literals, which are a backslash `\` followed by a series of characters which represent symbols beyond those built into your keyboard. For example, `\n` represents a new line, and `\u03a3` displays equivalent to the Greek character Zeta on your screen.

Strings are immutable, meaning once they are created, their values cannot be changed. To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing the new value. Concatenation is done via the `+` operator as shown in the example below:

```
var truth = "Miles";
truth = truth + " Is Great";
```

The `number` type uses the IEEE-754 format, which is known as a `double` in other languages. It uses 64 bits to represent both integers and floating-point numbers. Unlike other languages where you have to decide on a number type based on how how big you think the number is going to be, there is only one type in JavaScript, so you simply wirte the literal number. 

```
var integer = 6;
var float = 1.1;
```

The `boolean` type only has two literal values: `true` and `false`. All values, however, can be cast to a boolean, therefore values are said the be either "truthy" or "falsy" depending on whether they resolve to `true` or `false` after boolean conversion. Many of JavaScript's built in statements, such as the `if` statement perform this conversion automatically.

```
var message = "Hello World";
if (message) {
 console.log("Value is true");
}
```

The `undefined` type has only one value, which is a special value `undefined`. When a variable is declared using `var`, but not initialized (assigned to a value) it is assigned the value `undefined`.

The `null` type has only one value, a special value `null`. A `null` value is technically an empty object pointer, so the `typeof` operator, which determines the data type of a value, thinks it's type is an object. Due to this quirk, I recommend only using `undefined` as a bottom value, as it's the one the language uses interally. 

The `object` type is a dynamic collection of unordered properties, where each property may contain a value of any type. All the Primitive Wrapper, Reference, and Error types have the `object` type as their base.


### Reference Types
- `String`
- `Number`
- `Boolean`
- `Object`
- `Array`
- `Date`
- `RegExp`
- `Function`

These reference functions create objects of the corresponding reference type. Reference types are structures used to group data and functionality together.

The `Object` type is a dynamic collection of properties and is the base for all the other reference types.

It has a number of built in methods. 
- `isPrototypeOf` - determines if the object is a prototype of another object.
- `propertyIsEnumerable` - indicates if the given property can be enumerated (retrived using a for-in loop)
- `hasOwnProperty` - indicates if the given property exists on the object instance (not on the prototype)

The perferred way to create an object is with an object literal syntax:
```
var obj = {
 prop1: 'myProperty',
 prop2: function () {
  console.log("I am also a property, sometimes called a method");
 }
};
```

The `Array` type is an ordered list of data that is dynamically sized and can hold any type of value.

It has a number of built in methods.
- `push` - add item to end of array.
- `pop` - remove and return item from end of array.
- `shift` - remove and return item from beginning of array.
- `unshift` - add item to beginning of array.
- `slice`
- `splice`

Since `instanceof` returns `object` when testing an array, we need to use Array.isArray method to determine if an array is an array.

The preferred way to create an array is with array literal syntax:
```
var arr = ['js', 'is', 'fun'];
```

The `Date` type stores dates as the number of milliseconds that have passed since midnight on January 1, 1970 UTC.

To create a new `Date` object, use the new operator with the Date reference function.
```
var now = new Date();
```

They type comes with a number of formatting methods:
 - `getDay` - returns the date's day of the week, where 0 is sunday and 6 is saturday.
 - `getHours` - returns the date's hours as a number between 0 and 59.
 - `getMinutes` - returns the date's minutes as a number.
 - `getSeconds` - returns the date's seconds as a number.

JavaScript supports regular expressions through the `RegExp` type. A regular expression is a  special string for describing a search pattern.

They are created using the following pattern:
```
// Pattern
// var expression = /pattern/flags

var expression = /miles/gi;
```




## Operators

Operators can be used to manipulate data. The main types of operators are arithmetic, logical, relational, and equality operators.

Arithmetic operators include addition (+), subtraction (-), multiplication (*), division (*), and modulus(%), which returns the remainder of dividing the two operands.

Logical operators can be used to create logical expressions, and include and (&&), or (||), and not (!).

Relational operators compare two values in an expression and return the result of that expression as a boolean. These include less-than (<), greater-than (>), less-than-or-equal-to (<=), and greater-than-or-equal-to (>=).

Equality operators

Assignment operator

Conditional Operator

Comma Operator

## Flow Control Statements

Flow control is the execution path your program takes depending on the state of your program. The three types of flow control are sequential, conditional, and iterative. 

Sequential flow control is the default top-to-bottom execution of your program.

Conditional flow is where one of multiple execution paths are taken due to the result of a conditional expression. JavaScript has the `if` statment, which can be pared with an `else if` and `else` to handle any number of conditions.

```
var a = 4;
var b = 3;

if (a > b) {
 console.log("a is greater than b.");
} else {
 console.log("a is less than or equal to b");
}
```

Iterative flow is where a block of statements is executed repeatedly until a condition is met. The two primary statements for iteration are the `for` and `while` loop.

```
var x = 0;
for (i = 0; i < 10; i += 1) {
 console.log('JS is da best!');
}

var y = 0;
while (y < 10) {
 console.log('JS is da best!');
 y += 1;
}
```

## Exercise 1

## Execution Context (Scope)

All variables, primitive and reference, exist within an execution context (scope) that determines the lifetime of the variable and which parts of the code can access it.

In JavaScript, there is a global context and within functions. There is no block scope. Each time a new execution context is entered, it creates a scope chain to search for varaibles and functions. Contexts that are local to a function have access not only to the variables in that scope but also to variables in any containing contexts and the global context. Pay particular attention here, because that is going to come back in a big way tomorrow.

Conversly, the global context and outer functions only have access to variables and function in their context and above and cannot directly acecss any data inside their local contexts. The execution contexts of variables helps determine when they will be released from memory. JavaScript is a garbage-collected programming environment, so the developer does not need to be concerned with memory allocation or reclamation. When values go out of scope, they will be automatically marked for reclamation and will be deleted during the garbage collection process.

## Functions



## Exercise 2

## Objects

Objects are a dynamic collection of propeties 

## `this`
## Delegation and the Prototype Chain
## Pseudoclassical Pattern

## Exercise 3

## Conclusion
