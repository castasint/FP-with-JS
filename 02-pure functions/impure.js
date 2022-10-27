//Depends on variables/state outside of the function scope
// let x = 10;
// const incrementByX = (y) => x + y;
// console.log(incrementByX(5));

// x = 15;
// console.log(incrementByX(5));

// //Side effect
const sum = (x, y) => {
  console.log(x + y);
  return x + y;
};

//console.log(sum(3, 4));
// // Functions that return a varying output
// // Even though the function has been called with the same argument(no-argument),
// // the result is different

console.log(Math.random());

console.log(Math.random());
