// ? Codewars Challenge/ Difficulty: Drink about / 8kyu

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"



// ! Psuedo code

function peopleWithAgeDrink(old) {
    if (old < 14) {
        return 'drink toddy'
    } else if (old < 18) {
        return 'drink coke'
    } else if (old < 21) {
        return 'drink beer'
    } else {
        return 'drink whisky'
    }
  };

let age = 16

console.log(peopleWithAgeDrink(age))


// ! My solution





// ! Best practices

const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
    age < 21 ? "drink beer" : "drink whisky"




// !lessons learned




// ? Codewars Challenge/ Difficulty: return middle character 7kyu

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






// ! My solution

function getMiddle(s)
{
  //Code goes here!
}



// ! Best practices





// !lessons learned
