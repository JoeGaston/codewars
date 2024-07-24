
// ? Codewars Challenge / Difficulty: Unique in Order / 6kyu

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// ! Psuedo code
// Create a function that takes in an iterable string or array <>
// if iterable is a string it needs to be split, if not keep it the same. <>
// Need to identify unique elements and disregard a repeated 'non-unique' element
    //From what I can see in the examples I'm under the impression I can compare one value to its next value.
    // iterate through the array (start i === 1)
        // if [last index i - 1] == [current index i]
            //search new arr for last index 
                // if false newArr.push[last index]
                // if true, continue
        // if [last index i - 1] !== [current index i]



// ! My solution

function uniqueInOrder(iterable) {
    let newArr = []
    // this gives us an arr regardless of array/string entry
    if (typeof iterable == 'string') {
        newArr = iterable.split('')
    } else {
        newArr = iterable
    }
    console.log(newArr)

    let answerArr = []

    for (let i = 1; i < newArr.length; i++) {
        if (i - 1 === i) {
            //i exists in newArr ? continue: newArr.push[i]
        } else if (i - 1 !== i && i - 1 === 0) {
            newArr.push(i - 1)
        } else {
            newArr.push(i)
        }
    }

    
  }


  console.log(uniqueInOrder('ABBCcAD'))
  console.log(uniqueInOrder([1,2,3]))

// ! Best practices
 


// !lessons learned

// I spent two days on this one with psuedo code and felt close, but couldnt get it. It was definetly worth my time.