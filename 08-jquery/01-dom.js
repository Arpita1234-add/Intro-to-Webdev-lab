// Exercise #1 (jQuery Version)
// When the user clicks the 'copy' button, copy the user input to the output area

// Fetch DOM elements (jQuery objects)
let $userInput1 = $('#userInput1');
let $copyBtn = $('#copy');
let $output1 = $('#output1');

// Add event listener (click)
$copyBtn.on('click', handleClick);

// Callback function for click event
function handleClick(event) {
  console.log('click event', event);
  $output1.text($userInput1.val());
}



// Exercise #2 (jQuery Version)
// When the user enters input text, copy the user input to the output area

// Fetch DOM elements (jQuery objects)
let $userInput2 = $('#userInput2');
let $output2 = $('#output2');

// Add event listener (input)
$userInput2.on('input', handleInput);

// Callback function for input event
function handleInput(event) {
  console.log('input event', event);
  $output2.text($userInput2.val());
}
