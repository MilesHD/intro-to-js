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

### About Me

Hello everyone, and welcome to "Introduction to JavaScript", or alternately titled "How I learned to Stop Worrying and Love the JavaScript." This is the first of our four sessions together, so you might as well get to know me a little better. My name is Miles Dickinson, and my first introduction to JavaScript was when I started developing websites as a sophmore in high school, and I probably couldn't have had a rockier introduction to programming or the language. I had little to no clue what I was doing, and blindly copied and pasted from online, just trying to get my code to work. Needless to say, failure was the norm and thankfully my passion helped me push through those years of frustration. My fundamental mistake was trying to use the language without understanding it. That mistake, however, is not only made by technically uneducated teenagers, it's made by many professionals and is the core reason for any negative connotations you may have or have heard about the language.

JavaScript is famous for both being the world's most misunderstood programming language, and having more good parts and bad parts than any other language. My hope is by the end of this class you'll have a healthy perspective on the language in how you can write expressive, powerful, and secure programs with the good parts, and eliminate the bad parts by simply not using them.

### My Mentors

I want to take a minute and introduce some of my mentors over the years. There are many more smaller, and anonymous contributors to my knowledge and development, but these three: Douglas Crockford, Kyle Simpson, and Dr. Axel Rauschmayer, have been by far the most significant. They're incredibly smart people, and have given enormously to the community in terms of education, open source development, and trailblazing the future of the language. I highly recommend you look them up and check out their collective works to take your JavaScirpt and programming to the next level.

### Course Outline and Goals

The hardest thing about putting this class together was trying to scope it down to four hours. We could have a two-day workshop and still not cover everything I would like to discuss, but unfortunately none of us have the time for that. I want you to leave this class as a tangibly better programmer and with a broad understanding of what JavaScript is, how to effectively use it, and where to go next.

Today we're going to discuss the What JavaScript is, is not, and why we should care about. Then we'll get into the language fundamentals including types, variables, and control flow, Followed by an introduction to functions and scope, and wrap up with a look at the JavaScript's prototypal object system. In session 2 we'll re-examine our approach to objects, understand what closure is and why it is amazing, and then take an under-the-hood look at the Browser and how JavaScript is actually run. In session 3 we'll meet Node.js and understand how JavaScript works on the server, and begin our introduction into functional programming with forEach and map. Finally, in session 4 we'll continue studying functional techniques with filter and reduce, learn why asynchronous programming is so hard, and how to solve asynchronous problems with callbacks, thunks, and Promises. This is definitely an ambitions schedule, I have no idea if we'll get to all of it, but we're certainly going to try.

Each class will have about 10-15 minutes of lecture, then a 5 minute exercise. Some of the exercies I expect you to complete in 5 minutes, some I don't, and that's okay. I'll be capping exercise time at exactly 5 minutes to stay on schedule, and will review the solution before starting the next lecture portion. I highly encourage you to revisit the exercises and try them on your own later. As far as questions, if you're here in person just raise your hand and i'll field them live, if you're remote please leave your question in the chat and I'll answer it at the earliest opportunity. Without further ado, let's dive in!

## Why JavaScript

We humans have a limited amount of time on this earth, so before we allocate any of that precious time to learning JavaScript, it's important to ask why.

1. JavaScript is the language of the browser. Whether you love it or hate it, like it or not, if you want to make a web application that does anything interesting, you need to use JavaScript. Even if you're using a transpiler, which lets you write in another language like Java and have it transformed to JavaScript, you still need to understand JavaScript or you're going to be in a world of pain of suffering and have no idea why. A bug is simply a manifestation of confusion in your program. It's where you think your program is doing something different than it is actually doing. So if you don't understand what the transpiled code is doing, how can you ever expect your programs to work?

2. The good parts are really, really good. When I mention good parts, I'm specifically talking about Douglas Crockford's "Good Parts", which is a subset of the JavaScript language where confusing and problematic features are removed. The fundamental principal behind the good parts, which I think is brilliant and should be applied to all languages, is "if you have a feature that is sometimes useful and sometimes probelmatic, and there is an alternative, always use the alternative." It's not that the bad parts of JavaScript aren't useful, it's that there's never a case where they aren't confusing. And what did we say about confusion, it's just a bug that hasn't been discovered yet. So once you have the knowledge and discipline to work with the good parts, not only will you be writing powerful and expressive programs, but it'll make you a better programmer.

3. JavaScript is everywhere. It's one of the most popular, if not the most popular language in the world, depends on what metric you use, and JavaScript runtimes are spreading to literally everything, from servers, to robots, to watches. This gave rise to "Atwood's Law" which states, "Any application that can be written in JavaScript, will eventually be written in JavaScript." In my opinion, JavaScript is also what gave rise to the concept of a full-stack developer. For the first time, we can write our entire application in one language, and the benefits of simplicity, code resuse, and not having to switch contexts as you go from client to server cannot be overstated.

4. Finally, you should learn JavaScript because GE needs you to learn JavaScript. Not only for the opportunities of using JavaScript with Predix, but I have seen JavaScript in production being used in ways that i've never seen before, and that's not a good thing.

## What is JavaScript

Before we dive into what JavaScript is and is not, we're going to have a brief history lesson. Not only because I personally find it really fascinating, but because it's vital to understand where we came from and how we got here to understand why the langauge is what it is.

### History

Let's jump back to 1995. Netscape made Navigator, one of the first popular web browsers, and they wanted to add interactivity to the next version, Navigator 2. They hired Brendan Eich for the job and he wanted to write a scheme interpreter, but Netscape thought the syntax was too weird and wanted him to use somthing more familiar like Visual Basic or Java. The langauge he wrote was a mix of three languages, Java because he had to, Scheme, and Self, and in about 10 days he had completed the first version of LiveScript. To give you a basis of comparison, smalltalk80, considered one of the best designed languages of all time, was designed in about 8 years. If Netscape had been a better managed company, they may have taken a few more weeks to work out some of the kinks, but instead they shipped it as is. At the same time, Sun and Netscape realized they need to work together against Microsoft, so Microsoft wouldn't play them against eachother. But the biggest area of contention between the two companies was what to do with LiveScript. Sun's position was to put Java in Netscape's browser and kill Livescript. Netscape wanted a simpler programming model to capture a wider developer base. They were at an impasse, when the suggestion came, possibly as a joke, "Lets change the name to JavaScript." And it worked. And even though they tried to kill language, Sun claimed the copyright to JavaScript and gave Netscape a lifetime license.

Microsoft was watching all of this, and decided they needed to copy Netscape's model to stay competitive so they reverse engineered the JavaScript engine and called it JScript. Netscape, alarmed the language was being embraced and extended, decided it needed to be standardized, and ended up of all places at the European Computer Manufacturer's Association. The standards committe, which actually had a significant presence from Microsoft, created the standard, but couldn't call it JavaScript, so they published it with the working title ECMAScript. So now we have JavaScript, JScript, and ECMAScript are all the same language.

### Ancestry

As we've just learned, the parts of Java that JavaScript took are it's syntax and part of its unfortunate name. JavaScript really is a horrible name in my opinion, because it confuses it's relationship with Java and the connotation of script is that it's not a real programming language or that you would never do anything significant with it. It kinda paints a picture of Java's dopey little brother right?

In reality, JavaScript gets its primary features from two pretty obscure languages. Those features are first class functions and lexical scope from a language called Scheme, and a protypal object system from a language called Self.


## Syntax

JavaScript's syntax borrows heavily from C and other C-like languages such as Java and Pearl. Everything is case sensitive.

An identifier is the name of a variable, function, property, or function argument. They may be on or more characters in the following format:
 - The first letter must be a ltter, and underscore (_), or a dollar sign ($)
 - All other characters may be letters, underscores, dollar signs, or numbers.
 - use camelCase
 - everything is case sensitive

JavaScript uses C-style comments for single line (// comment here) and block (/* block of multiple lines */)

ECMAScript 5 introduced 'strict-mode', a differnt parsing and execution model for JavaScript where some of the erratic behavior of ES3 is addressed and errors thrown for unsafe activities.

## Variables

Variables are loosely typed, whcih means that it can hold any type of data. Contrary to a strongly typed langauge like Java, where a variable must be declared to only hold a specific type. In JavaScript, a variable is simply a placeholder for a value.

To define a variable, use the 'var' operator followed by a name, which qualifies as a valid identifier by the rules earlier discussed.

## Data Types

There are five simple data types, also called primitives, in JavaScript.
- `string`
- `number`
- `boolean`
- `undefined`
- `null`
And one complex data type: `object`.

The `string` data type represents a sequence of zero or more 16-bit unicode characters. Strings can be delineated by either double quotes (") or single quotes ('). The data type also includes character literals, which consists of a backslash (\) and a series of characters,  where you can represent characters beyond those built into your keyboard. For example, `\n` represents a new line, and \u03a3 displays equivalent to the Greek character Zeta on my screen.

Strings are immutable, meaning once they are created, their values cannot change. To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing the new value. Concatenation is done via the `+` operator as shown in the example below:

```
var truth = "Miles";
truth = truth + " Is Great";
```

The `number` type uses the IEEE-754 format, which is known as a `double` in other languages, and it uses 64 bits to represent both integers and floating-point numbers. Unlike other languages where you have to decide on a number type based on how how big you think the number is going to be, there is only one type in JavaScript. 

```
var integer = 6;
var float = 1.1;
```

The `boolean` type only has two literal values: `true` and `false`. All values can be cast to a boolean, therefore values are said the be either "truthy" or "falsy" depending on whether they resolve to `true` or `false` when converted to a boolean. Many of JavaScript's built in statements, such as the `if` statement perform this conversion automatically.

```
var message = "Hello World";
if (message) {
 console.log("Value is true");
}
```

The `undefined` type has only one value, which is a special value `undefined`. When a variable is declared using `var`, but not initialized (assigned to a value) it is assigned the value `undefined`.

The `null` type has only one value, a special value `null`. A `null` value is technically an empty object pointer, so the `typeof` operator, which determines the data type of a value, thinks it's type is an object. Due to this quirk, I recommend only using `undefined` for your bottom value, as it's the one the language uses interally. 

The `object` type is a dynamic collection of unordered properties, where each property may contain a value of any type. All the Primitive Wrapper, Reference, and Error types have the `object` type as their base.

## Primitive Wrapper Functions
- `String`
- `Number`
- `Boolean`

## Reference Functions
- `Object`
- `Array`
- `Date`
- `RegExp`
- `Function`

## Errors
- `Error`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`

## Operators

Operators can be used to manipulate data. The main types of operators are arithmetic, logical, relational, and equality operators.

Arithmetic operators include addition (+), subtraction (-), multiplication (*), division (*), and modulus(%), which returns the remainder of dividing the two operands.

Logical operators can be used to create logical expressions, and include and (&&), or (||), and not (!).

Relational operators compare two values in an expression and return the result of that expression as a boolean. These include less-than (<), greater-than (>), less-than-or-equal-to (<=), and greater-than-or-equal-to (>=).

Equality operators

Assignment operator

Conditional Operator

Comma Operator

## Expressions and Statements

Expressions produce a value.

Statements affect change in the world. By world, I mean the context of your program, and every statement in your program should move the problem state of your world toward its solution state.

The standard describes several flow-control statements:
- `if`
- `for`
- `while`
- `break and continue`



## Exercise 1

## Primitive and Reference Values
## Execution Context and Scope
## Functions

## Exercise 2

## Objects
## `this`
## Delegation and the Prototype Chain
## Pseudoclassical Pattern

## Exercise 3

## Conclustion