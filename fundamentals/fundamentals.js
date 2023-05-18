/*
let country = 'Yemen'
let continent = 'Asia'
let population = 30000000

console.log(country)
console.log(continent)
console.log(population)
*/

//##############################################################################################################
/*
//variables and data types
true;
let a;
console.log(true);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Ahmed');
console.log(typeof null);
console.log(typeof a);

// The `typeof` operator in JavaScript returns `"object"` for `null` values.
// This is a long - standing bug in JavaScript, but it's not corrected due to
// backward - compatibility concerns.
// When JavaScript was initially created, values were represented as
//     a type tag and a value.
// The type tag for objects was 0.
// `null` was represented as the NULL pointer, which was 0.
// So, when`null` is evaluated by`typeof`, it returns `object` because it sees the type tag set to 0.
// So, when you do `console.log(typeof null);`, it shows`"object"`,
// even though `null` is technically not an object, it's a primitive value.
// This is a known issue and a quirk of the JavaScript language.

let number = 23;
console.log(typeof number);
number = '23';
console.log(typeof number);
*/
//##############################################################################################################
/*
// let, const and var

let age = 30;
age = 31;
let a;

const birthYear = 1991;
// birthYear = 1990; // error
// const job; // error : it can't be empty

var job = 'programmer';
job = 'teacher';
// not recommended to use var

status = 'single';
console.log(status);
//not recommended to use without let, const or var
*/

//##############################################################################################################

// Basic operators
/*
//Math operators
const now = 2021;
const ageAhmed = now - 1999;
const ageSarah = now - 2018;
console.log(ageAhmed, ageSarah);
console.log(ageAhmed * 2, ageAhmed / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Ahmed';
const lastName = 'Sedki';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

//Comparison operators
console.log(ageAhmed > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1999 > now - 2018);
//Operator precedence : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/
//##############################################################################################################
/*
//Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables.
// 2. Calculate both their BMIs using the formula(you can even implement both versions).
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI)
console.log(johnBMI)
console.log(markHigherBMI)
*/
//##############################################################################################################
// Strings and template literals
/*
const firstName = 'Ahmed';
const job = 'programmer';
const birthYear = 1999;
const year = 2023;
const ahmed = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(ahmed);
//Template literals
const ahmedNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ahmedNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);
*/
//##############################################################################################################
// Taking decisions: if / else statements
/*
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log(`Sarah can start driving license 🚗`);
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);
//to add emoji in vscode : windows + .
//😊
*/
//##############################################################################################################
// Coding Challenge #2
/*
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI(28.3) is higher than John's(23.9)!"
// Hint: Use an if / else statement 😉  GOOD LUCK 😀
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(`Mark's BMI(${markBMI}) is ${markHigherBMI ? 'higher' : 'lower'} than John's(${johnBMI})!`);
*/
//##############################################################################################################
// Type conversion and coercion
/*
//Type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Ahmed'));
console.log(typeof NaN);
console.log(String(23), 23);
//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('I am ' + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');
let n = '1' + 1; // '11'
n = n - 1; // 10
console.log(n);
*/
//##############################################################################################################
/*
// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN)); // NaN = Not a Number,
console.log(Boolean('Ahmed'));
console.log(Boolean({}));
console.log(Boolean(''));
//Normally javascript will try to convert the value to a boolean behind the scenes when we use it in a place
//where a boolean is expected.
const money = 0; // money is a falsy value here so it will be converted to false
if (money) { //consider money = 30, it will be converted to true
    console.log("Don't spend it all ;)");
}
else {
    console.log('You should get a job!');
}
let height; // height is undefined here so it will be converted to false
//height = 0; // height is 0 here so it will be converted to false
//height = 1; // height is 1 here so it will be converted to true
//height = 30; // height is 30 here so it will be converted to true
if (height) {
    console.log('YAY! Height is defined');
}
else {
    console.log('Height is UNDEFINED');
}
*/
//##############################################################################################################
/*
// Equality operators: == vs. ===
const age = '23';
if (age === 23) console.log('You just became an adult :D(strict)');
// === is strict equality operator, it doesn't do type coercion
// '23' === 23 -> false
if (age == 23) console.log('You just became an adult :D(loose)');
// == is loose equality operator, it does type coercion
// '23' == 23 -> true
//sa a general rule, avoid the loose equality operator because it can lead to some very weird bugs in our code
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23) { // 22 === 23 -> false
    console.log('Cool! 23 is an amazing number!');
}
else if (favorite === 7) {
    console.log('7 is also a cool number');
}
else if (favorite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7 or 9');
}
if (favorite !== 23) console.log('Why not 23?');

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}
*/
//##############################################################################################################
/*
// Logical operators
//In JavaScript, Boolean logic is used to create more complex conditions where you can check more than
//one condition at once. It is also used to reverse the logic of an expression.
//These operations are performed using the AND, OR, and NOT operators.
//1. AND Operator (&&): This operator returns true if both operands are true.
//If one (or both) of the operands is false, then it returns false. This is how you can use it:
let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); // It will output false because one of the conditions is false

//2. OR Operator (||): This operator returns true if at least one of the operands is true.
//If both are false, then it returns false. Here's an example:
let condition4 = true;
let condition5 = false;

console.log(condition4 || condition5); // It will output true because at least one of the conditions is true

//3. NOT Operator (!): This is a unary operator that takes only one operand.
//It returns the opposite of the operand's Boolean value. For example:
let condition = true;

console.log(!condition); // It will output false because the NOT operator reverses the value of the condition
//In addition to these basic operators, JavaScript also supports the concept of "truthy" and "falsy" values.
//In JavaScript, a value is "falsy" if it is 0, "", null, undefined, NaN, or false itself.
//All other values are "truthy", including "0", "false", empty functions, empty arrays, and empty objects.
//These Boolean operators and concepts of "truthy" and "falsy" are fundamental to control flow in JavaScript,
//including loops and conditional statements.
// Define the truth table
let truthTableAND = [ // 1 = true, 0 = false
    { 'Operand A': 1, 'Operand B': 1, 'A AND B': 1 && 1 },
    { 'Operand A': 1, 'Operand B': 0, 'A AND B': 1 && 0 },
    { 'Operand A': 0, 'Operand B': 1, 'A AND B': 0 && 1 },
    { 'Operand A': 0, 'Operand B': 0, 'A AND B': 0 && 0 }
];

// Display the truth table
console.table(truthTableAND);

let truthTableOR = [
    { 'Operand A': 1, 'Operand B': 1, 'A OR B': 1 || 1 },
    { 'Operand A': 1, 'Operand B': 0, 'A OR B': 1 || 0 },
    { 'Operand A': 0, 'Operand B': 1, 'A OR B': 0 || 1 },
    { 'Operand A': 0, 'Operand B': 0, 'A OR B': 0 || 0 }
];

console.table(truthTableOR);

let truthTableNOT = [
    { 'Operand A': 1, 'NOT A': !1 },
    { 'Operand A': 0, 'NOT A': !0 }
];

console.table(truthTableNOT);
*/
//##############################################################################################################
/*
// logical operators real world example
// User's status
let isLoggedIn = true;
let hasSubscription = true;
let isStudent = false;
let isSeniorCitizen = true;
let areSubtitlesOn = true;

// Check if the user can watch a movie
if(isLoggedIn && hasSubscription) {
    console.log("You can watch a movie!");
} else {
    console.log("You need to log in and have a valid subscription to watch a movie.");
}

// Check if the user is eligible for a discount
if(isStudent || isSeniorCitizen) {
    console.log("You are eligible for a discount!");
} else {
    console.log("You are not eligible for a discount.");
}

// Toggle the subtitles
areSubtitlesOn = !areSubtitlesOn;
console.log("Are subtitles on?", areSubtitlesOn);
*/
//##############################################################################################################
/*
// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.
// The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that as well(draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100.
// With this rule, a team only wins if it has a higher score than the other team,
// and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score,
// as well as multiple else - if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score
// and both have a score greater or equal 100 points.Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89.Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101.Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101.Koalas score 109, 95 and 106
// GOOD LUCK 😀
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log('Dolphins win the trophy 🏆');
}
else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log('Koalas win the trophy 🏆');
}
else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('Both win the trophy 🏆');
}
else {
    console.log('No one wins the trophy 😭');
}
*/
//##############################################################################################################
/*
// The switch statement
//here is a challenge to help you understand the switch statement better
Challenge:
Apologies for the confusion. I misunderstood your level of understanding. Let's write the code without using a function.

Challenge:

You have a variable `level` that represents the current level of a game.
You want to display different messages to the player based on the `level`.

Here are the messages for each level:

- Level 1: "Welcome to the first level!"
- Level 2: "You're doing great! Keep going."
- Level 3: "You're halfway there!"
- Level 4: "Almost there! You're doing great."
- Level 5: "This is the final challenge. Good luck!"

If the player is on a level that doesn't exist (i.e., a level less than 1 or greater than 5), display the message: "This level does not exist."

Write code that uses the `switch` keyword to display the appropriate message for the level.



--------------------

Solution:
*/
/*
const level = 'level 1'

switch (level) {
    case 'level 1':
        console.log('Welcome to the first level!')
        break;
    case 'level 2':
        console.log("You're doing great! Keep going.")
        break;
    case 'level 3':
        console.log("You're halfway there!")
        break;
    case 'level 4':
        console.log("Almost there! You're doing great.")
        break;
    case 'level 5':
        console.log("This is the final challenge. Good luck!")
        break;
    default:
        console.log('This level does not exist.')
}



//This script will print the message that corresponds to the value of `level`. The `switch` statement is used to perform different actions based on different conditions. Here, it's used to print different messages based on the value of `level`. The `break` keyword breaks out of the `switch` block. Without it, the next case will be executed even if the evaluation does not match the case. The `default` keyword specifies the code to run if there is no case match.
*/
//##############################################################################################################

// The conditional (ternary) operator
/*
const age = 23;
// age >= 18 ? console.log('I can drive a car') : console.log('get older first');
const drive = age >= 18 ? 'car' : 'bike';
console.log(drive);
let drive2;
if (age >= 18) {
    drive2 = 'car';
}
else {
    drive2 = 'bike';
}
console.log(drive2);
console.log(`I can drive a ${age >= 18 ? 'car' : 'bike'}`);
*/
//##############################################################################################################
/*
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
// In his country, it's usual to tip 15 % if the bill value is between 50 and 300.
// If the value is different, the tip is 20 %.
// Your tasks:
// 1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for this.It's not allowed to use an if / else statement 😉(If it's easier for you, you can start with an if / else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value(bill + tip).
// Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100)
console.log(`The bill is ${bill}$, the tip is ${tip}$, Total is ${bill + tip}$`)
*/
//##############################################################################################################
