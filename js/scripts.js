//Business Logic //

function add(number1, number2) {
  return number1 + number2;
}

// User Interface Logic //

function saySomething(whatToSay) {
  window.alert(whatToSay);
}

saySomething("Hello there!");

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const outputText = "The sum is: " + add(number1, number2);
saySomething(outputText);