/*
Functions that operate on or with other funrions.
They can:
    Accept other functions as arguments
    Return a function
*/

// Functions as an argument

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHA");
}

callTwice(laugh); // passing a function as a argument
// HAHA
// HAHA
