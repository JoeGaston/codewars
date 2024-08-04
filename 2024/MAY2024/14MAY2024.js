// ! Codewars Challenge: Reversed String

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'





// ! Psuedo code

// I would like to use arrow functions because I'm feeling like I need practice.
// I want to use a variable to store the normal string as well as the reversed string
// I'm aware of the reverse method, but I need to look up documentation.
// so reverse() will reverse an array, so ill have to split the string first.
// Next, i'll reverse it.
// Then, I'll have to join it.




// ! My solution

let str = 'hello'
let newstr = str.split('').reverse().join('')


console.log(newstr)

// ! Best practices & lessons learned

function solution(str){
    return str.split('').reverse().join('');  
  }
// I like this one because its automatically returning the argument without creating a new variable or anything else.



const solution = str => str.split('').reverse().join('');
//this is the one I should have done. breaking this down we have a function (solution) that will equal the argument (str). Expresses and implicitly returns

