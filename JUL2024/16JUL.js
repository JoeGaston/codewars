// ? Codewars Challenge/ Difficulty: Multiples of 3 or 5, 6kyu

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.



// ! Psuedo code

// Pass in a number <>
// create and empty array <>
// iterate between 1 and the number checking for numbers that are multilple of three and five. <>
    // Use a conditional to veryify a number is a multiple, then push it to an empty array <>
//reduce the empty array to return the sum <>




// ! My solution

function solution(number){
    newArr = []
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            newArr.push(i)
        } else {
            continue
        }
  }
  return newArr.reduce((acc, curr) => acc + curr, 0)
}

console.log(solution(25))

// ! Best practices





// !lessons learned
