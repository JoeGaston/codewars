// ! Codewars Challenge/ Difficulty: Count of positives / sum of negatives 7 kyu

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// ! Psuedo code
// create a function that takes in an array.
// exlude null and empty with if statement
// I need to be able to iterate through an array. Either use for each of map or filter
// I'll try to use filter. Not sure if I can pass it two tests or not.

// ! My solution

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      return []
    }

    let positive = 0
    let negativeSum = 0

    for (let i = 0; i < input.length; i ++) {
      if (input[i] > 0) {
        positive += 1
      } else {
      negativeSum += input[i]
    }}

    return [positive, negativeSum]


  }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

console.log(countPositivesSumNegatives(array))

// ! Best practices


// !lessons learned

// Im not sure why exactly this isnt working. I have either literally written the code wrong, or because its multiple local functions they cant read eachother's variables?


// looking at the best solutions, it appears I should have first attempted to validate the number. As mentioned in the directions.

// I had all the knowledge I neede to do this. I should have just used for loops. Sometimes I avoid array methods because I cant remember what exactly they do. I also could have broken up the code with comments to keep it organized.