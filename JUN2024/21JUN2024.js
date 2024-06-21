// ? Codewars Challenge/ Difficulty: Hightest and lowest / 7kyu

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



// ! Psuedo code
// create a function that takes in a string and logs the result
// I need to get the numbers into an array without the spaces.
    // Use split to put the string into an array
    //use filter to remove the array elements that are only a space
// Ive run into an issue with the negative numbers...





// ! My solution

function highAndLow(numbers){
    let arr = numbers.split('')
    let newarr = arr.filter(element => element !== ' ')
    newarr = newarr.sort()
    console.log(newarr)
    newarr = newarr.reverse()
    return newarr
  }

let numbers = "1 -3 7 4 5"

console.log(highAndLow(numbers))

// ! Best practices





// !lessons learned
