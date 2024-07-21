// ? Codewars Challenge / Difficulty: 

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// ! Psuedo code
 // Pass an array of integers in to a function <>
 // Count the occurances of each element in the array
    // I used a for of loop to do this. this created an object out of the array 
// iterate over the object's property's values 
    // use a conditional to find one who's value is not even
    // return that property


// ! My solution

function findOdd(arr) {
    counter = {}

    for (let ele of arr) { // this turns the array and its occurances into an object with key:value pairs.
        if (counter[ele]) { // this is always true. 
            counter[ele] += 1 
        } else {
            counter[ele] = 1
        }
    }

    for (const [key, value] of Object.entries(counter)) {
        //console.log(`${value}`);
        if (value % 2 !== 0) {
            return Number(key)
        }
      }

    //console.log(counter)
  }

console.log(findOdd([7]))

// ! Best practices



// !lessons learned
