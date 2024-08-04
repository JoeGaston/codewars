// ! Codewars Challenge/ Difficulty: You cant code under pressure 8kyu


//doubble the integer as fast as you can


// ! Psuedo code

// n/a




// ! My solution

// function doubleInteger(i) {
//     i will be an integer. Double it and return it.
//     return i * 2;
//   }



// ! Best practices





// !lessons learned





// ! Codewars Challenge/ Difficulty: Reverse Words 7kyu

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



// ! Psuedo code

// ?Create a functionthat takes in a string as the parameter
// ?So it looks like i need to reverse the letters, but not words.
// ?I think i'll need to use .split() to change it into an array. 
// Then reverse the characters while still in an array. Not sure if reverse() can be used here or not. 
// after the chracters are reveresed, use join to change it back into a string.
// return the string.




// ! My solution

// function reverseWords(str) {
//   let arr = str.split(' ')
//   arr.forEach(element => {

//   });
// }

// let str = "I'm not scared to fly!"

// console.log(reverseWords(str))

// ! Best practices

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}



// !lessons learned
