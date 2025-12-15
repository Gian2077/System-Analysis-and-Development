function calculate(a, b, operation) {
  return operation(a, b);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
console.log(calculate(1, 1, add));
console.log(calculate(1, 1, subtract));
console.log(calculate(1, 1, multiply));
console.log(calculate(1, 1, divide));
