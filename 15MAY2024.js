// ! Codewars Challenge: Cockraoch

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


// ! Psuedo code

// produce a random number and multiply it * 100 to get the kmph, then store it
//do the converion from kmph to cm per sec




// ! My solution

function cockroachSpeed(s) {
    let cmps = Math.floor(s * 27.777778)
    return cmps
  }

let s = Math.floor(Math.random()*100)

console.log(cockroachSpeed(s))


// ! Best practices

//const cockroachSpeed = s => Math.floor(s / 0.036);



// !lessons learned

// I never found the right conversion.