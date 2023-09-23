const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map((num) => num + 10);

console.log(newNums);

newNums = myNumbers
  .map((num) => num + 10)
  .map((num) => num + 20)
  .filter((num) => num > 34);

console.log(newNums);
