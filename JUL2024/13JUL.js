// ? Codewars Challenge/ Difficulty: Who Likes This? 6kyu

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.





// ! Psuedo code
// Create a function that takes in an array of names <>
// assign first three names to variables <>
// create conditional based on length of array
    // if arr.length = 0 "no one"
    // if arr.length = 1 return `${nameOne} likes this`
    //and so on..
    // for the last one we need to create a variable for the length of the array -2






// ! My solution
function likes(names) {
    let nameOne = names[0]
    let nameTwo = names[1]
    let nameThree = names[2]
    let lengthMinusTwo = names.length - 2
    if (names.length == 0) {
        return 'no one likes this'
    } else if (names.length == 1) {
        return `${nameOne} likes this`
    } else if (names.length == 2) {
        return `${nameOne} and ${nameTwo} like this`
    } else if (names.length == 3) {
        return `${nameOne}, ${nameTwo} and ${nameThree} like this`
    } else if (names.length > 3) {
        return `${nameOne}, ${nameTwo} and ${lengthMinusTwo} others like this`
    }
  }
  console.log(likes([]))
  console.log(likes(["Alex"]))
  console.log(likes(["Alex", "Jacob", "Mark", "Max", 'banjo']))



// ! Best practices





// !lessons learned
 