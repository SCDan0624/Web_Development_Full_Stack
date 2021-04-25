// Everytime a addEventListerner is used an event object is used with it.
// Event object can be passesd in as a parameter

document.querySelector("button").addEventListener("click", function (event) {
  console.group(event);
});

// Keyword Event
const input = document.querySelector("input");

// if you want to know what key is pressed at in event parameter
// A keyword event object will be shown if event is passed in
input.addEventListener("keydown", function (event) {
  console.log("KEYDOWN");
  console.log(event.key); // will print a specfic event object section
  console.log(event.code); // will print a specfic event object section
});

input.addEventListener("keyup", function () {
  console.log("KEYUP");
});

// Will display keydown outside the input
window.addEventListener("keydown", function (event) {
  console.log(event.code);
});
