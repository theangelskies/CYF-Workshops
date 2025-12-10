
// Part 1: Without running code,
// Use documentation to evaluate Math.trunc() and Math.floor() for each of the numbers below.
// Write your answers down below:

// a) 10.53   For example, Math.trunc(10.53) evaluates to 10, Math.floor(10.53) evaluates to 10
// b) 170.1057
// c) -0.34
// d) -8.921

// Part 2: Use the Node REPL to check your answers to Part 1)
// Part 3: Using Part 2, explain the difference between Math.trunc() and Math.floor() in your own words




Math.trunc(10.53)     // 10
Math.floor(10.53)     // 10

Math.trunc(170.105)   // 170
Math.floor(170.105)   // 170

Math.trunc(-0.34)     // -0
Math.floor(-0.34)     // -1

Math.trunc(-8.921)    // -8
Math.floor(-8.921)    // -9


// Math.trunc() removes the decimal part of a number and returns the integer part only, regardless of whether the number is positive or negative.
// Math.floor() rounds a number down to the nearest integer. For positive numbers, it behaves like Math.trunc(), but for negative numbers, it rounds down to the next lower integer