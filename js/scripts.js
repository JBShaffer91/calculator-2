//Business Logic //

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// User Interface Logic //

function saySomething(whatToSay) {
  window.alert(whatToSay);
}

saySomething("Hello there!");

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

let outputText = "The sum is: " + add(number1, number2);
saySomething(outputText);

outputText = "The difference is: " + subtract(number1, number2);
saySomething(outputText);

outputText = "The product is: " + multiply(number1, number2);
saySomething(outputText);

outputText = "The quotient is: " + divide(number1, number2);
saySomething(outputText);
