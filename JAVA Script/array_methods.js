let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8];

let studentobject = [
  { name: "dev", age: 20 },
  { name: "sudershan", age: 21 },
  { name: "raju", age: 22 },
  { name: "virendra", age: 19 },
];

console.log("******** for each method ********");
console.log("");

function print(ele) {
  console.log(ele, "-");
}
studentobject.forEach(print);

//********* or ***********

arr.forEach(function (ele) {
  console.log(ele);
});

console.log("");
console.log("******** Map method ********");
console.log("");

let double = arr.map(function (ele) {
  return ele * 2;
});
console.log(double);

console.log("");
console.log("******** filter method ********");
console.log("");

console.log("even no in arr");

// let evenno = arr.filter(function (ele) {
//   return ele % 2 == 0;
// });
// console.log(evenno)

//********* or **********

let evenno = arr.filter((ele) => ele % 2 == 0);
console.log(evenno);

console.log("");
console.log("******** every method ********");
console.log("");

let no = [1, 3, 5, 7, 8];
let check = no.every((ele) => ele % 2 != 0);
console.log("is every no is odd no ", check);

console.log("");
console.log("******** some method ********");
console.log("");

let checkeven = no.some((ele) => ele % 2 == 0);
console.log("is there even no in it ", checkeven);

console.log("");
console.log("******** reduce method ******** ");
console.log("");

let sum = no.reduce((sum, ele) => sum + ele);
console.log("sum of all no is ", sum);

let ranno = [24, 87, 53, 16, 92, 48, 99, 63, 35, 59];
let largestno = ranno.reduce((max, current) => {
  if (max > current) {
    return max;
  } else {
    return current;
  }
});
console.log("latgest no is ", largestno);

console.log("");
console.log("******** spred method ******** ");
console.log("");

console.log("spred a no array ");
console.log(...no);
let minimum = Math.min(...ranno);
console.log("minimum no is ", minimum);

let name = "devendra";
let namespred = [...name];
console.log("spred a name \n", namespred);

console.log("");
console.log("******** spred method with object litrals ******** ");
console.log("");

// let studentobject  = upr difine kr rakha h

let mydata = { name: "dev", age: 20 } ;
  let datacopy  = {...mydata,id:32};
console.log(datacopy);

let studentycopy = { ...studentobject, id: 3239 };
console.log(studentycopy);