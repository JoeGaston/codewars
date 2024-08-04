// ? Codewars Challenge / Difficulty: 8kyu

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// ! Psuedo code

// create a function that takes in an amount of time.
// Since he drinks .5 litre per hour ridden, we will divide the time taken in by two
    // then, we need to round down. Which i beleive is math.floor

// ! My solution

// function litres(time) {
//     return Math.floor(time * .5)
//   }

// console.log(litres(11.8))

// ! Best practices



// !lessons learned





// TODO (ANKI)


// function CreateBird(species, size, primaryColor, secondaryColor) {
//     this.species = species
//     this.size = size
//     this.primaryColor = primaryColor
//     this.secondaryColor = secondaryColor

//     this.whatIsSize = function() {
//         console.log(`The ${this.species} is a ${this.size} bird`)
//     }

//     this.whatIsColor = function() {
//         console.log(`The ${this.species} has a primary color of ${this.primaryColor}!`)
//     }
// }

// let mourningDove = new CreateBird('Mourning Dove', 'Small', 'Gray', 'Brown')



// ? Codewars Challenge / Difficulty: 7kyu middle character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// ! Psuedo code

// Create a function that takes in a word
// test if the word is even or odd
    // if odd, find the middle character by dividing the length of the word by 2 and Math.floor
    // if even, divide the word length by two and store it in a variable
        // then return the word[var-1] + word[var]


// ! My solution

// function getMiddle(word){
//   if (word.length % 2 !== 0) { // this is for odd words
//     return word[Math.floor(word.length / 2)]
//   } else { // this should do all even words
//     let mid = Number(word.length / 2)
//     return word[mid - 1] + word[mid]
//   }
// }

// console.log(getMiddle('testing'))
// console.log(getMiddle('middle'))
// console.log(getMiddle('phil'))

// ! Best practices



// !lessons learned

// ? Codewars Challenge / Difficulty: 6kyu, 10 minute walk

// it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// ! Psuedo code

// create a function that takes in an array of directions <>
// The first condition i need to check for is the length of the array. It cant be longer than 10
    // use an if and return false if not equal to ten
// the second condition is applied if it is equal to ten, or true
    // if number of N is equal to S and number of W is equal to E should be true.

// ! My solution

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    } else {
        let n = 0
        let s = 0
        let e = 0
        let w = 0
        walk.forEach(element => {
            if (element === 'n') {
                n += 1
            } else if (element === 's') {
                s += 1
            } else if (element === 'e') {
                e += 1
            } else if (element === 'w') {
                w += 1
            }
        })

        return n === s && w === e ? true : false
    }
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'true') // true
  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'false') //false
  console.log(isValidWalk(['n','n','n','s','n','s','n','n','s']), 'false') //false
  console.log(isValidWalk(['n','e','s','w','n','e','s','w','n','s']), 'true') // true


// ! Best practices



// !lessons learned