// ? Codewars Challenge/ Difficulty: Isograms 7kyu

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



// ! Psuedo code
// create a function that takes in a string
// We want to be able to eliminate anything that isnt a string typeof  (complete)
// How do we check for repeat characters of the alphabet





// ! My solution
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    console.log(str)
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }

let str = 'banjo'

console.log(isIsogram(str))


// ! Best practices





// !lessons learned
