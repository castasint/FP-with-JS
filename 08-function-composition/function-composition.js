let incrementBy10 = (x) => 10 + x;

let multiplyBy5 = (x) => 5 * x;

//Take a number - increment it by 10 and then multiply by 5

function incrementAndMultiply(num) {
  const incBy10 = incrementBy10(num);
  const result = multiplyBy5(incBy10);
  console.log(result);
}

incrementAndMultiply(3);

//Composition

let composition = (f, g) => (x) => f(g(x));
let add = (num) => num + 10;
let multiply = (num) => num * 5;
let ans = composition(multiply, add);
const result = ans(3);
console.log(result);
