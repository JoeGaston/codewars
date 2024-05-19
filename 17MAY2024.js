// ! Codewars Challenge: Fake Binary

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string





// ! Psuedo code

//split the string into an array using split()
//next iterate over the array using for each() and an if statement
//Change the array back to a string using join()!!




// ! My solution


function fakeBin(x){
let arr = x.split('')
let newstr = []
newstr = arr.forEach(element => {
    if (element > 5) {
        newstr.push(0)
    } else {
        newstr.push(1)
    }
    return newstr
});

}

let str = "123456789"

console.log(fakeBin(str))



// ! Best practices





// !lessons learned
