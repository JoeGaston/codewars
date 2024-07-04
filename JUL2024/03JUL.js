//! 7KYU

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// ? Psuedo Code
// Take in an array into a function
// Create a sorted version of the array where the least value is in the [0] position
// iterate through the original array and compare [i] to the [0] index of the sorted array
    // if [i] < numbersSorted [0] remove [i]
        // return numbers


// function removeSmallest(numbers) {
//     let numbersSorted = numbers.sort() // this is our sorted array
//     for (let i = 0; i <= numbers.length; i ++) { //iterates through the original array
//         if (numbers[i] <= numbersSorted[0]) {
//             numbers.filter(numbers[i])
//         } else {
//             break
//         }
//     } return numbers
//   }

// numbers = [5,3,2,1,4]
// // sorted=[1,2,3,4,5]

// console.log(removeSmallest(numbers))

function removeSmallest(numbers) {
    let array = [];
    const index = numbers.indexOf(Math.min(...numbers)) //
    console.log(index)
       for(let i = 0; i < numbers.length; i++){
          if ( i !== index){
            array.push(numbers[i])}   
       }
  return array;
 } 

numbers = [2,2,1,2,1]

console.log(removeSmallest(numbers))

//! 6KYU








//! 7KYU








//! 8KYU