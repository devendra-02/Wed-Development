let arr = [7,9,7,6];

let dev = {
    name : "devendra gautam" ,
    rollno : 32 ,
    branch : "AI&DS" ,
    year : "4th"
}

// Loops in java script 
 
// 🔹 1. for loop (most common)

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log();
console.log("next code");

// 🔹 2. while loop

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log();
console.log("next code");

// 🔹 3. do...while loop

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log();
console.log("next code");

// 🔹 4. break and continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop
  console.log(i);
}
console.log();
console.log("next code");

// 🔹 5. for-of - to iterate over an arr

for(let val of arr){
    console.log(val) ;
}
console.log();
console.log("next code");

// 🔹 6. for-in - to iterate over the object 

for(let key in dev){
    console.log(key,":",dev[key]) 
}

let student = {
  1: "Dev",              // String
  2: 22,                  // Number
  3: true,           // Boolean
  4: [85, 90, 78],      // Array                // Object
  5 : {
    6: "Kota",
  7: "Rajasthan"
  }
  }

  for(let i=1;i<8;i++){
    console.log(i,student[i]);
  }
console.log();
console.log("next code");



// let gamenum = 10 ;
// let num =  prompt("enter a no") ;;

// while(num != gamenum){
//     num =  prompt(" u enter an wrong no") ;
    
// }
//     console.log("u are right") ;


// Strings

let str = "devendra gautam" ;

//  length 
let n = str.length ;
console.log(n) ;

// indexis
let c = str[5] ;
console.log(c) ;


// Templet literals

let lastname = `gautam`
let name = `  devendra ${lastname}` ;

console.log(name) ;

let a = 2 ;
let b = 4 ;

let sum = `sum of ${a} and ${b} is ${a+b}` ;
console.log(sum);

//  String methods

// toUpperCase
let d = name.toUpperCase() ;
console.log(d) ;

// toLowercase
let e = name.toLowerCase() ;
console.log(e) ;

let f = name.trim();
console.log(f) ;

// slice
let g = f.slice(1,5) ;
console.log(g) ; 

// concatination 

let h = "hitesh " ;
let j = "singh chauhan" ;

h = h.concat(j) ;
console.log(h) ;

h = h.concat(" jhdsfahg") ;
console.log(h) ;

// replace 

h = h.replace("jhdsfahg","");
console.log(h) ;

let fullname = prompt("enter your full name ");
let k = fullname.length ;
fullname = "@"+fullname+k ;

console.log(`your user name is ${fullname}`) ;