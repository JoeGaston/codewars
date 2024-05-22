// ! Codewars Challenge/ Difficulty: squaring an argument / 8kyu

//Now you have to write a function that takes an argument and returns the square of it.





// ! Psuedo code

// There is a method for this. I think it is Math.pow(num, pow)




// ! My solution

// function squareThisNum(num) {
//     return Math.pow(num,2)
// }

// console.log(squareThisNum(5))


// ! Best practices

// let n = 5
// const square = (n) => n * n;

// console.log(square(n))



// !lessons learned


// Try the arrow function.



// ! Codewars Challenge/ Difficulty: Is it even / 8kyu

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.





// ! Psuedo code


// make a function that takes in (n)
// must know if n is true or not (Use a ternary)



// ! My solution

// function testEven(n) {
//     return n % 2 === 0 ? true : false
// }

// let n = 0
// console.log(testEven(n))


// ! Best practices

//my code was the best practice. 



// !lessons learned

// I used true and false as a string which through an error to the test. Should have known to use the boolean. simple mistake.




// ! Codewars Challenge/ Difficulty: Grasshopper - check for factor 8kyu


// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


// ! Psuedo code

// pick a base and factor that are true
// Use mod operator to test.



// ! My solution

function checkForFactor (base, factor) {
    return base % factor === 0 ? true : false
  }

console.log(checkForFactor(10, 5))



// ! Best practices





// !lessons learned

