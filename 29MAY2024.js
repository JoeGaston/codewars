// ! Codewars Challenge/ Difficulty: complementary DNA / 7kyu

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"



// ! Psuedo code
// Make a function and a call
// The problem input and output uses strings. So input a string
// In the function, split the string into an array.
// Iterate over the array and change the letters to the complimentary one.
// I think Ill do this with a for each loop comined with an if statement, or ternary operator





// ! My solution

// function dnaStrand(dna){
//     let newdna = dna.split('')
//     newdna.forEach(element => {
//         if (element === 'A') {
//             element = 'T'
//         } else if (element === 'T') {
//             element = 'A'
//         } else if (element === 'C') {
//             element = 'G'
//         } else if (element === 'G') {
//             element = 'C'
//         } else {
//             element = "error"
//         }
//         return newdna
//     });
//     return newdna

// }

// let dna = "GTAT"

// console.log(dnaStrand(dna))

// ! Best practices

function DNAStrand(dna){
    //your code here
    var res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
  }

  let dna = "GTAT"

  console.log(DNAStrand(dna))

// !lessons learned
