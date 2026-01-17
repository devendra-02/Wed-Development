
let a = 50;
let b = 2 ;

// Arithmatic operator
console.log("a = " ,a ," , b = ", b) ;
console.log("a + b = " , a+b) ;
console.log("a - b = " , a-b) ;
console.log("a * b = " , a*b) ;
console.log("a / b = " , a/b) ;
console.log("a % b = " , a%b) ;
console.log("a ** b = " , a**b) ;

// Urary operator 
console.log("a++ = ", a++);
console.log("++a = ", ++a);



// Conditionals in JavaScript

// if 

let mod = "light" ;
let colour ;

if(mod==="dark"){
    colour = "black" ;
}
if(mod==="light"){
    colour = "white" ;
}

console.log("colour is" , colour) ;

// if-else

    if(mod==="dark"){
    colour = "black" ;
}else{
    colour = "white" ;
}
console.log("colour is" , colour) ;

// else-if

console.log("a = " ,a ," , b = ", b) ;

if (a > b) {
  console.log("a is greater");
} else if (a == b) {
  console.log("both are equal");
} else {
  console.log("b is greater");
}

// Switch-case

let day = 2 ;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid day ");
}

// Ternary 

let result = (a>b) ? "a is greater" : "b is greater" ;
console.log(result );

let num = prompt("enter a no ");

if(num%5===0){
    console.log(num , " is divisible by 5");
}else{
    console.log(num , " is not divisible by 5");
}

let score = prompt("enter a no between 0 to 100 ");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
} else {
  grade = "Invalid Score";
}

console.log("Grade:", grade);
