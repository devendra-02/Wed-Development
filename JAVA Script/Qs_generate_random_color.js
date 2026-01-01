let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let randomcolor = getrandomcolour();
  document.querySelector("h3").innerText = randomcolor;

  let divbox = document.querySelector("div");
  divbox.style.backgroundColor = randomcolor ;
  console.log("colour update ho gya");
});

function getrandomcolour() {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;

  let colour = `rgb(${red}, ${green}, ${blue})`;
  return colour;
}
