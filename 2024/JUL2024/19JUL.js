// ? Codewars Challenge / Difficulty: Detect Pangram / 6kyu

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ! Psuedo code

// Create a function that takes in a pangram <>
// create an array with the alphabet in it
// turn input string into an array and toLowerCase it.
// iterate over the newArr
    // if [i] is found in alphabet array:
    // Remove alphabet array match (?)
    // continue


// toLowerCase input string and split and sort <>
// remove any repeated letters as we
// sort the array aplhabetically - dont have to
// if length of array is 26
    //return true

// ! My solution

function isPangram(string){
    let newStr = string.replaceAll(' ', '') //removes spaces
    let newArr = newStr.toLowerCase().split('').sort() //makes array and sorts alphabetically 
    let aplhaBet = []
    //console.log(newArr)

    newArr.forEach(el => {
        if (!aplhaBet.includes(el)) {
            aplhaBet.push(el)
        }
    })
    return aplhaBet.length >= 26? true : false
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog"))

// ! Best practices


function isPangram(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
  }

// !lessons learned
