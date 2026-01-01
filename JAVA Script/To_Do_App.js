let uls = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  let newtask = document.createElement("li");
  newtask.innerText = input.value;

  let delbutton = document.createElement("button");
  delbutton.innerText = "delete";
  delbutton.classList.add("delete");

  // Add delete functionality for this button
  delbutton.addEventListener("click", function () {
    console.log(delbutton.parentElement.firstChild.textContent,"task is deleted");
    newtask.remove(); // remove <li>
  });

  newtask.append(delbutton);
  uls.appendChild(newtask);
  input.value = "";
});

let deletebtn = document.querySelectorAll(".delete");

for (let btn of deletebtn) {
  btn.addEventListener("click", function () {
    console.log(btn.parentElement.firstChild.textContent,"task is deleted");
    btn.parentElement.remove();
  });
}

// let todo = [];
// let req = prompt("please enter a request ");

// while (true) {
//   if (req == "quit") {
//     console.log("you quit the app");
//     break;
//   }

//   else if (req == "list") {
//     console.log("**************************************");
//     console.log("list to do works ");
//     for(let i=0;i<todo.length;i++){
//         console.log(i , todo[i]) ;
//     }
//   }

//   else if (req == "add") {
//     let task = prompt("enter the task you want to add");
//     todo.push(task);
//     console.log("task is added ");
//   }

//   else if(req=="delete"){
//     let del = prompt("enter the index of task you want to delet ")
//     todo.splice(del,1) ;
//     console.log("task is deleted ");
//   }

//   else{
//     console.log("wrong request ");
//   }
//   req = prompt("enter the request");
// }
