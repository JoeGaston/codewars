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

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft < distanceToPump) {
        return true
    } else {
        return false
    }
};

let distanceToPump = 50
let mpg = 25
let fuelLeft = 2

console.log(zeroFuel(distanceToPump, mpg, fuelLeft))



// ! Best practices

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };


  const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;


  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
  };





// !lessons learned

//remember, when using an arrow function you only declare a vairable and list the parameters that it takes in on the left side of the function.

//did this one in about 20 minutes. good job