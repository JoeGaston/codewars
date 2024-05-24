// ! Codewars Challenge/ Difficulty: Friend or Foe / 7kyu

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.




// ! Psuedo code
// Create an array of names
// ensure the name you want to return has four string characters
// Use map(), as it creates a new array
// How do I analyze the length of a string? I could use .length()
// For the ternary operator I dont know how to tell it not to do anything if false


// element.length === 4 ? element : "none"


// ! My solution

function friend(friends){
    let myFriend = friends.filter(element => element.length === 4 )
    return myFriend
    
}
let people = ['banjo', 'dani','squirrel', 'pizza']

console.log(friend(people))


// ! Best Solution
// function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }



// ! Lessons learned

// the first thing I did wrong was to think that i needed map with a ternary operator. I could have just used filter. I forgot that filter also creates a new array, I thought it didnt which is why i chose map.