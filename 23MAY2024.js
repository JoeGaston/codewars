// ! Codewars Challenge/ Difficulty: The Highest Profit wins! 7kyu

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest 
// possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]


// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.



// ! Psuedo code

// create a function and call that takes in an array
// Use the Math.max and Math.min method along with the spread (...) operator to access the min/max
// then push the new min/ max to a new array
//return the new arr




// ! My solution

function minMax(arr){
  let maxi = Math.max(...arr)
  let mini = Math.min(...arr)
  return [mini,maxi]
  }

let arr = [5,3,9,6,11,88,4]

console.log(minMax(arr))

// ! Best practices

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}



// !lessons learned

// I just learned about the spread operator which will allow me to access the individual elements of an array while using the Math.min and Math.max methods.