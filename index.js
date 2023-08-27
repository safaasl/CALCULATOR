import inquirer from "inquirer";
import { sum } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";
import { modulus } from "./modulus.js";
const num1 = await inquirer.prompt([{
        type: "number",
        name: "number1",
        message: "Enter your first number:"
    }]);
const num2 = await inquirer.prompt([{
        type: "number",
        name: "number2",
        message: "Enter your second number:"
    }]);
const operator = await inquirer.prompt([{
        type: "list",
        name: "operator",
        message: "Choose your operator",
        choices: ["+", "-", "*", "/", "%"]
    }]);
if (operator.operator == "+") {
    let result = sum(num1.number1, num2.number2);
    console.log(`your answer for + is ${result}`);
}
else if (operator.operator == "-") {
    let result1 = subtract(num1.number1, num2.number2);
    console.log(`your answer for - is ${result1}`);
}
else if (operator.operator == "*") {
    let result2 = multiply(num1.number1, num2.number2);
    console.log(`your answer for * is ${result2}`);
}
else if (operator.operator == "/") {
    let result3 = divide(num1.number1, num2.number2);
    console.log(`your answer for / is ${result3}`);
}
else if (operator.operator == "%") {
    let result4 = modulus(num1.number1, num2.number2);
    console.log(`your answer for % is ${result4}`);
}
