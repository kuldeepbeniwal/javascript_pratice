let myNumbers = [1, 2, 3, 4];

console.log(myNumbers.reduce((acc, curr) => acc + curr, 0));
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

console.log(
  shoppingCart.reduce((acc, item) => acc + item.price,0)
);
