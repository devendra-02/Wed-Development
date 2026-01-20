// Class Syntax

class person {
  constructor(name, age) {
    // "constructor" is fix ise change ni kr skte
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hellow my name is ${this.name}`);
  }
}

//  creating a object

let p1 = new person("devendra", 21);
let p2 = new person("hitesh", 20);

// using the object

p1.greet();
p2.greet();

// object without class

let student = {
  name: "dev",
  age: 21,
  study() {
    console.log("studing.....");
  },
};
console.log(`${student.name} is good person `);
student.study();

// Prototype

const employee = {
  calctax() {
    console.log("tax is 10%");
  },
};

const karan = {
  sallary: 20000,
  intrest() {
    console.log("intrest is 5%");
  },
};

const arjun = {
  sallary: 35500,
  calctax() {
    console.log("tax is 20%");
  },
};

// karan ke ander employee ke preoperty aa gi
karan.__proto__ = employee;
// arjun ke ander employee ke preoperty aa gi
arjun.__proto__ = employee;

console.log(karan);
karan.calctax();
karan.intrest();

// calctax() dono me h arjun and employee me to isme arjun ka run hoga
// means khud ka proto type run hoga - "agr isme nhi hota to employee me search krta "
arjun.calctax();

// class

class car {
  constructor(a , b) {
    this.name = a;
    this.model = b;
  }
  start() {
    console.log(`${this.name} is starting`);
  }
  stop() {
    console.log("car is stopd");
  }
}

let car1 = new car("tata" , "punch");
car1.start();
console.log(car1.name);
console.log(car1.model);


// ************* INHERITANCE ******************

class parent{
    constructor(cast){
        this.cast = cast ;
    }
    religion(){
        console.log(`i am ${this.cast}`);
    }
}

class chiled extends parent{
    constructor( cast,name){
        super(cast)
        this.name = name ;
    }
    greet(){
        console.log(`hellow ${this.name}`);
    }
}

let c1 = new chiled("Hindu" , "devendra");
c1.religion();
c1.greet();
console.log(c1.cast);
console.log(c1.name);

// Q1. you are creating a website for your college. 
// create a class user with 2 properties name & email . 
// it also has a method called viewdata() that alow user to view wensite data .

let data = "hellow i am data ";
class user{
    constructor(name , email){
        this.name = name ;
        this.email = email ;
    }

    viewdata(){
        console.log(`the data is = "${data}"`);
    }
    details(){
        console.log(`your name is "${this.name}" and email is "${this.email}"`);
    }
}

let st1 = new user("devendra" , "gautamdev@gmail.com");
st1.details();
st1.viewdata();


// Q2. create class called Admin which inharit from user . 
// add a new maethod called editdata toadmin that allow it to edit website data . 

class admin extends user{
    editdata(){
        data = "i am updated"
        console.log(`updated data is = ${data} `);
    }
}

let admin1 = new admin();
admin1.editdata();
admin1.viewdata();
admin1.details();