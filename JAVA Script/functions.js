function hellow() {
  console.log("hellow welcome to the function ");
}
hellow();

function rolladice() {
  let n = Math.floor(Math.random() * 6) + 1;
  console.log("you get the no ", n);
}
rolladice();


function info(name , age){
    console.log(`${name}'s age is ${age}.`);
}
info("dev , 20");