/*
Event bubbling

A button is clicked and the event is directed to the button.

If an event handler is set for that object, the event is triggered.

If no event handler is set for that object,
the event bubbles up (like a bubble in water) to the objects parent.
*/

const button = document.querySelector("#changeColor");

button.addEventListener("click", function (e) {
  constainer.style.backgroundColor = makeRandColor();
  e.stopPropagation(); // This will stop event from bubbling up further
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
