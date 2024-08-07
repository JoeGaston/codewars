// ? Codewars Challenge / Difficulty: square and Sum, 8kyu

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 


// ! Psuedo code

/*
 1. create a function that takes in a number.
 2. Square each number in the array using forEach
 3. reduce the new arr
*/


// ! My solution

// function squareSum(numbers){
//     let newArr = numbers.map(element => element * element)
//     let finalArr = newArr.reduce((acc, curr) => acc + curr)
    
//     return finalArr
    
//     }
    
//     console.log(squareSum([1,2]))
//     console.log(squareSum([0, 3, 4, 5]))

// ! Best practices



// !lessons learned


// TODO (ANKI)



// ? Codewars Challenge / Difficulty: super easy, 8kyu

/*
 Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

// ! Psuedo code

/*
 1. create a function that takes in an object. <>
 2. define the values that represent each department <>
 3. iterate through the object and use Object.values to push the values into an array
 4. Iterate over the array and sum the corresponding values using a counter
*/


// ! My solution

function boredom(staff){
    let IS = 8
    let retail = 5
    let cleaning = 4
    let pissingAbout = 25

    let arr = Object.values(staff)
    console.log(arr)

    let counter = 0
    arr.forEach(element => {
        if (element === 'accounts') {
            counter += 1
        } else if (element === 'finance') {
            counter += 2
        } else if (element === 'canteen') {
            counter += 10
        } else if (element === 'regulation') {
            counter += 3
        } else if (element === 'trading') {
            counter += 6
        } else if (element === 'change') {
            counter += 6
        } else if (element === 'IS') {
            counter += 8
        } else if (element === 'retail') {
            counter += 5
        } else if (element === 'cleaning') {
            counter += 4
        } else if (element === 'pissing about') {
            counter += 25
        }
    }) 
    console.log(counter)
    if (counter <= 80) {
        return 'kill me now'
    } else if (counter > 80 && counter < 100) {
        return 'i can handle this'
    } else {
        return 'party time!!'
    }
}


let staff = 
{ 
tim: 'IS',
jim: 'finance',
randy: 'pissing about',
sandy: 'cleaning',
andy: 'cleaning',
katie: 'cleaning',
laura: 'pissing about',
saajid: 'regulation',
alex: 'regulation',
john: 'accounts',
mr: 'canteen' 
}

console.log(boredom(staff))

// ! Best practices



// !lessons learned


// TODO (ANKI)