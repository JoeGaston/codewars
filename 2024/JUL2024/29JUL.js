// ? Codewars Challenge / Difficulty: 6yku

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// ! Psuedo code

// create a function that takes in a number <>
// Need to convert the number into an array of numbers
    // stringify and split into an array
    // Use map to turn the elements into a number
// 

// ! My solution

function digitalRoot(num) {
    let arr = num.toString().split('')
    let numArr = arr.map(Number)
    let sum = numArr.reduce((acc, curr) => acc + curr)
    if (sum  < 10) {
        return sum
    } else {
        let newSum = sum.toString().split('')
        let newArr = newSum.map(Number)
        let newSumSum = newArr.reduce((acc, curr) => acc + curr)

        let newSumSumSum = newSumSum.toString().split('')
        let newArrArr = newSumSumSum.map(Number)
        let finalSum = newArrArr.reduce((acc, curr) => acc + curr)
        return finalSum
    }


  }

console.log(digitalRoot(16))

// ! Best practices



// !lessons learned
