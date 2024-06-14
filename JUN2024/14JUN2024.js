// ? Codewars Challenge/ Difficulty: Find the stray number 7kyu

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3




// ! Psuedo code

// create a function that takes in an array of all the same number except one
//// find the first two numbers that are the same, store that number. then compare all other indexs to the stored number
// sort the array ( this will be the stray number at the end or beginning). compare the first index to the middle or middle 2 indexes. if they are not equal, return the first index. conduct the same thing on the last index.





// ! My solution
function stray(numbers) {
    // sort the array
    let sortedarr = numbers.sort((a,b) => a - b)
    // iterate through the array using forEach
    for (let i = 0; i < sortedarr.length; i++) {
        if (sortedarr[i] !== sortedarr[1]) {
            return sortedarr[i]
        } else {
            return sortedarr[sortedarr.length-1]
        }
    }

    };

let arr = [-8,1,1,1,1,1]

console.log(stray(arr))


// ! Best practices





// !lessons learned
