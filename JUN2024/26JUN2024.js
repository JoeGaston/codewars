// ? Codewars Challenge/ Difficulty: exs and ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



// ! Psuedo code
// create a function that takes in a string <>
// Iterate through the string. Options include for loop, for Each, split...





// ! My solution

function XO(str) {
    let x = 0
    let o = 0
    let lowerCaseStr = str.toLowerCase()
    for (let i = o; i <= lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === 'x' ) {  // do i need a break here for other cases?
            x += 1
        } else if (lowerCaseStr[i] === 'o') {
            o += 1
        } else if (x + o === 0) { // edge case! if there are no x's or o's we should log true
            return true
        } else if (x === o) {
            return true
        } else {
            return false
        }
    }

    // x + o === 0 ? console.log(false) :
    // x === o ? console.log(true) : console.log(false)

}

let str = "zzoo"

console.log(XO(str))

// ! Best practices





// !lessons learned
