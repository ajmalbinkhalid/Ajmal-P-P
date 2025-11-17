class Calculator {
    operate(a, b, type) {
        switch (type) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return b !== 0 ? a / b : "Cannot divide by zero";
            default:
                return "Invalid operation";
        }
    }
}

// Example Run
const calculate = new Calculator();
console.log(calculate.operate(10, 5, "add"));
console.log(calculate.operate(10, 5, "subtract"));
console.log(calculate.operate(10, 5, "multiply"));
console.log(calculate.operate(10, 5, "divide"));
