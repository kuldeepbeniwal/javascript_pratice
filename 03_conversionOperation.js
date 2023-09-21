let score = "33";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let a = "33abc";
console.log(typeof a);
let aInNumber = Number(a);
console.log(typeof aInNumber); //number
console.log(aInNumber); //NaN

let b = null;
console.log(typeof b);
let bInNumber = Number(b);
console.log(typeof bInNumber); //number
console.log(bInNumber); //0

let c = undefined;
console.log(typeof c);
let cInNumber = Number(c);
console.log(typeof cInNumber); //number
console.log(cInNumber); //NaN

// let isLoggedIn=1
// let isLoggedIn_InBoolean=Boolean(isLoggedIn )
// console.log(isLoggedIn_InBoolean)//true

// let isLoggedIn=""
// let isLoggedIn_InBoolean=Boolean(isLoggedIn )
// console.log(isLoggedIn_InBoolean)//false

let isLoggedIn = "hujhu";
let isLoggedIn_InBoolean = Boolean(isLoggedIn);
console.log(isLoggedIn_InBoolean); //true

let num = 33;
let str = String(num);
console.log(str); //33
console.log(typeof str); //string
