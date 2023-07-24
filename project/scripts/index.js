
// that sends back an alert
function myButton() {
  alert("Please enter a password!");
}

// Here we are creating a variable called 'button',
// which holds the button from our HTML file inside it.
// We have used the 'const' keyword and not 'let' or 'var'
// because we are not expecting to need to change the
// variable's value (it will always stay the same button from
// our HTML file).
const button = document.getElementById("myButton").addEventListener("click", myButton);
