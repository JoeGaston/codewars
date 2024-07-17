// ? Codewars Challenge/ Difficulty: find smallest integer, 8kyu

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ! Psuedo code

// call a function that takes in an array of numbers

// ! My solution

// function findSmallestInt(arr) {
//     return Math.min(...arr)
//   }

// console.log(findSmallestInt([34, -345, -1, 100]))

// ! Best practices

//My solution was best practice

// !lessons learned

// I did a good job on the Psuedo code. I felt like I recalled the Math.min object/method well and understood its use. I used the spread operator because an array's elements can be accessed with the Math.min method. Spread allows it to be viewed in by element. Im not sure how spread works under the hood.


// ? Codewars Challenge/ Difficulty: Simple Fun #176: Reverse Letter / 7kyu

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// ! Psuedo code

// create a function that takes in a string <>
// 

// ! My solution

function reverseLetter(str) {
    let newStr = str.split('').filter(elem => isNaN(elem)).join('')
    console.log(newStr)
  }


  console.log(reverseLetter('ultr53o?n'))
// ! Best practices

// !lessons learned


// ? Codewars Challenge/ Difficulty: insert name here/

// ! Psuedo code

// ! My solution

// ! Best practices

// !lessons learned
