
// function without parameters 

function hellow(){
    console.log("hellow devendra i am js ") ;
}

// function with perameters 

function add(a , b){
    console.log(`sum of two no is ${a+b}`) ;
    
}

// function with perameters and return 

function sub(a , b){
    console.log(`difference of two no is ${a-b}`) ;
    return (a-b) ;
    
}

// function call without argument 

hellow() ;

// function call with argument 

add(3,4) ;

// function call with argument and return 

let ans = sub(10,4) ;
console.log(ans);

// Arrow function 

let product = (a,b)=>{
    return (a*b) ;
}

console.log(product(9,3)) ;

// write a function to return a no of vowals in a string 

// let noofvowals = (st) =>{
//     let ans = 0 ;
//     for(let i=0;i<st.length;i++){
//         let ch = st[i] ;
//         if(ch==="a" ||ch==="e" ||ch==="i" ||ch==="o" ||ch==="u"){
//             ans++ ;
//         }
//     }    
//     return ans ;
// }

let noofvowals = (st) =>{
    let ans = 0 ;
    st = st.toLowerCase();

    for(let ch of st){
        if("aeiou".includes(ch)){
            ans++ ;
        }
    }
    console.log(st)  
    return ans ;
}

console.log(noofvowals("Devendra Gautam"));

// for-each loop 

let arr = [7,9,7,6,8,5,4,9] ;

arr.forEach(function num(val){
    console.log(val) ;
});

// ****** or *****

arr.forEach((val , index , arr) =>{
    console.log(`no at index ${index} is ${val} in array ${arr}`);
});

// print the square of each value of an array 

let num = [1,2,3,4,5,6];

// num.forEach((val) => {
//     console.log(`square of ${val} is ${val*val}`);
// });

// ****** or *****

let calcsqr = (val) => {
    console.log(`square of ${val} is ${val*val}`);
}
num.forEach(calcsqr);


//  map method 

let newnum =num.map((val) => {
    return val+val ;
});
console.log(newnum);

// filter meethod - find no divisible by 2 

let evenval = num.filter((val) => {
    return val%2===0 ;
});
console.log(`even values are ${evenval}`);

// find the mark which are 90+

let marks = [97,64,32,49,99,96,86];

let _90marks = marks.filter((val) => {
    return val>90 ;
}) ;
console.log(_90marks);

// find the product and sum of 1 to n numbers

let n = prompt("enter a no");

let x = [];
for(let i=1;i<=n;i++){
    x[i-1] = i ;
}

let sum = x.reduce((pre,val)=>{
    return pre+val ;
})
console.log(`sum of an arr is = ${sum}`) ;

let produc = x.reduce((pre,val)=>{
    return pre*val ;
})
console.log(`sum of an arr is = ${produc}`) ;