// ? Codewars Challenge/ Difficulty: Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



// ! Psuedo code
// create a function that takes in an array of numbers
// I'll need to use something to look at each index. I think I will use spread or for each.
// Next, Ill use a conditional to check if the number is positive. 
// If a number is positive, I'll add it to the local sum variable.
// Then, I'll return the sum variable.





// ! My solution

function positiveSum(arr) {
let sum = 0
arr.foreach(element => {
    if (element < 0) {
        sum +=
    }
})
return sum
}

let arr = [-2,-1,0,1,2,3,4]

console.log(positiveSum(arr))



// ! Best practices

function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }



// !lessons learned
