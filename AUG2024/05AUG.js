// ? Codewars Challenge / Difficulty: Bit Counting 6kyu

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// ! Psuedo code
/*
 1. create a function that takes in a number.
 2. While num is greater than zero, do the following
    - divide num by 2 (need to store the qoutient and remainder)
        - the remainder needs to be added to a variable and following remainders need to be concatonated.
    - 
*/


// ! My solution

countBits = n => n.toString(2).split('0').join('').length
  console.log(countBits(9), '2')
  console.log(countBits(4), '1')
  console.log(countBits(1234), '10011010010')
// ! Best practices



// !lessons learned


// TODO (ANKI)


// let northernCardinal = new CreateBird('size', 'color')

// function returnNegative(num) {
//     return -num
// }

// console.log(returnNegative(5), '-5')
// console.log(returnNegative(-15), '15')