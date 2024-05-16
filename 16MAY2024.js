// ! Codewars Challenge: Sting Repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// ! Psuedo code

// I need to have an integer outside the function
// I need to have a string outside the function
// Ill pass those into the function
// Use a for loop to repeat the string n amount of times
// Im not 100% sure how to concatonate the strings together. I think there may be a method for this.





// ! My solution

// function repeatStr (n, s) {
//     let repeatSTR = s.repeat(n)
//     return repeatSTR
//   }

//   let n = 21
//   let s = "twentyOne "

//   console.log(repeatStr(n,s))

// ! Best practices

repeatStr = (n, s) => s.repeat(n)
console.log(repeatStr(21,"twentyone"))


// function repeatStr (n, s) {
//     return s.repeat(n);
//   }



// !lessons learned

// i still need to work on arrow functions. They have an implicit return which cuts out a line of code. Also, they still have to be called.