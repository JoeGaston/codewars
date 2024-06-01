// ! Codewars Challenge: Parse nice int from char problem

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


// ! Psuedo code

// I need a randon number first. I want to use math.random and math.floor to create this inside the function.
// Because im not using a prompt, the function will simply take in a string-numer ('9').
// The first thing i need to do is convert the string to a number. Im going to use the number() method. There is another method called parseint() that i may try as well.
// Next, I need to make a function that takes in the new string
// Then, I need to return the string as a integer. I will use the number() method



// ! My solution

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :)
    let returnNum = inputString.charAt(0)
    return Number(returnNum)
    }

let ageNum = Math.floor(Math.random() * 10)
let ageString = ageNum.toString()
let inputString = `${ageString} years old`
console.log(getAge(inputString))

// ! Best practices

function getAge(inputString){
    return parseInt(inputString);
  }


  function getAge(inputString){
    return parseInt(inputString[0]); 
  }


// !lessons learned


// Well, my code was extremely long, but i did solve it. I should have used parseint apparently.