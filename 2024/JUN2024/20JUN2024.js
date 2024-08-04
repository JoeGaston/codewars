// ? Codewars Challenge/ Difficulty: square every digit / 7kyu


// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!




// ! Psuedo code
// create a number, and pass that number into a function
// first, I need to split the numbers so I can manipulate them individually. split() -- good
// use forEach to iterate through the new arr, squaring each number on the iteration
// join the arr and return




// ! My solution

// function squareDigits(num){
//     let arr = num.toString().split('')
//     let newarr = +(arr.map(element => element**2).join(''))
//     return newarr
//   }

//   let num = 765

//   console.log(squareDigits(num))

// ! Best practices

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

// !lessons learned
