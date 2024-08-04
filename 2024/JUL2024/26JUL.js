// ? Codewars Challenge / Difficulty: arr.def 6kyu

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// ! Psuedo code

// create a function that takes in two arrays <>
// iterate through the array <>
    // if i === b, arr.splice(i,1)

// ! My solution

function arrayDiff(arr, b) {
    let newArr = []
  b.forEach(element => {
    if (element ) {

    }
  });
  return newArr
}

console.log(arrayDiff([1,2,3],[1,2]))

// ! Best practices



// !lessons learned
