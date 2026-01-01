let randomno = Math.floor(Math.random() * 100) + 1;
console.log(randomno);

let guess = prompt("guess the no between 1 to 10 ");

while (true) {
  if (guess == "quit") {
    console.log(
      "***********************************************************************"
    );
    console.log("Oops! you quit the game ");
    console.log("the no is ", randomno);
    break;
  } 
  
  if (guess == randomno) {
    console.log("congratulations! you are right the no is ", randomno);
    break;
  } else if (guess < randomno) {
    guess = prompt("Hint : your gess the smaller no");
  } else {
    guess = prompt("Hint : your gess the large no");
  }
}
