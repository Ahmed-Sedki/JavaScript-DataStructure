// In JavaScript, ES6 classes are a syntactic sugar over the existing prototype-based inheritance and constructor functions,
// making it easier and more intuitive to create objects and deal with inheritance.

// Let's break this down:

// ## Classes
// A "class" is a blueprint for creating objects. It encapsulates data and the functions that manipulate that data. Here's a simple example:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// In this example, `Animal` is a class with a constructor (a special method that's used to create and initialize an object)
// and a method named `speak`.

// You can create an instance of a class using the `new` keyword:

let animal = new Animal('Simba');
animal.speak(); // Simba makes a noise.

// ## Inheritance
// Inheritance is a principle of object-oriented programming where a class can inherit properties and methods from another class.
// In ES6, we use the `extends` keyword to implement inheritance:

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// In this example, `Dog` is a subclass (or child class) of `Animal` and it inherits all properties and methods of `Animal`,
// but it also defines its own `speak` method.

// When we create a `Dog` instance and call `speak`, the `speak` method of `Dog` class will be used,
// because it's defined in the `Dog` class which is closer in the prototype chain:

let dog = new Dog('Rex');
dog.speak(); // Rex barks.

// ## Super Keyword
// The `super` keyword is used to call functions on an object's parent. 

// In the context of classes, `super` can be used in two ways:

// 1. Within the `constructor` method, `super` is used to call the parent class's constructor.
// 2. Within an overridden method, `super` is used to call the parent class's version of the method.

// Here's an example:

class Cat extends Animal {
    constructor(name, livesLeft = 9) {
        super(name); // call the super class constructor and pass in the name parameter
        this.livesLeft = livesLeft;
    }

    speak() {
        super.speak(); // Call the parent's speak method
        console.log(`${this.name} meows.`);
    }
}

let cat = new Cat('Mia');
cat.speak(); 
// Mia makes a noise.
// Mia meows.

// In this example, the `Cat` class extends the `Animal` class, calls the parent class's `constructor` and `speak` method using `super`,
// and then adds its own properties and methods.

// To create a mental map, think of classes as a blueprint or a plan for an object.
// This plan defines what the object will contain in terms of data and capabilities. 

// Inheritance allows us to create a new class based on an existing class, inheriting its properties and methods.
// This is like taking a general plan for a building (the parent class),
// and adding specific features for a specific type of building (the child class).

// Finally, the `super` keyword is like a reference to the original plan, allowing us to access the original design even as we're adding to it.
