// ? Codewars Challenge/ Difficulty: Convert a number to a string/ 8kyu

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"



// ! Psuedo code

// Create a function that takes in a number
// convert the number to a string
    // to string method
// return the string




// // ! My solution

// function numberToString(num) {
//     return num.toString()
//   }

// console.log(numberToString(4))

// // ! Best practices





// // !lessons learned


// ? Codewars Challenge/ Difficulty: Highest and Lowest / 7kyu

// n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



// ! Psuedo code

// create a function that takes in a string of 'numbers'
// turn the string into an array using split. Will need to split with a space
// sort the array





// ! My solution

function highAndLow(numbers){
    let newArr = []
    let arrNum = numbers.split(' ')
    arrNum.sort((a,b) => b-a)
    console.log(arrNum)
    newArr.push(arrNum[0], arrNum[arrNum.length -1])
    return newArr.join(' ')
    
    
  }


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// ! Best practices
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }




// !lessons learned
