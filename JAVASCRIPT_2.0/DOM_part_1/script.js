let h = document.getElementById("heading") ;
console.dir(h) ;

let s = document.getElementsByClassName("same");
console.dir(s) ;
console.log(s);

let d = document.getElementsByTagName("p") ;
console.dir(d) ;


let q = document.querySelector("p" );
console.dir(q);

let qa = document.querySelectorAll("#heading" );
console.dir(qa);


// to print all children 
console.log(document.querySelector("div").children);

// first child 
console.log(document.querySelector("div").firstElementChild);

// last child 
console.log(document.querySelector("div").lastElementChild);

// Nth child 
console.log(document.querySelector("div").children[2]);

// inner text
let iner = document.querySelector("div").innerText;
console.log(`inner text ${iner} ends here`);

// inner HTML
let dive = document.querySelector("#fruits").innerHTML ;
console.log("dive is" , dive) ;

// Q1. Create an H2 heading element with the text “Hello JavaScript” and 
//     append “from Apna College students” to this text using JavaScript. 

let question1 = document.querySelector("#question1") ;
console.log(question1.innerText);

question1.innerText += " by Devendra Gautam ";
console.log(question1.innerText);

// Q2. Create three div elements with a common class name “box”. Access them 
//     and add some unique text to each of them.

let box = document.querySelectorAll(".box");
console.log(box);

let u = 1 ;
for(box of box){
    box.innerText = `unique value ${u}`;
    console.log(box.innerText) ;
    u++ ;
}

//***************  or  **************/

// box[0].innerText = "1s box ";

// box[1].innerText = "2s box ";

// box[2].innerText = "3s box ";