// `Object.create` is a method that is used to create a new object, using an existing object as the prototype of the newly created object.
// In other words, the new object inherits all the properties and methods from the existing one.
// This is another way of achieving inheritance in JavaScript.

// Let's look at a simple example:

let animal = {
    name: 'Animal',
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

let dog = Object.create(animal);
dog.name = 'Dog';
dog.speak = function() {
    console.log(`${this.name} barks.`);
}

dog.speak(); // Dog barks.

// In this example, we first define an object `animal` with properties and methods.
// Then, we use `Object.create(animal)` to create a new object `dog` that inherits from `animal`.
// After that, we can override or add properties and methods on the `dog` object.

// While this approach achieves the same outcome as using classes, it provides a different way of thinking about objects and inheritance,
// one that's more aligned with JavaScript's identity as a prototype-based language.

// ## Mind Map

// Think about the process of using `Object.create` for inheritance like this:

// 1. Existing Object: This is your starting point.
//     It's like an existing tool or machine that performs a basic set of functions.

// 2. `Object.create`: This is like the process of duplication or cloning.
//     You're creating a new machine that's a copy of the existing one.
//     But because it's a new machine, you can modify it without affecting the original.

// 3. Override/Add Properties and Methods: This is like customization.
//     You can add new features to your cloned machine, or change existing features to behave differently.
//     This new machine now has all the capabilities of the original, plus any new features you've added or changes you've made.

// ## Summary

// In this article, we've looked at how to use `Object.create` to achieve inheritance in JavaScript.
// We've also compared this approach to using ES6 classes for inheritance.

// ## Further Reading

// [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
// [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
// [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
// [JavaScript Classes: The Definitive Guide](https://www.sitepoint.com/javascript-classes-definitive-guide/)