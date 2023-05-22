'use strict';
/*
The `'use strict';` directive was introduced in ECMAScript 5 (ES5).
It is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime.
Code errors that would otherwise have been ignored or would have failed silently will now generate errors or
throw exceptions.

Here are some key differences when using `'use strict';`:
1. **Variable Declaration**: In strict mode, the variables must be declared with `var`, `let`, or `const`.
If you do assign a value to an undeclared variable, un-declared object property, read-only property,
non-writable global variable, or non-configurable variable, a runtime error will be thrown.

    'use strict';
    x = 3.14;       // This will cause an error because x is not declared

2.Octal Syntax: The simple (non-ES6) octal literals are not allowed in strict mode.
    'use strict';
    var x = 010;  // This will cause an error

3.Deleting Variables, Objects, or Functions: Deleting variables, objects, or functions is not allowed in strict mode.
    'use strict';
    var x = 3.14;
    delete x;    // This will cause an error

4.Duplicate Parameter Names: Strict mode throws an error when it detects a duplicate named parameter.
    'use strict';
    function x(p1, p1) {};   // This will cause an error

5.'this' Value: In strict mode, the value of `this` in functions that are not methods or constructors is undefined.
In non-strict mode, `this` in such contexts refers to the global object (usually `window` in browsers).
    'use strict';
    function f() {
        return this;  // Will return `undefined`, not the global object
    }
In order to invoke strict mode for a script, put the exact statement `'use strict';
` (or `"use strict";`) before any other statements in your script. Note that it is not a statement that is only
recognized by modern browsers - older browsers that do not support it will just see it as a string statement with
no effect, and ignore it.

To invoke strict mode for a function, put the exact statement `'use strict';
` in the function body before any other statements. This restricts strict mode to that function only.
*/
//##############################################################################################################

//function
//challenege to help you understand functions
/*
Challenge:
You're going shopping and you have a list of items you want to buy.
Each item has a name and a price. You want to create a function that calculates the total cost of all items.

Here's your shopping list:
- Apples: $2.5
- Milk: $3
- Bread: $2
- Eggs: $4.5
You need to create a function called `calculateTotalCost` that accepts a list of items and their prices
and returns the total cost.
*/

// **Solution:**
/*
function calculateTotalCost(shoppingList) {
    let totalCost = 0;
    for (let item in shoppingList) {
        totalCost += shoppingList[item];
    }
    return totalCost;
}

const shoppingList = {
    Apples: 2.5,
    Milk: 3,
    Bread: 2,
    Eggs: 4.5
};

console.log(calculateTotalCost(shoppingList));
*/

//##############################################################################################################
/*
//function
//function declaration

// A function declaration is a function that is bound to an identifier or name.
// A function declaration consists of the function keyword, followed by:
// 1. The name of the function.
// 2. A list of parameters to the function, enclosed in parentheses and separated by commas.
// 3. The JavaScript statements that define the function, enclosed in curly brackets, `{ }`.

// The syntax for a function declaration is:
//     function name([param[, param[, ... param]]]) {
//        [statements]
//     }

// **Example:**
function square(number) {
    return number * number;
}

//function expression

// A function expression is similar to and has the same syntax as a function declaration.
// However, the main difference is that a function expression does not have a name.
// A function expression can be stored in a variable, and the variable can be used as a function.
// The syntax for a function expression is:
    const name = function([param[, param[, ... param]]]) {
       [statements]
    };

// **Example:**

const square = function(number) {
    return number * number;
}
*/
//##############################################################################################################
/*
//Arrow function
//An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.

// Differences & Limitations:
// 1. Does not have its own bindings to `this` or `super`, and should not be used as methods.
// 2. Does not have arguments, or new.target keywords.
// 3. Not suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a scope.
// 4. Can not be used as constructors.
// 5. Can not use `yield`, within its body.

// **Syntax:**
//     (param1, param2, …, paramN) => { statements }
//     (param1, param2, …, paramN) => expression
//     // equivalent to: (param1, param2, …, paramN) => { return expression; }

//     // Parentheses are optional when there's only one parameter name:
//     (singleParam) => { statements }
//     singleParam => { statements }

//     // A function with no parameters requires parentheses:
//     () => { statements }

// **Examples:**
//     // Parentheses are optional when there's only one parameter name:
//     (singleParam) => { statements }
//     singleParam => { statements }
*/
//##############################################################################################################
/*
//coding challenge
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK

// **Solution:**

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

// Test data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

// Test data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);
*/
//##############################################################################################################
/*
//Arrays
//An array is a special variable, which can hold more than one value at a time.
//If you have a list of items (a list of car names, for example), storing the cars in single
//variables could look like this:
//     let car1 = "Saab";
//     let car2 = "Volvo";
//     let car3 = "BMW";

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars,
// but 300?
// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// **Creating an Array:**
//     let array_name = [item1, item2, ...];   // array literal
//     let array_name = new Array(item1, item2, ...);   // array constructor

// **Example:**
let cars = ["Saab", "Volvo", "BMW"];
// or
let cars1 = new Array("Saab", "Volvo", "BMW");

// **Access the Elements of an Array:**
// You access an array element by referring to the index number.
// This statement accesses the value of the first element in cars:
let x = cars[0];

// **Changing an Array Element:**
// To change the value of a specific element, refer to the index number:
cars[0] = "Opel";

// **Array Properties and Methods:**
// The real strength of JavaScript arrays are the built-in array properties and methods:
//     Property: `length` - The length property of an array returns the length of an array
// (the number of array elements).
//Method: `toString()` - The toString() method returns a string with all the array values, separated by commas.
//Method: `pop()` - The pop() method removes the last element from an array.
//Method: `push()` - The push() method adds a new element to an array (at the end).
//Method: `shift()` - The shift() method removes the first array element and "shifts" all other elements to a lower index.
//Method: `unshift()` - The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
//Method: `splice()` - The splice() method can be used to add new items to an array.
//Method: `concat()` - The concat() method creates a new array by merging (concatenating) existing arrays.
//Method: `indexOf()` - The indexOf() method searches an array for an element value and returns its position.
//Method: `includes()` - The includes() method determines whether an array contains a specified element value and returns true or false.

// **Example:**
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

const mixedDataTypes = ["string", 1, true, null, undefined, ["nested array"], { key: "value" }];
mixedDataTypes.length;   // the length of mixedDataTypes is 7
console.log(mixedDataTypes)
console.log(mixedDataTypes.toString());

fruits.pop();   // removes the last element ("Mango") from fruits
fruits.push("Kiwi");   // adds a new element ("Kiwi") to fruits
console.log(fruits);

fruits.shift();   // removes the first element "Banana" from fruits,it returns the removed element
fruits.unshift("Lemon");   // adds a new element "Lemon" to fruits
console.log(fruits);

fruits.splice(2, 0, "Lemon", "Kiwi");   // adds new elements "Lemon" and "Kiwi" to fruits
console.log(fruits);

let citrusFruits = fruits.slice(1, 3);   // selects elements 1 ("Orange") and 2 ("Apple") from fruits
console.log(citrusFruits);

let allFruits = fruits.concat(citrusFruits);   // combines fruits and citrusFruits
console.log(allFruits);

// **Looping Array Elements:**
// The safest way to loop through an array, is using a "for" loop:
let fruitss = ["Apple", "Banana", "Orange"];
let fLen = fruitss.length;

for (let i = 0; i < fLen; i++) {
    console.log(fruitss[i]);
}

// **Looping Array Elements with `forEach()`:**
// The `forEach()` method calls a function (a callback function) once for each array element.
// Note that the function takes 3 arguments:
// 1. The item value
// 2. The item index
// 3. The array itself
fruitss.forEach(function (item, index, array) {
    console.log(item, index);
}
);

// **Looping Array Elements with `for...of`:**
// The `for...of` statement creates a loop iterating over iterable objects, including: built-in String,
// Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
// Note that the function takes 3 arguments:
// 1. The item value
// 2. The item index
// 3. The array itself
for (let item of fruitss) {
    console.log(item);
}

// **Looping Array Elements with `for...in`:**
// The `for...in` statement iterates over all enumerable properties of an object that are keyed by strings
// (ignoring ones keyed by Symbols), including inherited enumerable properties.
// Note that the function takes 3 arguments:
// 1. The item value
// 2. The item index
// 3. The array itself
for (let item in fruitss) {
    console.log(item);
}
*/
//##############################################################################################################
/*
//challenge 2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill
// value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
// calculated based on the rules above (you can check out the code from first tip calculator challenge if you need
// to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created
// before.
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip.

// Test data: 125, 555 and 44

// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value
// of a function! So you can just call a function as array values (so don't store the tip values in separate
// variables first, but right in the new array) 😉

// GOOD LUCK 😀

// **Solution:**
const bills = [125, 555, 44];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, total)
*/
//##############################################################################################################
/*
//Objects
//Objects are variables too. But objects can contain many values.
//The values are written as name:value pairs (name and value separated by a colon).
//an exercsie to help you understand objects
// **Challenge:**
// You're asked to represent a book in your code. Each book has a title, an author, a publication year, and a genre.
// Here is the information for the book:


// - Title: "To Kill a Mockingbird"
// - Author: "Harper Lee"
// - Publication Year: 1960
// - Genre: "Southern Gothic"

// 1. Create an object named `book` to represent this book.
// 2. Add a method `getBookInfo` to this object that returns a string in the following format: "Title by Author, published in Year. Genre: Genre"
// 3. Add methods `setTitle`, `setAuthor`, `setPublicationYear`, and `setGenre` to the `book` object. Each method should accept one parameter and set the corresponding property to the value of that parameter.
// 4. Call the `setTitle` method to change the title of the book to "Go Set a Watchman".
// 5. Call the `getBookInfo` method and print the result to the console.



// **Solution:**

const book = {
    Title: "To Kill a Mockingbird",
    Author: "Harper Lee",
    PublicationYear: 1960,
    Genre: "Southern Gothic",
    getBookInfo: function () {
        return `${this.Title} by ${this.Author}, published in ${this.PublicationYear}. Genre: ${this.Genre}`
    },
    // `this` is a keyword that refers to the current object. In this case, `this` refers to the `book` object.
    setTitle: function (newTitle) {
        return this.Title = newTitle
    },
    setAuthor: function (newAuthor) {
        return this.Author = newAuthor
    },
    setPublicationYear: function (newPublicationYear) {
        return this.PublicationYear = newPublicationYear
    },
    setGenre: function (newGenre) {
        return this.Genre = newGenre
    }

}
console.log(book.getBookInfo())
book.setAuthor('Ahmed')//change the author
console.log(book.getBookInfo())//print the new info

// In this code, `setTitle`, `setAuthor`, `setPublicationYear`, and `setGenre` are methods that set the `title`,
// `author`, `publicationYear`, and `genre` properties of the `book` object, respectively. They do this using the
// `this` keyword to refer to the `book` object. After calling `setTitle` to change the title of the book,
// calling `getBookInfo` will return the updated book info.

// **Note:** You can also use the `this` keyword to access properties of the current object. For example,
// `this.Title` will return the title of the book.

//to read more about the dot notation and bracket notation visit this link
//https://www.freecodecamp.org/news/javascript-dot-notation-vs-bracket-notation-797c4e34f01d/
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
*/
//##############################################################################################################
/*
//for loops
//for loops are used to execute a block of code a number of times.
//The `for` loop has the following syntax:
//     for (statement 1; statement 2; statement 3) {
//        code block to be executed
//     }

// Statement 1 is executed (one time) before the execution of the code block.
// Statement 2 defines the condition for executing the code block.
// Statement 3 is executed (every time) after the code block has been executed.

//here is an exercise to help you understand for loops
// **Challenge:**

// You're given a list of students with their scores for four tests.
// The score for each test is a number between 0 and 100, and the scores are represented as arrays of four numbers.
// For example, the score array `[80, 90, 85, 70]` means that the student scored 80 on the first test,
// 90 on the second test, 85 on the third test, and 70 on the fourth test.

// The students and their scores are as follows:

// - John: [80, 90, 85, 70]
// - Mary: [85, 95, 80, 90]
// - Bob: [70, 80, 75, 85]
// - Susan: [90, 85, 95, 85]

// You're asked to do the following:

// 1. Calculate and print out the average score for each student.
// 2. Find and print out the name of the student with the highest average score.
// 3. Print out the names of students who scored 90 or above on the third test.

// You need to use arrays, a for loop to go through the students and their scores,
// and a nested for loop to go through each student's scores.
// You can use `continue` to skip to the next student if a student scored less than 90 on the third test,
// and `break` to stop the loop once you've found the student with the highest average score.

// **Solution:**

const students = [
    { name: "John", scores: [80, 90, 85, 70] },
    { name: "Marry", scores: [85, 95, 80, 90] },
    { name: "Bob", scores: [70, 80, 75, 85] },
    { name: "Susan", scores: [90, 85, 95, 85] }
]
let highestAverageScore = 0;
let studentWithHighestAverage;
for (let i = 0; i < students.length; i++) {
    let totalScore = 0;
    for (let j = 0; j < students[i].scores.length; j++) {
        totalScore += students[i].scores[j];
    }
    let averageScore = totalScore / students[i].scores.length;
    const avgS = [];
    avgS.push(averageScore)
    console.log(`${students[i].name}'s total score is ${totalScore}, the average score is ${averageScore}`);
    //highestAverageScore = Math.max(avgS)
    if (averageScore > highestAverageScore) {
        highestAverageScore = averageScore;
        studentWithHighestAverage = students[i].name;
    }

    if (students[i].scores[2] < 90) {
        continue;
    }
    console.log(students[i].name + " scored 90 or above on the third test");
}
console.log(`The highest average score is ${highestAverageScore} `)
*/
//##############################################################################################################