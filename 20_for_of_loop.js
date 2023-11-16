const num = [1, 2, 3, 4, 5];

for (const i of num) {
  console.log(i);
}

const greetings = "hello world!";

for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  console.log(greet);
}

const map = new Map();
map.set("IN", "India");
map.set("IN", "India");
map.set("fr", "France");

// console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}
let myObeject = {
  game1: "NFS",
  game2: "Contra",
};

// for (const key of myObeject) {
//     console.log(key)

// }//myObeject is not iterable
