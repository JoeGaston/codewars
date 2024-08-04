// ? Codewars Challenge/ Difficulty: Is it a square? 7kyu

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false



// ! Psuedo code
// make a function that takes in the array
// we need to iterate through the array and return true or false...so I think forEach will be fine for this.
// Can i compare whatever I modulo by (the divisor) by the qoutient? if they are equal, that would mean its a square.
// For example 25 % 5 would equal 5. How would I set this up? Nested forloop? 


// ! My solution


var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

// var isSquare = function(n){
//     sqrArray = [0,1,2,3,4,5,6,7,8,9,10]
    
//     for (let i = 0; i <= n.length; i++) {
//         for (let j = 0; j <= sqrArray.length; j++) {
//             if (n[i] < 0) {
//                 return false
//             } else if (n[i] % sqrArray[j] === sqrArray[j]) {
//                 return true
//                 } else {
//                     return false
//                 }

//             }
//         }
//     }


console.log(isSquare([-1,0,3,4,25,26]))




// ! Best practices





// !lessons learned
// Carefully read the Kata. I was only supposed to put one number in! not an array!