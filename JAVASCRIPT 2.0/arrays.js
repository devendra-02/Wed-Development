let arr = [10,23,45, "Dev", true, [1,2], {id:1}];
console.log(arr);

console.log(`element at index 2 is ${arr[2]}`);

arr[2] = "hellow" ;
console.log("index 2 is updated ");
console.log(arr);

// loop over arr 
console.log("loop over index");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// ******  or  ***********

console.log("usinf for-of loop");
for(let val of arr){
    console.log(val);
}

// find the average of total marks 

let marks = [85,97,44,37,76,60] ;
console.log("averagr of marks is ");
let sum = 0 ;
for(let val of marks){
    sum += val ;
}
let average = sum/marks.length ;
console.log(average);

// change the arr by subtracting 10% from all value 

let price  = [250 ,645,300,900,50] ;
console.log(price);
for(let val in price ){
    let x = (price[val]/100)*10 ;
    price[val] = price[val] - x;
}
console.log(price);