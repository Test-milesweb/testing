// Calculator module with basic operations
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  },
  power: (a, b) => Math.pow(a, b),
  isEven: (num) => num % 2 === 0,
  factorial: (n) => {
    if (n < 0) {
      throw new Error('Factorial of negative number is not defined');
    }
    if (n === 0 || n === 1) return 1;
    return n * calculator.factorial(n - 1);
  }
};

module.exports = calculator;
//test
