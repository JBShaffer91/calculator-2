// **** Business Logic **** //

// Math Functions //

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

// Temperature Conversion //

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Convert between ounces (oz) and pounds (lbs) to grams (g)//

function ozToGrams(oz) {
  return oz * 28.3495;
}

function lbsToGrams(lbs) {
  return lbs * 453.59237;
}

//Convert teaspoons (tsp), tablespoons (tbsp), and cups to milliliters (ml) //

function tspToMl(tsp) {
  return tsp * 4.92892;
}

function tbspToMl(tbsp) {
  return tbsp * 14.7868;
}

function cupsToMl(cups) {
  return cups * 236.588;
}

//Convert gallons to liters //

function gallonsToLiters(gallons) {
  return gallons * 3.78541;
}

// **** User Interface Logic **** //

// Greeting //

function saySomething(whatToSay) {
  window.alert(whatToSay);
}

saySomething("Hello there!");

// Math Functions //

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

// Temperature Conversion //

const temperature = parseInt(prompt("Enter a temperature in Fahrenheit:"));
if (isNaN(temperature)) {
  saySomething("Invalid temperature entered");
} else {
  let outputText = "The temperature in Celsius is: " + fahrenheitToCelsius(temperature);
  saySomething(outputText);
}

// Convert between ounces (oz) and pounds (lbs) to grams (g) //

let unit = prompt("Enter a unit of measurement (oz, lbs, g):");
let value = parseInt(prompt("Enter a value:"));
if (isNaN(value)) {
  saySomething("Invalid value entered");
} else {
  outputText = "The value in grams is: " + convertWeight(unit, value);
  saySomething(outputText);
}

function convertWeight(unit, value) {
  if (unit === 'oz') {
      return ozToGrams(value);
  } else if (unit === 'lbs') {
      return lbsToGrams(value);
  } else if (unit === 'g') {
      return value;
  } else {
      return "Invalid unit of measurement entered";
  }
}

// Convert teaspoons (tsp), tablespoons (tbsp), and cups to milliliters (ml) //

unit = prompt("Enter a unit of measurement (tsp, tbsp, cups, ml):");
value = parseInt(prompt("Enter a value:"));
if (isNaN(value)) {
  saySomething("Invalid value entered");
} else {
  outputText = "The value in milliliters is: " + convertVolume(unit, value);
  saySomething(outputText);
}

function convertVolume(unit, value) {
  if (unit === 'tsp') {
      return tspToMl(value);
  } else if (unit === 'tbsp') {
      return tbspToMl(value);
  } else if (unit === 'cups') {
      return cupsToMl(value);
  } else {
      return "Invalid unit of measurement entered";
  }
}

//Convert gallons to liters //

function convertVolume(unit, value) {
  if (unit === 'gallons') {
      return gallonsToLiters(value);
  } else {
      return "Invalid unit of measurement entered";
  }
}

