let myObeject = {
  js: "javascrpt",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObeject) {
  console.log(`${key} key of ${myObeject[key]}`);
}

let arr = [3, 4, 53, 3, 2, 43, 43, 435, 3];

for (const key in arr) {
  console.log(arr[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map){
//     console.log(key);
// }

// console.log(map['IN']);
