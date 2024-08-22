// primitive (call by value)
// 7 types : String, Numbers, Boolean, Null, Undefined, Symbol, BigInt
//string
let mystr = "nano";
// Numbers
const num = 100
//boolean
const num1 = true
//symbols
let id = Symbol('123')
let anotherId = Symbol ('123')
console.log(id == anotherId)
//BigInt
const bignum = 5364296479327347957364n
console.log(bignum);

//Referance type/ Non-primitive
// 3 types : Array, Objects(imp), functions 
// Arrays
const myarray = ["german","wow"];
//objects
let myobj = {
    name: "snehal",
    age: 24,
}
//functions
const myfun = function(){
    console.log("hello kitty");
}
console.log(typeof mystr);
console.log(typeof num);
console.log(typeof num1);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bignum);
console.log(typeof myarray);
console.log(typeof myobj);
console.log(typeof myfun);

let mynum = null
console.log(typeof mynum)