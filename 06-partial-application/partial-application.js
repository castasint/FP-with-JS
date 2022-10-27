const sayHello = (greeting, user) => greeting + user;

const sayHello1 = (user) => "Hello," + user;

console.log(sayHello1("Hanuma"));

const addition = (x, y, z) => x + y + z;

const addTwo = addition.bind(null, 4, 5);

const result = addTwo(6);
console.log(result);
