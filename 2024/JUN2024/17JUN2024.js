// ? Codewars Challenge/ Difficulty: Mumbling 7kyu

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



// ! Psuedo code

//call a function that takes in a string for the kata
//method chain to capitalize the string and split the string into an arr

// iterate throught the array. IT appears that it needs to add an amount of letters based on its index. [0] add no new letter, while [1] add one new letter.

//I think we will need to do push.toLowerCase of the index? 


//join arr back and add dashes

// for each element push element += index


// ! My solution

function accum(s) {
return s.split('').map((el, i) => (el.toUpperCase() + el.toLowerCase().repeat(i))).join('-');
}

let s = 'abCd'
console.log(accum(s))


// ! Best practices

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }



// !lessons learned

//forEach does not allow you to manipulate the index and element, only the element. This held me back. Also my understanding of method chaining. 