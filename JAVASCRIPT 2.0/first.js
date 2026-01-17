console.log("hellow javascript ");
console.log("my name is devendra gautam ")
console.log("i love java svript ");

// Types of Variables

var name = "devendra" ;
console.log(name) ;

let x = 10 ;
console.log(x);
x = 20 ;

const z = 30;
 console.log(z);
 
// Data types in Js.

// 1. Primitive data types 

// Number
let a = 10;
// String
let b = "Hello";
// Boolean
let c = true;
// Undefined
let d;
// Null
let e = null;
// BigInt
let big = 123456789012345678901234567890n;
// Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false


//  2. Non-Primitive (Reference) Data Types

// Objects - Key value pairs

const student = {
    name : "Devendra gautam" ,
    age : 23 ,
    Branch : "AI&DS"
}
console.log(student);

console.log(student["age"]);
console.log(student.Branch);

student.age = student.age+1 ;  // changes in existing data ;
console.log(student.age);


// Array - store multple value 

const branchs = [ "AI&DS" , "CS" ,"IT" , "ECE" ,"EE" , "ME" , 23 ];
console.log(branchs);


// function - block of code 

function  dev() {
    console.log("my name is devendra gautam ");
}

dev();

function sayHi() {
  alert("Hi");
}