// ? Codewars Challenge/ Difficulty: Disemvowel Trowls 7yu

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.



// ! Psuedo code
// create a function that takes in a string and returns a new string
// create a string outside the function.
// 





// ! My solution
function disemvowel(str) {
    return str.replace(/[aeiouAEIOU]/g, '')
  }

let str = "Hello, how are you today?"

console.log(disemvowel(str))

// ! Best practices

const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

// !lessons learned
