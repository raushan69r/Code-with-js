// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 234874884434335435n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Raushan",
    age: 18
}

const myFunction = function(){
    console.log("Herro word");
}

console.log(typeof myFunction);




