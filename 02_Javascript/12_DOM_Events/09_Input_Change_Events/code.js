const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// The change event occurs when the element has completed changing
// input.addEventListener("change", function (e) {});

// Any input
input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});
