// // Syncronous coding

// console.log("one"); // all code is run line-by-line
// console.log("two");
// console.log("three");
// console.log("four");

// // Asynchronous coding

// console.log("one");
// console.log("two");

// // hear it dose't wait for this and run remaning code parallaly
// // setTimeout(()=>{
// //     console.log("i am wating for 2 sec ")
// // },2000);

// console.log("three");
// console.log("four");

// // ****************** Callback ******************

// function greet(name, func) {
//   console.log(`hellow ${name}`);
//   func();
// }

// function ask() {
//   console.log("how are you");
// }

// greet("devendra", ask);

// // *************Callback Hell ***************************

// function getdata(dataid, getnextdata) {
//   // 2s
//   setTimeout(() => {
//     console.log(`data is ${dataid}`);

//     if (getnextdata) {
//       getnextdata();
//     }
//   }, 2000);
// }

// getdata(1, () => {
//   getdata(2, () => {
//     getdata(3, () => {
//       getdata(4);
//     });
//   });
// });

// ************* Creating Promise *****************

// let check = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     setTimeout(() => {
//       console.log("done");
//       resolve("task completed");
//       console.log(check);
//     }, 1000);
//   } else {
//     reject("failed");
//   }
// });

// console.log(check);

// ********* consuming promices ******

// check.then((result) => {
//   console.log("anser is", result);
// });
// check.catch((error) => {
//   console.log("anser is", error);
// });

// *********** Promise chaning ****************

// function dotask(task) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${task} is complted`);
//       resolve();
//     }, 1000);
//   });
// }

// dotask("1st")
//   .then(() => dotask("2nd"))
//   .then(() => dotask("3rd"))
//   .then(() => dotask("4th"))
//   .then(() => {
//     console.log("All tasks done");
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


// function dotask() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(` is complted`);
//       resolve();
//     }, 1000);
//   });
// }

// dotask("1st")
//   .then(dotask)
//   .then(dotask)
//   .then(dotask)
//   .then(() => {
//     console.log("All tasks done");
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


//   ************ Async-Await *************

// function task(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("1 task done");
//         },2000);
//     });
// }

// async function run(){
//     console.log("2 before await");

//     let result = await task() ;

//     console.log(result);
//     console.log("3 after await");
// }

// console.log("start");
// run();
// console.log("end");


function getdata(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${id} is found`);
            resolve("done");
        },2000);
    });
}

async function getAllData(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
    console.log("all taskis complted");
}

getAllData();