let a = 300;
if (true) {
  let a = 10;
  console.log("inner a:", a);
}

console.log("outer a:", a);

function one() {
  const useername = "kuldeep";
  function two() {
    let website = "stakoverflow";
    console.log(useername);
  }
  //console.log(website);out of scope
  two();
}
one();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addtwo(5));

function addtwo(num) {
  return num + 2;
}

// addOne(6)

// const addOne=function(num){
//     return num+1
// }
