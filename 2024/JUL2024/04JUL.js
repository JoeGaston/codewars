// ? Codewars Challenge/ Difficulty: Small Enough, 7KYU

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value.

//If they are, return true. Else, return false.

// You can assume all values in the array are numbers.



// ! Psuedo code (ALWAYS START HERE)

// I first need to create a value and array outside of the function <>
// First, I need to iterate through the array. <>
// During the iteration, I need to check [i] against the limit. <>
// If all the elements are less than or equal to the limit, return true. Else, return False




// ! My solution

// function smallEnough(a,limit){
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] <= limit) {
//                continue
//         } else if (a[i] > limit) {
//             return false
//         } else
//             return true
//     }
// }

// let limit = 16
// let a = [10,4,17,9,12]

// console.log(smallEnough(a,limit))


// ! Best practices





// !lessons learned



// ? Codewars Challenge/ Difficulty: No oddities here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.



// ! Psuedo code

// Create am array of even and odd number. pass it into the functions
// I'm thinking about using filter here and will use modulus to verify the condition of even.




// ! My solution

// function noOdds( values ){
//     return values.filter(element => element % 2 === 0)
//   }

//   let values = [1,2,3,4,5,6,7]

// console.log(noOdds(values))


// ! Best practices





// !lessons learned


// ? Codewars Challenge/ Difficulty: Create Phone Number 6kyu

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



// ! Psuedo code

// Create an array for phone numbers and pass that into the function <
// I think I need to splice it into three different parts. [123/456/7890] <
// push and unshift the [() -]
// remove commas
//concatonate




// ! My solution

// function createPhoneNumber(numbers){
//     let whatever = numbers.join('')
//     console.log(whatever)
//     let firstThree = numbers.splice(0,3) //isolates the first three numbers
//     firstThree.push(')') // adds the second parenthesis
//     firstThree.unshift('(') // adds the first parenthesis
//     // console.log(firstThree)

//     let secondThree = numbers.splice(0,3) //isolates the second three numbers
//     secondThree.unshift(' ') // adds the space
//     secondThree.push('-') // adds the dash
//     // console.log(secondThree)

//     let final = firstThree + secondThree + numbers // this combines them all into a string
//     console.log(final)
//     let finalArr = final.split(',').join('')
//     return finalArr

// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// console.log(createPhoneNumber(numbers))


// ! Best practices
// function createPhoneNumber(numbers){
//     numbers = numbers.join('');
//     return '(' + numbers.substring(0, 3) + ') ' 
//         + numbers.substring(3, 6) 
//         + '-' 
//         + numbers.substring(6);
//   }




// !lessons learned
