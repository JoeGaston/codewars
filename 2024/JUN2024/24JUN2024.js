// ? Codewars Challenge/ Difficulty: List Filtering / 7kyu

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


// ! Psuedo code
// create an array of strings, and non-negative integers
// create a function that takes in array
// I need to iterate through the array. My first thought is to create a new one with map, although since im eliminating things in the array maybe I should filter?  [Ill use filter]
// upon filtering I need to said up a conditional. I want to use type of here as my conditional operator. anything that is === typeof 'string' will eb eliminated. 






// ! My solution
function filter_list(l) {
    return l.filter(element => typeof(element) === 'number')
  }


let l = [1,2,'aasf','1','123',123]

console.log(filter_list(l))
// ! Best practices

// kinda had the best practice here 




// !lessons learned


// Make a decision and see it out until it doesnt make sense or fail. You are tripping yourself up by attempting to combine multiple solutions.