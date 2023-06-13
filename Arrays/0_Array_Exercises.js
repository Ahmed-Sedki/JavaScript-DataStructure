/*
//Exercise 1: Reverse a string
//Create a function that reverses a string:
//'Hi My name is Ahmed' should be:
//'demhA si eman yM iH'


const inputString = "Hi My name is Ahmed Sedki"

//Solution 1
f// Function that reverses a string
function reverse(str) {
    // Checking the input:
    // If the input is not provided, 
    // or the length of the string is less than 2 (it means that it's either an empty string or a single character), 
    // or the type of the input is not a string,
    // return an error message
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input';
    }

    // Initialize an empty string for the reversed string
    let reversedString = '';

    // Loop over the input string in reverse order
    // Starting from the last character (str.length - 1)
    // And going to the first character (i >= 0)
    for (let i = str.length - 1; i >= 0; i--) {
        // On each iteration, prepend the current character to the reversed string
        reversedString += str[i];
    }

    // After all characters have been prepended,
    // return the reversed string
    return reversedString;
}


//Solution 2
const reverseString = str => str.split('').reverse().join('');

console.log(reverseString("Hi My name is Ahmed"));  // Outputs: demhA si eman yM iH

//Solution 3
const reverseString2 = str => [...str].reverse().join('');

// Here's what's happening in this code:
// 1. `split('')` converts the string into an array of characters.
// 2. `reverse()` reverses the order of the elements in the array.
// 3. `join('')` combines the elements of the array back into a single string. 

console.log(reverse(inputString))
*/
//##########################################################################################################################################
