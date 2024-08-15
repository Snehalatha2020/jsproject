let score = true
console.log(typeof score) 
//for checking the type of variable
console.log(typeof (score) );
//sec method for checking type 
let valueInNum = Number(score)//converts string to number
console.log(typeof valueInNum);
console.log(valueInNum);//to check what is in the value in Number
//=>(conversion to number)
// "33" => 33
//"33aabb" => NaN(type of NaN is number)
// true => 1
//false => 0

let islogin = 1
let booleanlogin = Boolean(islogin)
console.log(booleanlogin);
//=>(conversion to boolean)
// 1 => true
// 0 => false
// ""(empty string) => false
// "value" => true

let somenum = 33
let randomnum = String(somenum)
console.log(randomnum);
console.log(typeof randomnum);


