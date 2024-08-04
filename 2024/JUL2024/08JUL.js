// ? Codewars Challenge/ Difficulty: Anagram Detection 7kyu


// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"




// ! Psuedo code

// Need to compare one string against the other. 
// take in the two strings and split them into an array <>
// Use the every method to compare both arrays? 




// ! My solution
var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('').sort().join('')
    let originalArr = original.toLowerCase().split('').sort().join('')
    console.log(testArr)
    console.log(originalArr)

    return testArr === originalArr ? true : false
    
};

console.log(isAnagram('Buckethead', 'DeathCubek'))


// ! Best practices





// !lessons learned
