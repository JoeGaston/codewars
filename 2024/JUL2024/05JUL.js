// ? Codewars Challenge/ Difficulty: insert name here/

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8



// ! Psuedo code



// ! My solution

// function rowSumOddNumbers(n) {
//     let arr = [[1], [3, 5], [7, 9, 11], [13, 15, 17, 19], [21, 23, 25, 27, 29]]
// 	let finalSum = arr[n].reduce((acc,curr) => acc + curr)
//     return finalSum
// }
// let n = 4


// console.log(rowSumOddNumbers(n))

// ! Best practices





// !lessons learned




// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]






// function fizzbuzz(n){
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             arr.push("Fizzbuzz")
//         } else if (i % 3 === 0) {
//             arr.push("Fizz")
//         } else if (i % 5 === 0) {
//             arr.push("Buzz")
//         } else {
//             arr.push(i)
//         }
// }
// return arr
// }
// n = 30
// console.log(fizzbuzz(n))


// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// create an array
// return the sum of array
// empty array = 0



// Sum Numbers
function sum(numbers) {
    if (numbers === undefined) {
        return 0
    } else {
        return numbers.reduce((acc,curr) => acc + curr, 0)
    }
    
};


console.log(sum([4,6,8,3,7,8,8]))