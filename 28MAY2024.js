// ! Codewars Challenge/ Difficulty: Odd or Even, 7kyu

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"



// ! Psuedo code

// create a function that takes in an array
// Iterate through or use a method to add the elements of the array
// Use mod to see if its even, return 'even' or 'odd'




// ! My solution

function oddOrEven(array) {
    let sum = array.reduce((acc,curr) => acc + curr, 0)
    return sum % 2 === 0 ? 'even' : 'odd'

 }

 array = [2,4,7]

 console.log(oddOrEven(array))


// ! Best practices

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }



// !lessons learned


// I didnt read the question correctly and tried to use Math.max. Stupid mistake because this doesnt sum. I used the reduce method