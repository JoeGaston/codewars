// ? Codewars Challenge/ Difficulty: Maskify / 7kyu

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

//  "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"



// ! Psuedo code
// create a function that takes in a string <>
// iterate over the string of characters. 
// need to use the .length method to identify the "last four" characters of a string
// if [i] is not in the last four digits, use hash




// // ! My solution
// function maskify(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (str.length <= 4) { // this catches any cases of 4 characters or less.
//             return str
//         } else if (str.length > 4) {
//             str[i] = "#"
//         }
//     }
//     return str
// }

// let str = '987654321'

// console.log(maskify(str))



// TODO ARRAY LADDER 8KYU


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


// define a counter
//iterate through the array.
// if i = true, counter += 1
// return counter


// function countSheeps(sheep) {
//     let counter = 0
//     sheep.forEach(element => {
//         if (element === true) {
//             counter += 1
//     }})
//     return counter
// }

// let sheep = [true,  true,  true,  false, true,  true,  true,  true , true,  false]

// console.log(countSheeps(sheep))


// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]