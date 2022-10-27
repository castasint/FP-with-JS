//First order function

const input = [1, 2, 3, 8, 11];
// const findEvenNumbers = (numberArray) => {
//   const filtered = [];
//   const length = numberArray.length;
//   for (let i = 0; i < length; i++) {
//     if (numberArray[i] % 2 == 0) filtered.push(numberArray[i]);
//   }
//   return filtered;
// };

// console.log(findEvenNumbers(input));

//Higher order function - accepting function as an argument

// const checkIfEven = (num) => num % 2 == 0;
// const findEvenNumbersHof = (numberArray, fn) => {
//   const filtered = [];
//   const length = numberArray.length;
//   for (let i = 0; i < length; i++) {
//     if (fn(numberArray[i])) filtered.push(numberArray[i]);
//   }
//   return filtered;
// };

// console.log(findEvenNumbersHof(input, checkIfEven));

// //Higher order function - returning function as an argument

// const multiply = (x) => (y) => x * y;
// const multiplyWith2 = multiply(2);

// console.log(multiplyWith2(3));

// // Native Higher order functions in JS

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(
  (num) => num % 2 == 0
);

const anotherSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => num * 2);
console.log(anotherSet);
