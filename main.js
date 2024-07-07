let currentInput = "0";
let operator = "";
let operand1 = null;
let operand2 = null;

const displayElement = document.getElementById("display");
function updateDisplay() {
  displayElement.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "0";
  operator = "";
  operand1 = null;
  operand2 = null;
  updateDisplay();
}

function appendNumber(number) {
  console.log(currentInput, 'curr', number)
  if (currentInput === "0" || currentInput === "+" || currentInput === "-" || currentInput === "*" || currentInput === "/" || currentInput === "0" ) {
    console.log(currentInput, 'curr1', number)
    currentInput = number;
  } else {
    console.log(currentInput, 'curr2', number)
    currentInput += number;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  operand1 = parseFloat(currentInput);
   currentInput = op;
  updateDisplay();
}

function calculate() {
  operand2 = parseFloat(currentInput);
  let result = operate(operator, operand1, operand2);
  currentInput = result.toString();
  operator = "";
  operand1 = null;
  operand2 = null;
  updateDisplay();
}

function operate(op, a, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error";
      } else {
        return a / b;
      }
    default:
      return "";
  }
}

// Event listeners for keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    setOperator(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
