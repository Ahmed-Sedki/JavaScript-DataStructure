/*
Big O notation is a way of evaluating the performance of an algorithm.
It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
We don't care about the details, only the trends.
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less
than a constant times f(n), as n increases.
*/

/*
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(large) //  O(n) --> Linear Time O(10000)
*/
//##############################################################################################################
/*
//O(1) --> Constant Time
//example
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) --> O(1)
*/
//##############################################################################################################
/*
//an exercise
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;//O(1)
    a = 50 + 3;//O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction();  //O(n)
        let stranger = true;//O(n)
        a++;                //O(n)
    }
    return a;              //O(1)
}
    // O(3 + 4n) --> O(n)
    //O(n)
*/
//##############################################################################################################
/*
//another exercise
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5;
    let b = 10;
    let c = 50;
    for (let i = 0; i < input; i++) {
        let x = i + 1;
        let y = i + 2;
        let z = i + 3;

    }
    for (let j = 0; j < input; j++) {
        let p = j * 2;
        let q = j * 2;
    }
    let whoAmI = "I don't know";
}
// O(4 + 5n) --> O(n)
//O(n)
*/
//##############################################################################################################
/*
Big O Rules
1. Worst Case
In the context of computer science and algorithm complexity, the "worst case" scenario refers to the most amount of
time an algorithm could possibly take to complete, or the maximum amount of resources it could use,
given an input of size 'n'.

This worst case is usually what we're most interested in when discussing Big O, as it gives us an upper bound on an
algorithm's time complexity or space complexity.

To give you a more concrete example, consider a simple linear search algorithm.
This algorithm goes through each element in a list one by one until it finds the element it's looking for.
In the worst-case scenario, the element won't be found until the very end of the list, or it isn't in the list at all.
Therefore, the worst-case time complexity is O(n), where 'n' is the size of the list.
This means that if the list size doubles, the worst-case time to find an element also doubles.

Understanding the worst case helps us to ensure that our algorithms can handle large amounts of data efficiently and
gives us a way to compare the efficiency of different algorithms.
*/
//##############################################################################################################
/*
2. Remove Constants

The second rule of Big O notation is "Remove Constants". This means that when you're expressing the time complexity
of an algorithm, you disregard any constant factors because they do not significantly affect the complexity as the
input size grows.

Here's a simple example:

function printItemsTwice(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

In this function, we have two separate loops each running from `0` to `n`. So, one might initially say that the time
complexity of the function is `O(2n)`. However, according to the second rule of Big O notation, we can drop the
constant factor `2` because as `n` grows to a very large number, the `2` becomes less significant.
Thus, the function's time complexity is actually `O(n)`.

It's important to note that this rule does not mean constants are unimportant in practice.
In real-world applications, constants can often have a significant impact on the performance of an algorithm,
especially for small to medium-sized inputs. However, when we're using Big O notation to analyze an algorithm's
scalability, we're usually interested in how the algorithm behaves as the input size grows to extremely large sizes,
and in those cases, the constants often become less significant.
*/
//##############################################################################################################
/*
3. Different terms for inputs

The third rule of Big O notation is "Different terms for inputs".
This rule is used when we have an algorithm which has multiple input parameters, and each of these parameters has
its own separate loop (or recursive call, or any other operation). In this case, we can't just add up the operations,
because the operations are not all performed on the same input.

Let's see an example:

function printAllItems(items1, items2) {
    items1.forEach(item => console.log(item));

    items2.forEach(item => console.log(item));
}

In the function above, there are two separate inputs `items1` and `items2`, and we're looping through each of them
separately. If `items1` has length `n` and `items2` has length `m`, we could say the time complexity is `O(n + m)`
because we're looping through each of them once.

However, according to the third rule of Big O, when we have different inputs, we should use different variables to
represent them in our Big O notation. Thus, instead of `O(n + m)`, we would express the time complexity of this
function as `O(n + m)`.
This makes it clear that the time complexity of the function is linear with respect to eachof the inputs separately.

This rule is particularly important when dealing with multi-dimensional arrays or matrices,
where operations are often performed on each row and each column.

For instance, if you had a function that performed an operation on each item in a 2D matrix,
you would say the time complexity is `O(n*m)` (where `n` is the number of rows and `m` is the number of columns),
not `O(n^2)` (which would be the case if the operation was performed on every pair of items).

It's important to be aware of this rule, as it can drastically affect the time complexity of algorithms,
especially those working with multiple or multi-dimensional inputs.
*/
//##############################################################################################################
/*
//O(n^2) --> Quadratic Time
//example
const boxes = [0, 1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) { //O(n)
        for (let j = 0; j < array.length; j++) { //O(n)
            console.log(array[i], array[j]); //O(1)
        }
    }
}

logAllPairsOfArray(boxes); // O(n * n) --> O(n^2)
*/
//##############################################################################################################
/*
//4. Drop Non Dominants

The fourth rule of Big O notation is "Drop Non-Dominant Terms".
This rule suggests that when dealing with multiple terms in your time complexity expression,
you should keep the term that will grow the fastest as the input size increases and drop the others.

This is because when input sizes become very large,
the term with the highest rate of growth will dominate the computation time.
Smaller terms will become increasingly insignificant and can be ignored.

For example:

function printItems(items) {
    items.forEach(item => console.log(item)); // O(n)

    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            console.log(i, j); // O(n^2)
        }
    }
}

In this function, we first have a single loop through `items` which gives us a time complexity of `O(n)`.
Then, we have a nested loop which iterates over `items` for each item in `items` resulting in a time complexity
of `O(n^2)`.

Combining these, you might initially say the time complexity of the function is `O(n + n^2)`.
However, according to the fourth rule of Big O notation, we drop the non-dominant term.
As `n` becomes very large, `n^2` will far outgrow `n`,
so we can drop the `n` and say the time complexity of the function is `O(n^2)`.

This rule is especially helpful when analyzing more complex algorithms that may involve several nested loops or
recursive calls. It simplifies the analysis by focusing on the dominant term,
which is the one that will most significantly impact the time complexity as the size of the input increases.
*/
//##############################################################################################################
/*
O(n!) --> Factorial Time
you are adding a loop for every element
you will not see this in the wild
*/
//##############################################################################################################

//Space Complexity
/*
Space complexity is a measure of how much auxiliary memory an algorithm takes up or how much extra space
is needed relative to the input size.

Auxiliary memory refers to space used by an algorithm that is not directly related to the size of the input.
For instance, if you're writing a function that takes in an array and creates a new array with the same elements,
the new array would be considered auxiliary space because it takes up extra memory that is not in the input array.

Similarly, if you're writing a function that takes in an array and creates a new array with the same elements,
the new array would be considered auxiliary space because it takes up extra memory that is not in the input array.
*/
//##############################################################################################################
