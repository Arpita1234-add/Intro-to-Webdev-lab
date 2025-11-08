// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById('userInput1');
const copyButton = document.getElementById('copy');
const outputDiv = document.querySelector('.output');

// add an event listener on the target element
copyButton.addEventListener('click', () => {
  // callback function to handle event
  outputDiv.textContent = userInput1.value;
});


// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById('userInput2');
const inputSection = document.getElementById('inputEventExample');

// Create and append an output <div> for Exercise 2
const output2 = document.createElement('div');
output2.classList.add('output');
inputSection.appendChild(output2);

// add an event listener on the target element
userInput2.addEventListener('input', () => {
  // callback function to handle event
  output2.textContent = userInput2.value;
});
