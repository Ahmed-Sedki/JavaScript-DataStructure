// In JavaScript, setter and getter methods allow you to define object properties that are backed by user-defined functions.
// These are helpful when you want to have additional actions take place when properties are set or fetched.
// To understand this, we need to delve into JavaScript objects a bit.
// When you define an object in JavaScript, you can specify properties directly, like so:

let obj = {
  property: 'value'
};

// But JavaScript also allows you to define properties in a slightly different way, using the `get` and `set` keywords.
// These allow you to define functions that will be run when a property is accessed (get) or set. Here's an example:

obj = {
  _property: 'value',
  get property() {
    console.log("Getting property");
    return this._property;
  },
  set property(value) {
    console.log("Setting property to " + value);
    this._property = value;
  }
};

// In this example, `obj.property` is now backed by a getter and a setter.
// When you access `obj.property`, it will log "Getting property" to the console and then return the value of `_property`.
// When you set `obj.property = 'new value'`, it will log "Setting property to new value" and then set `_property` to `'new value'`.
// The underscore (`_`) before `_property` is a common convention to indicate that it's intended to be a private property, i.e.,
// it should not be accessed directly. Instead, the getter and setter should be used.
// This is not enforced by the language but is a common practice to communicate intent to other developers.
// Please note that setters and getters are part of ES5, and all modern browsers support them.
// However, they are not supported in older versions of Internet Explorer (IE8 and below).

// Let's use a `BankAccount` object as an example.
// When you deposit or withdraw money from the bank account,
// you might want to validate that the amount is not negative and perhaps also keep a record of all transactions.
// Here's how you might define this `BankAccount` object using getters and setters:

let BankAccount = {
  _balance: 0,
  _transactions: [],

  get balance() {
    return this._balance;
  },

  set balance(amount) {
    if (typeof amount === 'number' && amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Invalid deposit/withdrawal amount.");
    }
  },

  deposit(amount) {
    this.balance += amount;
    this._transactions.push({type: 'deposit', amount: amount});
  },

  withdraw(amount) {
    if (amount <= this._balance) {
      this.balance -= amount;
      this._transactions.push({type: 'withdraw', amount: amount});
    } else {
      console.log("Insufficient balance.");
    }
  },

  get transactions() {
    return this._transactions;
  }
};

BankAccount.deposit(100);
BankAccount.withdraw(50);
console.log(BankAccount.balance); // Outputs: 50
console.log(BankAccount.transactions); 

// In this example, the `balance` property uses a getter to allow access to the current balance and a setter to enforce validation rules.
// The setter ensures that only non-negative numbers are allowed when setting the balance.
// The `transactions` property uses a getter to allow access to the transactions array,
// but there is no setter as we only want to add transactions through the `deposit` and `withdraw` methods, not directly.
//##########################################################################################################################################

// In JavaScript ES6 and later, you can also use getters and setters in classes.
// The syntax is slightly different from objects, but the idea is the same.
// Consider a `Person` class where we want to ensure that the `age` of the person is always a non-negative number.
// We can use a getter to access the `age`, and a setter to validate the input before setting the `age`.
// Here's how you might do that:

class Person {
  constructor(name) {
    this.name = name;
    this._age = 0;  // Age will be set to 0 by default
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value === 'number' && value >= 0) {
      this._age = value;
    } else {
      console.log("Invalid age. Age must be a non-negative number.");
    }
  }
}

let john = new Person('John');
john.age = 30;
console.log(john.age);  // Outputs: 30

john.age = -5;  // Outputs: "Invalid age. Age must be a non-negative number."
console.log(john.age);  // Outputs: 30, the age is still 30 as the setter rejected the negative value


// In this example, when you set `john.age = 30`, it calls the `age` setter with `30` as an argument.
// The setter checks that the value is a non-negative number, and if it is, sets `_age` to `30`.
// If you try to set `john.age = -5`, the setter sees that `-5` is a negative number and does not change `_age`, instead logging an error message.
// When you fetch `john.age`, it calls the `age` getter, which simply returns the value of `_age`.
//##########################################################################################################################################
// Here is an exercise for you to practice, let's set up a basic exercise with a `Student` class.

// **Exercise:**

// 1. Define a `Student` class.
// 2. The `Student` class should have a private property `_grades` which is an array.
// 3. The `Student` class should have a constructor that accepts a `name` and sets `_grades` to an empty array.
// 4. Implement a `get` method `grades` that returns the `_grades` array.
// 5. Implement a `set` method `grades` that accepts a value. This setter should check if the value is an integer between 1 and 100 (inclusive), and if it is, add it to the `_grades` array. If the value is not an integer or not in the correct range, it should log "Invalid grade."
// 6. Implement a `get` method `averageGrade` that calculates and returns the average of the `_grades` array. If the `_grades` array is empty, it should return 0.

// **Solution:**

class Student{
    constructor(name){
        this.name = name
        this._grades = []
    }
    get grades(){
        return this._grades
    }
    set grades(value){
        if(Number.isInteger(value) && value >= 0 && value <= 100) this._grades.push(value)
        else console.log("Invalid grade");
    }
    get averageGrade(){
        let a = 0
        for (let index = 0; index < this._grades.length; index++) {
            a += this._grades[index]
        }
        return a/this._grades.length
    }
}
// Example usage
let student = new Student('Alice');
student.grades = 80;
student.grades = 90;
student.grades = 70;

console.log(student.grades);  // Outputs: [80, 90, 70]
console.log(student.averageGrade);  // Outputs: 80
student.grades = 110;  // Outputs: "Invalid grade."
console.log(student.grades);  // Outputs: [80, 90, 70] (unchanged)