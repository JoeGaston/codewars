// ? Codewars Challenge/ Difficulty: Vowel Count, 7kyu


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




// ! Psuedo code

// maybe use filter? Yes, it returns a shallow copy of an array, filtered down to only the elements that pass the test implemented by the function.





// ! My solution

function getCount(str) {
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === 'a') {
            count += 1
        } else if (str[i] === 'e') {
            count += 1
        } else if (str[i] === 'i') {
            count += 1
        } else if (str[i] === 'o') {
            count += 1
        } else if (str[i] === 'u') {
            count += 1
        }
    }
    return count
  }

let str = 'Hello, how are you?'

console.log(getCount(str))

// ! Best practices





// !lessons learned

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }