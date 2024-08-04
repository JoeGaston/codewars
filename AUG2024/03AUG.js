// ? Codewars Challenge / Difficulty: 

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// ! Psuedo code
// Create a function that takes in two number <>
// Use a conditional to test if a number is even or odd 


// ! My solution

function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(lovefunc(2,5), true) 
console.log(lovefunc(1,4), true) 
console.log(lovefunc(0,0), false)

// ! Best practices

// function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 == 1;
//   }

// !lessons learned

// write abotu whatever i learned. 

// TODO (ANKI)