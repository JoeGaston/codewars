// ! Codewars Challenge: Messi Goals function!

// Messi is a soccer player with goals in three leagues:
    // LaLiga
    // Copa del Rey
    // Champions

// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17



// ! Psuedo code

//none 


// ! My solution

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    // code goes here
    let totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals
    return totalGoals
    
}



// ! Best practices
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }




// ! Lessons learned

// ? the best practices soultion eliminates the need to create a variable and acknowledges the JS language will immediatly return a sum of the arguments on the return line. Also, I think sometimes I add parenthesis after return, and apparently its not necessary