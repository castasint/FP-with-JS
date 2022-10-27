function calculateTotal(num) {
  if (num <= 1) return num;
  return num + calculateTotal(num - 1);
}

console.log(calculateTotal(10));
