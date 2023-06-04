const Person = function (name, age) {
    this.name = name;
    this.age = age;

    //Never do this
    // this.greet = function () {
    //     console.log(`Hello, my name is ${this.name}`);
    // }
    //because it will be created for every instance of Person
}

const Ahmed = new Person('Ahmed', 23);
console.log(Ahmed instanceof Person)
console.log(Ahmed);

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
// In JavaScript, a prototype is a mechanism by which objects inherit properties from other objects.
// JavaScript uses prototypes to build and extend objects, methods, and properties.
// In essence, JavaScript is a prototype-based language that utilizes a prototype chain.

// When an object is created in JavaScript,a prototype object is associated with it by default.
// This prototype object is essentially a template containing properties and methods that the object can access.
// It’s a powerful feature in JavaScript because it allows you to add new methods or properties to all instances of an object in a single location,
// promoting code reusability and efficiency.

// Let's take a look at an example:

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }

// var person1 = new Person("John", "Doe");

// console.log(person1.fullName()); // Outputs: "John Doe"


// In the above example, `Person` is a constructor function. A new object `person1` is created using the `Person` constructor.
// By default, `person1` inherits properties and methods from the `Person.prototype`.

// We added a `fullName` method to the `Person` prototype.
// Now, `fullName` is accessible to all objects created from `Person`, such as `person1`.
// Thus when we call `person1.fullName()`, we see "John Doe".

// Remember that in JavaScript almost everything is an object, and each object when created either through a constructor or a literal,
// is linked to a prototype object from where it can inherit properties. All objects created from object literals are linked to `Object.prototype`,
// an object that comes standard with JavaScript.
Ahmed.greet();
console.log(Ahmed.hasOwnProperty('greet'))
console.log(Ahmed.hasOwnProperty('name'))
console.log(Ahmed.__proto__)
console.log(Ahmed.__proto__ === Person.prototype)
console.log(Ahmed.__proto__.__proto__)
console.log(Ahmed.__proto__.__proto__.__proto__)
console.log(Person.prototype.__proto__ === Object.prototype)
console.log(Person.prototype.isPrototypeOf(Ahmed))
//protoypeOfLinkedObject think of it like this

// Assigning properties to prototypes is similar to assigning methods.
// It can be done either inside the constructor or outside it, using the `prototype` property.
// Here is an example where we assign a property to a prototype:

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }

// Car.prototype.color = "black";

// var myCar = new Car("Toyota", "Corolla");

// console.log(myCar.color); // Outputs: "black"


// In the above example, we added a `color` property to the `Car` prototype.
// Now, `color` is accessible to all objects created from `Car`, such as `myCar`. Thus when we access `myCar.color`, it returns "black".
// Note that properties added to the prototype are shared among all instances of the constructor function.
// That means if one instance changes the value, that new value will be reflected in all other instances.

// For example:
// var car1 = new Car("Honda", "Civic");
// var car2 = new Car("Ford", "Mustang");

// console.log(car1.color); // Outputs: "black"
// console.log(car2.color); // Outputs: "black"

// Car.prototype.color = "red";

// console.log(car1.color); // Outputs: "red"
// console.log(car2.color); // Outputs: "red"

// In the above example, when we change the `color` property in the prototype, it gets changed in all the instances.
// This characteristic makes prototype properties suitable for values that should be shared across instances.
// However, unique values that differ from instance to instance should be assigned inside the constructor function.