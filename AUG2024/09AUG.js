// ? Codewars Challenge / Difficulty: 6kyu

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// ! Psuedo code

/*
 How do I iterate through a string? //! you dont, turn it into an array
 How do I store the number of occurances of a chracter? //! create an empty object and use a for loop it push 


 1. Create a function that takes in a string
 2. Make the string lower case and use split to turn it into an array
 3. Iterate through the array and turn it into an object with the elements as the property and the occurances as values.
 4. Iterate across the object and start another count for all properties whos value are greater than one
 5. return the counter
*/


// ! My solution

function duplicateCount(text){
    let newText = text.toLowerCase().split('')
    let count = {}

    for (let i = 0; i < newText.length; i++) {
        let ele = newText[i]
        if (count[ele]) {
            count[ele] += 1
        } else {
            count[ele] = 1
        }
    }
    //console.log(count)
    let arr = Object.values(count)
    console.log(arr)
    const result = arr.filter(element => element > 1)
    console.log(result)
    return result.length
}

console.log(duplicateCount('abcde'), 0)
console.log(duplicateCount('aA11'), 2)

// ! Best practices



// !lessons learned


// TODO (ANKI)