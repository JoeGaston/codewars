// ! Codewars Challenge/ Difficulty: Descending order / 7kyu

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// ! Psuedo code


// create a function that takes in a non-negative integer
// What methods can I use to make this in descending order?
    // compare function?
    // sort() or toSorted() - I think i could use this, but would have to use split and join because these methods are for arrays?



// ! My solution

function descendingOrder(n){
    let str = n.toString()
    let arr = str.split('')
    let descOrder = arr.sort((a,b) => b - a ).join('')
    return Number(descOrder)
  }

let n = 576305

console.log(descendingOrder(n))

// ! Best practices
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }


function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''));
  }

// !lessons learned

// I dont know how to use the compare function, but more importantly i knew to try to use it.