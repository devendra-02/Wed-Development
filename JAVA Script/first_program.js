// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

let pera1 = document.createElement('p');
pera1.innerText = "this is red colour ";

document.querySelector("body").append(pera1);
pera1.style.color="red";

let head3 = document.createElement('h3');
head3.innerText = "this is blue colour ";

document.querySelector("body").append(head3);
head3.style.color="blue";

let div1 = document.createElement("div");

document.querySelector("body").append(div1);
div1.classList.add("dive");

let head1 = document.createElement('h1');
head1.innerText = "i am in div ";

div1.appendChild(head1);
head1.style.color="green";

let pera2 = document.createElement('p');
pera2.innerText = "this is red colour ";

div1.append(pera2);
pera2.style.color="purple";