'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



let sum = function(a, b, c, d) {
  return a + b + c + d;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));

let suma = (a,b,c,d) => a + b + c + d;

console.log(suma(1, 2, 3, 4))


let objectLit = function() {
  return {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());

let objectLita = () => ({key1: 'value1', key2: 'value2', key3: 'value3'})

console.log(objectLita());

let sumAndProduct = function(a, b) {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));

let sumAndProducta = (a,b) => {
  let sum = a + b;
  let product = a * b;
  return [sum, product];
}

console.log(sumAndProducta(3,9))

let message = function(name) {
  return `Hello, ${name}!`;
};

console.log(message('Jacob'));

let messagea = name => {
  return `Hello, ${name}!`;
};

console.log(messagea('Jacob'));

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe Schmoe', 100, 'Anytown, USA');

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);

// TODO: After viewing the previous console.log(), return the code to a working state.

// let Studenta = (name, age, hometown) => {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;
// };

// let joea = new Studenta('Joe Schmoe', 100, 'Anytown, USA');

// console.log(joea);

Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// Student.prototype.greeting = () => {
//   return `Hi, my name is ${this.name}`;
// };

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};

// Student.courseName = () => {
//   return 'This student is enrolled in Code 301.';
// };

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};
// Student.prototype.scope = () => {
//   console.log(this);
// };

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scope();

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scopeArrow();

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// this is the object that the method is called on
// 2. What is "this" when joe.scopeArrow() is invoked?
// this appears to be an object called window that is an object with many properties and methods attached to it. It is fundamentally different than an object. The prototype is a window and not an object.
// 3. Explain why "this" is different when an arrow function is used.
// an arrow function does not have it's own this. The this when written in an arrow function is part of the scope that the arrow function lives in. The this in a traditional function has it's own scope for the word this that overrides the window scope. this is not able to be defined twice. Thus, since 'this' does not have an additional definition inside the scope of an arrow function, the this is only defined in a larger scope that is filled with the window prototype.