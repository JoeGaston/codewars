// ? Codewars Challenge/ Difficulty: Maskify / 7kyu

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

//  "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"



// ! Psuedo code
// create a function that takes in a string <>
// iterate over the string of characters. 
// need to use the .length method to identify the "last four" characters of a string
// if [i] is not in the last four digits, use hash




// ! My solution
function maskify(str) {
    
    for (let i = 0; i < str.length; i++) {
        if (str.length <= 4) {
            return str
        } else if (str.length > 4) {

        }
    }
}

let str = '987654321'

maskify(str)



// ! Best practices





// !lessons learned
