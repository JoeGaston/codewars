// ? Codewars Challenge / Difficulty: Find the Capitals 7kyu

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// ! Psuedo code

// write a function that takes in a word. <>
// Create an empty array for the indexes to be pushed into <>
// split the strings into an array and store it.
// Using a nested loop, compare the two arrays
    // if they are not equal, push the index of the not equal iterator to the empty array //!didnt work

// USe a normal forloop to iterate through the orginial array.
    // if arr[i] == toUpperCase(arr[i])
        //arr.push(i)


// ! My solution

var capitals = function (word) {
	let arr = []                                    // 0 1 2 3 4 5 6 7
    let wordArr = word.split('')                    // C o d E W a R s
    //console.log(wordArr)
    for (let i = 0; i <= wordArr.length -1; i++) {
        console.log(i)
        if (wordArr[i].toUpperCase() === wordArr[i]) {
            arr.push(i)
        }
    }
    return arr
    
};

console.log(capitals('CodEWaRs'))
// ! Best practices

// !lessons learned


