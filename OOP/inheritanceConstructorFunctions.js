// In JavaScript, inheritance allows you to create a class as a child of another class.
// The child class inherits all the parent's properties and methods.
// This is particularly useful when you have objects that share common characteristics, and you want to reuse code.

// JavaScript uses prototypal inheritance, but with ES6 and later, we can use `class` and `extends` keywords to write JavaScript classes that
// behave like classes in classical object-oriented programming languages.

// However, before ES6, we had to use constructor functions and the prototype property to create a kind of class and inheritance system.
// Here's how you would do that:

// Creating a Parent Constructor Function:

// First, you create a constructor function for the parent class.
// A constructor function is simply a function that is used with the `new` keyword to create new objects.

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + ' eats.');
};

// In this example, `Animal` is a constructor function.
// When you call `new Animal('Dog')`, it creates a new object with a `name` property and a prototype that points to `Animal.prototype`.

// Creating a Child Constructor Function:

// To create a child class that inherits from `Animal`, you would create another constructor function. You would then make the child's `prototype` an instance of the parent class. Finally, you would reset the child's constructor property so it points to the child's constructor function, not the parent's.

function Dog(name) {
  Animal.call(this, name);  // Call parent constructor with correct `this`
}

Dog.prototype = Object.create(Animal.prototype);  // Create a new object that has the prototype of Animal
Dog.prototype.constructor = Dog;  // Reset the constructor to Dog

Dog.prototype.bark = function() {
  console.log(this.name + ' barks.');
};

// In this example, `Dog` is a child class of `Animal`.
// It inherits the `name` property and the `eat` method from `Animal`,
// and it also has its own `bark` method. When you call `new Dog('Rover')`,
// it creates a new object with a `name` property and a prototype that points to `Dog.prototype`.

// You can now create instances of these classes and use their methods:

let dog = new Dog('Rover');
dog.eat();  // Outputs: "Rover eats."
dog.bark();  // Outputs: "Rover barks."

// This is the old way of creating classes and implementing inheritance in JavaScript.
// It's a bit clunky compared to the ES6 `class` and `extends` keywords, but it's still important to understand because you might encounter it
// in older code.

//Extended ersion of the code above 

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(this.name + ' eats.');
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);  // Dog's prototype is now an instance of Animal
Dog.prototype.constructor = Dog;  // Reset the constructor to Dog

Dog.prototype.bark = function() {
  console.log(this.name + ' barks.');
};

dog = new Dog('Rover');

console.log(dog);  // Outputs: Dog { name: 'Rover' }
console.log(dog.__proto__);  // Outputs: Animal {}
console.log(dog.__proto__.__proto__);  // Outputs: { eat: [Function] }

dog.eat();  // Outputs: "Rover eats."
dog.bark();  // Outputs: "Rover barks."

// The `__proto__` property is a reference to the prototype of the object. 
// When `dog.eat()` is called, JavaScript first looks for a property called `eat` on the `dog` object itself.
// If it doesn't find one, it looks at the prototype of `dog`, which is `Dog.prototype`.
// It doesn't find an `eat` method there either, so it looks at the prototype of `Dog.prototype`,
// which is `Animal.prototype`, and there it finds the `eat` method.
// So the `dog` object can access the `eat` method because it's in its prototype chain: `dog` -> `Dog.prototype` -> `Animal.prototype`.
// The `bark` method, on the other hand, is found directly on `Dog.prototype`, so when `dog.bark()` is called,
// JavaScript finds it on the first prototype it checks.
