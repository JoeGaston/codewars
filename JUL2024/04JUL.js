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

function smallEnough(a,limit){
    for (let i = 0; i <= a.length; i++) {
        if (a[i] <= limit) {
               continue
        } else if (a[i] > limit) {
            return false
        } else
            return true
    }
}

let limit = 16
let a = [10,4,17,9,12]

console.log(smallEnough(a,limit))


// ! Best practices





// !lessons learned
