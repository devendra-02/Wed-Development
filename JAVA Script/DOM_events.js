let inp = document.querySelector("input");
inp.addEventListener("keydown", function () {
  console.log("key pressed ");
});
inp.addEventListener("keyup", function () {
  console.log("key released ");
});

let btn = document.querySelectorAll("button");
console.dir(btn);

for (btns of btn) {
  btns.addEventListener("mouseenter", event2);

  btns.addEventListener("dblclick", function () {
    console.log("do bar button dba ke ched ra h btn ko");
  });
  //   btns.addEventListener("click", event1);
}

function event1() {
  alert("ha bhai dba diya btn ");
}
function event2() {
  console.log("ched diya na btn ko");
}
