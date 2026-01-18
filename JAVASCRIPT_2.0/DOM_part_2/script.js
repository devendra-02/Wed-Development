let div = document.querySelector("#box");
console.log(div);

// to get the atttribute value 
let atrib = div.getAttribute("id");
console.log(atrib);

let atri = div.getAttribute("class");
console.log(atri);

// 
let pera = document.querySelector(".para");
console.log(pera);

let pera_att = pera.getAttribute("id");
console.log(pera_att);

// to set the attribute value
pera.setAttribute("id","ab shi h na ") ;

let newId = pera.getAttribute("id");
console.log(newId);

// to get the the style of any node 
let style = div.style ;
console.log(style);

div.style.backgroundColor = "rgb(255, 217, 0)" ;
div.style.fontSize = "22px";


// to insert new element 
// it is two stape process

//  1. create element 
let btn1 = document.createElement("button") ;
btn1.innerText="button 1";

//  2. add the element 
div = document.querySelector("#box");
pera = document.querySelector(".para");
let div2 = document.querySelector("#box2");

//  at the end of the node (Inside)
div.append(btn1);

//  at the start of the node (Inside)
let btn2 = document.createElement("button") ;
btn2.innerText="button 2";
pera.prepend(btn2);

// add efore the node (Outside)
let btn3 = document.createElement("button") ;
btn3.innerText="button 3";
box2.before(btn3);

// add after the node (Outside)
let btn4 = document.createElement("button") ;
btn4.innerText="button 4";
box2.after(btn4);


//  to Delete the Element 
let lastelement = document.querySelector("#box3");
lastelement.remove();


// Q1. create a new nutton element . give the text "click me" 
//     background coloer of red & text color of white .
//     insert the butoon as the first element inside the body teg 

let button = document.createElement("button");
button.innerText = "1st Question";  // inner text
button.style.backgroundColor = "red";  // background color
button.style.color ="white";  // text color

document.querySelector("body").prepend(button);

// Qs. Create a <p> tag in HTML, give it a class("question2") & some styling.
// Now create a new class("newclass")& add  some styling in "newclass" in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

let q2 = document.querySelector(".qu2");
console.log(q2)

// q2.setAttribute("class","newclass"); //ye overwriet kr dega purani class ko jo css me bnai thi 

// /so we use classList to sppend new class
console.log(`old class are :- ${q2.classList}`);

q2.classList.add("newclass");
console.log(`new class are :- ${q2.classList}`);