
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
    // If arr[0] === arr[1] I could push arr[0] into another array. But What if there are 4 letters in a row? I cant tell it to skip the next 2 elements.
        // filter will not work
        // 


// ! My solution

function uniqueInOrder(iterable) {
    let newArr = []
    if (typeof iterable == 'string') {
        newArr = iterable.split('')
    } else {
        newArr = iterable
    }

    console.log(newArr)
  }


  console.log(uniqueInOrder('ABBCcAD'))
  console.log(uniqueInOrder([1,2,3]))

// ! Best practices



// !lessons learned
