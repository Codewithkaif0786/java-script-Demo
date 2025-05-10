// # primitive

// 7 types: string, Number, Boolean, null, undefined, Symbol, BigInt




const Number = 5;
const num = 48.45;

const isLoged = false;
let temp = null;
let city;

const id = Symbol('123');
const newId = Symbol('123');

console.log(id === newId);

let num1 = 38394884489484n;


// Reference (Non primitive): Array, objects, functions

const heros = ["saktiman", "doga", "nagraj"];

let details = {
    name:"kaif",
    age:20,
    city:"chennai"

}

 function greet(name) {
    console.log("hello "+ name);
    
}
greet("kaif");


console.table([heros, details, greet]);
