function calculate(a, b, operation) {
  return operation(a, b);
}
function add(a, b) {
  return a + b;
}
console.log(calculate(1, 1, add));
