// ? Codewars Challenge/ Difficulty: Make a function that does arithmetic! 7kyu


// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two
// numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

// ! Psuedo code
// create a function that takes in a string that follows the given instructions
// create a template that always places a & b with an operator in between.





// ! My solution
// function arithmetic(a, b, operator){
//     if (operator === 'add') {
//         return a + b
//     } else if (operator === 'subtract') {
//         return a - b
//     } else if (operator === 'multiply') {
//         return a * b
//     } else if (operator === 'divide') {
//         return a / b
//     }
//   }

// let a = 3
// let b = 5
// let operator = 'multiply'

// console.log(arithmetic(a,b,operator))


// ! Best practices

function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }



// !lessons learned

// the time complexity of using switch case is faster than an if statement