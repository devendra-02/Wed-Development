// event listner 
let h1 = document.querySelector("#hellow");
h1.ondblclick = function (){
    console.log("hellow everone ")
};

// event object = all detail aboout event  
let btn = document.querySelector(".btn");

btn.onclick = (e)=>{   // heare "e" represent event we write "evt" , "et" , "e" also
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}

// event listners 

let evtli = document.querySelector(".evtlistner") ;

evtli.addEventListener("click",()=>{
    console.log("listner was clicked - HANDLER 1");
});

evtli.addEventListener("click",(e)=>{
    console.log("listner was clicked  - HANDLER 2");
});

evtli.addEventListener("click",(e)=>{
    console.log("listner was clicked  - HANDLER 4");
});

//  remove event listner
let handler3 = ()=>{            // yha ye function ko alg se bnana jruri h 
  
    console.log("listner was clicked  - HANDLER 3")
}

evtli.addEventListener("click",handler3);

evtli.removeEventListener("click",handler3);

// Q1. Create a toggle butto that change the screen to dark mode when clicked & light mode when clicked again 

let mode = document.querySelector(".mode");
let body = document.querySelector("body");
let isdark = false ;

mode.classList.add("dark-mode");

mode.addEventListener("click" , ()=>{
    isdark = !isdark ;

    if(isdark){
        mode.innerText = "☀️ Light Mode" ;
        mode.classList.add("light-mode");
        body.classList.add("dark-mode");
    }else{
        mode.innerText = "🌙 Dark Mode";
        mode.classList.add("dark-mode");
        body.classList.add("light-mode");
    }
});