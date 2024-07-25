// ? Codewars Challenge / Difficulty: All Star Code Challenge 18 / 8kyu

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// ! Psuedo code

// Create a string and character to be passed into the function.
// if str.length = 0, return 0
// else
    // a for loop that iterates through the string and counts the occurances of the designated letter. 

// ! My solution

// function strCount(str, letter){  
//     if (str.length === 0) {
//         return 0
//     } else {
//         let counter = 0
//         for (let i = 0; i < str.length; i++) {
//             str[i] === letter ? counter += 1 : counter += 0
//         } return counter
//     }
//   }

//   console.log(strCount('hello', 'o'))

// ! Best practices



// !lessons learned



// ? Codewars Challenge / Difficulty: find the divisors, 7kyu

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// ! Psuedo code

// create a function that takes in a number <>
// create an empty array <>
// Probably need to iterate through all the numbers <>
    // let i = 2, and dont include integer <>
    // check to see if int % i == 0, if so push i <>
// if arr = undefined
    //return the string above
    // else return the array

// ! My solution

function divisors(int) {
    let arr = []
    for (let i = 2; i < int; i++) {
        if (int % i === 0) {
            arr.push(i)
        } 
    }

    if (arr.length === 0) {
        return int + ' is prime'
    } else {
        return arr
    }
}

console.log(divisors(13))

// ! Best practices



// !lessons learned
