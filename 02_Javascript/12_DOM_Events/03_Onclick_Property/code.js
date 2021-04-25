const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You cliked me!");
  alert("I hope this is showing");
};

function scream() {
  console.log("AHH");
  console.log("Don't touch me!");
}
btn.onmouseenter = scream; // We aren't calling the function the event will later
