// ! Codewars Challenge/ Difficulty: Total Amount of Points

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4




// ! Psuedo code

// create a function that takes in the object
// the Object needs to have 10 key value pairs
// I would need to iterate over the indexs of the array while analyzing the x, y values
// I need a variable to hold the sum, starting with 0
// ill need to conduct comparison on the x and y value and add the points per game to the sum variable
// then I would need to return the sum variable.





// ! My solution
function points(games) {
    let sum = 0
    for (let i = 0; i < games.length; i++) 
      {
      if (games[i][0] > games[i][2]) {
        sum += 3
      } else if (games[i][0] < games[i][2]) {
        sum += 0
      } else if (games[i][0] === games[i][2]) {
        sum += 1
      }
    } 
    return sum
  }

let games = ['3:1', '2:2', '1:3', '0:2', '2:0', '3:2', '3:3', '1:1', '1:2', "2:1"]

console.log(points(games))


// ! Best practices

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)


// !lessons learned
