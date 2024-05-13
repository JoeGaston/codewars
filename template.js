// ! Codewars Challenge: Will you Make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. 
//There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.



// ! Psuedo code

// I'll need a variable for distance to go
// I'll need a variable for average MPG
// I'll need a variable for gallons remaining

//since average miles per gallon doesnt change, Ill have that internal to the function.

//In any case, getting achieving the distance to go with 0 gallons left is perfect and would equal true. Use modulo for this
//In other cases, having has left over would be good and would also equal true. 
//if gas is empty before it would be false.




// ! My solution


function willWeMakeIt(averageMPG) {
    let distanceRemaining = 50
    let gallonsRemaining = 2

    if (distanceRemaining % gallonsRemaining >= 0) {
        return true
    } else {
        return false
    }
}

let averageMPG = 25

willWeMakeIt(averageMPG)


// ! Best practices





// !lessons learned
