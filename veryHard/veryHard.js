
const input = prompt('Enter operator ( either +, -, * or / ): ');

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let result;

if (input == '+') {
    result = num1 + num2;
}
else if (input == '-') {
    result = num1 - num2;
}
else if (input == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

console.log(`${num1} ${input} ${num2} = ${result}`);