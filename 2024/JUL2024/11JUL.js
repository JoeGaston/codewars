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

// function spinWords(string){
//     let newStr = string.split(' ') // This seperates the string into an array of the words so they can be manipulated further.
//     for (let i = 0; i <= newStr.length; i++) { //here is the iteration
//         if (newStr[i].length >= 5) { //this checks for the condition. It appears i cannot use .length after newStr[i]
//             //console.log(newStr[i])
//             newStr[i] = newStr[i].split('').reverse().join('') // if condition is met, this will reverse the element
//         }
//         } 
//         return newStr.join(' ')
//     }

// console.log(spinWords('Hey fellow warriors'))

// ! Best practices

// function spinWords(str) {
//     let strArr = str.split(' ');
//     for (let i = 0; i < strArr.length; i++) {
//       if (strArr[i].length >= 5) {
//         strArr[i] = strArr[i].split('').reverse().join('');
//       }
//     }
//     return strArr.join(' ');
//   }

// console.log(spinWords('Hey fellow warriors'))



// !lessons learned



// ? Codewars Challenge/ Difficulty: duplicate encoder / 6kyu

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



// ! Psuedo code
// Create a function that takes in a string <>
// Define an empty new string <>
// Need to iterate through the string characters <>
    // need to be able to analyze how many times a chracter appears? Use a counter? Nested loop?
    // if character appears once newStr.push('(')
    // if character appears more than once newStr.push(')')
// return newStr





// ! My solution
// function duplicateEncode(word){
//     let newStr = ''
//     // this is the outer loop
//     for (let i = 0; i <= word.length; i++) {
//         // this is the inner loop
//         for (let j = 0; j <= word.length; i++) {
//             let counter = -1 // need a counter given current process as a measurable indicator of letter repitition.
//             if (word[i] === word[j]) { // this compares the letters.
//                 counter += 1
//             } else {
//                 counter + 0
//             }
//             return counter
//         break
//         } 
//     }
// }

// console.log(duplicateEncode('recede'))

// ! Best practices

function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){ // if the last time it appears is equal to the first time it appears...
            console.log(word.lastIndexOf(word[i]))
            console.log(word.indexOf(word[i]))
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

console.log(duplicateEncode('recede'))

// !lessons learned
