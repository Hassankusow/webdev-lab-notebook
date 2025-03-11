// Exercise #1

// Fetch elements
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.querySelector(".output");

// Add event listener for button click
copyButton.addEventListener("click", () => {
  outputDiv.textContent = userInput1.value; // Copy input to output div
});

// Exercise #2: Update output dynamically when the user types in the input field

// Fetch input field for Exercise #2
const userInput2 = document.getElementById("userInput2");

// Create and append a new paragraph for dynamic output
const dynamicOutput = document.createElement("p");
document.getElementById("inputEventExample").appendChild(dynamicOutput);

// Add event listener for input event
userInput2.addEventListener("input", () => {
  dynamicOutput.textContent = userInput2.value; // Update output as user types
});
