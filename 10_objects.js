const sym = Symbol("key1");

const jsuser = {
  name: "Kuldeep",
  fullname: "Kuldeep Beniwal",
  [sym]: "myKeyOne",

  age: 18,
  location: "mathura",
  email: "kuldeepbeniwal220@gmail.com",
  lastLoggedInDays: ["monday", "Tuesday"],
};
console.log(jsuser.email);
//Object.freeze(jsuser)

jsuser.greeting = function () {
  console.log("Hello js user");
};
jsuser.greetingTwo = function () {
  console.log(`Hello js user ${this.name}`);
};

jsuser.greetingTwo();
