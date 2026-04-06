//                                     * Variables in JavaScript *


// *DEFINATION                                     
// A variable in JavaScript is used to store data values that can be used and changed during program execution.

// * Types of Variables in JavaScript
// JavaScript provides three ways to declare variables:
// 1️. var
// var age = 20;

// Explanation:
// var is the oldest way to declare variables
// It has function scope
// It can be redeclared and updated
// Not recommended in modern JavaScript

// 2️. let
// let name = "Rohan";

// Explanation:
// let has block scope
// It can be updated but cannot be redeclared in the same scope
// Most commonly used in modern JavaScript

// 3️. const
// const country = "India";

// Explanation:
// const also has block scope
// It cannot be updated or redeclared
// Used when the value should remain constant

// * Example with Explanation
// let score = 50;
// score = 60;
// const pi = 3.14;
// console.log(score);
// console.log(pi);

// score is declared using let and its value is updated
// pi is declared using const and its value remains fixed

// * Scope Example
// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y); // works
// // console.log(x); // error

// let is block-scoped
// var is not block-scoped

// * Key Points to Remember
// Use let for values that change
// Use const for fixed values
// Avoid using var in modern JavaScript 
