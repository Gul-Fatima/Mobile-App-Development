console.log("Hello, TypeScript!");
// tsc  converts ts file in js

let name = "Alice";
console.log(`Hello, ${name}!`);



let names: string[] = ["Mario", "Luigi", "Peach","123"];
names.push("Bowser"); // OK
names.push("Yoshi"); // OK
// names.push(123); // Error: Type 'number' is not assignable to type 'string'
console.log(typeof names);

let items = [1, "two","true"];

let age: any = 30;
age = "thirty"; // OK (allowed because it's 'any')
age = true; // OK (allowed because it's 'any')
age = { year: 1990 }; // OK (allowed because it's 'any')
// Implicit Any
// Variables declared without a type or value become any:
let title; // Implicitly typed as 'any'
title = 25; // OK
title = { message: "hello" }; // OK
// Any in Arrays
let things: any[] = [];
things.push("hello"); // OK
things.push(true); // OK
things.push(123); // OK
things.push({ id: 1 }); // OK



// -------------------------------objects------------------------
let person: 
    { name: string; age: number ; gender: string; alive: boolean } = { name: "Alice", age: 30, gender: "female", alive: true }; 

console.log(person.name); // Output: Alice
console.log(person.age); // Output: 30
console.log(person.gender   ); // Output: female
console.log(person.alive); // Output: true  
console.log(person); // Output: true  

// ----------------------------functions------------------------
function greet(name: string): string {
    return `Hello, ${name}!`;
}
//add function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2,3));

function add_no_any_type(a: number, b: number): number {
    return a + b;
}
console.log(add_no_any_type(2,3));


