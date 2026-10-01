"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --------------------Type inference -----------------/
let age = 5;
let person_name = "Alice";
console.log(person_name + " is " + age + " years old.");
// age = "Mario"  //can't specit it since it is a no 
// --------------------Type annotations -----------------/
// Explicitly declare a type using the colon syntax: variableName: type
// Type annotations catch errors before runtime. Instead of discovering bugs when your code runs,
// TypeScript tells you immediately if you're using the wrong type. This is more reliable than JavaScript
// where type errors only show up after the code executes.
let new_age = 5;
let new_name = "Bob";
console.log(new_name + " is " + new_age + " years old.");
let email;
email = "gulfatima@gmail.com";
console.log(email);
let something = null;
let anything = undefined;
console.log(something);
// something = 42; //can't bcz something is of type null
console.log(anything);
console.log(typeof age); //number
// --------------------array and objects -----------------/
let names = ["Mario", "Luigi", "Peach"];
names.push("Bowser"); // OK
// names.push(123); // Error: Type 'number' is not assignable to type 'string'
// Mixed Type Arrays (Union Types)
// When an array contains multiple types, TypeScript creates a union type:
let mixed = [1, true, "hello"]; // Inferred as (string | number | boolean)[]
mixed.push(42); // OK (number)
mixed.push(false); // OK (boolean)
mixed.push("world"); // OK (string)
// --------------------obj literals with type annotations -----------------/
let user = {
    name: "Alice",
    age: 30
};
console.log(user.name + " is " + user.age + " years old.");
user.firstName = "Luigi"; // OK (string)
user.age = 25; // OK (number)
user.name = 42; // Error: Type 'number' is not assignable to type 'string'
user.email = "mario@example.com"; // Error: 'email' does not exist on this type


// --------------------Type inference -----------------/
// --------------------Type inference -----------------/
// --------------------Type inference -----------------/
// --------------------Type inference -----------------/
//# sourceMappingURL=main.js.map