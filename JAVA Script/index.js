// let pencil = 10;

// console.log(pencil < 10);

// console.log("practice question for if else");

// let colour = "yellow";
// if(colour=="red"){
//     console.log("stop");
// }
// if(colour=="green"){
//     console.log("you can go");
// }
// if(colour=="yellow"){
//     console.log("weight for minut");
// }

// // methods

// let password = prompt("set your password");
// let newpassword =  password.trim();

// ********** Guess  the favorit movie ****************

let favorit = "avatar";
let guess = prompt("enter the movie name ");

while ((guess != favorit) && (guess != "quit")) {
    console.log("you enter a wrong name ")
  guess = prompt("please try again ");

}

if(guess==favorit){
    console.log("congratulation you guess the right movie");
}else{
    console.log("oop's you quit the game ")
}
