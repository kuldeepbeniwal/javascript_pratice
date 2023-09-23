// function sayMyName(){
//     console.log("Kuldeep");
// }
// sayMyName()
function adTwoNumber(number1, number2) {
  return number1 + number2;
}
let sum = adTwoNumber(2, 3);
console.log(sum);

function loginUserMaessage(username) {
  if (!username) {
    console.log("Please enter a useername");
    return;
  }
  console.log(`your username is ${username} `);
}
loginUserMaessage("kuldeep");

function calculateCartPrice(...num) {
  return num;
}
console.log(calculateCartPrice(23, 23, 4, 567, 7));

const user = {
  username: "kuldeep",
  age: 23,
};
function handleObject(anyobj) {
  console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
}
handleObject(user);
