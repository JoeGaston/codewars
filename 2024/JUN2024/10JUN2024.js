// ? Codewars Challenge/ Difficulty: opposite numbers 8kyu


// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34


// ! Psuedo code
// create a function that takes in a number
//if number is negative, use math.abs
//if number is positive, multiply by two and subtract from number




// ! My solution
// function opposite(number) {
//     if (number < 0) {
//     return Math.abs(number)
//     } else if (number > 0) {
//         return number - (number *2) 
//     } else {
//         return 0
//     }
//   }

// let number = 15

// console.log(opposite(number))


// ! Best practices





// !lessons learned



// ? Codewars Challenge/ Difficulty: Sort Array by string length 7kyu

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.



// ! Psuedo code

// create a function that takes in an array of strings - make sure they have different index lengths.
// use a method to sort the array by shortest length to longest.






// ! My solution

function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
      return [];
  }

let array = ["Telescopes", "Glasses", "Eyes", "Monocles"]

console.log(sortByLength(array))

// ! Best practices

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };



// !lessons learned



class CreateBirds {
  constructor() {
    this
  }
}