// ? Codewars Challenge/ Difficulty: Stop gninnipS My sdroW! 6kyu

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed 
// (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


// ! Psuedo code
// write a function that takes in a string <>
// if the words have 5 letter or more reverse them.
    // We need to iterate through the array, checking the length of each element
    // need a conditional to reverse any element whos length is 5 or greater
// Need to join the string back together.
// return the string 





// ! My solution

function spinWords(string){
    let newStr = string.split(' ') // This seperates the string into an array of the words so they can be manipulated further.
    for (let i = 0; i <= newStr.length; i++) { //here is the iteration
        if (newStr[i].length >= 5) { //this checks for the condition. It appears i cannot use .length after newStr[i]
            // console.log(newStr[i])
            newStr[i].split('').reverse().join('') // if condition is met, this will reverse the element
        } else {
            continue
        }
    }
  }

spinWords('Hey fellow warriors')

// ! Best practices





// !lessons learned
