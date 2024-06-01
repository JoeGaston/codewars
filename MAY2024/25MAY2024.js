// ! Codewars Challenge/ Difficulty: Beginner Series # 3 / 7kyu

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.



// ! Psuedo code
// not sure if i should do this by passing in an array or not (?)
// To sum these I already have two of the numbers (a,b), but how do i get the rest? 
    //going to attempt to store the numbers as low and high
    //iterate through the nums and store the new num
//what if they are the same?
// what if they arent in order?





// ! My solution

function getSum(a, b) {
let sum = 0
let firstNum = a
let secondNum = b

if(firstNum === secondNum) {
    return a

} else if (firstNum < secondNum) {
    for(let i = firstNum; i <= secondNum; i++) {
        sum += i
    }
    return sum
} else if (firstNum > secondNum) {
    for(let i = secondNum; i <= firstNum; i++) {
        sum += i
    }
    return sum
}
}
console.log(getSum(1,67))

// ! Best practices

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }



// !lessons learned


//this question is based on Gauss summation. Basically, you would have to know the formula to really make the most concise version of this. 