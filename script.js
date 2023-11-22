
const userInput = document.getElementById("result");

function updateDisplay() {
  userInput.value = displayValue;
}

function resetDisplay() {
  displayValue = "0";
  updateDisplay();
}

function deleteLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
}

function appendCharacter(character) {
  if (displayValue === "0" && character !== "0") {
    displayValue = character;
  } else {
    displayValue += character;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}

let displayValue = "0";

// Initial display update
updateDisplay();
