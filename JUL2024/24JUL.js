// ? Codewars Challenge / Difficulty: Palandrome / 8kyu

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// ! Psuedo code

// create a function that takes in a string.
// store the string in a variable.

// ! My solution

function isPalindrome(str) {
    let newStr = str.split('').reverse().join('')
    console.log(newStr)
    console.log(str)
    return newStr === str ? true : false
  }


  console.log(isPalindrome('hello'))
// ! Best practices



// !lessons learned
