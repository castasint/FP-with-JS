const curry = (f) => (a) => (b) => f(a, b);

const multiply = (x, y) => x * y;

const curriedMultiplication = curry(multiply);

console.log(curriedMultiplication(2)(3));
