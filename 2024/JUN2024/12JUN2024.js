// ? Codewars Challenge/ Difficulty: Round up to the next multiple of 5 / 7kyu

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// input:    output:
// 0    ->   0
// 2    ->   5 -- 3
// 3    ->   5 -- 2 
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.



// ! Psuedo code
//create a function that takes in an integer





// ! My solution

function roundToNext5(n){
    let a = (n + 1) 
    let b = (n + 2)
    let c = (n + 3) 
    let d = (n + 4) 

    if (n % 5 === 0) {
        return n
    } else if (a % 5 === 0) {
        return a
    } else if (b % 5 === 0) {
        return b
    } else if (c % 5 === 0) {
        return c
    } else if (d % 5 === 0) {
        return d
    } else {
        return 'no solution found'
    }
}

let n = -6

console.log(roundToNext5(n))

// ! Best practices

function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }




// !lessons learned
