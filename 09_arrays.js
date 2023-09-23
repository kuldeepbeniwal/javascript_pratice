const myArr = [0, 1, 2, 3, 4, 5];
//console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4, 5);
// array methods
myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(9);
myArr.shift();

console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//slice
let myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log(myArr);

//splice
// let myn2 = myArr.splice(1, 4);
// console.log(myn2);
// console.log(myArr);

// const marvel_heros = ["thor", "ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(myn2);
// console.log(myArr);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_arr = [1, 2, 3, [123, 34, 5], [1, 2, 3, [1, 2, 3, [23, 44, 56]]]];
const real_another_arr = another_arr.flat(Infinity);

console.log(real_another_arr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Hitesh" }));

let a1 = 100;
let a = 111;
let a2 = 344;
console.log(Array.of(a, a1, a2));
