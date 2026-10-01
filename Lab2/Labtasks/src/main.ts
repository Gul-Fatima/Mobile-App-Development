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

let new_age: number = 5;
let new_name: string = "Bob";
console.log(new_name + " is " + new_age + " years old.");


let email:string;
email = "gulfatima@gmail.com";
console.log(email);

let something: null = null;
let anything: undefined = undefined;

console.log(something);
// something = 42; //can't bcz something is of type null


console.log(anything);
console.log(typeof age); //number


// --------------------array and objects -----------------/
let names: string[] = ["Mario", "Luigi", "Peach"];
names.push("Bowser"); // OK
// names.push(123); // Error: Type 'number' is not assignable to type 'string'

// Mixed Type Arrays (Union Types)
// When an array contains multiple types, TypeScript creates a union type:
let mixed = [1, true, "hello"]; // Inferred as (string | number | boolean)[]
mixed.push(42); // OK (number)
mixed.push(false); // OK (boolean)
mixed.push("world"); // OK (string)

// --------------------obj literals with type annotations -----------------/
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30
};
console.log(user.name + " is " + user.age + " years old.");

// -------------------- object Type inference -----------------/
// TypeScript infers object types from their initial structure:
let person = {
name: "Luigi",
score: 35
};
person.name = "Bowser"; // OK (string)
person.score = 40; // OK (number)
// person.name = 100; // Error: must be string
// person.id = 123; // Error: 'id' does not exist on this type

// --------------------accessing obj properties -----------------/

let player = {
name: "Mario",
level: 5,
active: true
};
const playerName: string = player.name; // OK, TypeScript knows this is string
// const playerLevel: string = player.level; // Error: type 'number' is not assignable to 'string'

// --------------------functions -----------------/
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

addTwoNumbers(5, 10); // OK, returns 15
// addTwoNumbers(5, "10"); // Error: Type 'string' is not assignable to type 'number'

// Arrow Function Syntax
const subtractNumbers = (a: number, b: number): number => {
    return a - b;
};

// --------------------Type inference in function -----------------/
const formatGreeting = (name: string, greeting: string) => {
return `${greeting} ${name}`; // Returns a string
};