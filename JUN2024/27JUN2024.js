// ? Codewars Challenge/ Difficulty: Shortest word / 7kyu

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.





// ! Psuedo code
// create a function that takes in a string of words
// split the string into an array
// I need to count the characters in each index and store them? I used map to create a new array of the counts. I pushed them into a new array and sorted it.
// return the 0 index and you will have the length of the shortest words.





// ! My solution

function findShort(str){
  let letterCount = []
  let newstr = str.split(' ')
  console.log(newstr)
  newstr.map(element => {
    letterCount.push(element.length)
  });
  let sorted = letterCount.sort()
  console.log(sorted)
  let final = sorted.sort(function(a, b){return a-b})
  return final[0]
}

let str = 'Factom LiteCoin MadeSafeCoin Mine'

console.log(findShort(str))


// ! Best practices





// !lessons learned
